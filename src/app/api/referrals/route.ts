import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, referrerEmail, message } = body;

    if (!email || !referrerEmail) {
      return NextResponse.json(
        { error: "Email and referrer email are required" },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // Store as a lead with referral tracking in notes
    const { data: lead, error } = await supabase
      .from("leads")
      .upsert(
        {
          email,
          first_name: name?.split(" ")[0] || null,
          last_name: name?.split(" ").slice(1).join(" ") || null,
          phone: phone || null,
          source: "keepsake_referral",
          notes: `Referred by: ${referrerEmail}${message ? ` | Message: ${message}` : ""}`,
          status: "new",
        },
        { onConflict: "email" }
      )
      .select()
      .single();

    if (error) {
      console.error("Referral insert error:", error);
      return NextResponse.json(
        { error: "Failed to save referral" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const referrerEmail = searchParams.get("referrerEmail");

    if (!referrerEmail) {
      return NextResponse.json(
        { error: "referrerEmail is required" },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // Count referrals for this referrer
    const { count, error } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true })
      .eq("source", "keepsake_referral")
      .ilike("notes", `%Referred by: ${referrerEmail}%`);

    if (error) {
      console.error("Referral count error:", error);
      return NextResponse.json(
        { error: "Failed to count referrals" },
        { status: 500 }
      );
    }

    const unlocked = (count || 0) >= 10;

    return NextResponse.json(
      { count: count || 0, unlocked, referrerEmail },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
