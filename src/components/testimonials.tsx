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
    <section className="bg-surface py-16 sm:py-24 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Apa Kata Mereka?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-slate-400">
            Testimoni dari siswa dan orang tua yang telah merasakan langsung
            manfaat belajar di Cakrawala EduCentre.
          </p>
        </div>

        <div className="mt-12">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm sm:p-10 dark:bg-slate-800/50">
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-gold-400 text-gold-400"
                />
              ))}
            </div>
            <p className="mt-4 text-lg leading-relaxed text-zinc-700 italic dark:text-slate-300">
              &ldquo;{t.content}&rdquo;
            </p>
            <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-slate-700">
              <p className="font-semibold text-zinc-900 dark:text-slate-100">{t.name}</p>
              <p className="text-sm text-zinc-500">{t.role}</p>
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
