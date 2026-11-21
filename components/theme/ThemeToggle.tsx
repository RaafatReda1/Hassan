"use client";

import { useEffect, useState } from "react";
import { SunIcon } from "@/components/ui/icons/SunIcon";
import { MoonIcon } from "@/components/ui/icons/MoonIcon";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkStored =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkStored);
    document.documentElement.classList.toggle("dark", isDarkStored);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.theme = nextDark ? "dark" : "light";
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="تبديل مظهر الموقع"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-emerald-500/40 hover:bg-emerald-50/50 hover:text-emerald-800 active:scale-95 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
