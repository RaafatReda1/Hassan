"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export function AdminHeader() {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/");
  };

  return (
    <div className="flex items-center justify-between border-b border-slate-200 pb-6 dark:border-slate-800">
      <div>
        <span className="text-xs font-bold uppercase text-emerald-800 dark:text-emerald-400">
          إدارة النظام والديوان
        </span>
        <h1 className="mt-1 text-3xl font-black text-slate-950 dark:text-white">
          لوحة تحكم المسؤولين
        </h1>
      </div>
      <button
        onClick={handleSignOut}
        type="button"
        className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-2 text-xs font-bold text-rose-700 transition hover:bg-rose-100 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-300"
      >
        تسجيل الخروج
      </button>
    </div>
  );
}
