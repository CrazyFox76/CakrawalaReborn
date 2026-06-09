import Link from "next/link";
import { ChevronRight, ArrowLeft, Building2, List } from "lucide-react";
import { brands } from "@/data/brands";

export default function BrandPage() {
  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Beranda
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Jelajahi Brand & Program
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-slate-400">
            Setiap brand di Cakrawala memiliki fokus dan keunggulannya masing-masing.
            Temukan program yang paling sesuai untuk Anda.
          </p>
        </div>

        <div className="space-y-8">
          {brands.map((brand) => (
            <div
              key={brand.slug}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary dark:bg-blue-900/30">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-slate-100">
                      {brand.name}
                    </h2>
                    <p className="text-xs text-zinc-400 dark:text-slate-500">
                      {brand.programs.length} program
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-slate-400">
                {brand.desc}
              </p>

              <div className="mt-5 space-y-2">
                {brand.programs.map((program) => (
                  <div
                    key={program.id}
                    className="flex items-center gap-3 rounded-xl bg-zinc-50 px-4 py-2.5 text-sm text-zinc-700 transition-colors hover:bg-blue-50 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-blue-900/20"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-zinc-200 text-[10px] font-bold text-zinc-500 dark:bg-slate-700 dark:text-slate-400">
                      {program.id}
                    </span>
                    {program.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-slate-800 dark:bg-slate-900/50">
          <p className="text-sm text-zinc-600 dark:text-slate-400">
            Tidak menemukan yang Anda cari?
          </p>
          <a
            href="https://wa.me/6281324868790"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
