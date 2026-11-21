import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <header>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          خطأ 404
        </span>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
          الصفحة غير موجودة
        </h1>
      </header>
      <p className="mt-4 max-w-md text-base text-slate-600 dark:text-slate-400">
        الرابط الذي اتبعته قد يكون غير صحيح أو تم نقله.
      </p>
      <div className="mt-6 flex items-center gap-4">
        <Link
          href="/"
          className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
        >
          العودة للرئيسية
        </Link>
        <Link
          href="/news"
          className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-bold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          الأخبار والمقالات
        </Link>
      </div>
    </main>
  );
}
