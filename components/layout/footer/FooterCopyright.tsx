import { siteConfig } from "@/lib/config/site";

export function FooterCopyright() {
  return (
    <p className="text-xs text-slate-500 dark:text-slate-400">
      &copy; 2026 {siteConfig.name}. جميع الحقوق محفوظة &bull; رئاسة الإمارة الجنيدية.
    </p>
  );
}
