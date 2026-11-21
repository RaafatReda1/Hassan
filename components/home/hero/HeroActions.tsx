import Link from "next/link";
import { ArrowLeftIcon } from "@/components/ui/icons/ArrowLeftIcon";
import type { ActionItem } from "@/types/profile";

export function HeroActions({ items }: { items: ActionItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      {items.map((action, idx) =>
        action.variant === "primary" ? (
          <Link
            key={idx}
            href={action.href}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-700 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-900/15 transition-all duration-200 hover:scale-[1.02] hover:from-emerald-700 hover:to-emerald-600 hover:shadow-lg dark:from-emerald-600 dark:to-emerald-500"
          >
            <span>{action.label}</span>
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              <ArrowLeftIcon />
            </span>
          </Link>
        ) : (
          <Link
            key={idx}
            href={action.href}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/80 px-7 py-3.5 text-sm font-bold text-slate-900 shadow-2xs backdrop-blur-sm transition-all duration-200 hover:border-emerald-600/40 hover:bg-slate-50 hover:shadow-xs dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-emerald-500/40 dark:hover:bg-slate-800"
          >
            <span>{action.label}</span>
          </Link>
        )
      )}
    </div>
  );
}
