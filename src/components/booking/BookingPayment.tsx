"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Check } from "lucide-react";

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
  onBack: () => void;
}

const planDetails: Record<string, { name: string; pricePerHour: number; duration: number }> = {
  "cave-studio": { name: "Cave Studio", pricePerHour: 45, duration: 90 },
  "studio-one": { name: "Studio One", pricePerHour: 75, duration: 90 },
  "content-retainer": { name: "Content Retainer", pricePerHour: 0, duration: 90 },
  "content-engine": { name: "The Content Engine", pricePerHour: 0, duration: 90 },
};

export function BookingPayment({ bookingData, onComplete, onBack }: BookingPaymentProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const plan = planDetails[bookingData.plan || "cave-studio"];
  const isHourly = plan.pricePerHour > 0;
  const total = isHourly
    ? Math.round(plan.pricePerHour * (plan.duration / 60))
    : bookingData.plan === "content-retainer" ? 549 : 999;
  const deposit = isHourly ? Math.round(total * 0.5) : Math.round(total * 0.25);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/bookings/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: bookingData.firstName,
          lastName: bookingData.lastName,
          email: bookingData.email,
          phone: bookingData.phone,
          company: bookingData.company,
          notes: bookingData.notes,
          plan: bookingData.plan,
          bookingDate: bookingData.date?.toISOString().split("T")[0],
          bookingTime: bookingData.time,
          durationMinutes: plan.duration,
          hourlyRate: plan.pricePerHour || null,
          totalAmount: total,
          depositAmount: deposit,
          source: "website",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to create booking");
      }

      onComplete();
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Confirm your booking</h3>
          <p className="text-gray-600 mb-6">
            Review your details below and confirm. We&apos;ll send a confirmation email with payment instructions for the £{deposit} deposit.
          </p>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Confirmation email</p>
                <p className="text-sm text-gray-500">Sent immediately to {bookingData.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Calendar invite</p>
                <p className="text-sm text-gray-500">Add to your Google/Outlook calendar</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">24-hour reminder</p>
                <p className="text-sm text-gray-500">SMS + email before your session</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="px-6 py-3 border border-gray-300 font-semibold hover:border-black transition-colors"
              disabled={loading}
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-black uppercase tracking-widest hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Confirming...
                </>
              ) : (
                <>
                  Confirm Booking
                  <ArrowRight className="ml-2" size={20} />
                </>
              )}
            </button>
          </div>
        </div>

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
                {bookingData.date?.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time</span>
              <span className="font-medium">{bookingData.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Client</span>
              <span className="font-medium">{bookingData.firstName} {bookingData.lastName}</span>
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
              <span>£{total}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Deposit due</span>
              <span>£{deposit}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Balance of £{total - deposit} due on session day. Deposit invoice sent via email.
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
