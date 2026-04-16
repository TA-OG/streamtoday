import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Share2, Bookmark, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Microphone Myth: Why Your £500 Mic Sounds Like a £50 Mic | StreamTODAY Studios",
  description: "The uncomfortable truth about audio equipment that nobody on YouTube will tell you. Why expensive microphones in bad rooms sound worse than cheap mics in good rooms.",
  openGraph: {
    title: "The Microphone Myth: Why Your £500 Mic Sounds Like a £50 Mic",
    description: "The uncomfortable truth about audio equipment that nobody on YouTube will tell you.",
    type: "article",
    publishedTime: "2026-04-16T00:00:00Z",
    authors: ["StreamToday Studios"],
    tags: ["podcast equipment", "microphone", "audio quality", "studio vs home"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Microphone Myth: Why Your £500 Mic Sounds Like a £50 Mic",
    description: "The uncomfortable truth about audio equipment that nobody on YouTube will tell you.",
  },
};

const tableOfContents = [
  { id: "myth", title: "The Myth" },
  { id: "experiment", title: "The Experiment" },
  { id: "lesson", title: "The £700 Lesson" },
  { id: "truth", title: "The Truth About Sound" },
  { id: "solution", title: "The Solution" },
  { id: "economics", title: "The Economics" },
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
          <span className="text-white">Equipment</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              Equipment
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-04-16">April 16, 2026</time>
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
            The Microphone Myth: Why Your £500 Mic Sounds Like a £50 Mic
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 italic leading-relaxed max-w-3xl">
            The uncomfortable truth about audio equipment that nobody on YouTube will tell you.
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src="/images/studio-hero-1.jpg"
            alt="Professional microphone in acoustically treated studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm text-gray-300">
              Why expensive gear in bad rooms sounds worse than cheap gear in good rooms.
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
            I want to tell you about the most expensive mistake in podcasting. It is not buying cheap equipment. It is buying expensive equipment and using it badly.
          </p>

          <h2 id="myth" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Myth
          </h2>

          <p className="mb-6">
            Here is a fun experiment. Take a £500 microphone, any of the popular ones the YouTube reviewers rave about. Record yourself in your kitchen. Now take a £50 USB microphone and record yourself in a professional vocal booth. Play both recordings to someone who is not an audio engineer. Ask them which cost more.
          </p>

          <p className="mb-8">
            They will pick the £50 mic every time. I have done this test at least twenty times. It has never failed.
          </p>

          <p className="mb-6">
            The microphone industry has done something remarkable. They have convinced us that sound quality lives inside the microphone, like some kind of audio genie waiting to be released. Spend more money, get more genie. This is nonsense.
          </p>

          <p className="mb-8">
            Sound quality lives in the room. The microphone is just the messenger. And if the room is bad, the microphone will faithfully, expensively, deliver that badness straight to your listener's ears.
          </p>

          <h2 id="experiment" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Experiment
          </h2>

          <p className="mb-6">
            I learned this the expensive way, because of course I did. I bought a Shure SM7B after watching approximately 900 YouTube videos telling me it was the "industry standard." I spent £350 on the mic, then another £150 on a Cloudlifter because everyone said I needed one, then £200 on a boom arm heavy enough to support the thing. I was £700 deep before I recorded a single word.
          </p>

          <p className="mb-8">
            The result? I sounded like I was broadcasting from a very expensive cupboard. Which, to be fair, I was.
          </p>

          <h2 id="lesson" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The £700 Lesson
          </h2>

          <p className="mb-6">
            The SM7B is a brilliant microphone. In a treated room, it is magic. But in my spare bedroom with bare walls and a wooden floor, it was just a very sensitive device for capturing room echo and the distant hum of my neighbour's washing machine. I had spent £700 to discover that my room sounded bad in high definition.
          </p>

          <p className="mb-8">
            This is the myth. We believe that expensive equipment solves problems. It does not. It reveals them. A cheap microphone in a bad room sounds muddy and amateur. An expensive microphone in a bad room sounds muddy and amateur, but you can hear exactly how muddy and amateur in exquisite detail. The problem was never the microphone. The problem was always the room.
          </p>

          <h2 id="truth" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Truth About Sound
          </h2>

          <p className="mb-6">
            Professional studios understand this. They do not spend £50,000 on microphones. They spend £50,000 on acoustic treatment, isolation, and ventilation systems that keep the room silent. The microphone is almost an afterthought. Any decent large-diaphragm condenser will sound incredible in a properly treated space. The same microphone will sound terrible in your living room, no matter how much it cost.
          </p>

          <p className="mb-8">
            The room is the instrument. The microphone is just the pickup.
          </p>

          <h2 id="solution" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Solution
          </h2>

          <p className="mb-6">
            So what is the solution? If you are recording at home, you have two options.
          </p>

          <p className="mb-6">
            <strong className="text-white">Option 1:</strong> You can spend £5,000 treating your room properly, which means bass traps, reflection panels, understanding room modes, and probably some structural work.
          </p>

          <p className="mb-6">
            <strong className="text-white">Option 2:</strong> You can spend £200 booking a professional studio that has already done all of that.
          </p>

          <p className="mb-8">
            The economics are not even close. The treated room option requires space you probably do not have, knowledge you definitely do not have, and money you should not spend. The studio option requires two hours and a taxi ride. You walk in, you record, you walk out with audio that sounds like it cost £5,000 to produce. Because it did. You just did not pay for it.
          </p>

          <h2 id="economics" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Economics
          </h2>

          <p className="mb-6">
            I sold my SM7B eventually. Got about £200 for it, which felt like a fitting end to the lesson. The person who bought it probably has a treated room, or thinks they need an even more expensive microphone to fix their problems. I hope it is the former. I suspect it is the latter.
          </p>

          <p className="mb-6">
            The microphone myth persists because it is comforting. It tells us that quality is something you can buy, something that lives in a box with a warranty. The truth is messier. Quality lives in the space between you and the microphone. It lives in silence, in treatment, in understanding how sound actually works.
          </p>

          <p className="mb-8">
            You cannot buy that understanding. You can only rent it, two hours at a time, from people who have already learned these lessons the hard way.
          </p>

          <p className="mb-8">
            Save your £500. Book the studio. Your listeners will thank you, and so will your bank balance.
          </p>
        </div>

        {/* CTA Block */}
        <div className="mt-16 p-8 bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl border border-red-800">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stop Buying Gear. Start Recording.
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            At StreamToday Studios, we've already invested in the room so you don't have to. Professional acoustics, quality microphones, and live editing — all included. Walk out with publish-ready audio in two hours.
          </p>
          <a
            href="https://streamtoday.as.me/schedule/b2a579b5"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
          >
            Book a Session →
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
            Last updated: <time dateTime="2026-04-16">April 16, 2026</time>
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
            <Link href="/blog/why-i-spent-47000-on-podcast-equipment" className="group">
              <article className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-600 transition-colors">
                <span className="text-red-500 text-sm font-semibold">Equipment</span>
                <h4 className="text-xl font-bold text-white mt-2 group-hover:text-red-500 transition-colors">
                  Why I Spent £47,000 on Podcast Equipment So You Don't Have To
                </h4>
                <p className="text-gray-400 mt-2">The brutal economics of home studios vs professional hire.</p>
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
            "headline": "The Microphone Myth: Why Your £500 Mic Sounds Like a £50 Mic",
            "description": "The uncomfortable truth about audio equipment that nobody on YouTube will tell you.",
            "image": "https://streamtoday.co.uk/images/studio-hero-1.jpg",
            "datePublished": "2026-04-16T00:00:00Z",
            "dateModified": "2026-04-16T00:00:00Z",
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
              "@id": "https://streamtoday.co.uk/blog/the-microphone-myth-why-expensive-gear-wont-save-you"
            }
          })
        }}
      />
    </main>
  );
}
