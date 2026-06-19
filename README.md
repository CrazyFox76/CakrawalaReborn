<div align="center">
  <h1>Cakrawala EduCentre</h1>
  <p>
    <strong>Lembaga Pendidikan dan Pelatihan — Les Privat SD, SMP, SMA, UTBK & Bahasa Asing</strong>
  </p>
  <p>
    <a href="https://cakrawala-educentre.vercel.app" target="_blank">🌐 cakrawala-educentre.vercel.app</a>
  </p>

  ![Next.js](https://img.shields.io/badge/Next.js%2016-000000?logo=nextdotjs&logoColor=white)
  ![React](https://img.shields.io/badge/React%2019-61DAFB?logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%20v3-06B6D4?logo=tailwindcss&logoColor=white)
  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
  ![Drizzle](https://img.shields.io/badge/Drizzle%20ORM-C5F74F?logo=drizzle&logoColor=black)
  ![NextAuth](https://img.shields.io/badge/NextAuth%20v5-000000?logo=auth0&logoColor=white)
  ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

  <br/>

  <img src="https://img.shields.io/github/stars/CrazyFox76/CakrawalaReborn?style=social" alt="Stars" />
  <img src="https://img.shields.io/github/forks/CrazyFox76/CakrawalaReborn?style=social" alt="Forks" />
  <img src="https://img.shields.io/github/contributors/CrazyFox76/CakrawalaReborn?style=social" alt="Contributors" />
</div>

---

## 📋 Daftar Isi

- [Tentang](#-tentang)
- [Fitur](#-fitur)
- [Tech Stack](#-tech-stack)
- [Halaman](#-halaman)
- [Struktur Proyek](#-struktur-proyek)
- [Database Schema](#-database-schema)
- [Memulai](#-memulai)
- [Environment Variables](#-environment-variables)
- [Scripts](#-scripts)
- [Lisensi](#-lisensi)
- [Kontak](#-kontak)

---

## 🏫 Tentang

**Cakrawala EduCentre** adalah platform landing page resmi untuk lembaga pendidikan dan pelatihan yang berkomitmen mencetak generasi unggul dan kompeten. Dibangun dengan performa tinggi menggunakan **Next.js 16** + **React 19**, dengan konten dinamis dari **PostgreSQL** melalui **Drizzle ORM**.

### ✨ Highlights

- ⚡ **Next.js 16** — App Router, Server Components, Streaming
- 🎨 **Tailwind CSS v3** — Responsive, dark mode, utility-first
- 🗄️ **PostgreSQL + Drizzle ORM** — Type-safe database queries
- 🔐 **NextAuth v5** — Authentication system (credentials)
- 📱 **Fully Responsive** — Mobile-first, touch-friendly
- 🌙 **Dark Mode** — next-themes with system preference
- 📊 **Admin Dashboard** — Registration management, voucher system
- 🔍 **SEO Optimized** — Metadata, JSON-LD, OG images, sitemap, robots
- 📲 **PWA Ready** — Manifest, standalone mode, icons
- 🧪 **E2E Tests** — Playwright with 17+ tests across critical paths
- ♿ **Accessibility** — jsx-a11y linting, axe-core audits
- 🔄 **CI/CD** — GitHub Actions (lint → test → build)

---

## 🎯 Fitur

### Untuk Pengunjung
| Fitur | Deskripsi |
|-------|-----------|
| 🏠 **Beranda** | Hero section, program unggulan, tentang kami, tutor, testimoni, blog, FAQ, CTA |
| 📚 **Program** | 17+ program bimbingan belajar (SD, SMP, SMA, UTBK, Bahasa Asing) |
| 📝 **Blog Edukasi** | Artikel-artikel edukatif dan tips belajar |
| 💰 **CakraPoints** | Sistem poin loyalitas dengan reward menarik |
| 🎟️ **Voucher** | Kode diskon dan promo spesial |
| 📞 **Konsultasi WA** | Floating WhatsApp widget untuk pendaftaran cepat |
| 🔎 **Pencarian** | Cari program dan artikel dengan cepat |
| 🎯 **Screening Akademik** | Tes penempatan untuk menentukan level yang tepat |

### Platform-wide
| Fitur | Deskripsi |
|-------|-----------|
| 🖼️ **OG Images** | Dynamic Open Graph images per page & per blog post |
| 📲 **PWA** | Manifest, standalone display, theme-color |
| ♿ **Accessibility** | ESLint jsx-a11y rules + axe-core automated audits |
| 🔄 **CI/CD** | GitHub Actions — lint → test → build on every push |
| 🧪 **E2E Tests** | Playwright — 17+ tests across all critical paths |

### Untuk Admin
| Fitur | Deskripsi |
|-------|-----------|
| 🔐 **Login** | Autentikasi admin dengan NextAuth v5 |
| 📋 **Pendaftaran** | Manajemen data pendaftaran siswa |
| 🎟️ **Voucher** | Generate dan manage kode voucher diskon |
| 📊 **Database** | CRUD operations via Drizzle ORM |
| 🧑‍💼 **Manajemen Konten** | Testimoni, blog, program dari database |

---

## 🛠️ Tech Stack

### Frontend
| Teknologi | Kegunaan |
|-----------|----------|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v3](https://tailwindcss.com/) | Styling & responsive design |
| [Lucide React](https://lucide.dev/) | Icons |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark mode |

### Backend & Database
| Teknologi | Kegunaan |
|-----------|----------|
| [PostgreSQL](https://www.postgresql.org/) | Database |
| [Drizzle ORM](https://orm.drizzle.team/) | Type-safe SQL ORM |
| [NextAuth v5](https://authjs.dev/) | Authentication |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Password hashing |
| [Zod](https://zod.dev/) | Schema validation |
| [sanitize-html](https://github.com/apostrophecms/sanitize-html) | XSS prevention |

### DevOps & Tooling
| Teknologi | Kegunaan |
|-----------|----------|
| [Vercel](https://vercel.com/) | Deployment & hosting |
| [Vitest](https://vitest.dev/) | Unit testing |
| [Playwright](https://playwright.dev/) | E2E testing |
| [ESLint](https://eslint.org/) | Code linting (incl. jsx-a11y) |
| [axe-core](https://www.deque.com/axe/) | Accessibility audits |
| [Sharp](https://sharp.pixelplumbing.com/) | Image optimization |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |

---

## 📄 Halaman

| Route | Deskripsi | Konten Dinamis |
|-------|-----------|:---:|
| `/` | **Beranda** — Hero, About, Programs, Why Us, Tutors, Testimonials, Blog, FAQ, CTA | ✅ |
| `/program/[slug]` | **Detail Program** — 17+ program bimbingan | ✅ |
| `/blog` | **Blog Index** — Daftar artikel edukasi | ✅ |
| `/blog/[slug]` | **Detail Artikel** — Konten blog lengkap | ✅ |
| `/tentang-kami` | **Tentang Kami** — Profil lembaga | ❌ |
| `/daftar` | **Pendaftaran** — Form registrasi siswa baru | ✅ |
| `/harga` | **Harga** — Info biaya dan paket | ❌ |
| `/biaya` | **Rincian Biaya** — Detail pricing | ❌ |
| `/screening` | **Screening Test** — Tes penempatan akademik | ❌ |
| `/free-trial-bimbel` | **Free Trial** — Coba gratis bimbel | ❌ |
| `/karir` | **Karir** — Info lowongan kerja | ❌ |
| `/search` | **Pencarian** — Cari program & blog | ✅ |
| `/login` | **Admin Login** — Dashboard authentication | ✅ |

---

## 📁 Struktur Proyek

```
src/
├── app/                     # Next.js 16 App Router pages
│   ├── api/                 # API Routes (auth, blog, programs, etc.)
│   ├── blog/                # Blog pages
│   │   ├── [slug]/
│   │   │   ├── opengraph-image.tsx   # Dynamic OG image per post
│   │   │   └── twitter-image.tsx     # Twitter card per post
│   ├── program/             # Program detail pages
│   ├── daftar/              # Registration form
│   ├── screening/           # Academic screening
│   ├── opengraph-image.tsx  # Default OG image
│   ├── twitter-image.tsx    # Default Twitter card
│   ├── error.tsx            # Error boundary
│   ├── loading.tsx          # Loading state
│   ├── layout.tsx           # Root layout (metadata, GA, theme, manifest)
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── daftar-form.tsx      # Registration form wrapper
│   ├── daftar-form-view.tsx # Registration form UI
│   ├── daftar-invoice-view.tsx # Invoice after registration
│   ├── programs.tsx         # Programs listing (from JSON data)
│   ├── header.tsx           # Navigation header
│   ├── hero.tsx             # Hero section
│   ├── footer.tsx           # Footer
│   ├── tutors.tsx           # Tutor cards
│   ├── blog-preview.tsx     # Blog preview section
│   ├── testimonials.tsx     # Testimonials carousel
│   ├── faq.tsx              # FAQ accordion
│   ├── cakrapoints.tsx      # CakraPoints system
│   └── ...                  # Other components
├── data/                    # Static data
│   ├── programs-data.json   # Programs data (extracted from ts)
│   ├── passing-grades-data.json # Passing grades data
├── db/                      # Database layer
│   ├── schema.ts            # Drizzle schema definitions
│   ├── index.ts             # Database connection
│   ├── actions.ts           # Server actions (CRUD)
│   ├── seed.ts              # Database seed script
│   └── types.ts             # TypeScript types
├── lib/                     # Utilities & helpers
│   ├── load-google-font.ts  # Font loader for OG images
│   └── price-utils.ts       # Price calculation helpers
├── test/                    # Test files
│   ├── setup.ts             # Vitest setup
│   ├── components.test.tsx  # Component smoke tests
│   ├── data.test.ts         # Data layer tests
│   ├── json-data.test.ts    # JSON data integrity tests
│   ├── terbilang.test.ts    # Number-to-words tests
│   └── a11y-setup.ts        # Accessibility audit helpers
├── middleware.ts            # Next.js middleware
├── e2e/                     # Playwright E2E tests
│   ├── a11y.spec.ts         # Accessibility audits
│   ├── homepage.spec.ts     # Homepage tests
│   ├── blog.spec.ts         # Blog tests
│   ├── program.spec.ts      # Program page tests
│   ├── register.spec.ts     # Registration flow tests
│   └── navigation.spec.ts   # Navigation tests
├── public/                  # Static assets
│   ├── manifest.json        # PWA manifest
│   └── icon.svg             # PWA icon
├── .github/workflows/       # CI/CD
│   └── ci.yml               # GitHub Actions (lint → test → build)
```

---

## 🗃️ Database Schema

```
📦 Registrations       — Form pendaftaran siswa
📦 Users               — Admin users (NextAuth)
📦 Accounts            — OAuth accounts (NextAuth)
📦 Sessions            — User sessions (NextAuth)
📦 VerificationTokens  — Email verification (NextAuth)
📦 Vouchers            — Kode diskon & promo
📦 Leads               — Hero lead capture
```

---

## 🚀 Memulai

### Prerequisites

- **Node.js** 18+ (recommended: 22 LTS)
- **PostgreSQL** 14+
- **npm** or **yarn**

### Installation

```bash
# 1. Clone repository
git clone https://github.com/CrazyFox76/CakrawalaReborn.git
cd CakrawalaReborn

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env
# Edit .env with your database URL

# 4. Push database schema
npm run db:push

# 5. Seed database (optional)
npm run db:seed

# 6. Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

---

## 🔐 Environment Variables

| Variable | Deskripsi | Default |
|----------|-----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres@localhost:5432/cakrawala` |
| `AUTH_SECRET` | NextAuth encryption secret | _(required)_ |
| `NEXT_PUBLIC_GA_ID` | Google Analytics tracking ID | `G-XXXXXXXXXX` |

---

## 📜 Scripts

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test:e2e:ui` | Run Playwright tests with UI mode |
| `npm run db:push` | Push schema to database |
| `npm run db:seed` | Seed database with initial data |
| `npm run db:studio` | Open Drizzle Studio |

---

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Kontak

**Cakrawala EduCentre**

- 🌐 Website: [cakrawala-educentre.vercel.app](https://cakrawala-educentre.vercel.app)
- 📧 Email: _(coming soon)_
- 💬 WhatsApp: [+6281324868790](https://wa.me/6281324868790)
- 📍 Lokasi: Jl. Bayan II No.7, Mustikajaya, Kota Bekasi, Jawa Barat 17158

**Developer**

- 🐙 GitHub: [@CrazyFox76](https://github.com/CrazyFox76)

---

<div align="center">
  <sub>Built with ❤️ using Next.js 16, React 19, TypeScript & PostgreSQL</sub>
  <br/>
  <sub>© 2024-2025 Cakrawala EduCentre. All rights reserved.</sub>
</div>
