import type { Profile } from "@/types/profile";

export function ProfileDossier({ profile }: { profile: Profile }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#0d1424]">
        <h2 className="mb-4 text-lg font-black text-slate-950 dark:text-white">البيانات والنشأة</h2>
        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <li><strong className="text-slate-900 dark:text-slate-100">الاسم الكامل:</strong> {profile.name}</li>
          <li><strong className="text-slate-900 dark:text-slate-100">سنة الميلاد:</strong> مواليد {profile.birth_year}</li>
          <li><strong className="text-slate-900 dark:text-slate-100">المنشأ:</strong> {profile.location}</li>
          <li><strong className="text-slate-900 dark:text-slate-100">المقام العشائري:</strong> {profile.clan_title || "رئاسة الإمارة الجنيدية"}</li>
        </ul>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#0d1424]">
        <h2 className="mb-4 text-lg font-black text-slate-950 dark:text-white">الأمانة العامة والمهام</h2>
        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <li><strong className="text-slate-900 dark:text-slate-100">المقام:</strong> {profile.profession}</li>
          <li><strong className="text-slate-900 dark:text-slate-100">المقر:</strong> {profile.location}</li>
          <li><strong className="text-slate-900 dark:text-slate-100">المسؤوليات:</strong> رعاية شؤون الإمارة والتنسيق المجتمعي في العراق</li>
        </ul>
      </div>
    </div>
  );
}
