"use client";

import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Role = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export function Experience() {
  const t = useTranslations("experience");
  const roles = t.raw("roles") as Role[];

  return (
    <section id="experience" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t("sectionLabel")}</SectionLabel>

        <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-100 leading-tight mt-8 mb-12">
          {t("heading")}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute start-0 top-2 bottom-2 w-px bg-zinc-800 ms-[5px] hidden sm:block" />

          <div className="flex flex-col gap-12">
            {roles.map((role, i) => (
              <div
                key={i}
                className="relative sm:ps-10 group"
              >
                {/* Timeline dot */}
                <div className="hidden sm:block absolute start-0 top-1.5 w-3 h-3 rounded-full border-2 border-zinc-700 bg-zinc-950 group-hover:border-cyan-400 transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {role.title}
                    </h3>
                    <span className="text-zinc-400 font-medium">
                      {role.company}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 whitespace-nowrap mt-0.5">
                    {role.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {role.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
