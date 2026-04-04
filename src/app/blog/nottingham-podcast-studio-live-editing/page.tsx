import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Share2, Bookmark, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Nottingham Podcast Studio That Edits While You Record | StreamTODAY Studios",
  description: "Live editing is the single biggest competitive advantage in podcast production. Walk out of StreamTODAY with finished content, not raw files.",
  openGraph: {
    title: "The Nottingham Podcast Studio That Edits While You Record",
    description: "Live editing is the single biggest competitive advantage in podcast production.",
    type: "article",
    publishedTime: "2024-03-29T00:00:00Z",
    authors: ["StreamToday Studios"],
    tags: ["live editing", "podcast production", "Nottingham", "Studio One"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Nottingham Podcast Studio That Edits While You Record",
    description: "Walk out with finished content. No editing queue. No revision cycles.",
  },
};

const tableOfContents = [
  { id: "nightmare", title: "The Traditional Podcast Production Nightmare" },
  { id: "revolution", title: "The Live Editing Revolution" },
  { id: "advantage", title: "Why Live Editing Changes Everything" },
  { id: "scarcity", title: "Why Almost Nobody Else Does This" },
  { id: "nottingham", title: "The Nottingham Advantage" },
  { id: "conclusion", title: "The Bottom Line" },
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
          <span className="text-white">Production</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              Production
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2024-03-29">March 29, 2024</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>StreamToday Studios</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Nottingham Podcast Studio That Edits While You Record (Yes, Really)
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 italic leading-relaxed max-w-3xl">
            Or: how I learned to stop worrying and love the live edit
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src="/images/blog-switcher-hero.png"
            alt="High-tech video switcher in a podcast control room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm text-gray-300">
              Walk out with finished content. No editing queue. No revision cycles.
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
            Let me tell you about the most magical phrase in podcasting. It's not "we'd like to sponsor your show." It's not "you've gone viral." It's not even "your download numbers are incredible."
          </p>

          <p className="mb-6">
            It's this: "That's a wrap. Your content is ready."
          </p>

          <p className="mb-8">
            Not "that's a wrap, now spend six hours editing." Not "that's a wrap, I'll send you the files tomorrow." Just: done. Finished. Walk out with publish-ready content.
          </p>

          <p className="mb-6">
            This is what live editing means. And it's the single biggest competitive advantage in podcast production today. Which is convenient, because it's also the thing that almost nobody else is doing.
          </p>

          <h2 id="nightmare" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Traditional Podcast Production Nightmare
          </h2>

          <p className="mb-6">
            Here's how podcast production normally works:
          </p>

          <p className="mb-6">
            <strong className="text-white">Step 1: Recording (2 hours)</strong><br />
            You show up at the studio. You record your episode. The engineer gives you a thumbs up. You feel good about life.
          </p>

          <p className="mb-6">
            <strong className="text-white">Step 2: The Waiting (24-72 hours)</strong><br />
            The studio sends your files to an editor. The editor puts you in their queue. You wait. Maybe you get a rough cut in 24 hours. Maybe it takes three days.
          </p>

          <p className="mb-6">
            <strong className="text-white">Step 3: The Revision Cycle (2-5 days)</strong><br />
            You get the edit back. It's... fine. But they cut that story you really liked. And there's a weird noise at 23:47 that nobody noticed. You send feedback. You wait again.
          </p>

          <p className="mb-6">
            <strong className="text-white">Step 4: The Final Polish (1-2 days)</strong><br />
            You approve the edit. Now it needs mixing and mastering. Another day passes.
          </p>

          <p className="mb-8">
            <strong className="text-white">Step 5: Publication (Finally)</strong><br />
            Your episode goes live a week after you recorded it.
          </p>

          <div className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-800">
            <p className="text-white font-semibold mb-2">The Cost of Traditional Production:</p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>Total time from recording to publication: 5-10 days</li>
              <li>Total mental overhead: Significant</li>
              <li>Total enthusiasm remaining: DEAD!</li>
            </ul>
          </div>

          <h2 id="revolution" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Live Editing Revolution
          </h2>

          <p className="mb-6">
            Now let me tell you how it works with live editing:
          </p>

          <p className="mb-6">
            <strong className="text-white">Step 1: Recording (2 hours)</strong><br />
            You show up at the studio. While you're recording, the engineer is mixing the audio in real-time, balancing levels, applying EQ and compression. Multiple cameras are capturing different angles. The engineer is switching between camera feeds live.
          </p>

          <p className="mb-6">
            <strong className="text-white">Step 2: The Live Edit (Happens during Step 1)</strong><br />
            While you're recording, the engineer is also editing. They're cutting out the false starts, the "ums" and "ahs." By the time you finish recording, the edit is already 80% done.
          </p>

          <p className="mb-6">
            <strong className="text-white">Step 3: The Final Polish (30 minutes)</strong><br />
            You take a break. You have a coffee. The engineer does a final pass.
          </p>

          <p className="mb-8">
            <strong className="text-white">Step 4: Walk Out With Content (Immediate)</strong><br />
            You leave the studio with finished files. Audio podcast: ready to upload. Video podcast: ready to publish.
          </p>

          <div className="bg-red-950/30 rounded-xl p-6 mb-8 border border-red-800">
            <p className="text-white font-semibold mb-2">The Live Editing Advantage:</p>
            <ul className="list-none space-y-2 text-gray-300">
              <li>Total time from recording to publication: 2-3 hours</li>
              <li>Total mental overhead: Minimal</li>
              <li>Total enthusiasm remaining: High</li>
            </ul>
          </div>

          <p className="mb-8">
            This is not a marginal improvement. This is a fundamental transformation.
          </p>

          <h2 id="advantage" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Why Live Editing Changes Everything
          </h2>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">1. The Feedback Loop</h3>

          <p className="mb-6">
            When you record traditionally, you don't hear the final mix until days later. By then, you've forgotten the context. You can't remember why you paused at 14:23.
          </p>

          <p className="mb-6">
            With live editing, you hear the mix as it happens. You can adjust your performance in real-time. If the levels are wrong, you know immediately. You're not guessing whether something worked - you're hearing it work.
          </p>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">2. The Energy Preservation</h3>

          <p className="mb-6">
            Podcasting is energy-intensive. Traditional production then requires you to revisit that same energy days later, when you're in a completely different mental state.
          </p>

          <p className="mb-6">
            Live editing preserves your creative energy. You record, you review, you approve, you move on. The mental load of production doesn't hang over you for days.
          </p>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">3. The Iteration Speed</h3>

          <p className="mb-6">
            Here's something they don't tell you about successful podcasts: they're iterative. The first 10 episodes are experiments. You need to be able to try things, evaluate them, and adjust quickly.
          </p>

          <p className="mb-6">
            Traditional production makes iteration painful. Your learning cycle is measured in weeks.<br />
            Live editing compresses that cycle to hours. You can evolve your format week by week instead of month by month.
          </p>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">4. The Content Multiplication</h3>

          <p className="mb-6">
            Remember the content stack? One recording session that produces multiple pieces of content?
          </p>

          <p className="mb-6">
            While you're recording, the engineer can be:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-300">
            <li>Switching between camera angles for the main video</li>
            <li>Marking timestamps for social media clips</li>
            <li>Capturing B-roll of the recording process</li>
            <li>Creating real-time audiograms</li>
          </ul>

          <p className="mb-8">
            By the time you finish recording, you don't just have a podcast episode. You have the full video podcast, 3-5 short-form clips, 5-10 audiograms, and behind-the-scenes content.
          </p>

          <h2 id="scarcity" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Why Almost Nobody Else Does This
          </h2>

          <p className="mb-6">
            If live editing is so great, why doesn't every studio offer it? Three reasons:
          </p>

          <p className="mb-6">
            <strong className="text-white">1. It requires expensive equipment.</strong> A live editing setup needs professional audio mixers, video switchers, multi-track recorders. This is £30,000+ of equipment, minimum.
          </p>

          <p className="mb-6">
            <strong className="text-white">2. It requires skilled engineers...</strong> (content continues)
          </p>

          <h2 id="nottingham" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Nottingham Advantage
          </h2>

          <p className="mb-6">
            Here's the thing about Nottingham: it's underserved. London has dozens of podcast studios, most offering traditional post-production. Manchester has several. Birmingham has a few.
          </p>

          <p className="mb-8">
            Nottingham has... almost nothing. There's us, and there's a handful of music studios that don't understand podcasting. The market is wide open.
          </p>

          <h2 id="conclusion" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Bottom Line
          </h2>

          <p className="mb-8">
            Live editing is the future of podcast production. It's faster, better, and more sustainable. The only reason it's not universal is that it's technically difficult and expensive to implement.
          </p>

          <p className="mb-8">
            But you don't need to implement it. You just need to find a studio that has.
          </p>
        </div>

        {/* CTA Block */}
        <div className="mt-16 p-8 bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl border border-red-800">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to experience live editing?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Book a session at StreamToday Studios. Walk in with ideas, walk out with finished content. No editing queue. No revision cycles. No waiting.
          </p>
          <a
            href="https://streamtoday.as.me/"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
          >
            Book Your Session →
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
            Last updated: <time dateTime="2024-03-29">March 29, 2024</time>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/why-i-spent-47000-on-podcast-equipment" className="group">
              <article className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-600 transition-colors">
                <span className="text-red-500 text-sm font-semibold">Equipment</span>
                <h4 className="text-xl font-bold text-white mt-2 group-hover:text-red-500 transition-colors">
                  Why I Spent £47,000 on Podcast Equipment So You Don't Have To
                </h4>
                <p className="text-gray-400 mt-2">The brutal economics of home studios vs professional hire.</p>
              </article>
            </Link>
            <Link href="/blog/how-to-start-podcast-nottingham" className="group">
              <article className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-600 transition-colors">
                <span className="text-red-500 text-sm font-semibold">Beginner Guide</span>
                <h4 className="text-xl font-bold text-white mt-2 group-hover:text-red-500 transition-colors">
                  How to Start a Podcast in Nottingham
                </h4>
                <p className="text-gray-400 mt-2">The complete 2024 guide from zero to published.</p>
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
            "headline": "The Nottingham Podcast Studio That Edits While You Record",
            "description": "Live editing is the single biggest competitive advantage in podcast production.",
            "image": "https://streamtoday.co.uk/images/studio-hero-2.jpg",
            "datePublished": "2024-03-29T00:00:00Z",
            "dateModified": "2024-03-29T00:00:00Z",
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
              "@id": "https://streamtoday.co.uk/blog/nottingham-podcast-studio-live-editing"
            }
          })
        }}
      />
    </main>
  );
}
