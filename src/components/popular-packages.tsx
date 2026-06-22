import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { getPopularPrograms } from "@/data/programs";

export default async function PopularPackages() {
  const programs = await getPopularPrograms();

  if (programs.length === 0) return null;

  return (
    <section className="bg-slate-50 py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-blue-300">
            <TrendingUp className="h-3.5 w-3.5" />
            Paling Diminati
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Program{" "}
            <span className="text-accent">Populer</span>{" "}
            Tahun Ini
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Program pilihan dengan peminat terbanyak. Daftar dan raih hasil belajarmu.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Link
              key={p.id}
              href="/program"
              className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-900 dark:ring-slate-700/50"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 line-clamp-2 dark:text-slate-400">
                {p.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                Lihat Detail
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
              {i === 0 && (
                <div className="mt-3 inline-flex rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                  Terlaris
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
