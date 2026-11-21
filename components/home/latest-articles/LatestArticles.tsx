import Link from "next/link";
import { ArticleCard } from "@/components/article/article-card/ArticleCard";
import { ArrowLeftIcon } from "@/components/ui/icons/ArrowLeftIcon";
import type { LatestArticlesProps } from "./types";

export function LatestArticles({ articles }: LatestArticlesProps) {
  return (
    <section aria-labelledby="latest-articles-heading" className="py-12">
      <div className="mb-10 flex items-center justify-between border-b border-slate-200 pb-6 dark:border-slate-800">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
            النشرة الرسمية
          </span>
          <h2
            id="latest-articles-heading"
            className="mt-1 text-3xl font-black text-slate-950 dark:text-white"
          >
            أحدث البيانات والأخبار
          </h2>
        </div>
        <Link
          href="/news"
          className="group inline-flex items-center gap-2 text-xs font-bold text-emerald-800 transition hover:gap-3 dark:text-emerald-400"
        >
          <span>أرشيف الأخبار</span>
          <ArrowLeftIcon />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} headingLevel="h3" />
        ))}
      </div>
    </section>
  );
}
