import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MessageCircle, GraduationCap, BookOpen, ScrollText, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Biaya Les & Harga Paket | Cakrawala EduCentre",
  description: "Informasi lengkap biaya les privat, bimbel, bimbingan skripsi, dan sewa balai pertemuan. Harga terjangkau dengan kualitas terbaik.",
};

const paketLes = [
  { label: "PAUD/TK", prices: { "6 Sesi": 540000, "12 Sesi": 960000, "24 Sesi": 1680000 }, populer: "6 Sesi" },
  { label: "SD", prices: { "6 Sesi": 600000, "12 Sesi": 1080000, "24 Sesi": 1920000 }, populer: "12 Sesi" },
  { label: "SMP", prices: { "6 Sesi": 720000, "12 Sesi": 1260000, "24 Sesi": 2280000 }, populer: "12 Sesi" },
  { label: "SMA", prices: { "6 Sesi": 840000, "12 Sesi": 1440000, "24 Sesi": 2640000 }, populer: "12 Sesi" },
  { label: "Umum/Mahasiswa", prices: { "6 Sesi": 900000, "12 Sesi": 1560000, "24 Sesi": 2880000 }, populer: "12 Sesi" },
];

const rupiah = (n: number) => `Rp ${n.toLocaleString("id-ID")}`;

const layananBiaya = [
  {
    icon: GraduationCap,
    title: "Les Privat",
    description: "Biaya per sesi tergantung jenjang dan paket. Sudah termasuk modul belajar, laporan perkembangan, dan konsultasi dengan tutor.",
    link: "#les",
  },
  {
    icon: BookOpen,
    title: "Bimbingan Belajar",
    description: "Program bimbel reguler dan intensif dengan biaya paket bulanan. Termasuk tryout rutin dan pembahasan soal.",
    link: "/bimbel",
  },
  {
    icon: ScrollText,
    title: "Bimbingan Skripsi",
    description: "Biaya bimbingan skripsi dan tesis disesuaikan dengan kebutuhan — pendampingan bab 1 sampai sidang, termasuk olah data.",
    link: "/program/cakra-bimskrip",
  },
  {
    icon: Building2,
    title: "Sewa Laboratorium & Balai",
    description: "Cakrawala menyediakan ruang laboratorium komputer dan balai pertemuan untuk tryout, workshop, dan pelatihan dengan harga sewa kompetitif.",
    link: "#",
  },
];

export default function Biaya() {
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
            Informasi Biaya
          </h1>
          <p className="mt-3 text-sm text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Transparan tanpa biaya tersembunyi. Pilih layanan yang sesuai kebutuhan Anda.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {layananBiaya.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg sm:p-6 dark:border-slate-700 dark:bg-slate-800/50"
            >
              <item.icon className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
              <h3 className="mt-3 text-sm font-bold text-zinc-900 sm:text-base dark:text-slate-100">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500 sm:text-sm dark:text-slate-400">{item.description}</p>
            </Link>
          ))}
        </div>

        <div id="les" className="mt-10 scroll-mt-20 sm:mt-14">
          <h2 className="text-lg font-bold text-primary sm:text-2xl">Paket Les Privat</h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-slate-400">Pilih paket sesuai kebutuhan. Biaya per sesi sudah termasuk modul & laporan belajar.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {paketLes.map((j) => (
              <div key={j.label} className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 dark:border-slate-700/50 dark:bg-slate-800/50">
                <h3 className="text-center text-lg font-bold text-primary">{j.label}</h3>
                <ul className="mt-4 space-y-3">
                  {Object.entries(j.prices).map(([sesi, harga]) => (
                    <li
                      key={sesi}
                      className={`rounded-xl border p-3 text-center ${
                        sesi === j.populer
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-zinc-100 dark:border-slate-700"
                      }`}
                    >
                      <div className="text-xs font-semibold text-zinc-900 dark:text-slate-200">{sesi}</div>
                      <div className="mt-0.5 text-sm font-bold text-primary">{rupiah(harga)}</div>
                      <div className="text-[10px] text-zinc-400">{rupiah(Math.round(harga / parseInt(sesi)))}/sesi</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-14">
          <h2 className="text-lg font-bold text-primary sm:text-2xl">Info Tambahan</h2>
          <div className="mt-4 space-y-3">
            {[
              { q: "Apakah ada biaya pendaftaran?", a: "Tidak ada biaya pendaftaran. Anda hanya membayar biaya paket les yang dipilih." },
              { q: "Apakah bisa dicicil?", a: "Tersedia opsi cicilan untuk paket tertentu. Silakan hubungi kami untuk informasi lebih lanjut." },
              { q: "Apakah harga sudah termasuk modul?", a: "Ya, semua paket sudah termasuk modul belajar dan laporan perkembangan siswa." },
              { q: "Bagaimana cara pembayaran?", a: "Pembayaran dapat dilakukan melalui transfer bank (BCA, Mandiri, BRI) atau tunai." },
            ].map((info) => (
              <div key={info.q} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/50">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-slate-100">{info.q}</h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-slate-400">{info.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center sm:mt-14 sm:p-8 dark:border-slate-700 dark:bg-slate-800/50">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-slate-100">Siap Mulai Belajar?</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-slate-400">Daftar sekarang dan dapatkan konsultasi gratis dengan tim kami.</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/daftar"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              <CheckCircle className="h-4 w-4" />
              Daftar Sekarang
            </Link>
            <a
              href="https://wa.me/6281324868790"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <MessageCircle className="h-4 w-4" />
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
