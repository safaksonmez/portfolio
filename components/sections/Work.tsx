"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Project = {
  id: string;
  title: string;
  domain: string;
  problem: string;
  built: string;
  highlights: string[];
  impact: string;
  stack: string[];
};

function CaseStudyCard({
  project,
  index,
  labels,
}: {
  project: Project;
  index: number;
  labels: Record<string, string>;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors">
      {/* Header */}
      <button
        className="w-full text-start p-6 sm:p-8"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-mono text-cyan-400/70 tracking-wide">
                {project.domain}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-zinc-500 text-sm mt-3 leading-relaxed line-clamp-2">
              {project.problem}
            </p>
          </div>
          <div className="shrink-0 mt-1">
            {expanded ? (
              <ChevronUp size={18} className="text-zinc-500" />
            ) : (
              <ChevronDown size={18} className="text-zinc-500" />
            )}
          </div>
        </div>

        {/* Stack preview */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-500"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="text-xs font-mono px-2 py-0.5 text-zinc-600">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-6 sm:px-8 pb-8 border-t border-zinc-800/60">
          <div className="grid sm:grid-cols-2 gap-8 pt-8">
            {/* Problem */}
            <div>
              <h4 className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider mb-3">
                {labels.problem}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* What I built */}
            <div>
              <h4 className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider mb-3">
                {labels.built}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.built}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider mb-3">
                {labels.highlights}
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div>
              <h4 className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider mb-3">
                {labels.impact}
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                {project.impact}
              </p>

              {/* Full stack */}
              <div className="mt-6">
                <h4 className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider mb-3">
                  {labels.stack}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export function Work() {
  const t = useTranslations("work");
  const projects = t.raw("projects") as Project[];
  const labels = t.raw("labels") as Record<string, string>;

  return (
    <section id="work" className="py-24 px-6 border-t border-zinc-900">
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

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={i}
              labels={labels}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
