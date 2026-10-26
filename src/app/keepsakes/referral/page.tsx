"use client";

import { useState } from "react";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Check, Gift } from "lucide-react";

export default function ReferralPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referrerEmail: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/referrals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit referral");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-black mb-6">
            Refer a friend to StreamToday
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            If you have been to a Family Keepsake session, tell someone who would love it too. 
            When your group hits 10 referrals, everyone gets 10% off.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <>
              <div className="bg-gray-50 p-6 mb-8">
                <h3 className="font-bold mb-2">How it works</h3>
                <p className="text-gray-600 text-sm">
                  Fill in your details and the email address of the person who told you about us. 
                  We will log your referral against their group. When their group reaches 10 referrals, 
                  we apply a 10% refund to their session.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                    placeholder="07123 456789"
                  />
                </div>

                <div>
                  <label htmlFor="referrerEmail" className="block text-sm font-medium mb-2">
                    Who told you about us? (their email)
                  </label>
                  <input
                    type="email"
                    id="referrerEmail"
                    value={formData.referrerEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white"
                    placeholder="friend@example.com"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This is the email address of the person who attended a Keepsake session and referred you.
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors bg-white resize-none"
                    placeholder="Tell us what you are looking for..."
                  />
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Referral"}
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Referral received!</h3>
              <p className="text-gray-600 mb-8">
                Thank you. We have logged your referral. If you are interested in booking your own session, 
                we will be in touch.
              </p>
              <a
                href="/keepsakes"
                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all rounded-sm"
              >
                Back to Keepsakes
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
