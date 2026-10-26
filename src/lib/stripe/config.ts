export const STRIPE_SECRET_KEY = process.env.STRIPE_STREAMTODAY_KEY || "";

export const STRIPE_PRICES = {
  family_circle: "price_1UUutLKiKG1nUmD3wdOcT2G3",
  extended_family: "price_1UUutLKiKG1nUmD3ZYma6L9f",
  voucher_family_circle: "price_1UUutMKiKG1nUmD3EUju8F6d",
  voucher_extended_family: "price_1UUutMKiKG1nUmD3jNNXOVny",
} as const;

export type PriceKey = keyof typeof STRIPE_PRICES;
