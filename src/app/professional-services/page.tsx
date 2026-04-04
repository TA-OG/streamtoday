import { Metadata } from "next";
import Link from "next/link";
import { Check, Mic, Briefcase, Users, TrendingUp, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Podcast Studio for Professional Services Nottingham | StreamTODAY",
  description: "Move from compliance to advisory. Professional podcast and video production for Accounting, Consulting, and Financial firms in Nottingham.",
};

export default function ProfessionalServicesLandingPage() {
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
                <span className="text-red-500 text-sm font-bold uppercase tracking-wider">For Accounting & Consulting</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Stop Being a Cost Center.<br />
                <span className="text-red-600">Start Being a Strategic Partner.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                Your clients see you for tax returns and compliance. A podcast shifts that perception. It positions you as the strategic advisor they call for high-value decisions, not just year-end filings.
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
                <Briefcase className="w-32 h-32 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-6">The "Commodity" Trap</h2>
            <p className="text-xl text-gray-600">
              If your clients only call you for compliance, you're competing on price. AI and automation are coming for basic advisory work. You need a way to demonstrate high-level strategic value that software can't replace.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Margin Pressure</h3>
              <p className="text-gray-600">Compliance fees are stagnant. The real money is in advisory, but clients don't see you as "strategic" enough to pay premium rates.</p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Client Education Gap</h3>
              <p className="text-gray-600">You spend hours in meetings explaining the same regulatory changes. A podcast does the heavy lifting before they even walk through the door.</p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Referral Reliance</h3>
              <p className="text-gray-600">80% of your new business is word-of-mouth. It's reliable, but it's not scalable. You need a "digital handshake" for potential clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">The Advisory Authority Engine</h2>
              <p className="text-xl text-gray-400 mb-8">
                A monthly podcast where you break down complex financial or operational challenges for your clients. It’s the most efficient way to scale your expertise and move up the value chain.
              </p>
              <ul className="space-y-4">
                {[
                  "Shift client perception from 'filer' to 'strategic partner'.",
                  "Educate your entire client base on new regulations in 30 minutes.",
                  "Provide your referral sources (bankers, lawyers) with content to share.",
                  "Attract high-value clients who are looking for forward-thinking advice.",
                  "Zero technical hassle — we handle the production while you provide the insights.",
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
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "The 2026 Tax Landscape: What Business Owners Need to Know"</h3>
                <p className="text-gray-400 text-sm">A proactive update that saves your clients money. They'll forward this to their peers, bringing you new leads.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "Scaling Beyond £5M: The Operational Shift"</h3>
                <p className="text-gray-400 text-sm">Target your ideal client avatar. Show them you understand the specific pains of their growth stage.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "Q&A: Your Top Financial Questions Answered"</h3>
                <p className="text-gray-400 text-sm">Collect questions from your team. Direct, practical answers that demonstrate your firm's depth of knowledge.</p>
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
            You bill by the hour. You don't have time to learn editing software. We edit **while you record**. You walk out with a finished, professional episode ready to send to your client list.
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
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Simple Pricing for Professional Services</h2>
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
                  Customisable backdrop (Firm branding)
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
          <h2 className="text-3xl lg:text-4xl font-black mb-6">Ready to Become the Most Trusted Advisor in Nottingham?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free pilot episode. Zero commitment. If it doesn't fit your firm's strategy, you've lost nothing.
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
