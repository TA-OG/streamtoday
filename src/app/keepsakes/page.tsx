import { Metadata } from "next";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Check, ArrowRight, Play, Clock, Users, Camera, Snowflake, Gift, Heart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Christmas Family Keepsake Gift | Record Your Family's Stories | Nottingham",
  description: "The Christmas gift your family will open again and again. Sit down together in our Nottingham studio, share your stories, and leave with a film to watch every Christmas. From £150.",
  alternates: { canonical: "/keepsakes" },
};

export default function KeepsakesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero — Warm, Christmas, Inviting */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-green-950 via-green-900 to-red-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Snowflake className="w-5 h-5 text-amber-400" />
            <p className="text-amber-400 font-bold tracking-widest uppercase text-sm">
              This Christmas — Nottingham Lace Market
            </p>
            <Snowflake className="w-5 h-5 text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-8 text-center">
            The Christmas gift<br />
            your family opens<br />
            <span className="text-amber-400">again and again.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10 text-center mx-auto">
            This Christmas, while the whole family is finally in one room, do something 
            that lasts longer than the turkey. Sit down together in our Nottingham studio. 
            Share the stories, the laughs, the memories that make your family yours. 
            Leave with a film you will watch together every Christmas to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm shadow-lg shadow-red-900/50"
            >
              Book Your Family Session
            </Link>
            <Link
              href="/keepsakes/voucher"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm shadow-lg shadow-amber-900/50"
            >
              Buy a Gift Voucher
            </Link>
          </div>
        </div>
      </section>

      {/* The Christmas Opportunity */}
      <section className="py-24 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gift className="w-6 h-6 text-red-700" />
            <Gift className="w-6 h-6 text-red-700" />
            <Gift className="w-6 h-6 text-red-700" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-red-950 mb-8 leading-tight">
            While everyone is home for Christmas,<br />
            gather the voices of your family.
          </h2>
          <p className="text-xl text-red-900/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Christmas is when the generations come together. The kids home from uni. 
            The cousins down from Manchester. Grandad in his usual chair. 
            It is the one time of year when everyone is in the same room. 
            That is the moment to capture.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-white rounded-lg shadow-sm border border-red-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-950">The stories that bind you</h3>
              <p className="text-red-900/70">
                Every family has stories that only one person knows. How your parents met. 
                What Nan did during the war. The time Uncle Dave got lost in Blackpool. 
                Record them now, while the storyteller is right there in front of you.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm border border-red-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-950">More than photographs</h3>
              <p className="text-red-900/70">
                Photos show you what people looked like. A film lets you hear them laugh, 
                pause, tell a story properly. It is the closest thing to having them in the room 
                on every Christmas to come. Your grandchildren will hear their great-grandparents laugh.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm border border-red-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-950">The gift that grows</h3>
              <p className="text-red-900/70">
                Most Christmas presents are forgotten by Boxing Day. This one gets more valuable 
                every year. Watch it on Christmas morning. Watch it at weddings. Watch it when 
                someone new joins the family and needs to know where they came from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Christmas Edition */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-4">
              How your Christmas keepsake session works
            </h2>
            <p className="text-center text-red-900/70 max-w-2xl mx-auto">
              No performance needed. No tech knowledge. Just turn up with your family 
              and we will guide the rest. It feels like a chat in your living room, 
              but with proper microphones and someone who knows what questions to ask.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "Book", desc: "Pick your package and a date over the Christmas period. We send you a Get Ready Guide with 34 question ideas." },
              { icon: Camera, title: "Bring photos", desc: "Dig out the old prints, the Polaroids, the album pages falling apart. We scan them and weave them into your family film." },
              { icon: Users, title: "Record", desc: "Sit down together in our warm studio on Fletcher Gate. We guide the conversation so it feels natural and fun." },
              { icon: Play, title: "Watch together", desc: "Your edited film lands within 7 days. Watch it together on Christmas Day. Then again next year. And the year after." },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 bg-red-700 flex items-center justify-center mx-auto mb-6 rounded-full">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-950">{step.title}</h3>
                <p className="text-red-900/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages — Christmas Gift Cards */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-red-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-4">
              Choose your Christmas keepsake
            </h2>
            <p className="text-center text-red-900/70 max-w-2xl mx-auto">
              Both packages include the full studio experience at 20 Fletcher Gate, 
              guided interview, photo inclusion, and the edited film. 
              No hidden costs. Just a Christmas gift your family will never forget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Package 1 */}
            <div className="relative p-8 lg:p-10 border-2 border-green-200 bg-white rounded-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-red-950">Family Circle</h3>
                <p className="text-red-900/70">Up to 4 people · 2 hours · Nottingham studio</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-red-950">£150</span>
                <span className="text-red-900/70"> total</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "Private studio session at 20 Fletcher Gate, Nottingham Lace Market",
                  "Professional audio and 4K video recording",
                  "Your photos scanned and included in the film",
                  "Guided interview with 34 question prompts",
                  "Edited keepsake film delivered within 7 days",
                  "Private download link to share with the whole family",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-red-900/70">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="block text-center py-4 font-semibold transition-colors bg-green-700 text-white hover:bg-green-800 rounded-sm"
              >
                Book Family Circle
              </Link>
            </div>

            {/* Package 2 */}
            <div className="relative p-8 lg:p-10 border-2 border-red-700 bg-white rounded-lg shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-red-700 text-white px-4 py-1 text-sm font-medium rounded-full">
                  Most Popular This Christmas
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-red-950">Extended Family</h3>
                <p className="text-red-900/70">Up to 6 people · 2 hours · Nottingham studio</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-red-950">£225</span>
                <span className="text-red-900/70"> total</span>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "Larger studio space at 20 Fletcher Gate, Nottingham Lace Market",
                  "Professional audio and 4K video recording",
                  "Your photos scanned and included in the film",
                  "Guided interview with 34 question prompts",
                  "Edited keepsake film delivered within 7 days",
                  "Private download link to share with the whole family",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-red-900/70">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="block text-center py-4 font-semibold transition-colors bg-red-700 text-white hover:bg-red-800 rounded-sm"
              >
                Book Extended Family
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Voucher Highlight */}
      <section className="py-24 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gift className="w-8 h-8 text-amber-400" />
            <Gift className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Not sure which date works for everyone?
          </h2>
          <p className="text-xl text-red-200 mb-10 max-w-2xl mx-auto">
            Buy a gift voucher and let them choose their own date. Delivered instantly 
            by email. Valid for 12 months. Print it, wrap it, put it under the tree. 
            The gift they did not know they needed — until they open it.
          </p>
          <Link
            href="/keepsakes/voucher"
            className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-black uppercase tracking-widest transition-all rounded-sm shadow-lg shadow-black/30"
          >
            Buy a Christmas Gift Voucher
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* The Christmas Gathering Angle */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-red-950 mb-6">
            This Christmas, give them something that lasts.
          </h2>
          <p className="text-xl text-red-900/70 mb-10 max-w-2xl mx-auto">
            We all spend money at Christmas. On food that is gone in a day. On presents 
            that sit in drawers. This year, spend it on something your family will still 
            be watching together in ten years. A film of your family, told by your family, 
            for your family.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-bold mb-2 text-green-900">For parents</h4>
              <p className="text-green-800/70 text-sm">
                They have everything. What they do not have is a professional film of their 
                parents telling the stories they have heard a hundred times — captured properly.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-bold mb-2 text-green-900">For grandparents</h4>
              <p className="text-green-800/70 text-sm">
                Give them the stage. Let them tell their story to the whole family while 
                everyone is there to hear it. The film becomes their legacy.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border border-green-100">
              <h4 className="font-bold mb-2 text-green-900">For the whole family</h4>
              <p className="text-green-800/70 text-sm">
                Pool together. Make it the family Christmas present. Something you all 
                contribute to and all benefit from. Forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — Warm Christmas Close */}
      <section className="py-24 bg-gradient-to-b from-green-900 to-red-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Snowflake className="w-6 h-6 text-amber-400" />
            <Snowflake className="w-6 h-6 text-amber-400" />
            <Snowflake className="w-6 h-6 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Gather your family.<br />
            Capture the stories.<br />
            <span className="text-amber-400">Keep them forever.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Christmas is when the generations come together. Make this the year you keep them together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm shadow-lg shadow-red-900/50"
            >
              Book Your Session
            </Link>
            <Link
              href="/keepsakes/voucher"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-black uppercase tracking-widest transition-all text-center rounded-sm shadow-lg shadow-amber-900/50"
            >
              Buy a Gift Voucher
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
