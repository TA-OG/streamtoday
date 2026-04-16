import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | StreamTODAY Studios",
  description: "Expert podcasting advice, studio tips, and growth strategies from Nottingham's leading podcast studio.",
};

const posts = [
  {
    slug: "how-to-get-first-1000-podcast-listeners",
    title: "How to Get Your First 1,000 Podcast Listeners (Without Buying Ads)",
    excerpt: "The uncomfortable truth about podcast growth: most shows never reach 1,000 listeners. Here's the systematic approach that actually works.",
    date: "2026-04-16",
    category: "Growth",
    readTime: "16 min read",
  },
  {
    slug: "the-microphone-myth-why-expensive-gear-wont-save-you",
    title: "The Microphone Myth: Why Your £500 Mic Sounds Like a £50 Mic",
    excerpt: "The uncomfortable truth about audio equipment that nobody on YouTube will tell you. Why expensive microphones in bad rooms sound worse than cheap mics in good rooms.",
    date: "2026-04-16",
    category: "Equipment",
    readTime: "8 min read",
  },
  {
    slug: "best-podcast-studio-nottingham",
    title: "The Best Podcast Studio in Nottingham (2024 Review)",
    excerpt: "An honest review of Nottingham's podcast studios. Equipment, acoustics, pricing, and service compared. Plus why some creators travel from Leeds and Birmingham to record here.",
    date: "2026-04-09",
    category: "Local SEO",
    readTime: "12 min read",
  },
  {
    slug: "home-studio-vs-professional-studio-comparison",
    title: "Home Studio vs Professional Studio: The Real Comparison (2024)",
    excerpt: "Stop guessing. Here's the honest comparison between building a home podcast studio and hiring a professional space. Spoiler: one option costs more than you think.",
    date: "2026-04-09",
    category: "Studio vs DIY",
    readTime: "16 min read",
  },
  {
    slug: "why-i-spent-47000-on-podcast-equipment",
    title: "Why I Spent £47,000 on Podcast Equipment So You Don't Have To",
    excerpt: "The brutal economics of home studios vs professional hire, or: how I learned to stop worrying and love the studio. The most expensive podcast studio is the one you build yourself and never use.",
    date: "2024-03-29",
    category: "Equipment",
    readTime: "16 min read",
  },
  {
    slug: "nottingham-podcast-studio-live-editing",
    title: "The Nottingham Podcast Studio That Edits While You Record (Yes, Really)",
    excerpt: "The most magical phrase in podcasting: 'That's a wrap. Your content is ready.' Not 'that's a wrap, now spend six hours editing.' Just: done. Finished. Walk out with publish-ready content.",
    date: "2024-03-29",
    category: "Production",
    readTime: "16 min read",
  },
  {
    slug: "how-to-start-podcast-nottingham",
    title: "How to Start a Podcast in Nottingham: The Complete 2024 Guide",
    excerpt: "Everything you need to know, from equipment anxiety to your first 1,000 downloads. A practical, step-by-step guide for Nottingham podcasters.",
    date: "2024-03-29",
    category: "Beginner Guide",
    readTime: "17 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          StreamTODAY Blog
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Expert podcasting advice, studio tips, and growth strategies. 
          No fluff. No equipment worship. Just what works.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-800 rounded-lg p-6 hover:border-red-600 transition-colors"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="text-red-500">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-red-500 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-red-500 hover:text-red-400 font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
