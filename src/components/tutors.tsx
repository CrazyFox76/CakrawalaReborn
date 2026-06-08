import { tutors } from "@/data/tutors";
import { Star } from "lucide-react";

export default function Tutors() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Tutor Profesional Kami
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Lulusan terbaik dari universitas ternama, berpengalaman, dan
            berdedikasi tinggi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tutors.map((tutor) => (
            <div
              key={tutor.name}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 text-center transition-all hover:border-primary/20 hover:shadow-lg dark:border-zinc-700/50 dark:bg-zinc-800/50"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-lg font-bold text-white shadow-md">
                {tutor.initials}
              </div>
              <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-zinc-100">
                {tutor.name}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-accent">
                {tutor.subject}
              </p>
              <p className="mt-1 text-xs text-zinc-400">{tutor.education}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {tutor.desc}
              </p>
              <div className="mt-4 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-gold-400 text-gold-400"
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
