import { FooterCopyright } from "./FooterCopyright";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200/80 bg-[#fafbfc]/80 py-10 backdrop-blur-sm dark:border-emerald-500/10 dark:bg-[#050811]/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8">
        <FooterCopyright />
        <FooterLinks />
      </div>
    </footer>
  );
}
