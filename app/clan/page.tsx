import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { CrestIcon } from "@/components/ui/icons/CrestIcon";

export const metadata: Metadata = buildMetadata({
  title: "رئاسة الإمارة الجنيدية",
  description: "ديوان رئاسة الإمارة الجنيدية في العراق، برئاسة وإشراف الأمين العام حسن الفرحات الجنيدي.",
  slug: "clan",
});

export default function ClanPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8">
      <header className="mb-10 border-b border-slate-200 pb-8 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-950/60 dark:text-emerald-300">
            <CrestIcon />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">ديوان الإمارة</span>
        </div>
        <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">رئاسة الإمارة الجنيدية</h1>
        <p className="mt-2 text-base font-bold text-emerald-800 dark:text-emerald-400">الأمين العام: حسن الفرحات الجنيدي البغدادية</p>
      </header>
      <div className="space-y-6 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <p className="text-lg font-medium leading-loose text-slate-900 dark:text-slate-100">
          تُعد رئاسة الإمارة الجنيدية صرحاً اجتماعياً وعشائرياً عريقاً في العراق، تحرص على رعاية شؤون العشيرة، تعزيز التآخي والسلم الأهلي، وإحياء التراث والقيم العربية الأصيلة.
        </p>
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 dark:border-emerald-500/20 dark:bg-emerald-950/30">
          <h2 className="mb-3 text-xl font-black text-slate-950 dark:text-white">دور الأمانة العامة</h2>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            يتولى الأمين العام حسن الفرحات الجنيدي قيادة ديوان الإمارة وتنسيق المبادرات المجتمعية والعشائرية، ودعم أواصر التعاون والصلح بين مختلف مكونات المجتمع العراقي.
          </p>
        </div>
      </div>
    </div>
  );
}
