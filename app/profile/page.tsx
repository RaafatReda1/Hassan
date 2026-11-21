import type { Metadata } from "next";
import { getProfile } from "@/lib/data/profile";
import { buildMetadata } from "@/lib/seo/metadata";
import { ProfileDossier } from "@/components/profile/ProfileDossier";

export const metadata: Metadata = buildMetadata({
  title: "السيرة والمسيرة",
  description: "الملف التعريفي للأمين العام حسن الفرحات الجنيدي، النشأة في البغدادية، والدور القيادي في رئاسة الإمارة الجنيدية.",
  slug: "profile",
});

export default async function ProfilePage() {
  const profile = await getProfile();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8">
      <header className="mb-10 border-b border-slate-200/80 pb-8 dark:border-slate-800">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">الملف القيادي</span>
        <h1 className="mt-2 text-4xl font-black text-slate-900 sm:text-5xl dark:text-slate-50">السيرة والمسيرة</h1>
        <p className="mt-2 text-base font-bold text-emerald-800 dark:text-emerald-400">الأمين العام لرئاسة الإمارة الجنيدية</p>
      </header>
      <ProfileDossier profile={profile} />
      <p className="mt-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">{profile.bio}</p>
    </div>
  );
}
