import { supabase } from "./client";

export interface AdminCheckResult {
  isAdmin: boolean;
  admin?: { id: string; name: string; email: string; phone?: number } | null;
}

export async function checkIsAdmin(): Promise<AdminCheckResult> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { isAdmin: false };

    // 1. Invoke the Supabase Edge Function
    const { data, error } = await supabase.functions.invoke<AdminCheckResult>("check-admin");
    if (!error && data && typeof data.isAdmin === "boolean") {
      return data;
    }

    // 2. Direct query fallback if Edge Function is pending deployment
    const { data: admin } = await supabase
      .from("Admins")
      .select("id, name, email, phone")
      .eq("id", user.id)
      .maybeSingle();

    return { isAdmin: !!admin, admin: admin ?? null };
  } catch {
    return { isAdmin: false };
  }
}
