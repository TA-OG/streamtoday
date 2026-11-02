import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe/server";
import { STRIPE_PRICES, type PriceKey } from "@/lib/stripe/config";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { priceKey, email, name } = body;

    if (!priceKey || !STRIPE_PRICES[priceKey as PriceKey]) {
      return NextResponse.json(
        { error: "Invalid price key" },
        { status: 400 }
      );
    }

    const priceId = STRIPE_PRICES[priceKey as PriceKey];
    const isVoucher = priceKey.includes("voucher");

    const session = await getStripe().checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://streamtoday.co.uk"}/keepsakes/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://streamtoday.co.uk"}/keepsakes/cancel`,
      customer_email: email || undefined,
      metadata: {
        priceKey,
        customerName: name || "",
        type: isVoucher ? "gift_voucher" : "session_booking",
      },
      ...(isVoucher && {
        custom_fields: [
          {
            key: "recipient_name",
            label: { type: "custom", custom: "Recipient name (optional)" },
            type: "text",
            optional: true,
          },
          {
            key: "gift_message",
            label: { type: "custom", custom: "Gift message (optional)" },
            type: "text",
            optional: true,
          },
        ],
      }),
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error("Checkout error:", error);
    const stripeError = error as { type?: string; param?: string; statusCode?: number };
    const code = !process.env.STRIPE_STREAMTODAY_KEY
      ? "STRIPE_NOT_CONFIGURED"
      : stripeError.type === "StripeInvalidRequestError"
        ? `STRIPE_INVALID_${stripeError.param || "REQUEST"}`
        : stripeError.type === "StripeAuthenticationError"
          ? "STRIPE_AUTH_FAILED"
          : "CHECKOUT_UNAVAILABLE";
    return NextResponse.json(
      { error: "Failed to create checkout session", code },
      { status: 500 }
    );
  }
}
