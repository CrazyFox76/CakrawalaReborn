import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MessageCircle, GraduationCap, Monitor, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Bimbingan Belajar (Bimbel) | Cakrawala EduCentre",
  description: "Bimbingan belajar privat & kelompok untuk SD, SMP, SMA. Tutor profesional, kurikulum terarah, fleksibel. Tersedia online & offline.",
};

const features = [
  { icon: GraduationCap, title: "Tutor Profesional", desc: "Lulusan terbaik dari universitas ternama, berpengalaman, dan telah melalui seleksi ketat." },
  { icon: Monitor, title: "Online & Offline", desc: "Belajar via Zoom/Google Meet atau tatap muka langsung dengan guru ke rumah." },
  { icon: Users, title: "Private 1-on-1", desc: "Fokus penuh pada satu siswa, metode belajar disesuaikan dengan karakter dan kebutuhan." },
  { icon: BookOpen, title: "Kurikulum Terarah", desc: "Mengacu pada Kurikulum Merdeka dan K13 dengan penguatan konsep dan latihan soal HOTS." },
];

const programs = [
  { title: "Bimbel SD", age: "Kelas 1 - 6", items: ["Matematika, IPA, Bahasa Indonesia, Bahasa Inggris", "Calistung untuk kelas 1-3", "Persiapan ujian sekolah & ASS", "Tryout rutin tiap bulan"] },
  { title: "Bimbel SMP", age: "Kelas 7 - 9", items: ["Matematika, IPA, Bahasa Indonesia, Bahasa Inggris", "Persiapan ujian sekolah & ASPD", "Mapel IPS, PKN, Agama", "Tryout rutin & pembahasan"] },
  { title: "Bimbel SMA", age: "Kelas 10 - 12", items: ["Matematika, Fisika, Kimia, Biologi", "Bahasa Indonesia, Bahasa Inggris", "Persiapan UTBK SNBT & ujian sekolah", "Mapel lintas minat & peminatan"] },
  { title: "Bimbel Online", age: "Semua Jenjang", items: ["Belajar dari rumah via Zoom/Google Meet", "Rekaman kelas bisa diputar ulang", "Materi digital & kuis interaktif", "Jadwal fleksibel"] },
];

export default function Bimbel() {
  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-primary sm:mb-6 sm:text-sm dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali ke Beranda
        </Link>

        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Bimbingan Belajar (Bimbel)
          </h1>
          <p className="mt-3 text-sm text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Belajar lebih fokus dengan tutor profesional. Tersedia online dan offline untuk SD, SMP, SMA.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/daftar" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light">
              <CheckCircle className="h-4 w-4" />
              Daftar Sekarang
            </Link>
            <a href="https://wa.me/6281324868790" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <MessageCircle className="h-4 w-4" />
              Konsultasi Gratis
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-zinc-200 bg-white p-5 text-center sm:p-6 dark:border-slate-700 dark:bg-slate-800/50">
              <f.icon className="mx-auto h-6 w-6 text-primary sm:h-8 sm:w-8" />
              <h3 className="mt-3 text-sm font-bold text-zinc-900 sm:text-base dark:text-slate-100">{f.title}</h3>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm dark:text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14">
          <h2 className="text-lg font-bold text-primary sm:text-2xl">Program Bimbel Kami</h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-slate-400">Pilih program yang sesuai dengan jenjang pendidikan Anda.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {programs.map((prog) => (
              <div key={prog.title} className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 dark:border-slate-700 dark:bg-slate-800/50">
                <h3 className="text-base font-bold text-zinc-900 sm:text-lg dark:text-slate-100">{prog.title}</h3>
                <p className="text-xs font-semibold text-accent sm:text-sm">{prog.age}</p>
                <ul className="mt-4 space-y-2">
                  {prog.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-600 sm:text-sm dark:text-slate-400">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500 sm:h-4 sm:w-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center sm:mt-14 sm:p-8 dark:border-slate-700 dark:bg-slate-800/50">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-slate-100">Coba Gratis!</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-slate-400">Tersedia free trial 1 sesi untuk calon siswa baru. Rasakan sendiri metode belajar Cakrawala.</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/daftar" className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-yellow-600">
              <CheckCircle className="h-4 w-4" />
              Daftar Free Trial
            </Link>
            <a href="https://wa.me/6281324868790" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <MessageCircle className="h-4 w-4" />
              Tanya Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
