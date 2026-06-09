"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="bg-surface py-12 sm:py-24 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Apa Kata Mereka?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Testimoni dari siswa dan orang tua yang telah merasakan langsung
            manfaat belajar di Cakrawala EduCentre.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-sm sm:p-10 dark:bg-slate-800/50">
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-gold-400 text-gold-400 sm:h-5 sm:w-5"
                />
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 italic sm:mt-4 sm:text-lg dark:text-slate-300">
              &ldquo;{t.content}&rdquo;
            </p>
            <div className="mt-4 border-t border-zinc-100 pt-3 sm:mt-6 sm:pt-4 dark:border-slate-700">
              <p className="text-sm font-semibold text-zinc-900 sm:text-base dark:text-slate-100">{t.name}</p>
              <p className="text-xs text-zinc-500 sm:text-sm">{t.role}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-primary dark:hover:bg-slate-800"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "bg-zinc-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-primary dark:hover:bg-slate-800"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
