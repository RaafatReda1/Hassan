import type { ArticleShareProps } from "./types";

export function ArticleShare({ url, title }: ArticleShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  return (
    <section
      aria-label="مشاركة المقال"
      className="my-8 border-t border-b border-slate-200 py-4 dark:border-slate-800"
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
          مشاركة:
        </span>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          منصة X
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          فيسبوك
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          واتساب
        </a>
      </div>
    </section>
  );
}
