import { Search, Compass, GraduationCap } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Cek Potensi",
    desc: "Ikuti screening akademik gratis untuk tahu peluangmu di PTN impian dan jurusan yang paling cocok.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Dapat Arahan",
    desc: "Konselor kami susun roadmap belajar personal sesuai hasil screening, target, dan kebutuhanmu.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Mulai Pendampingan",
    desc: "Belajar 1-on-1 dengan tutor profesional. Pantau progress dan raih PTN impianmu.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-blue-300">
            <GraduationCap className="h-3.5 w-3.5" />
            Cara Kerja
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Mulai dalam{" "}
            <span className="text-accent">3 Langkah</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Tidak perlu bingung. Kami bantu dari awal sampai siap menghadapi seleksi PTN impian.
          </p>
        </div>

        <div className="relative mt-12 grid gap-8 sm:mt-16 lg:grid-cols-3">
          <div className="absolute left-[16.5%] right-[16.5%] top-8 hidden h-px bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 lg:block" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary shadow-sm sm:h-20 sm:w-20">
                  <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                </div>
                <span className="mt-4 text-[11px] font-bold uppercase tracking-widest text-accent">
                  Langkah {step.number}
                </span>
                <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/screening"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-gold-600 hover:shadow-md"
          >
            Mulai Cek Potensi Gratis
            <GraduationCap className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
