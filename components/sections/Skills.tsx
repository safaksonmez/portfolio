"use client";

import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";

type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

const PRIMARY_GROUPS = ["languages", "backend", "messaging", "data", "infra", "domain"];

export function Skills() {
  const t = useTranslations("skills");
  const groups = t.raw("groups") as SkillGroup[];

  // Separate frontend from primary groups to display it last
  const primaryGroups = groups.filter((g) => PRIMARY_GROUPS.includes(g.id));
  const frontendGroup = groups.find((g) => g.id === "frontend");

  return (
    <section id="skills" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t("sectionLabel")}</SectionLabel>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-8 mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-100 leading-tight">
            {t("heading")}
          </h2>
          <p className="text-zinc-500 text-sm max-w-sm sm:text-end">
            {t("subheading")}
          </p>
        </div>

        {/* Primary skill groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/40 rounded-lg overflow-hidden border border-zinc-800/40">
          {primaryGroups.map((group) => (
            <div
              key={group.id}
              className="bg-zinc-950 p-6 hover:bg-zinc-900/50 transition-colors"
            >
              <h3 className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-2.5 py-1 rounded font-mono ${
                      group.id === "domain"
                        ? "bg-cyan-400/10 border border-cyan-400/20 text-cyan-300/80"
                        : "bg-zinc-900 border border-zinc-800 text-zinc-400"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Frontend group — visually de-emphasized */}
        {frontendGroup && (
          <div className="mt-4 border border-zinc-800/60 rounded-lg p-6 bg-zinc-950">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xs font-mono font-medium text-zinc-600 uppercase tracking-wider">
                {frontendGroup.label}
              </h3>
              <span className="text-xs text-zinc-700 font-mono">
                — supporting capability
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontendGroup.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded font-mono bg-zinc-900/50 border border-zinc-800/60 text-zinc-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
