import Link from "next/link";
import { ArrowRight, BookOpen, Code, Globe, Baby, Monitor, Users, Handshake, Layers } from "lucide-react";
import type { BrandWithPrograms } from "@/db/types";

const categories: Record<string, { icon: typeof BookOpen; label: string; desc: string }> = {
  akademik: { icon: BookOpen, label: "Bimbel & Akademik", desc: "Les privat, bimbingan UTBK, persiapan ujian sekolah" },
  bahasa: { icon: Globe, label: "Bahasa", desc: "Inggris, Mandarin, dan bahasa asing lainnya" },
  anak: { icon: Baby, label: "Anak & Kids", desc: "Program edukasi interaktif untuk buah hati" },
  skills: { icon: Code, label: "Tech & Skills", desc: "Coding, desain, AI, dan keterampilan digital" },
  tryout: { icon: Monitor, label: "Tryout & Ujian", desc: "Simulasi UTBK, CPNS, dan ujian kedinasan" },
  layanan: { icon: Handshake, label: "Layanan & Kemitraan", desc: "Kemitraan sekolah dan layanan edukatif" },
};

export default function ProgramsOverview({ brands }: { brands: BrandWithPrograms[] }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-blue-300">
            <Layers className="h-3.5 w-3.5" />
            Program
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Pilih{" "}
            <span className="text-accent">Kategori</span>{" "}
            Belajarmu
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Dari bimbel akademik hingga coding, kami punya program yang sesuai dengan kebutuhanmu.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(categories).map(([key, cat]) => {
            const Icon = cat.icon;
            const categoryBrands = brands.filter((b) => b.category === key);
            const programCount = categoryBrands.reduce((acc, b) => acc + b.programs.length, 0);

            return (
              <Link
                key={key}
                href="/program"
                className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-900 dark:ring-slate-700/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary shadow-sm transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.label}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{cat.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {categoryBrands.slice(0, 4).map((brand) => (
                    <span key={brand.slug} className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      {brand.name}
                    </span>
                  ))}
                  {categoryBrands.length > 4 && (
                    <span className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                      +{categoryBrands.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                  <span className="text-xs text-slate-400">{programCount} program</span>
                  <span className="flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
                    Lihat
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
