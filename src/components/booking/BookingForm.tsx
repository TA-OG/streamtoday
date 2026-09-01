"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface BookingFormProps {
  initialData: {
    date?: Date;
    time?: string;
    plan?: string;
  };
  onSubmit: (details: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    notes: string;
  }) => void;
}

const planDetails: Record<string, { name: string; pricePerHour: number; duration: number }> = {
  "cave-studio": { name: "Cave Studio", pricePerHour: 45, duration: 90 },
  "studio-one": { name: "Studio One", pricePerHour: 75, duration: 90 },
  "content-retainer": { name: "Content Retainer", pricePerHour: 0, duration: 90 },
  "content-engine": { name: "The Content Engine", pricePerHour: 0, duration: 90 },
};

export function BookingForm({ initialData, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const plan = planDetails[initialData.plan || "cave-studio"];
  const isHourly = plan.pricePerHour > 0;
  const total = isHourly
    ? Math.round(plan.pricePerHour * (plan.duration / 60))
    : initialData.plan === "content-retainer" ? 549 : 999;
  const deposit = isHourly ? Math.round(total * 0.5) : Math.round(total * 0.25);

  return (
    <div className="p-6 lg:p-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-6">Your details</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">First name *</label>
                <input
                  type="text" id="firstName" name="firstName" value={formData.firstName}
                  onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last name *</label>
                <input
                  type="text" id="lastName" name="lastName" value={formData.lastName}
                  onChange={handleChange} required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email" id="email" name="email" value={formData.email}
                onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone number *</label>
              <input
                type="tel" id="phone" name="phone" value={formData.phone}
                onChange={handleChange} required
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                placeholder="07123 456789"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">Company / Organisation</label>
              <input
                type="text" id="company" name="company" value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                placeholder="Acme Inc. (optional)"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2">Additional notes</label>
              <textarea
                id="notes" name="notes" value={formData.notes}
                onChange={handleChange} rows={3}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button type="submit" className="w-full btn-primary">
              Continue to Confirmation
              <ArrowRight className="ml-2" size={20} />
            </button>
          </form>
        </div>

        <div className="bg-gray-50 p-6 h-fit">
          <h4 className="font-bold mb-4">Booking summary</h4>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Plan</span>
              <span className="font-medium">{plan.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date</span>
              <span className="font-medium">
                {initialData.date?.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time</span>
              <span className="font-medium">{initialData.time}</span>
            </div>
            {isHourly && (
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="font-medium">{plan.duration} min</span>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total</span>
              <span className="font-bold">£{total}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Deposit due now</span>
              <span className="font-bold text-green-600">£{deposit}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Balance of £{total - deposit} due on the day of your session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
