"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="w-9 h-9 flex items-center justify-center rounded-md text-zinc-400 hover:text-zinc-100 transition-colors">
        <span className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-md text-zinc-400 hover:text-zinc-100 dark:hover:text-zinc-100 light:hover:text-zinc-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={16} strokeWidth={1.5} />
      ) : (
        <Moon size={16} strokeWidth={1.5} />
      )}
    </button>
  );
}
