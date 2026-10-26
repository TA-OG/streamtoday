import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Snowflake, Gift, Heart, Camera, Mic, Mail, Monitor, Film, Check } from "lucide-react";
import Link from "next/link";
import { CheckoutButton } from "@/components/CheckoutButton";

export const metadata: Metadata = {
  title: "Christmas Family Keepsake Gift | Record Your Family's Stories | Nottingham",
  description: "The Christmas gift your family will open again and again. Sit down together in our Nottingham studio, share your stories, and leave with a film to watch every Christmas. From £150.",
  alternates: { canonical: "/keepsakes" },
};

export default function KeepsakesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-green-950 via-green-900 to-red-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 rounded-full border border-white/10">
            <Snowflake className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold tracking-widest uppercase text-xs">This Christmas — Nottingham Lace Market</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6">
            The Christmas gift<br />
            your family opens<br />
            <span className="text-amber-400">again and again.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            While the whole family is finally in one room, do something that lasts longer than the turkey. 
            Sit down together in our Nottingham studio and leave with a film you will watch every Christmas to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/keepsakes/book" className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm">
              Book Your Session
            </Link>
            <Link href="/keepsakes/voucher" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm">
              Buy a Gift Voucher
            </Link>
          </div>
        </div>
      </section>

      {/* THREE BOXES — THE CORE */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 bg-white rounded-xl border border-red-100 hover:border-red-200 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-xl font-black text-red-950 mb-3">The stories that bind you</h3>
              <p className="text-red-900/70 leading-relaxed">
                How your parents met. What Nan did during the war. The time Uncle Dave got lost in Blackpool. 
                Record them now, while the storyteller is right there in front of you.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-xl border border-red-100 hover:border-red-200 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Camera className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-xl font-black text-red-950 mb-3">More than photographs</h3>
              <p className="text-red-900/70 leading-relaxed">
                Photos show you what people looked like. A film lets you hear them laugh, pause, tell a story properly. 
                Your grandchildren will hear their great-grandparents laugh. Even if they never met.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-xl border border-red-100 hover:border-red-200 transition-all hover:shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Gift className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-xl font-black text-red-950 mb-3">The gift that grows</h3>
              <p className="text-red-900/70 leading-relaxed">
                Most presents are forgotten by Boxing Day. This one gets more valuable every year. 
                Watch it at Christmas. At weddings. When someone new joins the family and needs to know where they came from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE EXPERIENCE — VISUAL STRIP */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-red-950">What happens on the day</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Mail, label: "Email your photos", desc: "Send them ahead. We'll have them on screen." },
              { icon: Mic, label: "Sit down together", desc: "Our studio on Fletcher Gate. Two hours. Just talk." },
              { icon: Monitor, label: "Photos on screen", desc: "Your images appear as the stories are told." },
              { icon: Film, label: "Receive your film", desc: "Edited and delivered within 7 days." },
            ].map((step) => (
              <div key={step.label} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-red-950 mb-1">{step.label}</h4>
                <p className="text-sm text-red-900/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES — STYLISED, NOT A WALL OF TEXT */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-red-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-3">Choose your Christmas keepsake</h2>
            <p className="text-red-900/70">Both include the studio session, guided interview, on-screen photos, and edited film.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Family Circle */}
            <div className="relative p-8 bg-white rounded-xl border-2 border-green-200">
              <h3 className="text-2xl font-black text-red-950 mb-1">Family Circle</h3>
              <p className="text-red-900/60 text-sm mb-6">Up to 4 people · 2 hours</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-red-950">£150</span>
                <span className="text-red-900/60"> total</span>
              </div>

              {/* Stylised feature grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Mic, text: "Guided interview" },
                  { icon: Monitor, text: "Photos on screen" },
                  { icon: Film, text: "Edited film · 7 days" },
                  { icon: Check, text: "Private download" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <f.icon className="w-4 h-4 text-green-700 flex-shrink-0" />
                    <span className="text-sm font-medium text-green-900">{f.text}</span>
                  </div>
                ))}
              </div>

              <CheckoutButton
                priceKey="family_circle"
                className="w-full text-center py-4 font-bold bg-green-700 text-white hover:bg-green-800 rounded-lg transition-colors"
              >
                Book Family Circle
              </CheckoutButton>
            </div>

            {/* Extended Family */}
            <div className="relative p-8 bg-white rounded-xl border-2 border-red-700 shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-red-700 text-white px-4 py-1 text-xs font-black uppercase tracking-wider rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-black text-red-950 mb-1">Extended Family</h3>
              <p className="text-red-900/60 text-sm mb-6">Up to 6 people · 2 hours</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-red-950">£225</span>
                <span className="text-red-900/60"> total</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Mic, text: "Guided interview" },
                  { icon: Monitor, text: "Photos on screen" },
                  { icon: Film, text: "Edited film · 7 days" },
                  { icon: Check, text: "Private download" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                    <f.icon className="w-4 h-4 text-red-700 flex-shrink-0" />
                    <span className="text-sm font-medium text-red-900">{f.text}</span>
                  </div>
                ))}
              </div>

              <CheckoutButton
                priceKey="extended_family"
                className="w-full text-center py-4 font-bold bg-red-700 text-white hover:bg-red-800 rounded-lg transition-colors"
              >
                Book Extended Family
              </CheckoutButton>
            </div>
          </div>
        </div>
      </section>

      {/* GIFT VOUCHER — FULL WIDTH, PREMIUM */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full border border-white/10">
            <Gift className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold tracking-widest uppercase text-xs">The Perfect Christmas Present</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Not sure which date works?<br />
            <span className="text-amber-400">Buy a voucher.</span>
          </h2>
          <p className="text-lg text-red-200 max-w-xl mx-auto mb-10">
            Delivered by email in minutes. Valid for 12 months. Print it, wrap it, put it under the tree.
          </p>
          <Link href="/keepsakes/voucher" className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-black uppercase tracking-widest transition-all rounded-sm">
            Buy a Gift Voucher
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* WHO IS THIS FOR — TIGHT, VISUAL */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-red-950 text-center mb-10">Who is this for?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "For parents", text: "They have everything. What they don't have is a professional film of their parents telling the stories they've heard a hundred times — captured properly." },
              { title: "For grandparents", text: "Give them the stage. Let them tell their story to the whole family while everyone is there to hear it. The film becomes their legacy." },
              { title: "For the whole family", text: "Pool together. Make it the family Christmas present. Something you all contribute to and all benefit from. Forever." },
            ].map((card) => (
              <div key={card.title} className="p-6 bg-green-50 rounded-xl border border-green-100">
                <h4 className="font-black text-green-900 mb-2">{card.title}</h4>
                <p className="text-green-800/70 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — ONE LINE, HARD */}
      <section className="py-20 bg-gradient-to-b from-green-900 to-red-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            Gather your family.<br />
            Capture the stories.<br />
            <span className="text-amber-400">Keep them forever.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/keepsakes/book" className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm">
              Book Your Session
            </Link>
            <Link href="/keepsakes/voucher" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm">
              Buy a Gift Voucher
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
