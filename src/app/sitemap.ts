import type { MetadataRoute } from "next";

import { getPublishedPosts } from "@/lib/blog";
import { scholarshipGuides } from "@/lib/scholarships";

const baseUrl = "https://halimslife.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/about",
    "/cv",
    "/journey",
    "/projects",
    "/academy",
    "/academy/japanese-n5",
    "/projects/minna-no-nihongo-n5",
    "/scholarships",
    "/insights",
    "/contact",
    "/blog",
  ];
  const posts = await getPublishedPosts();

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === "" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.published_at),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...scholarshipGuides.map((guide) => ({
      url: `${baseUrl}/scholarships/${guide.slug}`,
      lastModified: new Date(guide.reviewedOn ?? "2026-07-29"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
