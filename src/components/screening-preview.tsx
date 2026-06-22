"use client";

import { useState, useMemo } from "react";
import { Search, ArrowRight, Sparkles, BarChart3 } from "lucide-react";
import Link from "next/link";
import { passingGrades } from "@/data/passing-grade";

const categories = ["IPA", "IPS", "Campuran"] as const;

export default function ScreeningPreview() {
  const [nilai, setNilai] = useState("");
  const [jenjang, setJenjang] = useState<"IPA" | "IPS" | "Campuran">("IPA");
  const [submitted, setSubmitted] = useState(false);

  const hasil = useMemo(() => {
    const n = parseFloat(nilai);
    if (isNaN(n) || !submitted) return [];
    return passingGrades
      .filter((pg) => pg.category === jenjang && pg.grade <= n)
      .sort((a, b) => b.grade - a.grade)
      .slice(0, 3);
  }, [nilai, jenjang, submitted]);

  return (
    <section className="bg-white py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-blue-300">
            <Search className="h-3.5 w-3.5" />
            Cek Potensi
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Lihat Peluangmu{" "}
            <span className="text-accent">Sekarang</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Masukkan nilai rata-rata dan pilih jurusan. Kami akan tunjukkan PTN yang sesuai potensimu.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200/50 dark:bg-slate-900 dark:ring-slate-700/50">
            <div className="border-b border-slate-100 px-6 py-4 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-sm">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Simulasi Passing Grade</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Cek peluang masuk PTN impian</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {!submitted ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="nilai" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Nilai Rata-rata
                    </label>
                    <input
                      id="nilai"
                      type="number"
                      min="0"
                      max="100"
                      value={nilai}
                      onChange={(e) => { setNilai(e.target.value); setSubmitted(false); }}
                      placeholder="85.5"
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                    />
                  </div>

                  <div>
                    <p className="mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">Jurusan</p>
                    <div className="flex gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => { setJenjang(cat); setSubmitted(false); }}
                          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                            jenjang === cat
                              ? "bg-primary text-white shadow-sm"
                              : "bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!nilai || parseFloat(nilai) < 0 || parseFloat(nilai) > 100}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-gold-600 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Sparkles className="h-4 w-4" />
                    Cek Potensiku
                  </button>
                </form>
              ) : (
                <div className="animate-fadeIn space-y-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 dark:text-white">Top 3 Rekomendasi</h4>
                    <button onClick={() => setSubmitted(false)} className="text-xs font-medium text-accent underline">
                      Ubah Nilai
                    </button>
                  </div>

                  {hasil.length > 0 ? (
                    <div className="space-y-3">
                      {hasil.map((h, i) => (
                        <div
                          key={`${h.university}-${h.program}`}
                          className="flex items-center gap-4 rounded-lg border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-700 dark:bg-slate-800/50"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                            {i + 1}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-slate-900 dark:text-white truncate">{h.program}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{h.university}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-sm font-bold text-accent">{h.grade}</p>
                            <p className="text-[10px] text-slate-400">passing grade</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-lg border-2 border-dashed border-slate-200 p-8 text-center dark:border-slate-700">
                      <p className="text-sm text-slate-500">Belum ada PTN yang sesuai dengan nilai {nilai} untuk jurusan {jenjang}.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-3 text-sm font-medium text-accent underline">
                        Coba nilai lain
                      </button>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/screening"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-light hover:shadow-md"
                    >
                      Screening Lengkap
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href="https://wa.me/6281324868790"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600 transition-all hover:border-slate-300 hover:text-slate-900 dark:border-slate-600 dark:text-slate-400"
                    >
                      Konsultasi Gratis
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
