import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MessageCircle, Zap, Clock, Users, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Trial Bimbel Gratis | Cakrawala EduCentre",
  description: "Coba gratis kelas bimbel Cakrawala EduCentre. Konsultasi kebutuhan belajar, kenali tutor, dan rasakan metode belajar kami tanpa biaya!",
  openGraph: {
    title: "Free Trial Bimbel Gratis | Cakrawala EduCentre",
    description: "Coba gratis kelas bimbel tanpa biaya. SD, SMP, SMA, UTBK, Bahasa Asing.",
    locale: "id_ID",
    siteName: "Cakrawala EduCentre",
  },
};

const benefits = [
  { icon: Users, title: "Bertemu Tutor Langsung", desc: "Kenali gaya mengajar tutor sebelum memutuskan" },
  { icon: Clock, title: "Sesi 30-60 Menit", desc: "Waktu cukup untuk merasakan metode belajar" },
  { icon: Monitor, title: "Online atau Offline", desc: "Bisa trial via Zoom atau tatap muka" },
  { icon: CheckCircle, title: "Tanpa Komitmen", desc: "Tidak ada kewajiban lanjut setelah trial" },
];

const steps = [
  { num: "01", title: "Hubungi Kami", desc: "WhatsApp atau daftar lewat form di bawah" },
  { num: "02", title: "Konsultasi Kebutuhan", desc: "Tim kami akan cocokkan tutor & jadwal" },
  { num: "03", title: "Ikuti Trial Gratis", desc: "Nikmati sesi belajar gratis tanpa biaya" },
];

export default function FreeTrialBimbel() {
  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-primary sm:mb-6 sm:text-sm dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali ke Beranda
        </Link>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
              <Zap className="h-3.5 w-3.5" />
              Gratis
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Coba Kelas{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Gratis
              </span>{" "}
              Sekarang!
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-slate-400">
              Belum yakin? Rasakan langsung metode belajar Cakrawala EduCentre dengan trial
              gratis tanpa biaya. Kenali tutor, lihat materi, dan buktikan sendiri.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 dark:bg-green-900/30">
                  <b.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-slate-100">{b.title}</h3>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-slate-400">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-center text-lg font-bold text-zinc-900 sm:text-xl dark:text-slate-100">
              Cara Dapatkan Trial Gratis
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {steps.map((s) => (
                <div key={s.num} className="relative flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-sm font-extrabold text-white shadow-md">
                    {s.num}
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-zinc-900 dark:text-slate-100">{s.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-slate-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/daftar"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <Zap className="h-4 w-4" />
              Daftar Trial Gratis
            </Link>
            <a
              href="https://wa.me/6281324868790?text=Halo%20saya%20tertarik%20trial%20gratis%20bimbel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-green-500 hover:text-green-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasi via WA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
