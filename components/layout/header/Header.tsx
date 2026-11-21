import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { GoogleSignInBtn } from "@/components/auth/google-sign-in/GoogleSignInBtn";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-[#fafbfc]/85 backdrop-blur-xl shadow-xs transition-colors dark:border-emerald-500/15 dark:bg-[#050811]/85">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-8">
        <HeaderLogo />
        <div className="flex items-center gap-3 sm:gap-5">
          <HeaderNav />
          <GoogleSignInBtn />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
