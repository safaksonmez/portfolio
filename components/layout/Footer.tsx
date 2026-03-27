"use client";

import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const t = useTranslations("footer");
  const tContact = useTranslations("contact");

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/60 dark:bg-zinc-950 light:bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-zinc-600 font-mono">
          © {year} Şafak Sönmez — {t("rights")}
        </span>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${tContact("email")}`}
            className="text-zinc-500 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} strokeWidth={1.5} />
          </a>
          <a
            href="https://github.com/safaksonmez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/safaksonmez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>

        <span className="text-xs text-zinc-700 font-mono">{t("built")}</span>
      </div>
    </footer>
  );
}
