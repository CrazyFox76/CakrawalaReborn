import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, GraduationCap, Users, Target, Award, Heart, Eye, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | Cakrawala EduCentre",
  description: "Lembaga Pendidikan dan Pelatihan yang berkomitmen mencetak generasi unggul dan kompeten. Berdiri sejak 2016, telah membimbing 500+ siswa.",
};

export default function TentangKami() {
  const stats = [
    { icon: GraduationCap, label: "Tahun Berdiri", value: "10+" },
    { icon: Users, label: "Siswa Dibimbing", value: "500+" },
    { icon: BookOpen, label: "Program", value: "40+" },
    { icon: Award, label: "Tutor Profesional", value: "50+" },
  ];

  const values = [
    { icon: Heart, title: "Komitmen Mutu", desc: "Setiap program dirancang dengan standar kualitas tertinggi untuk hasil belajar yang optimal." },
    { icon: Eye, title: "Inovasi Berkelanjutan", desc: "Kami terus berinovasi dalam metode pembelajaran, kurikulum, dan teknologi pendidikan." },
    { icon: Target, title: "Fokus pada Siswa", desc: "Pendekatan personal memastikan setiap siswa mendapat perhatian yang sesuai kebutuhannya." },
    { icon: Users, title: "Kolaborasi", desc: "Bekerja sama dengan sekolah, institusi, dan orang tua untuk mendukung perkembangan siswa." },
  ];

  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors sm:mb-6 sm:text-sm hover:text-primary dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali ke Beranda
        </Link>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-10 dark:border-slate-800 dark:bg-slate-900/50">
          <h1 className="text-xl font-bold text-primary sm:text-4xl">Tentang Cakrawala EduCentre</h1>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-600 sm:mt-8 sm:space-y-6 sm:text-base dark:text-slate-400">
            <p>
              <strong className="text-zinc-900 dark:text-slate-100">Cakrawala EduCentre</strong> adalah Lembaga Pendidikan dan Pelatihan yang berkomitmen mencetak generasi unggul dan kompeten untuk masa depan yang lebih baik.
            </p>
            <p>
              Berdiri sejak 2016, kami telah membantu ratusan siswa dari berbagai jenjang pendidikan — mulai dari PAUD, SD, SMP, SMA, hingga persiapan perguruan tinggi dan karir profesional.
            </p>
            <p>
              Kami percaya setiap anak memiliki potensi luar biasa yang perlu dibimbing dengan cara yang tepat. Dengan tutor profesional, kurikulum terarah, dan pendekatan personal, kami hadir sebagai mitra pendidikan terpercaya bagi orang tua dan siswa.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-blue-50 p-4 text-center dark:bg-blue-900/20">
                <s.icon className="mx-auto h-6 w-6 text-primary" />
                <div className="mt-2 text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-zinc-500 dark:text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-xl font-bold text-zinc-900 dark:text-slate-100">Visi & Misi</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
              <h3 className="font-semibold text-zinc-900 dark:text-slate-100">Visi</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-slate-400">Menjadi lembaga pendidikan dan pelatihan terdepan yang mencetak generasi unggul, kompeten, dan berkarakter untuk masa depan Indonesia.</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
              <h3 className="font-semibold text-zinc-900 dark:text-slate-100">Misi</h3>
              <ul className="mt-1 space-y-1 text-sm text-zinc-600 dark:text-slate-400 list-disc pl-5">
                <li>Menyediakan layanan pendidikan berkualitas yang terjangkau</li>
                <li>Mengembangkan metode pembelajaran inovatif yang sesuai perkembangan zaman</li>
                <li>Membangun karakter dan soft skill siswa selain akademik</li>
                <li>Menjalin kemitraan strategis dengan sekolah dan institusi pendidikan</li>
              </ul>
            </div>
          </div>

          <h2 className="mt-12 text-xl font-bold text-zinc-900 dark:text-slate-100">Nilai-Nilai Kami</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/50">
                <v.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-2 font-semibold text-zinc-900 dark:text-slate-100">{v.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-slate-400">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="https://wa.me/6281324868790" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light">
              <MessageCircle className="h-4 w-4" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
