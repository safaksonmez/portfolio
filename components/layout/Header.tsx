"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const NAV_ITEMS = [
  { key: "about", href: "#about" },
  { key: "work", href: "#work" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / wordmark */}
        <a
          href="#"
          className="font-mono text-sm font-semibold text-zinc-100 tracking-tight hover:text-cyan-400 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ş.sönmez
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => handleNav(href)}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {t(key)}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="/Safak_Sonmez_CV.pdf"
            download="Safak_Sonmez_CV.pdf"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors border border-zinc-700 hover:border-zinc-600"
          >
            <Download size={12} strokeWidth={2} />
            {t("downloadCV")}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/60 px-6 py-6 flex flex-col gap-4">
          {NAV_ITEMS.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => handleNav(href)}
              className="text-left text-zinc-300 hover:text-zinc-100 transition-colors py-1"
            >
              {t(key)}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="/Safak_Sonmez_CV.pdf"
              download="Safak_Sonmez_CV.pdf"
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-200 border border-zinc-700"
            >
              <Download size={12} strokeWidth={2} />
              {t("downloadCV")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
