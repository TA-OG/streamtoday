import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Cancelled | StreamToday",
  description: "Your payment was cancelled. No charge was made.",
};

export default function CancelPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-black text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            No worries.
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Your payment was cancelled and no charge was made. 
            If you have questions or want to try again, we are here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/keepsakes"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm inline-flex items-center justify-center"
            >
              Back to Keepsakes
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm border border-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
