import { siteConfig } from "@/lib/config/site";
import { ArticleHeader } from "@/components/article/article-header/ArticleHeader";
import { ArticleContent } from "@/components/article/article-content/ArticleContent";
import { ArticleShare } from "@/components/article/article-share/ArticleShare";
import { ArticleRelated } from "@/components/article/article-related/ArticleRelated";
import { OptimizedImage } from "@/components/ui/optimized-image/OptimizedImage";
import type { ArticleViewProps } from "./types";

export function ArticleView({ article, related }: ArticleViewProps) {
  const articleUrl = `${siteConfig.url}/articles/${article.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <ArticleHeader article={article} />
      <figure
        className="relative mb-8 aspect-[16/9] overflow-hidden rounded-xl"
        style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}
      >
        <OptimizedImage
          src={article.imgs_url.cover}
          alt={article.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </figure>
      <ArticleContent content={article.content} />
      <ArticleShare url={articleUrl} title={article.title} />
      <ArticleRelated articles={related} />
    </article>
  );
}
