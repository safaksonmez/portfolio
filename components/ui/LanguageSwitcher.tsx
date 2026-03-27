"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  tr: "TR",
  ar: "AR",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: string) => {
    // Replace the current locale prefix in the path
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && (
            <span className="text-zinc-600 text-xs mx-0.5 select-none">/</span>
          )}
          <button
            onClick={() => switchLocale(loc)}
            className={`text-xs font-medium px-1.5 py-1 rounded transition-colors ${
              locale === loc
                ? "text-cyan-400"
                : "text-zinc-500 hover:text-zinc-200 dark:hover:text-zinc-200"
            }`}
            aria-label={`Switch to ${loc}`}
          >
            {LOCALE_LABELS[loc]}
          </button>
        </span>
      ))}
    </div>
  );
}
