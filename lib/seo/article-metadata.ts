import type { Metadata } from "next";
import { getArticleBySlug } from "@/lib/data/articles";
import { buildMetadata } from "./metadata";

export async function getArticleMetadata(slug: string): Promise<Metadata> {
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found", robots: { index: false } };
  }

  return buildMetadata({
    title: article.seo_title || article.title,
    description: article.seo_description || article.content.slice(0, 160),
    slug: `articles/${slug}`,
    image: article.imgs_url.cover,
    type: "article",
    publishedTime: article.created_at,
    modifiedTime: article.is_edited?.updated_at,
    noIndex: !article.is_published,
  });
}
