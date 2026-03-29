import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

// Acuity webhook handler — fires on every new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, id, calendarID, appointmentTypeID, firstName, lastName, email, phone, datetime, endTime, type, price, amountPaid, paid, notes, forms } = body;

    // Only process scheduled/rescheduled appointments
    if (!['scheduled', 'rescheduled', 'changed'].includes(action)) {
      return NextResponse.json({ received: true });
    }

    const supabase = createServiceClient();

    // Upsert booking into our DB
    const { data: booking, error } = await supabase
      .from("acuity_bookings")
      .upsert({
        acuity_appointment_id: id,
        acuity_calendar_id: calendarID,
        acuity_appointment_type_id: appointmentTypeID,
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        appointment_type: type,
        datetime,
        end_time: endTime,
        price: price ? parseFloat(price) : null,
        amount_paid: amountPaid ? parseFloat(amountPaid) : null,
        paid: paid || null,
        notes: notes || null,
        forms: forms ? JSON.stringify(forms) : null,
      }, { onConflict: 'acuity_appointment_id' })
      .select()
      .single();

    if (error) {
      console.error("Booking sync error:", error);
      return NextResponse.json({ error: "Failed to sync booking" }, { status: 500 });
    }

    // Upsert lead record
    await supabase
      .from("leads")
      .upsert({
        email,
        first_name: firstName,
        last_name: lastName,
        phone: phone || null,
        source: "acuity_booking",
        status: "converted",
      }, { onConflict: 'email' });

    return NextResponse.json({ success: true, booking }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    const supabase = createServiceClient();

    let query = supabase
      .from("acuity_bookings")
      .select("*")
      .order("datetime", { ascending: true });

    if (email) {
      query = query.eq("email", email);
    }

    const { data: bookings, error } = await query;

    if (error) {
      return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
    }

    return NextResponse.json({ bookings }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
