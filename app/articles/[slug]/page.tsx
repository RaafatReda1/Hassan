import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticleBySlug, getRelatedArticles, getPublishedArticles } from "@/lib/data/articles";
import { generateArticleSchema } from "@/lib/seo/schemas/article";
import { getArticleMetadata } from "@/lib/seo/article-metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleView } from "@/components/article/article-view/ArticleView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getPublishedArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return getArticleMetadata(slug);
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const related = await getRelatedArticles(article.cat_id, article.id);

  return (
    <>
      <JsonLd data={generateArticleSchema(article)} />
      <ArticleView article={article} related={related} />
    </>
  );
}
