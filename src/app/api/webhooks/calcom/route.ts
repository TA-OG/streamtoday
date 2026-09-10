import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get("secret");
    if (secret !== process.env.WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { triggerEvent, payload } = body;

    // Log the webhook event
    await getSupabase().from("webhook_events").insert({
      source: "calcom",
      event_type: triggerEvent,
      payload: body,
      processed: false,
    });

    if (triggerEvent === "BOOKING_CREATED" || triggerEvent === "BOOKING_RESCHEDULED") {
      const attendee = payload.attendees?.[0] || {};
      const nameParts = (attendee.name || "").split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const bookingData = {
        acuity_appointment_id: payload.uid || payload.bookingId || String(Date.now()),
        acuity_calendar_id: null,
        acuity_appointment_type_id: null,
        first_name: firstName,
        last_name: lastName,
        email: attendee.email || "",
        phone: attendee.phone || null,
        appointment_type: payload.eventType?.title || payload.title || "Unknown",
        calendar_name: payload.user?.name || "StreamToday Studios",
        datetime: payload.startTime,
        end_time: payload.endTime,
        duration: payload.length || 90,
        price: payload.payment?.amount ? payload.payment.amount / 100 : null,
        amount_paid: payload.payment?.amount ? payload.payment.amount / 100 : null,
        paid: payload.payment?.success ? "yes" : "no",
        status: triggerEvent === "BOOKING_CREATED" ? "confirmed" : "rescheduled",
        notes: payload.additionalNotes || null,
        forms: JSON.stringify(payload.responses || {}),
      };

      // Upsert into acuity_bookings (using acuity_appointment_id as unique key)
      const { error } = await getSupabase()
        .from("acuity_bookings")
        .upsert(bookingData, { onConflict: "acuity_appointment_id" });

      if (error) {
        console.error("Supabase insert error:", error);
        await getSupabase().from("webhook_events").insert({
          source: "calcom",
          event_type: triggerEvent + "_ERROR",
          payload: { error: error.message, bookingData },
          processed: false,
          error_message: error.message,
        });
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }

    if (triggerEvent === "BOOKING_CANCELLED") {
      const { error } = await getSupabase()
        .from("acuity_bookings")
        .update({ status: "cancelled" })
        .eq("acuity_appointment_id", payload.uid || payload.bookingId);

      if (error) {
        console.error("Supabase update error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
