import { GraduationCap, Target, Users, Award } from "lucide-react";
import { aboutFeatures } from "@/data/about-features";

const iconMap: Record<string, typeof GraduationCap> = {
  GraduationCap, Target, Users, Award,
};

export default function About() {
  return (
    <section className="bg-white py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-blue-300">
            <GraduationCap className="h-3.5 w-3.5" />
            Tentang Kami
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Mengenal{" "}
            <span className="text-accent">Cakrawala</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Lembaga pendidikan yang berkomitmen mencetak generasi unggul melalui pendekatan belajar personal.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {aboutFeatures.map((f) => {
            const Icon = iconMap[f.iconName] ?? GraduationCap;
            return (
              <div
                key={f.title}
                className="rounded-xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-900 dark:ring-slate-800"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary shadow-sm">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
