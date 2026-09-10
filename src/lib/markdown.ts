import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "Untitled";
}

function extractExcerpt(content: string): string {
  const lines = content.split("\n").filter((l) => l.trim() && !l.startsWith("#") && !l.startsWith("*"));
  const text = lines.slice(0, 3).join(" ").trim();
  return text.length > 200 ? text.slice(0, 200) + "..." : text;
}

function estimateReadTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);

  return {
    slug,
    title: data.title || extractTitle(content),
    excerpt: data.excerpt || extractExcerpt(content),
    date: data.date || "2024-03-29",
    category: data.category || "Production",
    readTime: data.readTime || estimateReadTime(content),
    content: processed.toString(),
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md") && f !== "SUMMARY.md")
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts.filter((p): p is Post => p !== null).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
