import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Share2, Bookmark, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Best Podcast Studio in Nottingham (2024 Review) | StreamTODAY Studios",
  description: "An honest review of Nottingham's podcast studios. Equipment, acoustics, pricing, and service compared. Plus why some creators travel from Leeds and Birmingham to record here.",
  openGraph: {
    title: "The Best Podcast Studio in Nottingham (2024 Review)",
    description: "An honest review of Nottingham's podcast studios. Equipment, acoustics, pricing, and service compared.",
    type: "article",
    publishedTime: "2026-04-09T00:00:00Z",
    authors: ["StreamToday Studios"],
    tags: ["podcast studio nottingham", "best podcast studio nottingham", "recording studio nottingham"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Podcast Studio in Nottingham (2024 Review)",
    description: "An honest review of Nottingham's podcast studios. Equipment, acoustics, pricing, and service compared.",
  },
};

const tableOfContents = [
  { id: "criteria", title: "What Makes a Great Podcast Studio?" },
  { id: "options", title: "The Options in Nottingham" },
  { id: "comparison", title: "The Comparison Matrix" },
  { id: "travel", title: "Why Creators Travel to Nottingham" },
  { id: "inspection", title: "What to Look for When You Visit" },
  { id: "verdict", title: "The Verdict" },
];

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <div className="h-full bg-red-600 w-0" id="reading-progress" />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Local SEO</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              Local SEO
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-04-09">April 9, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>StreamToday Studios</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Best Podcast Studio in Nottingham (2024 Review)
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 italic leading-relaxed max-w-3xl">
            An honest review of Nottingham's podcast studios. Equipment, acoustics, pricing, and service compared.
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src="/images/studio-hero-1.jpg"
            alt="StreamToday Studios professional podcast studio in Nottingham"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm text-gray-300">
              Professional podcast studios in Nottingham compared — find the right space for your content.
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-900 rounded-xl p-6 mb-12 border border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-white">Table of Contents</h2>
          <ul className="space-y-2">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2"
                >
                  <span className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs">
                    {tableOfContents.indexOf(item) + 1}
                  </span>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="lead text-xl text-gray-300 leading-relaxed mb-8">
            Nottingham has a podcasting problem.
          </p>

          <p className="mb-6">
            Not a shortage of podcasters — the city is teeming with founders, creatives, and professionals who've realised that audio authority is the new business card.
          </p>

          <p className="mb-6">
            The problem is where to record.
          </p>

          <p className="mb-8">
            Search "podcast studio Nottingham" and you'll find a handful of options. Some are music studios that happen to have a microphone. Some are co-working spaces with a "podcast room" that's essentially a broom cupboard with foam panels. Some are video production houses that charge broadcast rates for corporate work.
          </p>

          <p className="mb-8">
            What you won't find — until now — is a studio built specifically for podcasters. A space designed around the realities of modern podcasting: video-first, efficiency-obsessed, creator-friendly.
          </p>

          <p className="mb-8">
            This is that review. An honest assessment of what exists, what matters, and where you should record your next episode.
          </p>

          <h2 id="criteria" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            What Makes a Great Podcast Studio?
          </h2>

          <p className="mb-6">
            Before comparing options, let's establish criteria. A great podcast studio is not just "a room with a microphone." It's:
          </p>

          <p className="mb-6">
            <strong className="text-white">Acoustically treated:</strong> The room matters more than the mic. Proper bass traps, absorption, and diffusion. No echo, no reverb, no traffic noise.
          </p>

          <p className="mb-6">
            <strong className="text-white">Video-ready:</strong> In 2024, audio-only is a compromise. Multiple camera angles, professional lighting, clean backgrounds.
          </p>

          <p className="mb-6">
            <strong className="text-white">Efficient:</strong> Live editing, immediate file delivery, minimal setup time. You should walk out with a finished episode.
          </p>

          <p className="mb-6">
            <strong className="text-white">Well-equipped:</strong> Quality microphones, headphones, audio interfaces. Backup equipment. Everything tested and ready.
          </p>

          <p className="mb-6">
            <strong className="text-white">Comfortable:</strong> You're here for hours. Good chairs, temperature control, natural light, decent coffee.
          </p>

          <p className="mb-6">
            <strong className="text-white">Well-located:</strong> Easy access, parking nearby, good transport links. Nottingham city centre or close to it.
          </p>

          <p className="mb-8">
            <strong className="text-white">Fairly priced:</strong> Transparent rates, no hidden fees, value that justifies the cost.
          </p>

          <p className="mb-8">
            Use these criteria and most "podcast studios" fail immediately.
          </p>

          <h2 id="options" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Options in Nottingham
          </h2>

          <h3 className="text-2xl font-bold text-white mt-12 mb-4">
            Option 1: Music Studios (Metronome, Confetti, etc.)
          </h3>

          <p className="mb-6">
            Nottingham has excellent music studios. Metronome, Confetti's facilities, and various independent studios serve musicians brilliantly.
          </p>

          <p className="mb-6">
            <strong className="text-white">The problem:</strong> They're designed for music, not speech.
          </p>

          <p className="mb-6">
            Music studios optimise for loud sources (drums, guitars), short sessions (3-4 hours), audio-only recording, and engineer-led workflow. Podcasting requires quiet sources (voice), long sessions (2-4 hours of talking), video recording, and self-service or collaborative workflow.
          </p>

          <p className="mb-6">
            Can you record a podcast in a music studio? Yes. Will it be optimised for podcasting? No. You'll pay for capabilities you don't need while missing capabilities you do.
          </p>

          <p className="mb-6">
            <strong className="text-white">Pricing:</strong> £150-300 per day<br />
            <strong className="text-white">Best for:</strong> Musicians who also podcast occasionally<br />
            <strong className="text-white">Not for:</strong> Serious podcasters who publish regularly
          </p>

          <h3 className="text-2xl font-bold text-white mt-12 mb-4">
            Option 2: Co-working Podcast Rooms
          </h3>

          <p className="mb-6">
            Various co-working spaces in Nottingham offer "podcast rooms" as amenities. You book by the hour, plug in your laptop, and record.
          </p>

          <p className="mb-6">
            <strong className="text-white">The problem:</strong> These rooms are afterthoughts.
          </p>

          <p className="mb-6">
            Typically you'll find a USB microphone (often a Blue Yeti), foam panels glued to the wall (ineffective below 1kHz, which is where voice lives), no video capability, thin walls, and no technical support.
          </p>

          <p className="mb-6">
            The acoustic treatment is cosmetic, not functional. The equipment is consumer-grade. The environment is distracting.
          </p>

          <p className="mb-6">
            <strong className="text-white">Pricing:</strong> £25-50 per hour<br />
            <strong className="text-white">Best for:</strong> Testing the podcasting waters, recording voice notes<br />
            <strong className="text-white">Not for:</strong> Professional content, video podcasts, anything you care about
          </p>

          <h3 className="text-2xl font-bold text-white mt-12 mb-4">
            Option 3: Video Production Houses
          </h3>

          <p className="mb-6">
            Nottingham has several video production companies with studio facilities. They can absolutely record your podcast.
          </p>

          <p className="mb-6">
            <strong className="text-white">The problem:</strong> They're priced for corporate video, not podcasting.
          </p>

          <p className="mb-6">
            Video production studios optimise for high production value, crew-heavy workflows, short shoots, and corporate budgets (£5,000+ per day). Podcasting requires sustainable pricing (you're recording weekly, not once per quarter), self-service or minimal crew, and long sessions.
          </p>

          <p className="mb-6">
            Can they do it? Yes. Will it cost 5x what it should? Also yes.
          </p>

          <p className="mb-6">
            <strong className="text-white">Pricing:</strong> £800-2,000 per day<br />
            <strong className="text-white">Best for:</strong> One-off corporate video projects<br />
            <strong className="text-white">Not for:</strong> Regular podcast production
          </p>

          <h3 className="text-2xl font-bold text-white mt-12 mb-4">
            Option 4: StreamToday Studios
          </h3>

          <p className="mb-6">
            Full disclosure: this is us. But this review is honest — we built StreamToday because the other options didn't work for serious podcasters.
          </p>

          <p className="mb-6">
            <strong className="text-white">What we optimised for:</strong>
          </p>

          <p className="mb-6">
            <strong className="text-white">Acoustics first:</strong> Purpose-built podcast studio with professional acoustic treatment. Bass traps in every corner, broadband absorption at reflection points, diffusers for natural sound. You sound like you, not you in a box.
          </p>

          <p className="mb-6">
            <strong className="text-white">Video native:</strong> Three-camera setup (wide, medium, close-up), professional lighting (key, fill, hair), clean backgrounds. Your podcast looks as good as it sounds.
          </p>

          <p className="mb-6">
            <strong className="text-white">Live editing:</strong> Our unique differentiator. We edit as you record. Remove mistakes, balance levels, add music — all in real-time. You walk out with a finished episode.
          </p>

          <p className="mb-6">
            <strong className="text-white">Creator-friendly:</strong> Self-service option or full support. Your choice.
          </p>

          <p className="mb-6">
            <strong className="text-white">Comfortable:</strong> Ergonomic chairs, temperature controlled, natural light, excellent coffee.
          </p>

          <p className="mb-6">
            <strong className="text-white">Central location:</strong> 20 Fletcher Gate, Nottingham's Lace Market. Tram stop outside. Parking nearby.
          </p>

          <p className="mb-6">
            <strong className="text-white">Transparent pricing:</strong> £120 for a 2-hour session. No hidden fees.
          </p>

          <p className="mb-6">
            <strong className="text-white">Best for:</strong> Serious podcasters who publish regularly, video podcasts, anyone who values their time<br />
            <strong className="text-white">Not for:</strong> People who want the cheapest possible option regardless of quality
          </p>

          <h2 id="comparison" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Comparison Matrix
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 pr-4 text-white font-semibold">Criteria</th>
                  <th className="py-4 pr-4 text-gray-400">Music Studio</th>
                  <th className="py-4 pr-4 text-gray-400">Co-working Room</th>
                  <th className="py-4 pr-4 text-gray-400">Video Production</th>
                  <th className="py-4 pr-4 text-red-500">StreamToday</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 pr-4 text-white">Acoustics</td>
                  <td className="py-4 pr-4">Good for music</td>
                  <td className="py-4 pr-4">Poor</td>
                  <td className="py-4 pr-4">Good</td>
                  <td className="py-4 pr-4 text-red-400">Excellent</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 pr-4 text-white">Video</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4 pr-4">Yes (expensive)</td>
                  <td className="py-4 pr-4 text-red-400">Yes (included)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 pr-4 text-white">Live editing</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4 pr-4 text-red-400">Yes</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 pr-4 text-white">Setup time</td>
                  <td className="py-4 pr-4">30+ mins</td>
                  <td className="py-4 pr-4">15 mins</td>
                  <td className="py-4 pr-4">60+ mins</td>
                  <td className="py-4 pr-4 text-red-400">0 mins</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 pr-4 text-white">Post-production</td>
                  <td className="py-4 pr-4">3-4 hours DIY</td>
                  <td className="py-4 pr-4">3-4 hours DIY</td>
                  <td className="py-4 pr-4">Included (slow)</td>
                  <td className="py-4 pr-4 text-red-400">Walk out finished</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 pr-4 text-white">Price per 2hrs</td>
                  <td className="py-4 pr-4">£50-75</td>
                  <td className="py-4 pr-4">£50-100</td>
                  <td className="py-4 pr-4">£400-500</td>
                  <td className="py-4 pr-4 text-red-400">£120</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 text-white">For podcasters?</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4 pr-4">No</td>
                  <td className="py-4 pr-4 text-red-400">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="travel" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Why Creators Travel to Nottingham
          </h2>

          <p className="mb-6">
            Here's something that surprised us: over 30% of our clients don't live in Nottingham.
          </p>

          <p className="mb-6">
            They come from Leeds (1 hour by train), Leicester (30 minutes by train), Derby (20 minutes by train), Birmingham (50 minutes by train), Sheffield (40 minutes by train), and Lincoln (50 minutes by train).
          </p>

          <p className="mb-6">
            Why travel when every city has recording options?
          </p>

          <p className="mb-6">
            <strong className="text-white">The live editing factor:</strong> Our clients save 4-5 hours per episode in post-production time. For someone publishing weekly, that's 20 hours per month. The travel time pays for itself.
          </p>

          <p className="mb-6">
            <strong className="text-white">The quality factor:</strong> No other studio in the Midlands offers our combination of acoustics, video, and live editing. For serious creators, the quality difference justifies the journey.
          </p>

          <p className="mb-6">
            <strong className="text-white">The batch recording factor:</strong> Many clients record 2-4 episodes in a single day trip. They get a month of content in one efficient session.
          </p>

          <p className="mb-8">
            <strong className="text-white">The experience factor:</strong> Recording in a space designed for podcasting, with people who understand podcasting, creates a different energy. You perform better. You enjoy it more.
          </p>

          <h2 id="inspection" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            What to Look for When You Visit
          </h2>

          <p className="mb-6">
            If you're evaluating podcast studios in Nottingham (or anywhere), here's your inspection checklist:
          </p>

          <p className="mb-6">
            <strong className="text-white">Acoustics test:</strong> Clap your hands. Do you hear a slap echo? That's bad. Talk at normal volume. Does your voice sound boxy or boomy? That's bad. Listen for 30 seconds. Can you hear traffic, air conditioning, or other rooms? That's bad.
          </p>

          <p className="mb-6">
            <strong className="text-white">Equipment check:</strong> Are the microphones dynamic (Shure SM7B, Electrovoice RE20) or condenser? Dynamic is better for most voices. Are there headphones for every participant? Is there a pop filter for every mic?
          </p>

          <p className="mb-6">
            <strong className="text-white">Video assessment:</strong> How many cameras? (Minimum 2 for dynamic editing) Is the lighting adjustable? What's the background? Can you see a monitor to check your framing?
          </p>

          <p className="mb-6">
            <strong className="text-white">Workflow questions:</strong> How long is setup time? Do they offer live editing or will you need to edit yourself? How do you receive files?
          </p>

          <p className="mb-8">
            <strong className="text-white">Vibe check:</strong> Do you feel comfortable? Is the staff knowledgeable about podcasting specifically? Do they understand your goals or just rent you space?
          </p>

          <h2 id="verdict" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Verdict
          </h2>

          <p className="mb-6">
            Nottingham's podcast studio landscape is typical of most UK cities: lots of options, few good ones.
          </p>

          <p className="mb-6">
            Music studios are wrong for speech. Co-working rooms are under-equipped. Video production houses are over-priced.
          </p>

          <p className="mb-6">
            If you're serious about podcasting — if you're publishing regularly, if you care about quality, if you value your time — you need a studio built for podcasters.
          </p>

          <p className="mb-6">
            That's what we built at StreamToday. Not because we wanted to compete with music studios or video production houses, but because the right option didn't exist.
          </p>

          <p className="mb-8">
            The best podcast studio in Nottingham is the one that understands what podcasters actually need. Acoustics that flatter your voice. Video that builds your brand. Efficiency that respects your time. Pricing that scales with your ambition.
          </p>

          <p className="mb-8">
            Everything else is a compromise.
          </p>
        </div>

        {/* CTA Block */}
        <div className="mt-16 p-8 bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl border border-red-800">
          <h3 className="text-2xl font-bold text-white mb-4">
            Book a Tour
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Don't take my word for it. Come and see for yourself. We offer free 15-minute studio tours. No pitch, no pressure. Just walk through the space, ask questions, and decide if it's right for you.
          </p>
          <a
            href="https://streamtoday.as.me/schedule/b2a579b5"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
          >
            Book a Tour →
          </a>
        </div>

        {/* Share & Save */}
        <div className="mt-12 flex items-center justify-between py-6 border-t border-gray-800">
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Share:</span>
            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
          <div className="text-gray-400 text-sm">
            Last updated: <time dateTime="2026-04-09">April 9, 2026</time>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/home-studio-vs-professional-studio-comparison" className="group">
              <article className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-600 transition-colors">
                <span className="text-red-500 text-sm font-semibold">Studio vs DIY</span>
                <h4 className="text-xl font-bold text-white mt-2 group-hover:text-red-500 transition-colors">
                  Home Studio vs Professional Studio: The Real Comparison
                </h4>
                <p className="text-gray-400 mt-2">The honest cost comparison between building a home studio and hiring a professional space.</p>
              </article>
            </Link>
            <Link href="/blog/how-to-get-first-1000-podcast-listeners" className="group">
              <article className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-600 transition-colors">
                <span className="text-red-500 text-sm font-semibold">Growth</span>
                <h4 className="text-xl font-bold text-white mt-2 group-hover:text-red-500 transition-colors">
                  How to Get Your First 1,000 Podcast Listeners
                </h4>
                <p className="text-gray-400 mt-2">The systematic approach to podcast growth that actually works.</p>
              </article>
            </Link>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-6 bg-gray-900 rounded-xl border border-gray-800">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold">
              S
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">StreamToday Studios</h4>
              <p className="text-gray-400 mt-1">
                Nottingham's premier podcast studio with live editing. We help creators produce professional content without the technical headaches.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Best Podcast Studio in Nottingham (2024 Review)",
            "description": "An honest review of Nottingham's podcast studios. Equipment, acoustics, pricing, and service compared.",
            "image": "https://streamtoday.co.uk/images/studio-hero-1.jpg",
            "datePublished": "2026-04-09T00:00:00Z",
            "dateModified": "2026-04-09T00:00:00Z",
            "author": {
              "@type": "Organization",
              "name": "StreamToday Studios",
              "url": "https://streamtoday.co.uk"
            },
            "publisher": {
              "@type": "Organization",
              "name": "StreamToday Studios",
              "logo": {
                "@type": "ImageObject",
                "url": "https://streamtoday.co.uk/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://streamtoday.co.uk/blog/best-podcast-studio-nottingham"
            }
          })
        }}
      />
    </main>
  );
}
