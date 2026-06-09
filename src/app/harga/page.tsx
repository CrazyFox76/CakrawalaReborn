import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Harga Paket Les | Cakrawala EduCentre",
  description: "Informasi harga paket les privat SD, SMP, SMA, dan umum. Biaya terjangkau dengan kualitas terbaik.",
};

const JENJANG = [
  {
    label: "PAUD/TK",
    harga: { "6 Sesi": 540000, "12 Sesi": 960000, "24 Sesi": 1680000 },
    rekomendasi: "6 Sesi",
  },
  {
    label: "SD",
    harga: { "6 Sesi": 600000, "12 Sesi": 1080000, "24 Sesi": 1920000 },
    rekomendasi: "12 Sesi",
  },
  {
    label: "SMP",
    harga: { "6 Sesi": 720000, "12 Sesi": 1260000, "24 Sesi": 2280000 },
    rekomendasi: "12 Sesi",
  },
  {
    label: "SMA",
    harga: { "6 Sesi": 840000, "12 Sesi": 1440000, "24 Sesi": 2640000 },
    rekomendasi: "12 Sesi",
  },
  {
    label: "Umum/Mahasiswa",
    harga: { "6 Sesi": 900000, "12 Sesi": 1560000, "24 Sesi": 2880000 },
    rekomendasi: "12 Sesi",
  },
];

function fmtRupiah(n: number) {
  return `Rp ${n.toLocaleString("id-ID")}`;
}

export default function Harga() {
  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors sm:mb-6 sm:text-sm hover:text-primary dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali
        </Link>

        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Harga Paket Les Privat
          </h1>
          <p className="mt-3 text-sm text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Pilih paket sesuai kebutuhan. Biaya per sesi sudah termasuk modul & laporan belajar.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {JENJANG.map((j) => {
            const entries = Object.entries(j.harga);
            return (
              <div
                key={j.label}
                className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6 dark:border-slate-700/50 dark:bg-slate-800/50"
              >
                <h3 className="text-center text-lg font-bold text-primary">{j.label}</h3>
                <ul className="mt-4 space-y-3">
                  {entries.map(([sesi, harga]) => (
                    <li
                      key={sesi}
                      className={`rounded-xl border p-3 text-center ${
                        sesi === j.rekomendasi
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-zinc-100 dark:border-slate-700"
                      }`}
                    >
                      <div className="text-xs font-semibold text-zinc-900 dark:text-slate-200">{sesi}</div>
                      <div className="mt-0.5 text-sm font-bold text-primary">{fmtRupiah(harga)}</div>
                      <div className="text-[10px] text-zinc-400">
                        {fmtRupiah(Math.round(harga / parseInt(sesi)))}/sesi
                      </div>
                    </li>
                  ))}
                </ul>
                {j.label === j.rekomendasi && (
                  <div className="mt-2 text-center text-[10px] font-medium text-accent">⭐ Paling Populer</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-center sm:mt-12 sm:p-8 dark:border-slate-700 dark:bg-slate-800/50">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-slate-100">Siap Mulai Belajar?</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-slate-400">
            Daftar sekarang dan dapatkan konsultasi gratis dengan tim kami.
          </p>
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
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:border-primary hover:text-primary sm:w-auto dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
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
