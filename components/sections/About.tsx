"use client";

import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  const t = useTranslations("about");
  const domains = t.raw("domains.items") as string[];

  const stats = [
    { value: t("stats.years"), label: t("stats.yearsLabel") },
    { value: t("stats.products"), label: t("stats.productsLabel") },
    { value: t("stats.domains"), label: t("stats.domainsLabel") },
  ];

  return (
    <section id="about" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t("sectionLabel")}</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
          {/* Left: text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-100 leading-tight mb-8">
              {t("heading")}
            </h2>

            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
              <p>{t("body3")}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-zinc-800">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-semibold text-cyan-400 font-mono">
                    {value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: domain expertise */}
          <div className="flex flex-col justify-start">
            <h3 className="text-xs font-mono font-medium tracking-widest text-zinc-500 uppercase mb-6">
              {t("domains.title")}
            </h3>
            <div className="flex flex-col gap-0">
              {domains.map((domain, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 py-3.5 border-b border-zinc-900 hover:border-zinc-800 transition-colors"
                >
                  <span className="text-xs font-mono text-zinc-700 w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-zinc-300 group-hover:text-zinc-100 transition-colors">
                    {domain}
                  </span>
                  <span className="ms-auto w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-cyan-400 transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
