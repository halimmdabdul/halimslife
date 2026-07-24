import type { MetadataRoute } from "next";

const baseUrl = "https://halimslife.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/journey", "/projects", "/insights", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
