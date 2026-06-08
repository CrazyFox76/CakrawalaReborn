import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";

export default function Programs() {
  return (
    <section id="programs" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Program Unggulan Kami
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Berbagai program les privat dirancang khusus untuk setiap jenjang
            pendidikan dan kebutuhan belajar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <program.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                {program.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {program.age}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {program.description}
              </p>
              <ul className="mt-4 space-y-2">
                {program.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-sm text-zinc-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/6281324868790"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Konsultasikan Program yang Tepat
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
