import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "./config";

let stripeClient: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeClient) {
    if (!STRIPE_SECRET_KEY) {
      throw new Error("Stripe secret key is not configured");
    }
    stripeClient = new Stripe(STRIPE_SECRET_KEY);
  }
  return stripeClient;
}
