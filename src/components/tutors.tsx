import { Star } from "lucide-react";
import { getTutors } from "@/data/tutors";

export default async function Tutors() {
  const tutors = await getTutors();
  return (
    <section className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Tutor Profesional Kami
          </h2>
          <p className="mt-3 text-sm text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Lulusan terbaik dari universitas ternama, berpengalaman, dan
            berdedikasi tinggi.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="group rounded-2xl border border-zinc-200 bg-white p-4 text-center transition-all sm:p-6 hover:border-primary/20 hover:shadow-lg dark:border-slate-700/50 dark:bg-slate-800/50"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-sm font-bold text-white shadow-md sm:h-16 sm:w-16 sm:text-lg">
                {tutor.initials}
              </div>
              <h3 className="mt-3 text-sm font-bold text-zinc-900 sm:mt-4 sm:text-base dark:text-slate-100">
                {tutor.name}
              </h3>
              <p className="mt-0.5 text-xs font-medium text-accent sm:text-sm">
                {tutor.subject}
              </p>
              <p className="mt-1 text-[10px] text-zinc-400 sm:text-xs">{tutor.education}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500 sm:mt-3 sm:text-sm">
                {tutor.desc}
              </p>
              <div className="mt-3 flex items-center justify-center gap-1 sm:mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-gold-400 text-gold-400 sm:h-3.5 sm:w-3.5"
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
