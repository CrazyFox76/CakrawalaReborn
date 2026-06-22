"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const total = testimonials.length;

  const goTo = useCallback((i: number) => {
    setCurrent(i);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c === total - 1 ? 0 : c + 1));
  }, [total]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, next, total]);

  const t = testimonials[current];

  return (
    <section
      className="py-16 sm:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <Quote className="h-3.5 w-3.5" />
            Testimoni
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Apa Kata{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Mereka?
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Testimoni dari siswa dan orang tua yang telah merasakan langsung
            manfaat belajar di Cakrawala EduCentre.
          </p>
        </div>

        <div className="mt-10 animate-scale-in" key={current}>
          <div className="relative overflow-hidden rounded-2xl border border-blue-200/30 bg-gradient-to-br from-white/90 to-blue-50/30 p-6 shadow-lg shadow-blue-900/5 backdrop-blur-sm sm:p-10 dark:border-blue-800/20 dark:from-slate-900/90 dark:to-blue-950/20">
            <Quote className="absolute top-4 left-4 h-12 w-12 text-blue-200/40 dark:text-blue-800/30" />

            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-5 sm:w-5"
                />
              ))}
            </div>

            <p className="mt-4 text-base leading-relaxed text-slate-700 italic sm:mt-6 sm:text-lg dark:text-slate-300">
              &ldquo;{t.content}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-4 border-t border-blue-100/50 pt-5 sm:mt-8 sm:pt-6 dark:border-blue-900/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md sm:h-14 sm:w-14 sm:text-base">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 sm:text-base dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">{t.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-700 dark:hover:bg-blue-900/20"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-gradient-to-r from-blue-500 to-indigo-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-700 dark:hover:bg-blue-900/20"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
