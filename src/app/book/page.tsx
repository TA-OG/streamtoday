import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import CalEmbed from "@/components/sections/CalEmbed";

export const metadata: Metadata = {
  title: "Book a Podcast Studio Session Nottingham | StreamToday",
  description: "Book your podcast or video recording session at StreamToday Studios in Nottingham. Cave Studio £45/hour, Studio One £75/hour. Live-editing included. Deposit required.",
};

export default function BookPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Book Your Session
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional podcast and video content from the heart of Nottingham&apos;s Lace Market.
            </p>
          </div>

          {/* Deposit Policy Notice */}
          <div className="mb-8 p-6 bg-red-950/50 border border-red-800 rounded-xl">
            <h2 className="text-lg font-bold text-red-400 mb-3">
              Deposit Policy — Please Read Before Booking
            </h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>A <strong className="text-white">non-refundable deposit</strong> is required to secure your booking. The deposit amount is displayed at checkout.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>The deposit is <strong className="text-white">credited in full</strong> toward your session fee or monthly subscription.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span><strong className="text-white">No-shows</strong> and <strong className="text-white">cancellations within 48 hours</strong> of the scheduled session time will result in the <strong className="text-white">forfeiture of the deposit</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">•</span>
                <span>Cancellations made <strong className="text-white">more than 48 hours</strong> in advance may reschedule or receive a credit. No cash refunds.</span>
              </li>
            </ul>
          </div>

          <CalEmbed />
        </div>
      </main>
      <Footer />
    </>
  );
}
