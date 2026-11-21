interface ArticleCardMetaProps {
  categoryName?: string;
  createdAt: string;
}

export function ArticleCardMeta({
  categoryName,
  createdAt,
}: ArticleCardMetaProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString("ar-IQ", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
      {categoryName && (
        <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-bold text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-950/60 dark:text-emerald-300">
          {categoryName}
        </span>
      )}
      <time dateTime={createdAt}>{formattedDate}</time>
    </div>
  );
}
