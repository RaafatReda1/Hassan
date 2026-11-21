import type { Metadata } from "next";
import { getPublishedArticles } from "@/lib/data/articles";
import { buildMetadata } from "@/lib/seo/metadata";
import { ArticleCard } from "@/components/article/article-card/ArticleCard";

export const metadata: Metadata = buildMetadata({
  title: "الأخبار والمقالات",
  description:
    "أحدث الأخبار، البيانات الرسمية، والمقالات الصادرة عن الأمين العام حسن الفرحات الجنيدي.",
  slug: "news",
});

export default async function NewsPage() {
  const articles = await getPublishedArticles();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <header className="mb-10">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
          الأخبار والمقالات
        </h1>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
          متابعة لأحدث البيانات الرسمية، اللقاءات العشائرية، ونشاطات ديوان الرئاسة في العراق.
        </p>
      </header>
      <section aria-label="قائمة المقالات" className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} headingLevel="h2" />
        ))}
      </section>
    </div>
  );
}
