import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, company, phone, source, leadMagnet } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const supabase = createServiceClient();

    // Upsert lead — update on conflict
    const { data: lead, error } = await supabase
      .from("leads")
      .upsert({
        email,
        first_name: firstName || null,
        last_name: lastName || null,
        company: company || null,
        phone: phone || null,
        source: source || "website",
        lead_magnet: leadMagnet || null,
        status: "new",
      }, { onConflict: "email" })
      .select()
      .single();

    if (error) {
      console.error("Lead upsert error:", error);
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
    }

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const supabase = createServiceClient();

    let query = supabase.from("leads").select("*").order("created_at", { ascending: false });

    if (status) {
      query = query.eq("status", status);
    }

    const { data: leads, error } = await query;

    if (error) {
      return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
    }

    return NextResponse.json({ leads }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
