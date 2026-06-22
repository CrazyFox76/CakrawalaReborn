# Handoff — Landing Page Redesign

## State: READY TO EXECUTE (user said "gas")

## Project Context
- **Project:** Cakrawala Reborn — Next.js 16, Tailwind CSS v3, shadcn/ui, Drizzle ORM, PostgreSQL
- **CWD:** `/home/w/Kerja/Projects/CakrawalaReborn`
- **Branch:** `main`

## Design Brief (by user)
Full creative brief is in the conversation history. Key points:
- **Primary CTA:** "Cek Potensi Gratis" — everything revolves around this
- **Brand positioning:** Education guidance platform, not just bimbel
- **Audience:** Siswa, calon mahasiswa, orang tua, orang bingung
- **Personality:** Trusted, Smart, Guiding, Modern, Encouraging
- **Tone:** Jelas, tidak terlalu formal, edukatif, meyakinkan
- **Visual:** Academic Premium + Interactive Guidance — Navy dominant, Gold accent, white/off-white bg
- **Light + Dark mode** required (existing via next-themes)
- **Mobile-first priority**

## Final Section Order (agreed)

1. **Header** — rewrite, simple menu (Program, Screening, Testimoni, FAQ), CTA "Cek Potensi Gratis"
2. **Hero** — rewrite, headline baru, CTA "Cek Potensi Gratis", dashboard mockup placeholder
3. **Audience Selector** — NEW, tab: Siswa/Mahasiswa/Orang Tua/Masih Bingung
4. **PopularPackages** — KEEP as-is
5. **About** — KEEP as-is
6. **Programs Overview** — rewrite from current Programs component
7. **Screening Preview** — NEW, mini interactive (input nilai + jenjang → top 3 hasil + CTA ke `/screening`)
8. **Why Choose Us** — rewrite, guidance-focused angle
9. **Social Proof** — rewrite, gabung testimoni + stats (1200+ students, etc.)
10. **CakraPointsPromo** — KEEP as-is
11. **CakraPoints** — KEEP as-is
12. **3-Step Process** — NEW (Cek Potensi → Dapat Arahan → Mulai Pendampingan)
13. **FAQ** — rewrite, simplified
14. **CtaConsult** — KEEP as-is
15. **Final CTA** — NEW, closing section with "Cek Potensi Gratis"
16. **MapSection** — KEEP as-is
17. **Footer** — rewrite, 3 kolom, cleaner
18. **WaFloating** — KEEP
19. **BackToTop** — KEEP

## Files to Create
- `src/components/audience-selector.tsx`
- `src/components/screening-preview.tsx`
- `src/components/programs-overview.tsx`
- `src/components/social-proof.tsx`
- `src/components/process-section.tsx`
- `src/components/cta-final.tsx`

## Files to Rewrite
- `src/app/page.tsx` — total layout & section ordering + data fetching
- `src/components/header.tsx` — simpler menu, CTA change
- `src/components/hero.tsx` — new headline + CTA
- `src/components/programs.tsx` → rename/move to programs-overview
- `src/components/why-us.tsx` — new angle
- `src/components/faq.tsx` — simplified
- `src/components/testimonials.tsx` → merge into social-proof.tsx
- `src/components/footer.tsx` — cleaner

## Files to Keep As-Is
- `src/components/popular-packages.tsx`
- `src/components/about.tsx`
- `src/components/cakrapoints-promo.tsx`
- `src/components/cakrapoints.tsx`
- `src/components/cta-consult.tsx`
- `src/components/map-section.tsx`
- `src/components/reveal.tsx`
- `src/components/back-to-top.tsx`
- `src/components/wa-floating.tsx`

## Files to Remove from Landing Page
- `blog-preview.tsx` → only on `/blog`
- `tutors.tsx` → separate page

## Key Data Files (read before coding)
- `src/data/programs.ts` + `src/data/programs-data.json` — 63 programs, 15 brands
- `src/data/testimonials.ts` — 6 testimonials
- `src/data/faqs.ts` — 7 FAQs
- `src/data/why-us.ts` — 6 reasons
- `src/data/about-features.ts` — 4 features
- `src/data/cakra-points.ts` — 3 stats, 4 rewards
- `src/data/brands.ts` — 15 brands with categories
- `src/data/passing-grades-data.json` — 300+ PTN entries (for screening preview)
- `src/data/tutors.ts` — 4 tutors

## Existing Components Structure (reference)
- Current `page.tsx` layout pattern: `<Reveal>` wraps each section, server component fetches data in parallel with `Promise.all`
- Current `hero.tsx`: dark gradient bg, countdown timer, lead form (WA), student cards grid
- Current `header.tsx`: sticky, dropdown menus (Produk/Program), mobile hamburger, theme toggle, CTA "Daftar"
- Current `footer.tsx`: dark gradient, 4 columns, social links

## Pending from User
- **Aset dashboard mockup** untuk hero — user said "nanti saya kasih". Use CSS placeholder for now.
- If unsure about any section positioning or content, ask user.

## Design Tokens
- `primary: #263559` (deep navy) — `primary-light: #3b5282`
- `accent: #D9A955` (gold)
- Custom `blue` and `gold` scales in tailwind.config.ts
- OKLCH CSS variables in globals.css
- Geist font (variable `--font-sans`)
- Glassmorphism: `.glass`, `.glass-strong`
- Utility: `.no-scrollbar`, `.card-hover`, `.blob`, `.dot-pattern`, `.reveal`, `.gradient-text`

## Run Before Committing
```bash
npm run lint
npm run typecheck  # or tsc --noEmit
npm run build
```

## ⚠️ CRITICAL: FRESH DESIGN — NO OLD LAYOUT

**Jangan gunakan layout/styling lama sebagai basis.** Semua komponen harus ditulis dari awal dengan pendekatan visual baru. Bahkan section yang "dipertahankan" (PopularPackages, About, CakraPointsPromo, etc.) harus dapat **fresh visual treatment** — content-nya boleh sama, tapi layout, spacing, card style, typography, warna all new.

Prinsip:
- Jangan liat file .tsx yang lama pas bikin yang baru (kecuali untuk data fetching pattern)
- Prioritas 1: design brief. Prioritas 2: kreativitas sendiri
- Gapake gradient biru2 tua di hero (itu gaya lama). Hero harus terasa baru
- Gapake card style yang sama. Cari pendekatan layout baru
- Yang penting: **konsisten dalam satu design language baru**
- Referensi visual: editorial, clean, smart dashboard feel

## Vibe
Design harus terasa **premium, clean, terpercaya** tapi tetap **approachable**. Bukan seperti website sekolah jadul, bukan juga seperti startup tech yang dingin. Landing page harus menjawab: "Ini tempat apa? Cocok untuk siapa? Kenapa harus percaya? Klik apa sekarang?"
