import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Podcast Studio Hire Nottingham | Professional Recording from £45/hr | StreamTODAY",
  description: "Hire a professional podcast studio in Nottingham from £45/hour. Cave Studio (4 guests) or Studio One (8 guests). Live-editing, 4K video, engineer included. Book today.",
  openGraph: {
    title: "Podcast Studio Hire Nottingham",
    description: "Professional podcast studio hire in Nottingham from £45/hour. Live-editing included.",
    type: "article",
    publishedTime: "2026-09-23T00:00:00Z",
    authors: ["StreamToday Studios"],
    tags: ["podcast studio hire", "Nottingham", "recording studio", "live-editing"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podcast Studio Hire Nottingham",
    description: "Professional podcast studio hire from £45/hour. Book today.",
  },
  alternates: {
    canonical: "/blog/podcast-studio-hire-nottingham",
  },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Studio Hire</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              Studio Hire
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-09-23">September 23, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>StreamToday Studios</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Podcast Studio Hire in Nottingham: What You Get and What It Costs
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 italic leading-relaxed max-w-3xl">
            Everything you need to know about hiring a professional podcast studio in Nottingham, from what's included to how to book
          </p>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="lead text-xl text-gray-300 leading-relaxed mb-8">
            If you're looking to hire a podcast studio in Nottingham, you have options. But not all studios are the same. Some provide a room and a microphone. Others provide a full production experience. This guide explains what professional podcast studio hire should include, what it costs in Nottingham, and how to choose the right space for your show.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            What Does Podcast Studio Hire Include?
          </h2>

          <p className="mb-6">
            Professional podcast studio hire should include more than just a room. At StreamToday Studios, every session includes:
          </p>

          <ul className="mb-8">
            <li><strong>Studio time:</strong> Private, acoustically treated recording space</li>
            <li><strong>Professional equipment:</strong> Broadcast microphones, multi-track recording, 4K cameras</li>
            <li><strong>Engineer:</strong> A technician to operate the equipment and manage the session</li>
            <li><strong>Live-editing:</strong> Real-time cutting and polishing while you record</li>
            <li><strong>Raw files:</strong> Delivered within 24 hours via cloud storage</li>
            <li><strong>Remote guest integration:</strong> Connect guests via Zoom, Riverside, or Google Meet</li>
          </ul>

          <p className="mb-6">
            The key differentiator is live-editing. Most studios record your session and hand you raw files. You then spend hours editing. A studio with live-editing cuts and polishes your content as you record, so you walk out with publish-ready material.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Nottingham Podcast Studio Prices
          </h2>

          <p className="mb-6">
            Podcast studio hire in Nottingham ranges from £30 to £150 per hour depending on the facility, equipment, and services included. Here's how to evaluate pricing:
          </p>

          <ul className="mb-8">
            <li><strong>Budget studios (£30-£50/hour):</strong> Basic room, limited equipment, no engineer. You operate everything yourself.</li>
            <li><strong>Mid-range studios (£50-£100/hour):</strong> Better acoustics, professional microphones, sometimes an engineer.</li>
            <li><strong>Full-service studios (£100-£150/hour):</strong> Multi-camera setup, engineer included, editing services, premium location.</li>
          </ul>

          <p className="mb-6">
            StreamToday Studios offers Cave Studio at £45/hour for intimate sessions up to 4 guests, and Studio One at £75/hour for larger productions up to 8 guests. Both include an engineer, live-editing, and 4K video recording.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Cave Studio vs Studio One: Which Do You Need?
          </h2>

          <p className="mb-6">
            Choosing the right studio depends on your format and guest count:
          </p>

          <ul className="mb-8">
            <li><strong>Cave Studio (up to 4 guests):</strong> Ideal for intimate interviews, solo shows, and small group discussions. Acoustically treated, broadcast microphones, optional 4K video.</li>
            <li><strong>Studio One (up to 8 guests):</strong> Built for panel discussions, larger interviews, and video podcasts requiring multiple camera angles. Customisable backdrop, multi-camera broadcast setup.</li>
          </ul>

          <p className="mb-6">
            Both studios include the same core service: a professional engineer who records your session and live-edits the content. You walk out with finished files, not raw footage that needs weeks of post-production.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Location: Nottingham Lace Market
          </h2>

          <p className="mb-6">
            StreamToday Studios is located at 20 Fletcher Gate in Nottingham's Lace Market. It's a 5-minute walk from Nottingham train station, with parking available at Fletcher Gate Car Park. The location is central, accessible, and professional.
          </p>

          <p className="mb-6">
            For businesses and creators in Derby, Leicester, Lincoln, and the wider East Midlands, Nottingham is easily accessible by train and road. Many clients travel from surrounding cities specifically for the live-editing service.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            How to Book a Podcast Studio in Nottingham
          </h2>

          <p className="mb-6">
            Booking is straightforward. Choose your studio, select a date and time, and pay a deposit to secure your slot. The deposit is credited to your session. For cancellations within 48 hours, the deposit is forfeited.
          </p>

          <p className="mb-6">
            If you're unsure which studio you need, book a 15-minute tour. We'll show you both spaces, explain the equipment, and help you choose the right setup for your show.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Why Hire a Studio Instead of Recording at Home?
          </h2>

          <p className="mb-6">
            Home recording works for some podcasters. But it comes with hidden costs: equipment purchases, room treatment, learning editing software, and the time spent fixing audio issues. A professional studio eliminates these variables.
          </p>

          <p className="mb-6">
            The most expensive podcast studio is the one you build yourself and never use. If you're serious about your show, hiring a professional space is often the more cost-effective and reliable option.
          </p>
        </div>

        <div className="mt-12 p-6 border border-red-600 rounded-lg bg-red-950/20">
          <h3 className="text-xl font-bold text-white mb-2">
            Ready to hire a podcast studio in Nottingham?
          </h3>
          <p className="text-gray-300 mb-4">
            Book Cave Studio from £45/hour or Studio One from £75/hour. Live-editing, 4K video, and an engineer included.
          </p>
          <a
            href="/book"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Book Your Session
          </a>
        </div>
      </article>
    </main>
  );
}
