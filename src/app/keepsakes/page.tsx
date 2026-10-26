import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Check, ArrowRight, Play, Clock, Users, Camera } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family Keepsake Recording Nottingham | Record Their Stories on Film",
  description: "Sit down with the people you love and record their stories, their voice, their laugh. A keepsake film you will watch again and again. Family video recording studio in Nottingham Lace Market. From £150.",
  alternates: { canonical: "/keepsakes" },
};

export default function KeepsakesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="text-red-500 font-bold tracking-widest uppercase text-sm mb-6">
            Family Keepsakes — Nottingham Lace Market
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-8">
            The voice you can never<br />
            hear again.
            <span className="block text-red-600 mt-2">Unless you record it now.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-10">
            One day the stories will be gone. Not through tragedy. Just through time. 
            The laugh. The way they say your name. The answer to a question you never asked.
            We sit you down together at our studio on Fletcher Gate — you, your family, and a microphone. 
            Two hours later you have a film. Not a memory. A film.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm"
            >
              Book Before You Forget
            </Link>
            <Link
              href="/keepsakes/guide"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest backdrop-blur-sm transition-all text-center rounded-sm border border-white/10"
            >
              Read the Guide
            </Link>
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-8 leading-tight text-center">
            You will not regret spending £150.<br />
            You will regret not doing it.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12 text-center">
            Everyone thinks they have time. Then they don't. We have never had a client 
            say "I wish I'd waited." We have had plenty say "I wish I'd done this while Mum was still here."
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50">
              <p className="text-4xl font-black text-red-600 mb-4">01</p>
              <h3 className="text-xl font-bold mb-3">The stories disappear</h3>
              <p className="text-gray-600">
                Every family has that one person who holds the history. How they met. What happened in '74. 
                The thing nobody else knows. When they go, those stories go with them. A recording is the only way to keep them.
              </p>
            </div>
            <div className="p-8 bg-gray-50">
              <p className="text-4xl font-black text-red-600 mb-4">02</p>
              <h3 className="text-xl font-bold mb-3">The voice is everything</h3>
              <p className="text-gray-600">
                Photos show you what someone looked like. A film lets you hear them laugh, pause, get emotional. 
                It is the closest thing to having them in the room. Your grandchildren will hear them laugh. 
                Even if they never met.
              </p>
            </div>
            <div className="p-8 bg-gray-50">
              <p className="text-4xl font-black text-red-600 mb-4">03</p>
              <h3 className="text-xl font-bold mb-3">You can't get this back</h3>
              <p className="text-gray-600">
                You can buy another scarf. Another gadget. Another meal out. You cannot buy back a conversation 
                that never happened. £150 is not a lot for something that grows more valuable every year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 text-center">
            How a family keepsake session works
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            No performance needed. No tech knowledge. You don't even need to know what to ask — we give you the questions. Just turn up and talk.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Book", desc: "Pick your package and a date. We send you a Get Ready Guide with 34 interview questions tailored for grandparents, parents, couples and siblings." },
              { icon: Camera, title: "Bring photos", desc: "Dig out the old prints, the Polaroids, the album pages falling apart. We scan them and weave them into your film. Digital works too." },
              { icon: Users, title: "Record", desc: "Sit down together in our Lace Market studio. We guide the conversation so it feels natural — like a chat in your living room, but with proper microphones." },
              { icon: Play, title: "Keep forever", desc: "Your edited film lands within 7 days. Private download link. Watch it at Christmas. At weddings. When you need to hear their voice." },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 text-center">
            Family keepsake packages
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Both packages include the full studio session, guided interview, photo scanning, professional audio and video recording, and the edited film. No hidden costs. No upsells.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative p-8 lg:p-10 border-2 border-gray-200 bg-white">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Family Circle</h3>
                <p className="text-gray-600">Up to 4 people · 2 hours · Nottingham studio</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold">£150</span>
                <span className="text-gray-600"> total</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "Private studio session at 20 Fletcher Gate, Nottingham Lace Market",
                  "Professional audio and 4K video recording",
                  "Your photos scanned and included in the film",
                  "Guided interview with 34 question prompts",
                  "Edited keepsake film delivered within 7 days",
                  "Private download link to share with family",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="block text-center py-4 font-semibold transition-colors bg-gray-100 text-black hover:bg-gray-200"
              >
                Book Family Circle
              </Link>
            </div>

            <div className="relative p-8 lg:p-10 border-2 border-black shadow-xl bg-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-black text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Extended Family</h3>
                <p className="text-gray-600">Up to 6 people · 2 hours · Nottingham studio</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold">£225</span>
                <span className="text-gray-600"> total</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "Larger studio space at 20 Fletcher Gate, Nottingham Lace Market",
                  "Professional audio and 4K video recording",
                  "Your photos scanned and included in the film",
                  "Guided interview with 34 question prompts",
                  "Edited keepsake film delivered within 7 days",
                  "Private download link to share with family",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="block text-center py-4 font-semibold transition-colors bg-black text-white hover:bg-gray-800"
              >
                Book Extended Family
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
            10 referrals. 10% off.
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            After your session, tell your mates. If your group generates 10 referrals who submit their details, 
            everyone in your party gets 10% refunded. Simple.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left mb-8">
            <div className="p-6 bg-white border border-gray-200">
              <span className="text-3xl font-black text-red-600">1</span>
              <h4 className="font-bold mt-2 mb-2">Record</h4>
              <p className="text-gray-600 text-sm">Do your keepsake session. Have the conversation.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200">
              <span className="text-3xl font-black text-red-600">2</span>
              <h4 className="font-bold mt-2 mb-2">Share</h4>
              <p className="text-gray-600 text-sm">Send friends to our referral page with your email.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200">
              <span className="text-3xl font-black text-red-600">3</span>
              <h4 className="font-bold mt-2 mb-2">Save</h4>
              <p className="text-gray-600 text-sm">Hit 10 as a group and we refund 10% of your session.</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            The 10 referrals count for your whole party, not per person. Referrals must be genuine new enquiries.
          </p>
        </div>
      </section>

      {/* Voucher Teaser */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Not sure when they are free?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Buy a gift voucher and let them choose their own date. Delivered instantly by email. 
            Valid for 12 months. The gift they did not know they needed — until they receive it.
          </p>
          <Link
            href="/keepsakes/voucher"
            className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all rounded-sm"
          >
            Buy a Gift Voucher
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Ask the questions you have<br />always meant to ask.
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            While you still can. While they are still here. While the conversation is easy and the room is warm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm"
            >
              Book Your Session
            </Link>
            <Link
              href="/keepsakes/guide"
              className="px-8 py-4 bg-black hover:bg-gray-800 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm"
            >
              Read the Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
