"use client";

import { useState } from "react";
import { GraduationCap, BookOpen, Users, HelpCircle, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const audiences = [
  {
    id: "siswa",
    label: "Siswa",
    icon: GraduationCap,
    title: "Untuk Siswa SD, SMP, SMA & Gap Year",
    desc: "Butuh bantuan belajar atau bingung persiapan UTBK? Kami bantu kamu capai nilai terbaik dan lolos PTN impian.",
    perks: [
      "Les privat 1-on-1 dengan tutor lulusan PTN favorit",
      "Tryout UTBK & simulasi ujian tiap bulan",
      "Roadmap belajar personal sesuai target PTN",
    ],
    accent: "border-l-blue-500",
  },
  {
    id: "mahasiswa",
    label: "Mahasiswa",
    icon: BookOpen,
    title: "Untuk Mahasiswa",
    desc: "Skripsi buntu? Butuh bantuan bahasa asing? Atau mau upgrade skill? Kami siap bantu.",
    perks: [
      "Bimbingan skripsi & olah data statistik",
      "Kursus bahasa Inggris untuk akademik & profesional",
      "Pelatihan coding, desain, & digital skills",
    ],
    accent: "border-l-emerald-500",
  },
  {
    id: "orangtua",
    label: "Orang Tua",
    icon: Users,
    title: "Untuk Orang Tua",
    desc: "Ingin anak mendapat pendampingan belajar terbaik? Kami berikan yang terbaik untuk masa depan putra-putri Anda.",
    perks: [
      "Tutor profesional & tersertifikasi",
      "Laporan perkembangan belajar rutin",
      "Konsultasi pendidikan gratis kapan saja",
    ],
    accent: "border-l-accent",
  },
  {
    id: "bingung",
    label: "Masih Bingung",
    icon: HelpCircle,
    title: "Masih Bingung Mulai dari Mana?",
    desc: "Tenang, kami bantu temukan jurusan dan program yang paling cocok untukmu — gratis!",
    perks: [
      "Konsultasi 1-on-1 dengan konselor pendidikan",
      "Screening potensi akademik gratis",
      "Rekomendasi program belajar yang sesuai",
    ],
    accent: "border-l-purple-500",
  },
];

export default function AudienceSelector() {
  const [active, setActive] = useState("siswa");
  const current = audiences.find((a) => a.id === active)!;

  return (
    <section className="bg-white py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-blue-300">
            <Users className="h-3.5 w-3.5" />
            Untuk Siapa
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Kami Ada untuk{" "}
            <span className="text-accent">Kamu</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Apapun kebutuhan belajarmu, Cakrawala punya solusi yang tepat.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {audiences.map((a) => {
            const isActive = active === a.id;
            const Icon = a.icon;
            return (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                }`}
              >
                <Icon className="h-4 w-4" />
                {a.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8" key={active}>
          <div className={`rounded-xl bg-white shadow-sm ring-1 ring-slate-200/50 animate-fadeIn dark:bg-slate-900 dark:ring-slate-700/50`}>
            <div className={`border-l-4 ${current.accent} rounded-l-xl p-6 sm:p-8`}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{current.title}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{current.desc}</p>

              <ul className="mt-5 space-y-3">
                {current.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/screening"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-light hover:shadow-md"
                >
                  Cek Potensi Gratis
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/program"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition-all hover:border-slate-300 hover:text-slate-900 dark:border-slate-600 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-200"
                >
                  Lihat Program
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
