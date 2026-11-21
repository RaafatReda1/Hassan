import Link from "next/link";
import { ArticleCardCover } from "./ArticleCardCover";
import { ArticleCardMeta } from "./ArticleCardMeta";
import type { ArticleCardProps } from "./types";

export function ArticleCard({ article, headingLevel = "h2" }: ArticleCardProps) {
  const HeadingTag = headingLevel;

  return (
    <article className="group flex flex-col gap-4 rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl dark:border-slate-800/80 dark:bg-[#0c1322]/80 dark:hover:border-emerald-500/30">
      <ArticleCardCover
        slug={article.slug}
        coverUrl={article.imgs_url.cover}
        title={article.title}
      />
      <div className="flex flex-col gap-2.5">
        <ArticleCardMeta
          categoryName={article.category?.name}
          createdAt={article.created_at}
        />
        <HeadingTag className="text-xl font-bold leading-snug text-slate-950 transition group-hover:text-emerald-800 dark:text-white dark:group-hover:text-emerald-400">
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </HeadingTag>
        <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {article.seo_description || article.content}
        </p>
      </div>
    </article>
  );
}
