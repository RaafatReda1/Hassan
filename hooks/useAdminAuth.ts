"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { checkIsAdmin } from "@/lib/supabase/auth";

export function useAdminAuth() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkIsAdmin().then((res) => {
      setIsAdmin(res.isAdmin);
      setIsLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkIsAdmin().then((res) => setIsAdmin(res.isAdmin));
    });
    return () => subscription.unsubscribe();
  }, []);

  return { isAdmin, isLoading };
}
