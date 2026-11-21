import type { Article } from "@/types/article";
import { mockArticles } from "./mock-articles";

export async function getPublishedArticles(): Promise<Article[]> {
  return mockArticles.filter((art) => art.is_published && art.status === "published");
}

export async function getFeaturedArticles(): Promise<Article[]> {
  return mockArticles.filter((art) => art.is_published).slice(0, 3);
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return mockArticles.find((art) => art.slug === slug);
}

export async function getRelatedArticles(catId: number, currentId: number): Promise<Article[]> {
  return mockArticles
    .filter((art) => art.cat_id === catId && art.id !== currentId && art.is_published)
    .slice(0, 2);
}
