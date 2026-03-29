import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto section-padding text-center">
        <h2 className="heading-lg mb-6">
          Ready to create something worth watching?
        </h2>
        <p className="body-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Book your session today. Your audience is waiting.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="btn-primary bg-white text-black hover:bg-gray-200 text-lg"
          >
            Book Your Session
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            href="/contact"
            className="btn-secondary border-white text-white hover:bg-white/10 text-lg"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}
