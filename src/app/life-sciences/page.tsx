import { Metadata } from "next";
import Link from "next/link";
import { Check, FlaskConical, TrendingUp, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Podcast Studio for Life Sciences Nottingham | StreamTODAY",
  description: "Explain your science to the world. Professional podcast and video production for Life Sciences, MedTech, and Pharma companies in Nottingham's BioCity.",
};

export default function LifeSciencesLandingPage() {
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
                <span className="text-red-500 text-sm font-bold uppercase tracking-wider">For Life Sciences & MedTech</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Stop Hiding Your Science<br />
                <span className="text-red-600">Behind PDFs.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                You're solving the world's hardest problems. Your marketing shouldn't look like a grant application. A podcast humanizes your data, explains your tech to investors, and builds global authority from the Lace Market.
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
                <FlaskConical className="w-32 h-32 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-6">The "White Paper" Problem</h2>
            <p className="text-xl text-gray-600">
              Your competitors are publishing 50-page PDFs that no one reads. Your investors want to hear your vision. Your talent wants to see your culture. Text-based content is failing to capture the human side of your innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Investor Trust</h3>
              <p className="text-gray-600">Investors don't just back tech; they back teams. A podcast lets them hear your passion and expertise before they ever see a pitch deck.</p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Talent Acquisition</h3>
              <p className="text-gray-600">Top PhDs want to work for visionaries. Show them your lab culture and your mission to solve real problems.</p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Complex Explanations</h3>
              <p className="text-gray-600">Some science is too complex for a blog post. A 30-minute conversation can explain a mechanism better than 10,000 words.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">The BioCity Authority Engine</h2>
              <p className="text-xl text-gray-400 mb-8">
                From Nottingham to the world. Record high-production interviews with your CSO, CTO, or key researchers. We handle the technical complexity so you can focus on the science.
              </p>
              <ul className="space-y-4">
                {[
                  "Explain your tech to a global audience without leaving the Lace Market.",
                  "Humanize your brand for investors and potential partners.",
                  "Repurpose one 45-minute recording into 10+ social clips and a blog post.",
                  "GDPR-compliant and professionally managed for sensitive data.",
                  "Broadcast-quality audio that makes your team sound like industry leaders.",
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
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "The Future of [Your Specialism]"</h3>
                <p className="text-gray-400 text-sm">Your founder discusses the 5-year horizon for the industry. Positions your company as the thought leader driving that future.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "From Lab to Market"</h3>
                <p className="text-gray-400 text-sm">A deep dive into your product development journey. The failures, the breakthroughs, and the science that made it possible.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-2">Episode Idea: "The Investor Q&A"</h3>
                <p className="text-gray-400 text-sm">Answer the top 10 questions you get in due diligence. Send this to prospects before the first meeting to save 10 hours of prep.</p>
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
            Your scientists are busy. They don't have time to learn editing software. We edit **while you record**. You walk out with a finished, polished episode ready to share with your stakeholders.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/10 rounded-lg">
              <div className="text-4xl font-black mb-2">45 min</div>
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
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Simple Pricing for Life Sciences</h2>
            <p className="text-xl text-gray-400">
              Start with a free pilot episode. If it works, scale to monthly. No lock-in.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Cave Studio */}
            <div className="p-8 border-2 border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Cave Studio</h3>
              <p className="text-sm text-gray-400 mb-6">Intimate 1-on-1 interviews.</p>
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
                  Customisable backdrop (Lab/Office)
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
              <p className="text-sm text-gray-400 mb-6">Best for companies committed to thought leadership.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">£549</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  3 sessions per month
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                  Full post-production + 6 social clips
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
          <h2 className="text-3xl lg:text-4xl font-black mb-6">Ready to Become the Voice of Your Industry?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free pilot episode. Zero commitment. If it doesn't fit your compliance or strategy, you've lost nothing.
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
