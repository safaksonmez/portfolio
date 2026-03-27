"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden bg-zinc-950 dark:bg-zinc-950 light:bg-white"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-40 light:opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(113,113,122,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(113,113,122,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Availability tag */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 tracking-widest uppercase">
            {t("tag")}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-sans font-semibold leading-none tracking-tight mb-6">
          <span className="block text-5xl sm:text-7xl lg:text-8xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
            {t("name")}
          </span>
          <span className="block text-2xl sm:text-4xl lg:text-5xl text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mt-3 font-normal">
            {t("title")}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base font-mono text-cyan-400/80 tracking-wider mb-8">
          {t("subtitle")}
        </p>

        {/* Intro paragraph */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed mb-12">
          {t("intro")}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-semibold text-sm rounded-md transition-all duration-200"
          >
            {t("cta.contact")}
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 hover:border-zinc-500 dark:hover:border-zinc-500 light:hover:border-zinc-400 text-zinc-300 dark:text-zinc-300 light:text-zinc-600 hover:text-zinc-100 dark:hover:text-zinc-100 light:hover:text-zinc-800 font-medium text-sm rounded-md transition-all duration-200"
          >
            <Download size={14} strokeWidth={2} />
            {t("cta.cv")}
          </a>

          <button
            onClick={() => scrollTo("work")}
            className="flex items-center gap-1.5 px-3 py-2.5 text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-300 light:hover:text-zinc-700 font-medium text-sm transition-colors"
          >
            {t("cta.work")}
            <ArrowRight size={14} strokeWidth={2} />
          </button>
        </div>

        {/* Stack hint */}
        <div className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-xs text-zinc-600 dark:text-zinc-600 light:text-zinc-400 font-mono uppercase tracking-wider">
            Stack:
          </span>
          {[".NET", "Go", "Node.js", "Kubernetes", "RabbitMQ", "Redis"].map(
            (tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-zinc-500 dark:text-zinc-500 light:text-zinc-500 px-2 py-0.5 rounded border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-zinc-100/50"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={20} strokeWidth={1.5} />
      </button>
    </section>
  );
}
