import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Gift, Mail, Clock, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gift Voucher | Family Keepsake Recording Session | Nottingham",
  description: "Buy a Family Keepsake recording session as a gift voucher. Delivered instantly by email. Valid for 12 months. From £150. Nottingham Lace Market studio.",
  alternates: { canonical: "/keepsakes/voucher" },
};

const vouchers = [
  {
    name: "Family Circle Voucher",
    for: "Up to 4 people · 2 hours · Nottingham studio",
    price: "150",
    features: [
      "Valid for 12 months from purchase",
      "Delivered instantly by email",
      "Printable gift card included",
      "Recipient books their own date",
      "Fully transferable to someone else",
    ],
  },
  {
    name: "Extended Family Voucher",
    for: "Up to 6 people · 2 hours · Nottingham studio",
    price: "225",
    features: [
      "Valid for 12 months from purchase",
      "Delivered instantly by email",
      "Printable gift card included",
      "Recipient books their own date",
      "Fully transferable to someone else",
    ],
  },
];

export default function VoucherPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gift className="w-12 h-12 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            The gift they did not know<br />they needed.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Most gifts are forgotten by January. This one grows more valuable every year. 
            Buy a Family Keepsake session as a gift. They choose the date. You choose the moment.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-12 text-center">
            Why this gift actually works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant delivery</h3>
              <p className="text-gray-600">
                Ordered at 11pm on Christmas Eve? Delivered by email in minutes. 
                Print it, wrap it, done. No postage. No delay.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">12 months to use</h3>
              <p className="text-gray-600">
                No pressure. They book when the whole family is free. 
                Summer reunions, milestone birthdays, any Tuesday that works.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fully transferable</h3>
              <p className="text-gray-600">
                If their plans change, they can pass it to someone else. 
                The value never expires. It is not wasted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 text-center">
            Choose your voucher
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Select the package that fits their family. We handle everything else.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vouchers.map((v) => (
              <div key={v.name} className="bg-white p-8 lg:p-10 border-2 border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{v.name}</h3>
                  <p className="text-gray-600">{v.for}</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-bold">£{v.price}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?subject=Gift%20Voucher%20Purchase"
                  className="block text-center py-4 font-semibold transition-colors bg-red-600 text-white hover:bg-red-700"
                >
                  Buy This Voucher
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Want to buy multiple vouchers for staff, clients or a group?
            </p>
            <Link
              href="/contact?subject=Bulk%20Voucher%20Enquiry"
              className="inline-flex items-center font-semibold underline hover:no-underline"
            >
              Contact us for bulk pricing
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-12 text-center">
            Who is this for?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { who: "Parents who have everything", why: "They do not need another scarf. They need their parents' voices saved before they are gone." },
              { who: "Grandparents as a family gift", why: "Pool together. Give them a session where they tell their story to the whole family while everyone is still here." },
              { who: "New parents", why: "Record the grandparents while the baby is small. The film becomes a time capsule the child will watch when they are older." },
              { who: "Anniversaries", why: "25, 40, 50 years. The story of how it started, told by the people who lived it. Not a card. A film." },
              { who: "Siblings scattered across the country", why: "A reason to gather in Nottingham. A film to watch when you are apart again." },
              { who: "Anyone you love", why: "Because one day you will wish you had this. And you will be glad you do." },
            ].map((item) => (
              <div key={item.who} className="p-6 bg-gray-50">
                <h4 className="font-bold mb-2">{item.who}</h4>
                <p className="text-gray-600 text-sm">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            The best gifts are the ones<br />they never forget.
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Buy now. Deliver in minutes. Keep forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Gift%20Voucher%20Purchase"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm"
            >
              Buy a Voucher
            </Link>
            <Link
              href="/keepsakes"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest backdrop-blur-sm transition-all text-center rounded-sm border border-white/10"
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
