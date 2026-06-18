import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ScreeningRaport from "@/components/screening-raport";
import { getPassingGrades } from "@/db/actions";

export const metadata: Metadata = {
  title: "Cek Peluang Masuk PTN | Cakrawala EduCentre",
  description: "Cek peluang kamu diterima di PTN favorit berdasarkan nilai raport. Gratis!",
};

export default async function ScreeningPage() {
  const rows = await getPassingGrades();
  const passingGrades = rows.map((r) => ({
    university: r.university,
    program: r.program,
    grade: r.grade,
    category: r.category,
    peminat: r.peminat,
  }));
  const universities = [...new Set(passingGrades.map((p) => p.university))].sort();
  const categories = [...new Set(passingGrades.map((p) => p.category))];

  return (
    <div className="min-h-dvh bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors sm:mb-6 sm:text-sm hover:text-primary dark:text-slate-400 dark:hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Kembali ke Beranda
        </Link>

        <ScreeningRaport
          passingGrades={passingGrades}
          universities={universities}
          categories={categories}
        />
      </div>
    </div>
  );
}
