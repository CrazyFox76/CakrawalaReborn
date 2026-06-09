import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/theme-provider";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.className} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col bg-white text-zinc-800 antialiased dark:bg-slate-950 dark:text-slate-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
