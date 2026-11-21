"use client";

import { useState } from "react";
import Link from "next/link";
import { GoogleIcon } from "@/components/ui/icons/GoogleIcon";
import { supabase } from "@/lib/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export function GoogleSignInBtn() {
  const { isAdmin } = useAdminAuth();
  const [signingIn, setSigningIn] = useState(false);

  const handleSignIn = async () => {
    try {
      setSigningIn(true);
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      });
    } catch {
      setSigningIn(false);
    }
  };

  if (isAdmin) {
    return (
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-3.5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-800"
      >
        <span>لوحة التحكم</span>
      </Link>
    );
  }

  return (
    <button
      onClick={handleSignIn}
      disabled={signingIn}
      type="button"
      className="group inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/90 px-3 py-2 text-xs font-bold text-slate-800 shadow-2xs backdrop-blur-sm transition hover:scale-[1.02] hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      aria-label="تسجيل الدخول عبر Google"
    >
      <GoogleIcon className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
      <span className="hidden sm:inline">تسجيل الدخول</span>
      <span className="sm:hidden">دخول</span>
    </button>
  );
}
