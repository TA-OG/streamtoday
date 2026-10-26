import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe/server";
import { createServiceClient } from "@/lib/supabase/server";
import Stripe from "stripe";

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const sig = request.headers.get("stripe-signature") || "";

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const supabase = createServiceClient();

    // Store the payment in Supabase
    const { error } = await supabase.from("payments").insert({
      stripe_session_id: session.id,
      stripe_payment_intent_id: session.payment_intent as string,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_email: session.customer_email,
      customer_name: session.metadata?.customerName || null,
      metadata: session.metadata,
      status: "completed",
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // If it's a voucher, we could trigger email delivery here
    if (session.metadata?.type === "gift_voucher") {
      console.log("Gift voucher purchased:", session.id);
      // TODO: Send voucher email via Resend
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
