"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { checkIsAdmin } from "@/lib/supabase/auth";

export default function AuthCallbackPage() {
  const router = useRouter();
  const [status, setStatus] = useState("جاري التحقق من الصلاحيات...");

  useEffect(() => {
    async function handleAuth() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          const { isAdmin } = await checkIsAdmin();
          if (isAdmin) {
            setStatus("تم التحقق بنجاح! جاري تحويلك إلى لوحة التحكم...");
            router.replace("/admin");
            return;
          }
        }
      } catch {}
      router.replace("/");
    }

    handleAuth();
  }, [router]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
      <p className="mt-4 text-sm font-bold text-slate-700 dark:text-slate-300">{status}</p>
    </div>
  );
}
