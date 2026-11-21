import type { Profile } from "@/types/profile";

interface Props {
  profile: Profile;
  onChange: (field: keyof Profile, value: string) => void;
}

export function HeroFormFields({ profile, onChange }: Props) {
  return (
    <>
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">الاسم</label>
        <input value={profile.name} onChange={(e) => onChange("name", e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 text-sm dark:border-slate-700 dark:bg-slate-900" />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">المقام / الصفة</label>
        <input value={profile.profession} onChange={(e) => onChange("profession", e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 text-sm dark:border-slate-700 dark:bg-slate-900" />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">النص التعريفي (Bio)</label>
        <textarea rows={3} value={profile.bio} onChange={(e) => onChange("bio", e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 text-sm dark:border-slate-700 dark:bg-slate-900" />
      </div>
    </>
  );
}
