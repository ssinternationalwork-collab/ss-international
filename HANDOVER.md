# SS International — Project Handover

Last updated: 2026-09-07

This document exists to let another developer or AI coding assistant pick up this project with full context. Read this alongside `CLAUDE.md` (the design-system rulebook — treat it as binding for any visual work).

---

## 1. What the site is

A marketing + lead-gen website for **SS International Industries LLP**, a precision rubber-sealing manufacturer based in India (founded 1999, 25+ years, EPDM/NBR/Silicone/PVC profiles, 8 industries served: Automotive, Roadways, Architecture, Railways, Shipping, Power Distribution, Mining, Infrastructure). Audience is B2B — procurement heads and engineers at OEMs. The intended aesthetic is "confident global industrial manufacturer," not a SaaS/AI-startup look.

## 2. Tech stack

- **Framework:** Next.js 16.2.4, App Router, React 19.2.4, TypeScript.
- **Styling:** Tailwind CSS v4 (imported via `@import "tailwindcss"` in `src/app/globals.css`), but almost all component styling is actually done with inline `style={{...}}` objects, not Tailwind classes — that's the established pattern in this codebase, not an oversight.
- **Animation:** Framer Motion (`framer-motion` / `motion` packages) — used in `Nav.tsx`, `IndustriesSection.tsx`. Most other "animation" is hand-rolled `onMouseEnter`/`onMouseLeave` inline style mutation (pre-dates the Framer Motion convention CLAUDE.md now asks for — see §6).
- **3D globe:** `react-globe.gl` (WebGL/three.js under the hood) — used in `GlobalReach.tsx`, lazy-loaded via dynamic `import()`.
- **Icons:** Tabler Icons **webfont**, loaded via a CDN `<link>` in `src/app/layout.tsx` (`https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css`), used as `<i className="ti ti-*">`. Not an npm package — purely a CSS/webfont dependency.
- **Fonts:** Google Fonts (Barlow + Inter), imported via `@import url(...)` at the top of `globals.css`. CSS vars: `--font-barlow`, `--font-inter`.
- **Package manager:** npm (`package-lock.json` present).
- **Deployment:** Vercel. The project is linked (`.vercel/project.json` exists locally, project name `ss-international`) — **not included in the handover zip**, see §7.
- **Git:** Full history, GitHub remote `github.com/visbek/ss-international`, branches `main` and `dev` (currently on `dev`). **Something in this environment auto-commits every file save to `dev`** — no manual `git commit` was run for most of this session's history. Confirm with the project owner whether that's a deliberate hook/tool before relying on it, and definitely before pushing/merging to `main`.

### Notable installed-but-unused dependencies
`@hugeicons/*`, `gsap`, `lenis`, `next-themes` are in `package.json` but not imported anywhere in `src/`. `lucide-react`, `cobe`, `dotted-map` are only imported by dead/unreferenced component files (see §4). `resend` is installed but there is no code anywhere that uses it — no email-sending is currently wired up despite the dependency being present. Safe to prune during a dependency cleanup pass, or leave if a feature using them is planned.

## 3. Page status

| Route | File | Status |
|---|---|---|
| `/` | `src/app/page.tsx` | **Finished.** Home page: Nav → HeroSection → BrandStatementV2 (with stats bar) → IndustriesSection → ProductsPreview → TechnologiesCarousel → QualityStrip → GlobalReach → FAQSection → HomeCTAv2 → Footer. This is where almost all of this session's work happened. |
| `/about` | `src/app/about/page.tsx` | **Partially finished.** Only 21 lines, wires up `AboutHero`, `AboutStory`, `AboutFounder`, `AboutTimelineC`, then reuses the homepage's `HomeCTAv2` and `Footer`. Several sibling components exist in `src/components/about/` but are **not wired in**: `AboutCTA`, `AboutCertifications`, `AboutGallery`, `AboutStats`, `AboutTimelineD` (plus the plain `AboutTimeline`, superseded by `AboutTimelineC`). Worth a deliberate pass to decide whether to use, finish, or delete them. |
| `/contact` | `src/app/contact/page.tsx` | **Finished**, but hand-rolled directly in the page file (not composed from `ContactSection.tsx`, which is unused — see §4). Has a working (Google Maps `<iframe>`) embed, real contact details, and a **non-functional form** — the right-hand form has no `onSubmit`/state, it's static markup only. |
| `/company-profile` | `src/app/company-profile/page.tsx` | **Finished** (by design) — a 13-line page that just embeds `public/company-profile.pdf` in a full-screen `<iframe>`. Nothing to build here; if the PDF content changes, replace the file in `public/`. |
| `/customer-registration` | `src/app/customer-registration/page.tsx` | **Finished and functionally the most complex page** (912 lines). Full customer/vendor registration form: entity type, department-specific fields, multiple points of contact, full country-code picker, India state/city cascading dropdowns. **Submits to a hardcoded Google Apps Script Web App URL** and uploads to a hardcoded Google Drive folder ID (both constants at the top of the file) — see §7, "Connected services." Does not use `Nav`/`Footer` — it's a fully standalone page with its own styling, including some `!important` mobile-responsive overrides that live in `globals.css` under the `/* Mobile responsive — customer registration */` comment. |

**Broken/missing routes:** `Nav.tsx` links to `/industries`, `/technologies`, and `/products`, but **none of these routes exist** under `src/app/`. Clicking those nav links currently 404s. This is the most visible gap in the site right now.

## 4. Dead / unused code (verified by import-graph check, not guesswork)

These files exist in `src/components/` but are never imported by anything under `src/app/`, directly or transitively:

- `HomeCTA.tsx` (superseded by `HomeCTAv2.tsx`)
- `BrandStatement.tsx` (superseded by `BrandStatementV2.tsx`)
- `ProductsPreviewV2.tsx` (the live homepage uses `ProductsPreview.tsx`, not this one)
- `TechnologiesSection.tsx` (the live homepage uses `TechnologiesCarousel.tsx`, not this one)
- `HeroV2.tsx`, `HeroV3.tsx` (the live homepage uses `HeroSection.tsx`)
- `CTABanner.tsx`
- `ContactSection.tsx` (an earlier, animated/stateful draft of the contact form+map; `/contact` uses its own hand-rolled markup instead)
- `StatsStrip.tsx`, `ComingSoon.tsx`
- `ui/map.tsx`, `ui/card.tsx`, `ui/cobe-globe.tsx`, `ui/hover-footer.tsx`
- `blocks/animated-gallery.tsx`
- `about/AboutTimeline.tsx`, `about/AboutCTA.tsx`, `about/AboutGallery.tsx`, `about/AboutCertifications.tsx`, `about/AboutStats.tsx`, `about/AboutTimelineD.tsx`

None of this is breaking anything today, but it's worth either wiring the useful ones in (especially the `about/` extras) or deleting the rest so the next person doesn't waste time working on a file that never renders.

There's also duplicate/redundant logo artwork in `public/` — `logo_clean.png`, `logo_footer.png`, `logo_icon_only.png`, `logo_icon_only 1.png` (note the space in the filename — likely an accidental duplicate), `logo_light.png`, `logo_light_hd.png`, `logo_light_hd_transparent.png`, `logo_nobg.png`, `logo_ssi_full.png`, `logo_transparent.png`, `ssi-logo-removebg-preview.png`, `ssi-logo-transparent.png`, `ssi-logo.jpeg`. The currently-live logo across Nav/Footer is `logo_ssi_full.png`. The rest look like earlier iterations — a cleanup pass could remove whichever aren't referenced anywhere.

## 5. Approved design system (full detail lives in `CLAUDE.md` — read it before touching styling)

**Brand colors — the approved list, use only these:**

| Token | Hex | Use |
|---|---|---|
| Blue (primary accent) | `#1B91FF` | CTAs, links, eyebrow lines, active states |
| Black (Forge Black) | `#141414` | Dark sections, primary text |
| Mist | `#D7D7D6` | Muted text, secondary headlines, dividers |
| Smoke | `#A8A8A8` | Tertiary text, captions, labels |
| White | `#FFFFFF` | Card/light backgrounds |
| BG Light | `#F8F8F8` | Default light section background |
| Border | `#E8E8E8` | Dividers, card borders on light bg |
| **Bronze (secondary accent)** | `#B8935A` | Added this session — sparing use, tertiary highlights and icons |
| **Slate (tertiary)** | `#5B6B82` | Added this session — sparing use, secondary text/muted UI accents |

**Banned:** purple/green/red/orange/yellow accents, gradient backgrounds (except subtle dark overlays on hero images), "AI-startup" blue/purple gradients, random Tailwind palette colors (`blue-500`, `gray-900`, etc.) — always use the hex codes above.

**Fonts:** Barlow (headings/nav/buttons/eyebrows, always uppercase, `fontWeight: 900`, tight negative letter-spacing) + Inter (body text). No other font families.

**Component rules to know before editing:** pill-shaped buttons only (`borderRadius: 50px`, never square/4px/8px), the eyebrow-line-plus-uppercase-label pattern above every section heading, the two-line headline pattern (bold + muted second line), Framer Motion for new animation work (not more inline mouse handlers), no glassmorphism except sparingly on dark hero overlays, no glowing/particle effects, no exclamation marks or generic SaaS copy ("innovative solutions", "cutting-edge", etc.).

**Section background rhythm** (documented intent, not fully followed everywhere — see the Footer note below): light/dark should alternate deliberately down the page rather than repeat, e.g. Technologies and CTA bands are dark (`#141414`/`#0f0f0f`) against otherwise light sections.

**This session's notable, deliberate deviations from strict CLAUDE.md wording** (confirmed with the site owner in-session, not accidental):
- Footer background was flipped from dark (`#2b2b2b`) to a light blue-gray (`#e7ecf5`) — closer to the documented "Footer — `#f8f8f8`" intent than the old dark footer was, but `#e7ecf5` itself isn't one of the exact listed tokens.
- A few light background tints (`#EAF3FF`, `#FBF3EA`) are used as icon-badge/card backgrounds in `QualityStrip.tsx` and `BrandStatementV2.tsx` — these are tints of the approved blue/bronze, not new hues, but are also not literal palette tokens.
- If a future assistant is instructed to "strictly enforce CLAUDE.md," flag these for a decision rather than silently reverting them — they were intentional calls made with the owner during this session.

## 6. How to install and run

```bash
cd ss-international
npm install
npm run dev       # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm run start` (serve the production build), `npm run lint` (ESLint via `eslint.config.mjs`).

Requires no environment variables to run locally today (see `.env.example` in this handover package and §7 below — nothing is currently read from `process.env` anywhere in `src/`).

## 7. Connected services, known bugs, hosting

**Connected services:**
- **Google Apps Script Web App** — `customer-registration/page.tsx` posts form submissions to a hardcoded `APPS_SCRIPT_URL` (a `script.google.com/macros/s/.../exec` endpoint) and uploads files to a hardcoded Google Drive folder ID (`DRIVE_FOLDER_ID`). Both constants are near the top of that file. This is a live, working integration — if the registration form breaks, check the Apps Script deployment on the Google account that owns it (not something this codebase controls).
- **Google Maps embed** — `contact/page.tsx` embeds a Google Maps iframe (Baghpat, Uttar Pradesh) via a plain embed URL. No API key required for this embed style.
- **Tabler Icons CDN** — `layout.tsx` loads the icon webfont from jsDelivr at request time. If jsDelivr is ever unreachable, icons in `BrandStatementV2.tsx`/`QualityStrip.tsx`-style cards will silently not render (no fallback is configured).
- **Unsplash/Pexels image URLs** — several components (`IndustriesSection.tsx`, older `HeroV2`/`HeroV3`, dead files) hot-link directly to `images.unsplash.com` / `images.pexels.com` URLs rather than local assets. These are outside this project's control and could break if a URL is ever taken down.

**Hosting:** Vercel, project name `ss-international`. Not connected to environment variables as far as this codebase shows. Deploy is presumably via Vercel's Git integration on push to `main` (unverified — check the Vercel dashboard for the actual deploy hook/branch config).

**Known bugs / open issues, in rough priority order:**
1. **Nav links to non-existent pages** — `/industries`, `/technologies`, `/products` don't exist yet (see §3).
2. **Contact form on `/contact` doesn't submit anything** — it's static markup with no handler, unlike the (unused) `ContactSection.tsx`, which at least fakes a submit with local state.
3. **Duplicate/placeholder phone numbers were found and fixed this session** — both `Footer.tsx` and `contact/page.tsx` previously had a different, likely-placeholder number; both now point to `+91 95993 99493` / `tel:+919599399493`. Verify this is in fact the correct number the business wants published.
4. **The mysterious git auto-commit behavior** (see §2) — confirm what's driving it before treating `dev`'s history as a normal manual commit log.
5. Dead code and duplicate logo assets — see §4. Not urgent, but will confuse anyone who starts editing the wrong file.
6. `GlobalReach.tsx`'s globe visuals (arc altitude, dash animation, pin/label timing) went through many iterations this session and were still being tuned by eye at the point of handover — current state animates arcs with a dash-flow effect and reveals pins in sync with `activeIndex`, but there's no automated/visual regression check on this, so re-verify it still looks right after any further changes to `react-globe.gl`-related props.

## 8. Suggested next steps

No formal roadmap was agreed beyond the individual fixes made this session — the list below is inferred from what got flagged-but-not-actioned during this work. Treat it as a proposal to confirm with the site owner, not a committed plan:

1. Decide the fate of `/industries`, `/technologies`, `/products` — build real pages, or remove/relink the nav items pointing at them.
2. Wire up (or delete) the unused `about/` components (`AboutCertifications`, `AboutGallery`, `AboutStats`, `AboutCTA`) to flesh out `/about`.
3. Make the `/contact` form actually submit somewhere (mirror the Google Apps Script approach already working on `/customer-registration`, or wire up `resend` since it's already an installed-but-unused dependency).
4. General dead-code and duplicate-asset cleanup per §4.
5. Confirm the git auto-commit tooling with the project owner before any merge from `dev` to `main`.
6. Replace hot-linked Unsplash/Pexels imagery with owned/local assets where the brand wants full control over image longevity and licensing.

---

*This file was generated by an AI coding assistant (Claude) at the end of a working session, based on direct inspection of the codebase and the conversation history available to it. Verify anything load-bearing (especially the connected-services credentials and the git auto-commit claim) before relying on it.*
