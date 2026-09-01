import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { sendBookingConfirmation } from "@/lib/email/send";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      notes,
      plan,
      bookingDate,
      bookingTime,
      durationMinutes,
      hourlyRate,
      totalAmount,
      depositAmount,
      source,
    } = body;

    if (!firstName || !lastName || !email || !plan || !bookingDate || !bookingTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // Upsert lead first
    const { data: lead } = await supabase
      .from("leads")
      .upsert(
        {
          email,
          first_name: firstName,
          last_name: lastName,
          company: company || null,
          phone: phone || null,
          source: source || "website_booking",
          status: "converted",
        },
        { onConflict: "email" }
      )
      .select()
      .single();

    // Create booking
    const { data: booking, error } = await supabase
      .from("bookings")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || null,
        company: company || null,
        notes: notes || null,
        plan,
        booking_date: bookingDate,
        booking_time: bookingTime,
        duration_minutes: durationMinutes || 90,
        hourly_rate: hourlyRate || null,
        total_amount: totalAmount || null,
        deposit_amount: depositAmount || null,
        status: "pending",
        source: source || "website",
        lead_id: lead?.id || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Booking create error:", error);
      return NextResponse.json(
        { error: "Failed to create booking" },
        { status: 500 }
      );
    }

    // Send confirmation email
    try {
      await sendBookingConfirmation({
        first_name: firstName,
        email,
        booking_date: bookingDate,
        booking_time: bookingTime,
        plan,
        deposit_amount: depositAmount || 0,
        total_amount: totalAmount || 0,
      });
    } catch (emailError) {
      console.error("Email send error:", emailError);
      // Don't fail the booking if email fails
    }

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch (error) {
    console.error("Create booking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
