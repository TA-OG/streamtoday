import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Snowflake, Gift, Check, ArrowRight, Users, Monitor, Film, Mic } from "lucide-react";
import { CheckoutButton } from "@/components/CheckoutButton";

export const metadata: Metadata = {
  title: "Book Your Christmas Keepsake | StreamToday Nottingham",
  description: "Book your Family Keepsake recording session. Family Circle £150. Extended Family £225. Nottingham Lace Market studio.",
  alternates: { canonical: "/keepsakes/book" },
};

const packages = [
  {
    key: "family_circle" as const,
    name: "Family Circle",
    people: "Up to 4 people",
    duration: "2 hours",
    price: "150",
    colour: "green",
    features: [
      { icon: Mic, text: "Guided interview" },
      { icon: Monitor, text: "Photos on screen" },
      { icon: Film, text: "Edited film in 7 days" },
      { icon: Users, text: "Private studio" },
    ],
  },
  {
    key: "extended_family" as const,
    name: "Extended Family",
    people: "Up to 6 people",
    duration: "2 hours",
    price: "225",
    colour: "red",
    popular: true,
    features: [
      { icon: Mic, text: "Guided interview" },
      { icon: Monitor, text: "Photos on screen" },
      { icon: Film, text: "Edited film in 7 days" },
      { icon: Users, text: "Larger studio space" },
    ],
  },
];

const vouchers = [
  {
    key: "voucher_family_circle" as const,
    name: "Family Circle Voucher",
    people: "Up to 4 people",
    duration: "2 hours",
    price: "150",
    colour: "green",
  },
  {
    key: "voucher_extended_family" as const,
    name: "Extended Family Voucher",
    people: "Up to 6 people",
    duration: "2 hours",
    price: "225",
    colour: "red",
  },
];

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-green-950 via-green-900 to-red-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full border border-white/10">
            <Snowflake className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold tracking-widest uppercase text-xs">Secure Checkout</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-[0.95] mb-4">
            Book your<br />
            <span className="text-amber-400">Christmas keepsake.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Choose your package. Pay securely by card. We will confirm your session within 24 hours.
          </p>
        </div>
      </section>

      {/* SESSION PACKAGES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-red-950 mb-2">Choose your session</h2>
            <p className="text-red-900/60">Both include the studio, guided interview, on-screen photos, and edited film.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.key}
                className={`relative p-7 rounded-xl border-2 ${pkg.colour === "red" ? "border-red-700 shadow-xl" : "border-green-200"} bg-white`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-red-700 text-white px-4 py-1 text-xs font-black uppercase tracking-wider rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-2xl font-black text-red-950">{pkg.name}</h3>
                  <p className="text-red-900/50 text-sm">{pkg.people} · {pkg.duration}</p>
                </div>

                <div className="mb-6">
                  <span className="text-5xl font-black text-red-950">£{pkg.price}</span>
                  <span className="text-red-900/50"> total</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {pkg.features.map((f) => (
                    <div
                      key={f.text}
                      className={`flex items-center gap-2 p-2.5 rounded-lg ${pkg.colour === "red" ? "bg-red-50" : "bg-green-50"}`}
                    >
                      <f.icon className={`w-4 h-4 ${pkg.colour === "red" ? "text-red-700" : "text-green-700"} flex-shrink-0`} />
                      <span className="text-xs font-medium text-red-950">{f.text}</span>
                    </div>
                  ))}
                </div>

                <CheckoutButton
                  priceKey={pkg.key}
                  className={`w-full text-center py-3.5 font-bold text-white rounded-lg transition-colors ${pkg.colour === "red" ? "bg-red-700 hover:bg-red-800" : "bg-green-700 hover:bg-green-800"}`}
                >
                  Book {pkg.name}
                </CheckoutButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIFT VOUCHERS */}
      <section className="py-16 bg-red-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white rounded-full border border-red-100 shadow-sm">
              <Gift className="w-4 h-4 text-red-700" />
              <span className="text-red-700 font-bold tracking-widest uppercase text-xs">Gift Vouchers</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-red-950 mb-2">Buy a gift voucher</h2>
            <p className="text-red-900/60">They choose the date. You choose the moment. Valid for 12 months.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {vouchers.map((v) => (
              <div
                key={v.key}
                className={`p-7 rounded-xl border-2 ${v.colour === "red" ? "border-red-200" : "border-green-200"} bg-white`}
              >
                <div className="mb-5">
                  <h3 className="text-xl font-black text-red-950">{v.name}</h3>
                  <p className="text-red-900/50 text-sm">{v.people} · {v.duration}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-black text-red-950">£{v.price}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {[
                    "Delivered instantly by email",
                    "Valid for 12 months",
                    "Printable gift card included",
                    "Fully transferable",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-red-900/70">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <CheckoutButton
                  priceKey={v.key}
                  className={`w-full text-center py-3.5 font-bold text-white rounded-lg transition-colors ${v.colour === "red" ? "bg-red-700 hover:bg-red-800" : "bg-green-700 hover:bg-green-800"}`}
                >
                  Buy {v.name}
                </CheckoutButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-red-900/50">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              Secure card payment via Stripe
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              Confirmation within 24 hours
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              Film delivered in 7 days
            </span>
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="py-8 bg-gradient-to-b from-green-900 to-red-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="/keepsakes"
            className="inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Keepsakes
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
