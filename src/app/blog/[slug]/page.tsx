import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/markdown";
import { Calendar, Clock, User, ChevronRight } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} | StreamTODAY Studios`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["StreamToday Studios"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{post.category}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              {post.category}
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>StreamToday Studios</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300 prose-a:text-red-500 hover:prose-a:text-red-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Block */}
        <div className="mt-16 p-8 bg-gradient-to-br from-red-900/50 to-red-950/50 rounded-2xl border border-red-800">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to create professional content?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Book a session at StreamToday Studios. Walk in with ideas, walk out with finished content.
          </p>
          <Link
            href="/book"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
          >
            Book Your Session →
          </Link>
        </div>
      </article>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: "StreamToday Studios", url: "https://streamtoday.co.uk" },
            publisher: { "@type": "Organization", name: "StreamToday Studios", logo: { "@type": "ImageObject", url: "https://streamtoday.co.uk/logo.png" } },
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://streamtoday.co.uk/blog/${post.slug}` },
          }),
        }}
      />
    </main>
  );
}
