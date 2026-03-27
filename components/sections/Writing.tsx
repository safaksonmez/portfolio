"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Article = {
  title: string;
  topic: string;
  description: string;
};

export function Writing() {
  const t = useTranslations("writing");
  const articles = t.raw("articles") as Article[];

  return (
    <section id="writing" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t("sectionLabel")}</SectionLabel>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-8 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-100 leading-tight">
            {t("heading")}
          </h2>
          <p className="text-zinc-500 text-sm max-w-md sm:text-end">
            {t("subheading")}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {articles.map((article, i) => (
            <div
              key={i}
              className="relative group border border-zinc-800 rounded-lg p-6 bg-zinc-950 hover:border-zinc-700 transition-colors"
            >
              {/* Coming soon overlay */}
              <div className="absolute top-4 end-4">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-600">
                  {t("comingSoon")}
                </span>
              </div>

              <span className="text-xs font-mono text-cyan-400/60 tracking-wide">
                {article.topic}
              </span>
              <h3 className="text-zinc-200 font-medium mt-2 mb-3 pe-12 leading-snug">
                {article.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {article.description}
              </p>

              <div className="flex items-center gap-1.5 mt-6 text-zinc-700 text-xs font-mono group-hover:text-zinc-500 transition-colors">
                <span>Read</span>
                <ArrowRight size={12} strokeWidth={2} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
