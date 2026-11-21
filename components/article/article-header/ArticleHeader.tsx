import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import type { ArticleHeaderProps } from "./types";

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const publishedDate = new Date(article.created_at).toLocaleDateString(
    "ar-IQ",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <header className="mb-8">
      {article.category && (
        <span className="text-sm font-bold text-emerald-800 dark:text-emerald-400">
          {article.category.name}
        </span>
      )}
      <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
        {article.title}
      </h1>
      <div className="mt-4 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
        <span>المصدر:</span>
        <Link
          href="/#person"
          className="font-bold text-emerald-800 hover:underline dark:text-emerald-300"
        >
          {siteConfig.author.name}
        </Link>
        <span>&bull;</span>
        <time dateTime={article.created_at}>{publishedDate}</time>
      </div>
    </header>
  );
}
