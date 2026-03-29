import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Ready to create something worth watching?
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Book your session today. Your audience is waiting.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition-colors inline-flex items-center justify-center text-lg"
          >
            Book Your Session
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center text-lg"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}
