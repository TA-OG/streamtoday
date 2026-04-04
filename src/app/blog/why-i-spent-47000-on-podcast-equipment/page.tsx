import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Share2, Bookmark, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Why I Spent £47,000 on Podcast Equipment So You Don't Have To | StreamTODAY Studios",
  description: "The brutal economics of home studios vs professional hire. Learn from my £47,000 mistake and discover why hiring a studio is cheaper than building one.",
  openGraph: {
    title: "Why I Spent £47,000 on Podcast Equipment So You Don't Have To",
    description: "The brutal economics of home studios vs professional hire. Learn from my £47,000 mistake.",
    type: "article",
    publishedTime: "2024-03-29T00:00:00Z",
    authors: ["StreamToday Studios"],
    tags: ["podcast equipment", "studio hire", "Nottingham", "podcasting"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why I Spent £47,000 on Podcast Equipment So You Don't Have To",
    description: "The brutal economics of home studios vs professional hire.",
  },
};

const tableOfContents = [
  { id: "phase-one", title: "Phase One: The Beginner's Delusion" },
  { id: "phase-two", title: "Phase Two: The Intermediate Trap" },
  { id: "phase-three", title: "Phase Three: The Professional Delusion" },
  { id: "phase-four", title: "Phase Four: The Realisation" },
  { id: "mathematics", title: "The Mathematics of Sanity" },
  { id: "opportunity-cost", title: "The Opportunity Cost" },
  { id: "psychology", title: "The Psychology of Control" },
  { id: "conclusion", title: "What I Learned" },
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
            Why I Spent £47,000 on Podcast Equipment So You Don't Have To
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 italic leading-relaxed max-w-3xl">
            The economics of home studios vs professional hire, or: how I learned to stop worrying and love the studio
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=2066&auto=format&fit=crop"
            alt="Close-up of professional podcast microphone"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm text-gray-300">
              The most expensive podcast studio is the one you build yourself and never use.
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
            Here's an interesting fact: the average person who decides to "seriously get into podcasting" will spend between £3,000 and £15,000 on equipment before they record their tenth episode. About 60% of them will have given up by then. The remaining 40% will eventually book a professional studio anyway.
          </p>

          <p className="mb-6">
            I know this because I was one of them. Well, worse actually. I spent £47,000.
          </p>

          <p className="mb-8">
            Let me tell you about it. Not because I'm proud of it, but because you can learn from my mistakes without having to make them yourself. Which, when you think about it, is the entire value proposition of hiring a studio instead of building one.
          </p>

          <h2 id="phase-one" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Phase One: The Beginner's Delusion (£800)
          </h2>

          <p className="mb-6">
            It started innocently enough. A Blue Yeti microphone (£120). A pop filter (£15). Some foam panels from Amazon that promised to "transform any room into a professional studio" (£45). A boom arm (£65). Cables, adapters, a USB hub (£55). A subscription to Adobe Audition (£50/month, though I only used it for three months before realising I had no idea what any of the buttons did).
          </p>

          <p className="mb-6">
            <strong className="text-white">Total: roughly £800.</strong>
          </p>

          <p className="mb-6">
            The result? I sounded like I was broadcasting from a well-appointed cupboard. Which, to be fair, I was. The foam panels turned out to be more decorative than functional. The Blue Yeti picked up everything: the neighbour's dog, the radiator clicking, my own heartbeat if I held my breath. I spent more time editing out unwanted noise than actually recording content.
          </p>

          <p className="mb-8">
            But here's the thing about the beginner's delusion: you don't realise you're in it. You assume the problem is technique, not environment. So you move to Phase Two.
          </p>

          <h2 id="phase-two" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Phase Two: The Intermediate Trap (£4,200)
          </h2>

          <p className="mb-6">
            If some equipment is good, more equipment must be better. This is the logic that separates fools from their money, and I was nothing if not logical.
          </p>

          <p className="mb-6">
            A Shure SM7B (£350). A Cloudlifter (£150) because someone on a forum said I needed one. A Focusrite Scarlett 2i2 (£150). Proper acoustic panels, this time from a specialist supplier (£400). A desk stand (£120). A better chair (£200). LED lighting because video was "the next step" (£300). A Sony A6400 camera (£800). A Sigma lens (£400). An Elgato Cam Link (£120). An SD card that was somehow £85.
          </p>

          <p className="mb-6">
            And then the software. Oh, the software. Riverside.fm subscription (£30/month). Descript (£25/month). Canva Pro (£12/month). Notion (£8/month) to "organise my content strategy." A domain name and hosting for a website I never finished (£200/year).
          </p>

          <p className="mb-6">
            <strong className="text-white">Total Phase Two spend: roughly £4,200, plus about £75/month in subscriptions.</strong>
          </p>

          <p className="mb-8">
            The result? I sounded... slightly less like I was in a cupboard. The Shure was undeniably better than the Blue Yeti. The acoustic panels helped, though not as much as I'd hoped because it turns out treating a room properly requires understanding things like "room modes" and "bass traps" and "reflection points." I did not understand these things. I had watched approximately 47 YouTube videos, each of which contradicted the previous one.
          </p>

          <h2 id="phase-three" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Phase Three: The Professional Delusion (£12,500)
          </h2>

          <p className="mb-6">
            This is where it gets embarrassing. I became convinced that the problem wasn't the environment or my lack of technical knowledge, but the equipment itself. I needed <em>professional</em> equipment. The kind real podcasters use.
          </p>

          <p className="mb-6">
            A Neumann U87 Ai microphone (£2,400). Yes, really. A UA Apollo Twin X interface (£900). A fully treated vocal booth (£3,500). A Sony A7S III camera (£3,200). A G Master lens (£1,800). An Atomos Ninja V monitor/recorder (£600). Proper studio lighting: two Aputure 300d IIs with softboxes (£1,400 total). C-stands, sandbags, cables, storage cases (£700).
          </p>

          <p className="mb-6">
            <strong className="text-white">Total Phase Three spend: roughly £12,500.</strong>
          </p>

          <p className="mb-6">
            The result? I sounded absolutely incredible. When I spoke, it was like God Himself was whispering directly into your ear. The video looked cinematic. The lighting was flawless.
          </p>

          <p className="mb-6 text-2xl font-bold text-red-500">
            I recorded two episodes in this setup.
          </p>

          <p className="mb-6">
            <strong>Two.</strong>
          </p>

          <p className="mb-8">
            Because here's what nobody tells you about professional equipment: it requires professional knowledge to operate. The Neumann U87 is a phenomenal microphone, but it's also incredibly sensitive. It picks up the electrical hum of your refrigerator three rooms away.
          </p>

          <h2 id="phase-four" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Phase Four: The Realisation (£26,300 and counting)
          </h2>

          <p className="mb-6">
            At this point, I had spent approximately £20,900 on equipment. I had recorded eight episodes total. I had not published any of them because I was never quite happy with the edit.
          </p>

          <p className="mb-6">
            And then I discovered something that should have been obvious from the start: I don't enjoy technical production. I enjoy having ideas. I enjoy talking to interesting people. I enjoy building an audience. I do not enjoy reading audio engineering manuals at 2 AM.
          </p>

          <p className="mb-6">
            So I did what I should have done two years and £20,000 earlier: I booked a professional studio.
          </p>

          <p className="mb-6">
            It was £299 for a two-hour session. They had better equipment than I did. They had a proper acoustic environment. They had an engineer who actually knew what all the buttons did.
          </p>

          <p className="mb-6">
            Most importantly: they had live editing.
          </p>

          <p className="mb-6">
            I walked out of that session with finished content. Not raw files that needed 10 hours of post-production. Finished, publish-ready content.
          </p>

          <p className="mb-8 text-xl">
            <strong className="text-white">Two hours. £299.</strong> Versus my home setup: 10-12 hours. £20,900 plus ongoing software subscriptions.
          </p>

          <h2 id="mathematics" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Mathematics of Sanity
          </h2>

          <p className="mb-6">
            Let me break this down for you, because the economics are genuinely startling.
          </p>

          <div className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-white">The Home Studio Route (Realistic Version)</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Initial equipment spend: £3,000 - £8,000</li>
              <li>Monthly software subscriptions: £50 - £150</li>
              <li>Time per episode (recording + editing): 6-10 hours</li>
              <li>Learning curve: 6-18 months to proficiency</li>
              <li>Success rate: Approximately 40% (most people give up)</li>
            </ul>
          </div>

          <div className="bg-red-950/30 rounded-xl p-6 mb-8 border border-red-800">
            <h3 className="text-xl font-semibold mb-4 text-white">The Professional Studio Route</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Per-session cost: £200 - £400</li>
              <li>Time per episode: 2 hours (including editing)</li>
              <li>Learning curve: Zero</li>
              <li>Success rate: Limited only by your content quality</li>
            </ul>
          </div>

          <p className="mb-8">
            Here's the break-even analysis: If you record weekly, a professional studio costs roughly £1,200 - £1,600 per month. A home studio costs £3,000 - £8,000 upfront, plus 24-40 hours of your time per month. If your time is worth £50/hour, the home setup actually costs more.
          </p>

          <h2 id="opportunity-cost" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Opportunity Cost Nobody Talks About
          </h2>

          <p className="mb-6">
            There's a concept in economics called "opportunity cost" - the value of what you give up when you choose one option over another. When you choose to spend 10 hours editing an episode, you're not just spending time. You're spending the opportunity to do something else with that time.
          </p>

          <p className="mb-6">What could you do with 10 hours?</p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-300">
            <li>Record five more episodes</li>
            <li>Pitch 20 potential sponsors</li>
            <li>Write a month's worth of social media content</li>
            <li>Build relationships with 10 potential guests</li>
          </ul>

          <h2 id="psychology" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            The Psychology of Control
          </h2>

          <p className="mb-6">
            So why do we do it? Why do intelligent people spend thousands of pounds and hundreds of hours on home studios when the professional alternative is clearly superior?
          </p>

          <p className="mb-6">
            I think it's about control. There's something deeply appealing about owning the means of production. About being able to record "whenever inspiration strikes." About not being dependent on anyone else.
          </p>

          <p className="mb-8">
            The problem is that this sense of control is largely illusory. You might own the equipment, but you don't own the expertise. Real control is having content that gets published consistently. Real control is walking out of a recording session with finished content instead of a hard drive full of problems to solve.
          </p>

          <h2 id="conclusion" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            What I Learned (So You Don't Have To)
          </h2>



          <p className="mb-6">
            If you're serious about podcasting, here's my recommendation:
          </p>

          <ol className="list-decimal list-inside space-y-4 mb-8 text-gray-300">
            <li><strong className="text-white">Book a professional studio for your first 10 episodes.</strong> This will cost you £2,000 - £4,000. It will also give you 10 episodes of professionally produced content.</li>
            <li><strong className="text-white">Use the time you save to focus on content strategy.</strong> While you're not editing audio, figure out who your audience is.</li>
            <li><strong className="text-white">Build your audience before you build your studio.</strong> If you reach 50 episodes and you're still passionate, then consider a home setup.</li>
          </ol>

          <p className="mb-8">
            Or, you know, just keep booking the professional studio. That's what I do now. And I'm happier, more productive, and producing better content than I ever did in my £47,000 setup.
          </p>
        </div>

        {/* CTA Block */}
        <div className="mt-16 p-8 bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl border border-red-800">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to skip the £47,000 learning curve?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Book a session at StreamToday Studios. We have the equipment, the space, and the expertise. You just need to show up with your ideas. Walk out with finished content.
          </p>
          <a
            href="https://streamtoday.as.me/schedule/b2a579b5"
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
            <Link href="/blog/nottingham-podcast-studio-live-editing" className="group">
              <article className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-red-600 transition-colors">
                <span className="text-red-500 text-sm font-semibold">Production</span>
                <h4 className="text-xl font-bold text-white mt-2 group-hover:text-red-500 transition-colors">
                  The Nottingham Podcast Studio That Edits While You Record
                </h4>
                <p className="text-gray-400 mt-2">Experience live editing and walk out with finished content.</p>
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
            "headline": "Why I Spent £47,000 on Podcast Equipment So You Don't Have To",
            "description": "The brutal economics of home studios vs professional hire. Learn from my £47,000 mistake.",
            "image": "https://streamtoday.co.uk/images/studio-hero-1.jpg",
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
              "@id": "https://streamtoday.co.uk/blog/why-i-spent-47000-on-podcast-equipment"
            }
          })
        }}
      />
    </main>
  );
}
