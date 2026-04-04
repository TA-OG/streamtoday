import { Metadata } from "next";
import Link from "next/link";
import { Check, Mic, Heart, Users, Clock, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Podcast Studio for Healthcare & Private Clinics Nottingham | StreamTODAY",
  description: "Build patient trust and reduce consultation time with educational podcasts. Professional production for private GPs, dental, and aesthetic clinics.",
};

export default function HealthcareLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center font-black text-white text-lg">S</div>
              <span className="text-lg font-black tracking-tighter text-white uppercase">StreamTODAY</span>
            </Link>
            <Link
              href="https://streamtoday.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-widest transition-all rounded-sm"
            >
              Book Pilot Episode
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-6">
                <span className="text-red-500 text-sm font-bold uppercase tracking-wider">For Private Clinics & Healthcare</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Educate Your Patients.<br />
                <span className="text-red-600">Before They Even Book.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                Anxious patients have questions. Instead of spending 20 minutes answering the same ones in every consultation, give them a podcast that builds trust, explains procedures, and puts them at ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://streamtoday.as.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all rounded-sm text-center"
                >
                  Book Free Pilot Episode
                </a>
                <Link
                  href="#how-it-works"
                  className="px-8 py-4 border-2 border-white/20 hover:border-white text-white font-black uppercase tracking-widest transition-all rounded-sm text-center"
                >
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-600/20 to-black border border-white/10 rounded-lg flex items-center justify-center">
                <Heart className="w-32 h-32 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-6">The "Anxiety" Barrier</h2>
            <p className="text-xl text-gray-600">
              Patients are scared of procedures. They spend weeks researching online, often finding misinformation. By the time they reach your clinic, they're anxious and full of questions that eat into your consultation time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation Fatigue</h3>
              <p className="text-gray-600">You spend the first 15 minutes of every appointment explaining the same procedure. It's inefficient and drains your energy.</p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Trust Deficit</h3>
              <p className="text-gray-600">Private healthcare is a big decision. Patients need to trust your expertise before they commit to a £5k+ treatment plan.</p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">No-Show Rates</h3>
              <p className="text-gray-600">When patients don't fully understand the value or the process, they hesitate. Hesitation leads to cancellations and lost revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">The Patient Education Engine</h2>
              <p className="text-xl text-gray-400 mb-8">
                A podcast series where you explain common procedures, debunk myths, and share patient success stories. It’s the most effective way to "pre-consult" your patients and build a relationship before they walk in.
              </p>
              <ul className="space-y-4">
                {[
                  "Reduce consultation time by 30% by educating patients beforehand.",
                  "Humanize your clinic and reduce patient anxiety through your voice.",
                  "Provide a 'digital waiting room' experience that builds massive trust.",
                  "Share episodes with GPs and referrers to keep your clinic top-of-mind.",
                  "Zero technical hassle — we handle the production while you provide the care.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "What Really Happens During a [Procedure]?"</h3>
                <p className="text-gray-400 text-sm">A step-by-step walkthrough that removes the fear of the unknown. Patients listen to this 5 times before their appointment.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "Myth-Busting: The Truth About [Treatment]"</h3>
                <p className="text-gray-400 text-sm">Address the rumors and bad advice patients find on Google. Position yourself as the voice of reason and science.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "Patient Journey: From Consultation to Recovery"</h3>
                <p className="text-gray-400 text-sm">An anonymized story of a real patient. It helps prospects visualize their own success at your clinic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE EDITING Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-6">LIVE EDITING. Zero Post-Production.</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            You're a clinician, not a content creator. We edit **while you record**. You walk out with a finished, professional episode ready to embed on your website or send to patients.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/10 rounded-lg">
              <div className="text-4xl font-black mb-2">30 min</div>
              <div className="text-sm uppercase tracking-wider">Recording Session</div>
            </div>
            <div className="p-6 bg-white/10 rounded-lg">
              <div className="text-4xl font-black mb-2">0 min</div>
              <div className="text-sm uppercase tracking-wider">Your Editing Time</div>
            </div>
            <div className="p-6 bg-white/10 rounded-lg">
              <div className="text-4xl font-black mb-2">24 hrs</div>
              <div className="text-sm uppercase tracking-wider">Delivery Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Simple Pricing for Healthcare</h2>
            <p className="text-xl text-gray-400">
              Start with a free pilot episode. If it works, scale to monthly. No lock-in.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Cave Studio */}
            <div className="p-8 border-2 border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Cave Studio</h3>
              <p className="text-sm text-gray-400 mb-6">Intimate 1-on-1 commentary.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">£45</span>
                <span className="text-gray-400">/hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  Pro audio + broadcast video optional
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  LIVE EDITING included
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  Raw files within 24 hours
                </li>
              </ul>
              <a
                href="https://streamtoday.as.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-sm transition-colors"
              >
                Book Cave Studio
              </a>
            </div>

            {/* Studio One - Most Popular */}
            <div className="p-8 border-2 border-red-600 rounded-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-red-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Studio One</h3>
              <p className="text-sm text-gray-400 mb-6">Panel discussions. Up to 8 people.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">£75</span>
                <span className="text-gray-400">/hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  Multi-camera broadcast setup
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  Customisable backdrop (Clinic branding)
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  Green room & VIP hospitality
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  LIVE EDITING included
                </li>
              </ul>
              <a
                href="https://streamtoday.as.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-sm transition-colors"
              >
                Book Studio One
              </a>
            </div>

            {/* Podcast Subscription */}
            <div className="p-8 border-2 border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Monthly Retainer</h3>
              <p className="text-sm text-gray-400 mb-6">Best for clinics committed to patient education.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">£549</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  2 episodes per month
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  Full post-production + 4 social clips
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  Content strategy session
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  Dedicated account manager
                </li>
              </ul>
              <a
                href="https://streamtoday.as.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-sm transition-colors"
              >
                Start Retainer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-6">Ready to Build Unshakeable Patient Trust?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free pilot episode. Zero commitment. If it doesn't help your patient journey, you've lost nothing.
          </p>
          <a
            href="https://streamtoday.as.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all rounded-sm"
          >
            Book Free Pilot Episode
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            StreamTODAY Studios — 20 Fletcher Gate, Nottingham Lace Market
          </p>
        </div>
      </footer>
    </main>
  );
}
