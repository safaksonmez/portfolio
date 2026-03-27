import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  const descriptions: Record<string, string> = {
    en: "Senior Backend Engineer specializing in fintech, real-time systems, and distributed architecture. Backend-first, full-stack capable.",
    tr: "Fintech, gerçek zamanlı sistemler ve dağıtık mimari alanında uzmanlaşmış Kıdemli Backend Mühendisi.",
    ar: "مهندس خلفية برمجية أول متخصص في التكنولوجيا المالية والأنظمة الفورية والبنية الموزعة.",
  };

  return {
    title: {
      default: `${t("name")} — ${t("title")}`,
      template: `%s | ${t("name")}`,
    },
    description: descriptions[locale] || descriptions.en,
    openGraph: {
      title: `${t("name")} — ${t("title")}`,
      description: descriptions[locale] || descriptions.en,
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("name")} — ${t("title")}`,
      description: descriptions[locale] || descriptions.en,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
