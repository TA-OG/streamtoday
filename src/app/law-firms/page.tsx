import { Metadata } from "next";
import Link from "next/link";
import { Check, Scale, Users, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Podcast Studio for Law Firms Nottingham | StreamTODAY",
  description: "Build authority and win high-value clients with a professional law firm podcast. Record in Nottingham's Lace Market. We handle editing and production.",
};

export default function LawFirmLandingPage() {
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
              href="https://streamtoday.as.me/?appointmentType=42416301"
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
                <span className="text-red-500 text-sm font-bold uppercase tracking-wider">For Law Firms</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Stop Competing on Price.<br />
                <span className="text-red-600">Start Winning on Authority.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                A law firm podcast positions you as the definitive expert in your practice area. Potential clients hear your expertise before they ever call. They don't shop around. They hire you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://streamtoday.as.me/?appointmentType=42416301"
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
                <Scale className="w-32 h-32 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-6">The Problem With Traditional Legal Marketing</h2>
            <p className="text-xl text-gray-600">
              Legal directories are pay-to-play. SEO takes 12-18 months. Cold outreach feels undignified. You're either invisible or competing with firms that have deeper pockets, not better lawyers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Directory Dependence</h3>
              <p className="text-gray-600">Chambers and Legal 500 cost thousands. You're paying for a listing, not clients. And you're listed next to your competitors.</p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Content That Goes Nowhere</h3>
              <p className="text-gray-600">You write brilliant legal updates. They get 12 views. Your clients don't read law journals. They listen to podcasts on their commute.</p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trust Deficit</h3>
              <p className="text-gray-600">Potential clients are anxious. They don't know which firm to trust. A podcast lets them hear your expertise, your tone, your approach — before they pay a deposit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">The Law Firm Podcast Advantage</h2>
              <p className="text-xl text-gray-400 mb-8">
                A monthly podcast where you discuss recent cases, regulatory changes, and practical legal advice for your target clients. 20-30 minutes of authority that separates you from every other firm on the high street.
              </p>
              <ul className="space-y-4">
                {[
                  "Potential clients hear your expertise before they call — they're pre-sold",
                  "Referral sources (accountants, bankers) share your episodes with their clients",
                  "Content ranks on Google — 'employment lawyer Nottingham' podcast results convert 3x better",
                  "Demonstrate thought leadership at partner meetings and BD pitches",
                  "Zero technical hassle — we record, edit, and deliver. You just show up and speak.",
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
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "What the New Employment Act Means for Your Business"</h3>
                <p className="text-gray-400 text-sm">Break down complex legislation in plain English. Business owners share this with their peers. You become their go-to employment lawyer.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "Case Study: How We Saved a Client £200k in a Dispute"</h3>
                <p className="text-gray-400 text-sm">Anonymised case walkthrough. Show your process, your strategy, your results. Prospects see exactly what they're paying for.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "Q&A: Your Top 5 Legal Questions Answered"</h3>
                <p className="text-gray-400 text-sm">Collect questions from clients and social media. Direct, practical answers. Demonstrates accessibility and expertise.</p>
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
            Lawyers bill by the hour. You don't have time to learn editing software. We edit **while you record**. You walk out with a finished episode ready to publish. No post-production. No wasted evenings.
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
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Simple Pricing for Law Firms</h2>
            <p className="text-xl text-gray-400">
              Start with a free pilot episode. If it works, scale to monthly. No lock-in.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Cave Studio */}
            <div className="p-8 border-2 border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Cave Studio</h3>
              <p className="text-sm text-gray-400 mb-6">Solo commentary or 1-on-1 interviews.</p>
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
                href="https://streamtoday.as.me/?appointmentType=42416301"
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
                  Customisable backdrop (firm branding)
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
                href="https://streamtoday.as.me/?appointmentType=42416302"
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
              <p className="text-sm text-gray-400 mb-6">Best for firms committed to thought leadership.</p>
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
                href="https://streamtoday.as.me/?appointmentType=42416303"
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
          <h2 className="text-3xl lg:text-4xl font-black mb-6">Ready to Become the Most Trusted Firm in Your Practice Area?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free pilot episode. Zero commitment. If it doesn't fit your firm's strategy, you've lost nothing.
          </p>
          <a
            href="https://streamtoday.as.me/?appointmentType=42416301"
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
