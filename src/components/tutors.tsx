import { Star, GraduationCap } from "lucide-react";
import { getTutors } from "@/data/tutors";

export default async function Tutors() {
  const tutors = await getTutors();
  return (
    <section className="py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <GraduationCap className="h-3.5 w-3.5" />
            Pengajar
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Tutor{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Profesional
            </span>{" "}
            Kami
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Lulusan terbaik dari universitas ternama, berpengalaman, dan
            berdedikasi tinggi.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-6 dark:border-slate-700/50 dark:bg-slate-900/70"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-60" />
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner sm:h-20 sm:w-20 dark:from-slate-800 dark:to-slate-700">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white shadow-md transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16 sm:text-xl">
                  {tutor.initials}
                </div>
              </div>
              <h3 className="mt-4 text-center text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                {tutor.name}
              </h3>
              <p className="text-center text-sm font-semibold text-amber-600 dark:text-amber-400">
                {tutor.subject}
              </p>
              <p className="mt-1 text-center text-xs text-slate-400">
                {tutor.education}
              </p>
              <p className="mt-3 text-center text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {tutor.desc}
              </p>
              <div className="mt-4 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
