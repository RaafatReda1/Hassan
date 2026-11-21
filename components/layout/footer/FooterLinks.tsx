import Link from "next/link";
import { headerNavLinks } from "../header/types";

export function FooterLinks() {
  return (
    <ul className="flex flex-wrap gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
      {headerNavLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="hover:text-emerald-700 dark:hover:text-emerald-400 hover:underline"
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <Link
          href="/sitemap.xml"
          className="hover:text-emerald-700 dark:hover:text-emerald-400 hover:underline"
        >
          خريطة الموقع
        </Link>
      </li>
    </ul>
  );
}
