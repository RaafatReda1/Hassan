import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export function HeaderLogo() {
  return (
    <Link href="/" className="group flex flex-col transition">
      <span className="text-lg font-black tracking-tight text-slate-950 transition group-hover:text-emerald-700 sm:text-xl dark:text-white dark:group-hover:text-emerald-400">
        {siteConfig.name}
      </span>
      <span className="text-xs font-semibold tracking-wide text-emerald-800 transition dark:text-emerald-400">
        الأمانة العامة &bull; رئاسة الإمارة الجنيدية
      </span>
    </Link>
  );
}
