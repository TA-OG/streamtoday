import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Start a Podcast in Nottingham: Complete 2024 Guide | StreamTODAY Studios",
  description: "Everything you need to know to start a podcast in Nottingham, from equipment anxiety to your first 1,000 downloads. A practical, step-by-step guide.",
  openGraph: {
    title: "How to Start a Podcast in Nottingham",
    description: "Everything you need to know from equipment anxiety to your first 1,000 downloads.",
    type: "article",
    publishedTime: "2024-03-29T00:00:00Z",
    authors: ["StreamToday Studios"],
    tags: ["beginner guide", "Nottingham", "podcasting 2026", "start a podcast"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start a Podcast in Nottingham",
    description: "The complete 2026 guide from zero to published.",
  },
};

const tableOfContents = [
  { id: "foundation", title: "Phase 1: The Foundation" },
  { id: "equipment", title: "Phase 2: Equipment & Environment" },
  { id: "format", title: "Phase 3: Format & Recording" },
  { id: "publishing", title: "Phase 4: Publishing & Growth" },
  { id: "local", title: "The Nottingham Advantage" },
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
          <span className="text-white">Beginner Guide</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              Beginner Guide
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2024-03-29">March 29, 2024</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>17 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>StreamToday Studios</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            How to Start a Podcast in Nottingham: The Complete 2024 Guide
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 italic leading-relaxed max-w-3xl">
            Everything you need to know, from equipment anxiety to your first 1,000 downloads
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] mb-12 rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src="/images/blog-nottingham-hero.png"
            alt="Podcast microphone silhouetted against the Nottingham Lace Market"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-sm text-gray-300">
              Start your Nottingham podcasting journey with professional guidance.
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

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="lead text-xl text-gray-300 leading-relaxed mb-8">
            So you want to start a podcast in Nottingham. Congratulations. You've chosen a medium that's growing, engaging, and (contrary to popular belief) not actually that difficult to break into. You've also chosen a city that's perfectly positioned for podcasting success: big enough to have stories worth telling, small enough that you can actually get access to the people telling them.
          </p>

          <p className="mb-6">
            This guide will take you from zero to published podcast. Not in the vague "follow your dreams" sense, but in the practical "do these specific things in this specific order" sense. By the end, you'll have a podcast that exists, sounds professional, and has a plausible path to finding an audience.
          </p>

          <h2 id="foundation" className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6">
            Phase 1: The Foundation (Before You Spend Any Money)
          </h2>

          <h3 className="text-2xl font-bold text-white mt-10 mb-4">Step 1: Define Your Podcast (The Most Important Step)</h3>

          <p className="mb-6">
            Most podcast failures happen before recording starts. They happen because the podcaster never answered three fundamental questions:
          </p>

          <p>
            This guide will take you from zero to published podcast. Not in the vague "follow your dreams" sense, but in the practical "do these specific things in this specific order" sense. By the end, you'll have a podcast that exists, sounds professional, and has a plausible path to finding an audience.
          </p>

          <h2>Phase 1: The Foundation (Before You Spend Any Money)</h2>

          <h3>Step 1: Define Your Podcast (The Most Important Step)</h3>

          <p>
            Most podcast failures happen before recording starts. They happen because the podcaster never answered three fundamental questions:
          </p>

          <p>
            <strong>Who is this for?</strong><br />
            Not "everyone interested in [topic]." That's not an audience, that's a wish. Be specific: "Marketing managers at Nottingham SMEs who want practical growth strategies they can implement this week." Or: "People who moved to Nottingham in their 30s and want to feel connected to the city."
          </p>

          <p>
            <strong>What transformation are you offering?</strong><br />
            Every successful podcast promises a transformation. The listener starts in one state (uninformed, unmotivated, disconnected) and ends in another (informed, inspired, connected).
          </p>

          <p>
            <strong>Why you?</strong><br />
            There are 4 million podcasts in the world. Why should anyone listen to yours? What unique perspective, access, or expertise do you bring?
          </p>

          <h3>Step 2: Choose Your Format</h3>

          <p>
            There are four main podcast formats:
          </p>

          <p>
            <strong>Solo Shows:</strong> You talking directly to the audience. Complete control, easy to schedule, establishes your expertise. Best for experts sharing knowledge.
          </p>

          <p>
            <strong>Interview Shows:</strong> You interviewing guests. Built-in audience expansion (guests share), easier to create. Best for building authority and network.
          </p>

          <p>
            <strong>Co-hosted Shows:</strong> You and a regular co-host. Natural chemistry, shared workload. Best for conversational topics and comedy.
          </p>

          <p>
            <strong>Narrative/Documentary:</strong> Storytelling with multiple voices. Highly engaging but extremely time-intensive.
          </p>

          <p>
            For your first podcast, I recommend either solo or interview format. They're the most sustainable.
          </p>

          <h3>Step 3: Plan Your First 10 Episodes</h3>

          <p>
            Before you record anything, plan your first 10 episodes. Not in vague terms - actual titles and descriptions. This proves you have enough to say and gives you momentum.
          </p>

          <h2>Phase 2: The Technical Setup (Without Breaking the Bank)</h2>

          <h3>Option A: The Professional Studio Route (Recommended)</h3>

          <p>
            Here's an interesting fact: the cost difference between a basic home setup and professional studio hire is smaller than you think.
          </p>

          <p>
            <strong>Basic home setup:</strong>
          </p>
          <ul>
            <li>Microphone: £100-200</li>
            <li>Headphones: £50-100</li>
            <li>Recording software: £0-50/month</li>
            <li>Acoustic treatment: £100-300</li>
            <li>Camera (for video): £400-800</li>
            <li>Lighting: £100-200</li>
            <li><strong>Total: £750-1,650 upfront + ongoing costs</strong></li>
            <li><strong>Time per episode: 6-10 hours (recording + editing)</strong></li>
          </ul>

          <p>
            <strong>Professional studio (StreamToday):</strong>
          </p>
          <ul>
            <li>Per session: £299</li>
            <li>Includes: Professional microphones, cameras, lighting, acoustic treatment, live editing</li>
            <li><strong>Time per episode: 2 hours (walk out with finished content)</strong></li>
          </ul>

          <p>
            If you record weekly, the studio costs £1,196/month. The home setup costs £750-1,650 upfront plus 24-40 hours of your time per month. If your time is worth £30/hour, the home setup actually costs more.
          </p>

          <h3>Option B: The Minimal Home Setup</h3>

          <p>
            If you genuinely want to record at home, here's the absolute minimum:
          </p>

          <ul>
            <li><strong>Microphone:</strong> Audio-Technica ATR2100x-USB (£80) or Samson Q2U (£70)</li>
            <li><strong>Headphones:</strong> Audio-Technica ATH-M20x (£45)</li>
            <li><strong>Recording Software:</strong> Audacity (free)</li>
            <li><strong>Recording Environment:</strong> Your closet (seriously, clothes absorb sound)</li>
          </ul>

          <p>
            <strong>Total cost: £125-200</strong>
          </p>

          <p>
            This setup will get you 80% of the way to professional sound. The remaining 20% comes from room treatment and expertise. Which is why, again, I recommend the professional studio route.
          </p>

          <h2>Phase 3: Recording Your First Episode</h2>

          <h3>Before You Record</h3>

          <p>
            <strong>Script or Outline?</strong> Solo episodes need either a full script or detailed outline. Interview episodes need questions and research. Don't wing it.
          </p>

          <p>
            <strong>Test Everything:</strong> Record a 2-minute test. Listen back. Check audio levels, background noise, your voice quality.
          </p>

          <h3>During Recording</h3>

          <p>
            <strong>Energy and Pace:</strong> Your recorded voice will sound 20% less energetic than it feels. If you feel like you're being slightly too enthusiastic, you're probably at the right level.
          </p>

          <p>
            <strong>Don't Stop for Mistakes:</strong> If you stumble, pause, take a breath, and restart the sentence. Don't stop recording. The pause gives you an edit point.
          </p>

          <h2>Phase 4: Editing and Production</h2>

          <h3>If You're Editing Yourself</h3>

          <p>
            <strong>Software:</strong> Audacity (free), GarageBand (free on Mac), or Adobe Audition (£20/month)
          </p>

          <p>
            <strong>Basic Workflow:</strong>
          </p>
          <ol>
            <li>Import and organise</li>
            <li>Rough cut (remove obvious mistakes)</li>
            <li>Fine cut (tighten transitions)</li>
            <li>Mix (balance levels, EQ, compression)</li>
            <li>Master (final loudness adjustment)</li>
          </ol>

          <p>
            <strong>Time Expectation:</strong> 3-4 hours editing per 1 hour of recording for beginners.
          </p>

          <h3>If You're Using a Studio with Live Editing</h3>

          <p>
            Walk out with finished content. Review it, approve it, upload it. Total time: 30 minutes post-recording.
          </p>

          <h2>Phase 5: Publishing and Distribution</h2>

          <h3>Choose a Hosting Platform</h3>

          <p>
            Your podcast needs a host - a service that stores your audio files and generates your RSS feed.
          </p>

          <ul>
            <li><strong>Buzzsprout</strong> (£10-20/month) - Easy to use, great for beginners</li>
            <li><strong>Transistor</strong> (£15-75/month) - Professional features, unlimited storage</li>
            <li><strong>Anchor</strong> (Free) - Owned by Spotify, limited features</li>
          </ul>

          <p>
            I recommend Buzzsprout for most beginners.
          </p>

          <h3>Submit to Directories</h3>

          <p>
            Once your host is set up, submit to:
          </p>
          <ol>
            <li>Apple Podcasts (biggest directory)</li>
            <li>Spotify (growing fast)</li>
            <li>Google Podcasts</li>
            <li>Amazon Music/Audible</li>
          </ol>

          <h2>Phase 6: Marketing and Growth</h2>

          <h3>The Launch Strategy</h3>

          <p>
            <strong>Pre-Launch (2-4 weeks before):</strong>
          </p>
          <ul>
            <li>Create social media accounts</li>
            <li>Post teaser content</li>
            <li>Build an email list</li>
          </ul>

          <p>
            <strong>Launch Week:</strong>
          </p>
          <ul>
            <li>Release 3 episodes on day one (gives listeners something to binge)</li>
            <li>Post on all personal social accounts</li>
            <li>Email everyone you know</li>
            <li>Ask friends to subscribe and review</li>
          </ul>

          <h3>Nottingham-Specific Marketing</h3>

          <p>
            <strong>Local Media:</strong>
          </p>
          <ul>
            <li>Nottingham Post</li>
            <li>BBC Radio Nottingham</li>
            <li>LeftLion (local culture magazine)</li>
            <li>University student media</li>
          </ul>

          <p>
            <strong>Local Events:</strong>
          </p>
          <ul>
            <li>Creative Nottingham meetups</li>
            <li>Business networking events</li>
            <li>Local conferences</li>
          </ul>

          <h2>Phase 7: Monetisation (The Long Game)</h2>

          <p>
            Don't think about monetisation for your first 10 episodes. Focus on creating great content. But know what's possible:
          </p>

          <ul>
            <li><strong>Sponsorships:</strong> Typically need 1,000+ downloads per episode</li>
            <li><strong>Affiliate Marketing:</strong> Works with smaller audiences</li>
            <li><strong>Premium Content:</strong> Bonus episodes, early access</li>
            <li><strong>Services:</strong> Consulting, coaching, speaking</li>
          </ul>

          <h2>The Calm Authority Statement</h2>

          <p>
            Starting a podcast is not complicated. It requires consistency more than genius, persistence more than equipment, and clarity more than creativity. The tools are accessible, the audience is waiting, and the barrier to entry has never been lower.
          </p>

          <p>
            The only question is whether you'll start.
          </p>
        </div>

        <div className="mt-12 p-6 border border-red-600 rounded-lg bg-red-950/20">
          <h3 className="text-xl font-bold text-white mb-2">
            Ready to start your podcast?
          </h3>
          <p className="text-gray-300 mb-4">
            Book your first recording session at StreamToday Studios. We'll handle the technical side so you can focus on your content. Walk out with a finished episode.
          </p>
          <a
            href="https://streamtoday.as.me/schedule/b2a579b5"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Book Your First Session
          </a>
        </div>
      </article>
    </main>
  );
}
