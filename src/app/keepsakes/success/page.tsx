import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Check, Gift, Film } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Your Keepsake is Booked | StreamToday",
  description: "Your payment was successful. We will be in touch within 24 hours to confirm your session details.",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-b from-green-900 to-red-950 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Thank you.
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Your payment was successful. We will be in touch within 24 hours 
            to confirm your session details and send your Get Ready Guide.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-10 border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-6 h-6 text-amber-400" />
              <Film className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">What happens next</h3>
            <ul className="text-left space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">1.</span>
                <span>We will email you within 24 hours to confirm your booking.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">2.</span>
                <span>You will receive the Get Ready Guide with 34 interview questions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">3.</span>
                <span>Email your photos ahead and we will have them on screen for your session.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">4.</span>
                <span>Your edited film arrives within 7 days of your session.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/keepsakes/guide"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm"
            >
              Read the Guide
            </Link>
            <Link
              href="/keepsakes"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm border border-white/10"
            >
              Back to Keepsakes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
