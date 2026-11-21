import Link from "next/link";
import { ArrowLeftIcon } from "@/components/ui/icons/ArrowLeftIcon";
import type { PillarItem } from "./types";

export function PillarCard({ item }: { item: PillarItem }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:shadow-xl dark:border-slate-800/80 dark:bg-[#0c1322]/80 dark:hover:border-emerald-500/30">
      <span className="pointer-events-none absolute left-4 top-4 select-none text-6xl font-black text-slate-100 dark:text-slate-800/30">
        {item.number}
      </span>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-800 shadow-2xs transition-transform duration-300 group-hover:scale-105 dark:border-emerald-500/30 dark:bg-emerald-950/60 dark:text-emerald-300">
              {item.icon}
            </div>
            <span className="rounded-full bg-slate-100/90 px-3.5 py-1 text-xs font-bold text-slate-800 dark:bg-slate-800/90 dark:text-slate-200">
              {item.badge}
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-950 transition group-hover:text-emerald-800 dark:text-white dark:group-hover:text-emerald-300">
            {item.title}
          </h3>
          <p className="mt-1 text-xs font-bold text-emerald-800 dark:text-emerald-400">
            {item.subtitle}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {item.description}
          </p>
        </div>
        <Link
          href={item.href}
          className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-800 transition group-hover:gap-3 dark:text-emerald-400"
        >
          <span>استعراض التفاصيل</span>
          <ArrowLeftIcon />
        </Link>
      </div>
    </div>
  );
}
