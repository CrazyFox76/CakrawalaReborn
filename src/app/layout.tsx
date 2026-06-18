import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import ThemeProvider from "@/components/theme-provider";
import SessionProvider from "@/components/session-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cakrawala EduCentre | Les Privat Terbaik untuk SD, SMP, SMA, UTBK & Bahasa Asing",
  description:
    "Lembaga Pendidikan dan Pelatihan yang berkomitmen mencetak generasi unggul dan kompeten. Les privat SD, SMP, SMA, UTBK, dan Bahasa Asing dengan tutor profesional.",
  openGraph: {
    title: "Cakrawala EduCentre | Les Privat Terbaik",
    description:
      "Bimbingan intensif oleh tutor profesional. Jadwal fleksibel, kurikulum terarah. SD, SMP, SMA, UTBK & Bahasa Asing.",
    type: "website",
    locale: "id_ID",
    siteName: "Cakrawala EduCentre",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Cakrawala EduCentre",
      url: "https://cakrawala-educentre.vercel.app",
      logo: "https://cakrawala-educentre.vercel.app/logo.png",
      sameAs: [
        "https://wa.me/6281324868790",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Siti 2, Jl. Bayan II No.7, Mustikajaya",
        addressLocality: "Kota Bekasi",
        addressRegion: "Jawa Barat",
        postalCode: "17158",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-813-2486-8790",
        contactType: "customer service",
        availableLanguage: ["Indonesian"],
      },
    },
    {
      "@type": "Course",
      name: "Les Privat SD",
      description: "Bimbingan belajar untuk jenjang SD dengan metode fun learning.",
      provider: { "@type": "Organization", name: "Cakrawala EduCentre" },
    },
    {
      "@type": "Course",
      name: "Les Privat SMP",
      description: "Bimbingan belajar untuk jenjang SMP persiapan ujian sekolah.",
      provider: { "@type": "Organization", name: "Cakrawala EduCentre" },
    },
    {
      "@type": "Course",
      name: "Les Privat SMA & UTBK",
      description: "Bimbingan intensif persiapan UTBK SNBT dan ujian sekolah.",
      provider: { "@type": "Organization", name: "Cakrawala EduCentre" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.className} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}');
            `,
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-white text-zinc-800 antialiased dark:bg-slate-950 dark:text-slate-200">
        <SessionProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
