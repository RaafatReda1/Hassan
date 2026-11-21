import type { Profile } from "@/types/profile";
import { supabase } from "@/lib/supabase/client";

export const fallbackProfile: Profile = {
  id: 1,
  created_at: "2026-01-01T00:00:00Z",
  name: "حسن الفرحات الجنيدي",
  profession: "الأمين العام لرئاسة الإمارة الجنيدية في العراق",
  bio: "الأمين العام لرئاسة الإمارة الجنيدية في العراق، مواليد 1991 البغدادية.",
  img_url: "/HeroImg.png",
  location: "العراق - البغدادية",
  birth_year: 1991,
  clan_title: "رئاسة الإمارة الجنيدية",
  credentials: [
    { label: "سنة الميلاد", value: "1991" },
    { label: "المنطقة", value: "العراق - البغدادية" },
    { label: "المقام العشائري", value: "الأمانة العامة" },
    { label: "الديوان", value: "رئاسة الإمارة الجنيدية" },
  ],
  actions: [
    { href: "/clan", label: "ديوان رئاسة الإمارة", variant: "primary" },
    { href: "/profile", label: "السيرة والمسيرة", variant: "secondary" },
  ],
  links: { facebook: "https://facebook.com" },
};

export async function getProfile(): Promise<Profile> {
  try {
    const { data, error } = await supabase.from("Profile").select("*").limit(1).single();
    if (!error && data) {
      return {
        ...fallbackProfile,
        ...data,
        credentials: data.credentials ?? fallbackProfile.credentials,
        actions: data.actions ?? fallbackProfile.actions,
      };
    }
  } catch {}
  return fallbackProfile;
}
