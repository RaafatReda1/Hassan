import { siteConfig } from "@/lib/config/site";
import type { Article } from "@/types/article";

export function generateArticleSchema(article: Article) {
  const url = `${siteConfig.url}/articles/${article.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: article.seo_title || article.title,
    description: article.seo_description || article.content.slice(0, 160),
    image: [article.imgs_url.cover],
    datePublished: article.created_at,
    dateModified: article.is_edited?.updated_at || article.created_at,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
    },
  };
}
