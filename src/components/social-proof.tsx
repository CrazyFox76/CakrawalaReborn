"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Quote, Star, Award, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const step = end / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += step;
            if (current >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{count.toLocaleString("id-ID")}{suffix}</span>;
}

const statsRows = [
  { value: 1200, suffix: "+", label: "Siswa Aktif" },
  { value: 98, suffix: "%", label: "Kepuasan" },
  { value: 50, suffix: "+", label: "Tutor Profesional" },
  { value: 15, suffix: "", label: "Cabang" },
];

export default function SocialProof({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const total = testimonials.length;

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? total - 1 : c - 1)), [total]);
  const next = useCallback(() => setCurrent((c) => (c === total - 1 ? 0 : c + 1)), [total]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, next, total]);

  const t = testimonials[current];

  return (
    <section id="testimoni" className="scroll-mt-20 bg-white py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-blue-300">
            <Award className="h-3.5 w-3.5" />
            Bukti Nyata
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Dipercaya{" "}
            <span className="text-accent">1.200+</span>{" "}
            Keluarga
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Hasil nyata dan kepercayaan dari siswa serta orang tua adalah kebanggaan terbesar kami.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {statsRows.map((s) => (
            <div key={s.label} className="rounded-xl bg-slate-50 p-5 text-center dark:bg-slate-900">
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                <Counter end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Testimonial"
          tabIndex={-1}
        >
          <div className="rounded-xl bg-slate-50 p-6 shadow-sm sm:p-8 dark:bg-slate-900">
            <Quote className="mb-4 h-8 w-8 text-accent/30" />
            <div className="mb-4 flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-base leading-relaxed text-slate-700 italic sm:text-lg dark:text-slate-300">
              &ldquo;{t.content}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button onClick={prev} className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-600 dark:border-slate-700 dark:hover:border-slate-600" aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
            <button onClick={next} className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-600 dark:border-slate-700 dark:hover:border-slate-600" aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
