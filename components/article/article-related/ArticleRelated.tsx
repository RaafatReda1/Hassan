import { ArticleCard } from "@/components/article/article-card/ArticleCard";
import type { ArticleRelatedProps } from "./types";

export function ArticleRelated({ articles }: ArticleRelatedProps) {
  if (!articles.length) return null;

  return (
    <aside
      aria-label="مقالات ذات صلة"
      className="mt-16 border-t border-slate-200 pt-10 dark:border-slate-800"
    >
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
        أخبار ومقالات ذات صلة
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {articles.map((art) => (
          <ArticleCard key={art.id} article={art} headingLevel="h3" />
        ))}
      </div>
    </aside>
  );
}
