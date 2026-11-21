import type { CredentialItem } from "@/types/profile";

export function HeroCredentials({ items }: { items: CredentialItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3.5 border-y border-slate-200/80 py-5 sm:grid-cols-4 dark:border-slate-800/80">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="rounded-2xl border border-slate-200/70 bg-white/70 p-3.5 shadow-2xs backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-xs dark:border-slate-800/80 dark:bg-[#0c1322]/70 dark:hover:border-emerald-500/30"
        >
          <span className="block text-xs font-bold text-emerald-800 dark:text-emerald-400">
            {item.label}
          </span>
          <span className="mt-1 block text-base font-black text-slate-950 dark:text-white">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
