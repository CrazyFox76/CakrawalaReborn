import Link from "next/link";
import { Star, TrendingUp, ArrowRight } from "lucide-react";
import { getPopularPrograms } from "@/db/actions";

export default async function PopularPackages() {
  const programs = await getPopularPrograms();

  if (programs.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-24 dark:from-slate-950 dark:to-blue-950/20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-yellow-50 dark:bg-yellow-950/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
            <Star className="h-3.5 w-3.5 fill-white" />
            Paling Populer
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Paket{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Paling Diminati
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Program pilihan siswa dengan peminat terbanyak. Daftar sekarang dan raih hasil belajarmu.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Link
              key={p.id}
              href="/program"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 to-orange-500" />
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30">
                <TrendingUp className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-2 dark:text-slate-400">
                {p.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-orange-500 transition-all group-hover:gap-2">
                Lihat Detail
                <ArrowRight className="h-3 w-3" />
              </div>
              {i === 0 && (
                <div className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
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
