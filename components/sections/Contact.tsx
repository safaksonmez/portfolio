"use client";

import { useTranslations } from "next-intl";
import { Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  const t = useTranslations("contact");

  const links = [
    {
      key: "email",
      label: t("links.email"),
      href: `mailto:${t("email")}`,
      Icon: () => <Mail size={16} strokeWidth={1.5} />,
      value: t("email"),
    },
    {
      key: "linkedin",
      label: t("links.linkedin"),
      href: "https://www.linkedin.com/in/safaksonmez",
      Icon: () => <LinkedinIcon size={16} />,
      value: "linkedin.com/in/safaksonmez",
    },
    {
      key: "github",
      label: t("links.github"),
      href: "https://github.com/safaksonmez",
      Icon: () => <GithubIcon size={16} />,
      value: "github.com/safaksonmez",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>{t("sectionLabel")}</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 leading-tight mb-6">
              {t("heading")}
            </h2>
            <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-base leading-relaxed max-w-lg">
              {t("body")}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {links.map(({ key, label, href, Icon, value }) => (
              <a
                key={key}
                href={href}
                target={key !== "email" ? "_blank" : undefined}
                rel={key !== "email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-5 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-lg hover:border-zinc-700 dark:hover:border-zinc-700 light:hover:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-white hover:bg-zinc-900/50 dark:hover:bg-zinc-900/50 light:hover:bg-zinc-50 transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 group-hover:border-zinc-700 transition-colors shrink-0 text-zinc-400 group-hover:text-cyan-400 transition-colors">
                  <Icon />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-zinc-500 mb-0.5">{label}</div>
                  <div className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-medium truncate group-hover:text-zinc-100 dark:group-hover:text-zinc-100 light:group-hover:text-zinc-900 transition-colors">
                    {value}
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
