"use client";

import { useState } from "react";
import { CreditCard, Lock, ArrowRight } from "lucide-react";

interface BookingPaymentProps {
  bookingData: {
    date?: Date;
    time?: string;
    plan?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    company?: string;
    notes?: string;
  };
  onComplete: () => void;
}

export function BookingPayment({ bookingData, onComplete }: BookingPaymentProps) {
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const planPrices: Record<string, { name: string; deposit: number; total: number }> = {
    single: { name: "Single Session", deposit: 99, total: 299 },
    package: { name: "Content Package", deposit: 199, total: 749 },
    retainer: { name: "Retainer", deposit: 149, total: 549 },
  };

  const plan = planPrices[bookingData.plan || "single"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In real implementation:
    // 1. Create payment intent with Stripe
    // 2. Confirm card payment
    // 3. Save booking to Supabase
    // 4. Send confirmation email

    setLoading(false);
    onComplete();
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    }
    return v;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Payment Form */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <CreditCard className="w-5 h-5" />
            <h3 className="text-xl font-bold">Payment details</h3>
          </div>

          <div className="flex items-center gap-2 mb-6 p-3 bg-green-50 border border-green-200">
            <Lock className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">Secure SSL encryption</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium mb-2">
                Name on card
              </label>
              <input
                type="text"
                id="cardName"
                placeholder="John Smith"
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">
                Card number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium mb-2">
                  Expiry date
                </label>
                <input
                  type="text"
                  id="expiry"
                  value={expiry}
                  onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="cvc" className="block text-sm font-medium mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").substring(0, 3))}
                  placeholder="123"
                  maxLength={3}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="postcode" className="block text-sm font-medium mb-2">
                Postcode
              </label>
              <input
                type="text"
                id="postcode"
                placeholder="NG1 2FZ"
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  Pay £{plan.deposit} Deposit
                  <ArrowRight className="ml-2" size={20} />
                </>
              )}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Your card will be charged £{plan.deposit} as a deposit. 
            The remaining balance is due on the day of your session.
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 h-fit">
          <h4 className="font-bold mb-4">Order summary</h4>
          
          <div className="space-y-3 mb-6 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Plan</span>
              <span className="font-medium">{plan.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date</span>
              <span className="font-medium">
                {bookingData.date?.toLocaleDateString("en-GB", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time</span>
              <span className="font-medium">{bookingData.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Client</span>
              <span className="font-medium">
                {bookingData.firstName} {bookingData.lastName}
              </span>
            </div>
            {bookingData.company && (
              <div className="flex justify-between">
                <span className="text-gray-600">Company</span>
                <span className="font-medium">{bookingData.company}</span>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>£{plan.total}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Deposit due now</span>
              <span>£{plan.deposit}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Balance of £{plan.total - plan.deposit} due on session day.
            </p>
          </div>

          <div className="mt-6 p-4 bg-white border border-gray-200">
            <h5 className="font-medium mb-2">Cancellation policy</h5>
            <p className="text-xs text-gray-600">
              Full refund for cancellations 48+ hours before session. 
              50% charge for cancellations within 48 hours. 
              No refund for no-shows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
