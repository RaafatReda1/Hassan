import Link from "next/link";
import { headerNavLinks } from "./types";

export function HeaderNav() {
  return (
    <nav aria-label="القائمة الرئيسية" className="hidden lg:block">
      <ul className="flex items-center gap-1.5 text-sm font-bold">
        {headerNavLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="rounded-full px-4 py-2 text-slate-700 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-800 dark:text-slate-300 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
