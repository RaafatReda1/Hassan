import { siteConfig } from "@/lib/config/site";

export function ContactInfo() {
  return (
    <address className="not-italic space-y-4 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#0d1424]">
      <div>
        <h2 className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-400">
          المكتب والجهة
        </h2>
        <p className="mt-1 text-lg font-bold text-slate-950 dark:text-white">{siteConfig.name}</p>
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          الأمين العام لرئاسة الإمارة الجنيدية
        </p>
      </div>
      <div>
        <h2 className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-400">
          الموقع الجغرافي
        </h2>
        <p className="mt-1 text-base font-bold text-slate-800 dark:text-slate-200">
          العراق - البغدادية
        </p>
      </div>
      <div>
        <h2 className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-400">
          التواصل المباشر
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          للمراجعات والمخاطبات الرسمية عبر ديوان الأمانة العامة للإمارة الجنيدية بالبغدادية.
        </p>
      </div>
    </address>
  );
}
