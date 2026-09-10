import { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/markdown";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://streamtoday.co.uk";

  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/pricing",
    "/contact",
    "/book",
    "/resources",
    "/blog",
    "/privacy",
    "/terms",
    "/healthcare",
    "/law-firms",
    "/life-sciences",
    "/professional-services",
    "/recruitment-agencies",
    "/tech-saas",
  ];

  const blogSlugs = getAllPostSlugs();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "/blog" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "/" ? 1.0 : route === "/book" ? 0.9 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
