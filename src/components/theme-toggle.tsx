"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-16 rounded-full bg-zinc-200 dark:bg-slate-700" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-16 items-center rounded-full bg-zinc-200 transition-all duration-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/40 dark:bg-slate-700 dark:hover:shadow-accent/10"
      aria-label="Toggle dark mode"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-500 ${
          isDark ? "translate-x-8 bg-slate-900" : "translate-x-1"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-yellow-400" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-500" />
        )}
      </span>
    </button>
  );
}
