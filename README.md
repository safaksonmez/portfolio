# Şafak Sönmez — Portfolio

Personal portfolio site for a Senior Software Developer. Built with Next.js 16, TypeScript, Tailwind CSS v4, and next-intl.

## Stack

- **Next.js 16** — App Router, static generation
- **TypeScript** — strict mode
- **Tailwind CSS v4** — CSS-first config, dark mode via `.dark` class
- **next-intl** v4 — i18n with TR / EN / AR support + RTL for Arabic
- **next-themes** — dark/light toggle, persisted via localStorage
- **lucide-react** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en` by default.

Language paths:
- `/en` — English
- `/tr` — Turkish (Türkçe)
- `/ar` — Arabic / RTL (العربية)

## Project Structure

```
app/
  [locale]/
    layout.tsx       # per-locale root layout (lang, dir, metadata)
    page.tsx         # assembles all sections

components/
  layout/
    Header.tsx       # sticky nav, language switcher, theme toggle, CV download
    Footer.tsx       # minimal footer with social links
  sections/
    Hero.tsx         # name, title, subtitle, CTAs, stack hint
    About.tsx        # positioning text, stats, domain expertise list
    Work.tsx         # expandable case study cards
    Skills.tsx       # grouped skill grid, frontend de-emphasized
    Experience.tsx   # timeline with roles and bullets
    Writing.tsx      # article placeholder cards
    Contact.tsx      # email, LinkedIn, GitHub links
  ui/
    ThemeProvider.tsx   # next-themes wrapper (default: dark)
    ThemeToggle.tsx     # sun/moon toggle
    LanguageSwitcher.tsx
    SectionLabel.tsx    # monospace section labels with accent line
    SocialIcons.tsx     # inline SVG for GitHub, LinkedIn (lucide v1 has no brand icons)

i18n/
  routing.ts         # locale list and default
  request.ts         # server-side message loading

messages/
  en.json            # English content
  tr.json            # Turkish content
  ar.json            # Arabic content

middleware.ts        # locale routing via next-intl
```

## Editing Content

All content is in `messages/{locale}.json`. Edit any of the three files to update copy. Sections map 1:1 to translation namespaces:

| Section    | Namespace key |
|------------|---------------|
| Hero       | `hero`        |
| About      | `about`       |
| Work       | `work`        |
| Skills     | `skills`      |
| Experience | `experience`  |
| Writing    | `writing`     |
| Contact    | `contact`     |
| Footer     | `footer`      |
| Navigation | `nav`         |

### Adding a project

In `messages/*.json`, add an entry to `work.projects`:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "domain": "Domain · Subdomain",
  "problem": "...",
  "built": "...",
  "highlights": ["...", "..."],
  "impact": "...",
  "stack": ["Tech1", "Tech2"]
}
```

### Adding a writing article

Add an entry to `writing.articles` in all three language files.

## CV Download

Place `Safak_Sonmez_CV.pdf` in `public/Safak_Sonmez_CV.pdf`. The "Download CV" button links to `/Safak_Sonmez_CV.pdf`.

The root CV file (`Safak_Sonmez_CV.pdf`) can be copied:

```bash
cp Safak_Sonmez_CV.pdf public/Safak_Sonmez_CV.pdf
```

## Theme

Default is **dark mode**. Users can toggle via the header button. Preference persists via localStorage.

The site uses Tailwind's `.dark` class variant. Override styles with `dark:` prefixes for light mode adjustments.

## RTL

Arabic locale (`/ar`) automatically gets `dir="rtl"` on the `<html>` element. Use Tailwind's logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) instead of `left`/`right` to ensure RTL correctness.

## Deploying

**Vercel** — push to GitHub, connect repo in Vercel. Zero config needed.

**Self-hosted:**
```bash
npm run build
npm start
```

## Extending

- **CMS**: Replace `messages/*.json` with fetches from a headless CMS (Contentful, Sanity, etc.). The `request.ts` server config is the integration point.
- **Blog**: Add `app/[locale]/writing/[slug]/page.tsx` and read MDX or CMS content.
- **Analytics**: Drop in Vercel Analytics or Plausible in the root layout.
