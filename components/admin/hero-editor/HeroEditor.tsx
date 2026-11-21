"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { HeroFormFields } from "./HeroFormFields";
import type { Profile } from "@/types/profile";

export function HeroEditor({ initialProfile }: { initialProfile: Profile }) {
  const [profile, setProfile] = useState(initialProfile);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (field: keyof Profile, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    try {
      const { error } = await supabase.from("Profile").update({
        name: profile.name,
        profession: profile.profession,
        bio: profile.bio,
      }).eq("id", profile.id || 1);
      setMsg(error ? `خطأ: ${error.message}` : "تم حفظ التعديلات بنجاح!");
    } catch {
      setMsg("فشل الحفظ، تحقق من الاتصال.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#0c1322]">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white">تعديل بيانات الـ Hero Section</h2>
      {msg && <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{msg}</p>}
      <HeroFormFields profile={profile} onChange={handleChange} />
      <button disabled={saving} type="submit" className="rounded-xl bg-emerald-700 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-800 disabled:opacity-50">
        {saving ? "جاري الحفظ..." : "حفظ التعديلات في قاعدة البيانات"}
      </button>
    </form>
  );
}
