import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { getPublishedArticles } from "@/lib/data/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getPublishedArticles();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "daily", priority: 1.0 },
    { url: `${siteConfig.url}/profile`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/clan`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/news`, changeFrequency: "daily", priority: 0.8 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((art) => ({
    url: `${siteConfig.url}/articles/${art.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
