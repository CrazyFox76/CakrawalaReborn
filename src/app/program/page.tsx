import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBrandsWithPrograms } from "@/data/brands";
import { getProgramIcon } from "@/lib/icon-map";

export const metadata: Metadata = {
  title: "Semua Program | Cakrawala EduCentre",
  description: "Jelajahi semua program bimbingan belajar, kursus bahasa, pelatihan keterampilan, dan layanan edukasi dari Cakrawala EduCentre.",
};

export default async function ProgramLanding() {
  const brands = await getBrandsWithPrograms();
  const totalPrograms = brands.reduce((a, b) => a + b.programs.length, 0);

  const categories = [
    { id: "akademik", label: "Bimbel & Akademik", desc: "Bimbingan belajar, persiapan ujian, dan pendalaman materi" },
    { id: "bahasa", label: "Bahasa", desc: "Bahasa Inggris & bahasa asing lainnya" },
    { id: "anak", label: "Anak & Kids", desc: "Program untuk PAUD, TK, dan usia dini" },
    { id: "skills", label: "Tech & Keterampilan", desc: "Coding, desain, AI, dan soft skill" },
    { id: "tryout", label: "Tryout & Ujian", desc: "Simulasi UTBK, CPNS, Kedinasan, dan psikotes" },
    { id: "layanan", label: "Layanan & Komunitas", desc: "Kemitraan, bookstore, dan program loyalitas" },
  ];

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
            Semua Program
          </h1>
          <p className="mt-3 text-sm text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Jelajahi {brands.length} brand dengan {totalPrograms} program unggulan
          </p>
        </div>

        {categories.map((cat) => {
          const catBrands = brands.filter((b) => b.category === cat.id);
          if (catBrands.length === 0) return null;
          return (
            <div key={cat.id} className="mt-10 sm:mt-14">
              <h2 className="text-lg font-bold text-zinc-900 sm:text-2xl dark:text-slate-100">
                {cat.label}
              </h2>
              <p className="mt-1 text-sm text-zinc-500 dark:text-slate-400">{cat.desc}</p>
              <div className="mt-4 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {catBrands.map((brand) => {
                  const Icon = getProgramIcon(brand.iconName);
                  return (
                    <Link
                      key={brand.slug}
                      href={`/program/${brand.slug}`}
                      className="group rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6 dark:border-slate-700 dark:bg-slate-800/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-primary sm:h-12 sm:w-12 dark:bg-blue-900/30">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-zinc-900 group-hover:text-primary sm:text-base dark:text-slate-100">
                            {brand.name}
                          </h3>
                          <p className="text-xs text-zinc-400 dark:text-slate-500">
                            {brand.programs.length} program
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
