"use client";

import { useState, useMemo } from "react";
import { Search, GraduationCap, TrendingUp, Filter, AlertCircle } from "lucide-react";

export type PassingGrade = {
  university: string;
  program: string;
  grade: number;
  category: string;
  peminat: number;
};

function hitungPeluang(nilai: number, passingGrade: number): number {
  if (nilai <= 0) return 0;
  if (nilai >= 100) return 99;
  const selisih = nilai - passingGrade;
  if (selisih >= 5) return 90 + Math.min(selisih * 2, 9);
  if (selisih >= 2) return 75 + (selisih - 2) * 5;
  if (selisih >= 0) return 60 + selisih * 7.5;
  if (selisih >= -3) return 40 + (selisih + 3) * 6.7;
  if (selisih >= -6) return 20 + (selisih + 3) * 6.7;
  return Math.max(5, 20 + (selisih + 6) * 11.7);
}

function labelPeluang(persen: number): { text: string; color: string } {
  if (persen >= 80) return { text: "Sangat Besar", color: "text-green-600" };
  if (persen >= 60) return { text: "Besar", color: "text-emerald-600" };
  if (persen >= 40) return { text: "Sedang", color: "text-yellow-600" };
  if (persen >= 20) return { text: "Kecil", color: "text-orange-600" };
  return { text: "Sulit", color: "text-red-600" };
}

export default function ScreeningRaport({
  passingGrades,
  universities,
  categories,
}: {
  passingGrades: PassingGrade[];
  universities: string[];
  categories: string[];
}) {
  const [nilai, setNilai] = useState("");
  const [uniFilter, setUniFilter] = useState("");
  const [catFilter, setCatFilter] = useState("");

  const results = useMemo(() => {
    const n = parseFloat(nilai);
    if (isNaN(n) || n < 0 || n > 100) return [];

    return passingGrades
      .filter((p) => !uniFilter || p.university === uniFilter)
      .filter((p) => !catFilter || p.category === catFilter)
      .map((p) => ({
        ...p,
        peluang: hitungPeluang(n, p.grade),
      }))
      .sort((a, b) => b.peluang - a.peluang);
  }, [nilai, uniFilter, catFilter]);

  const topResults = results.slice(0, 20);

  return (
    <section id="screening" className="py-12 sm:py-24 bg-gradient-to-b from-zinc-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Cek Peluang Masuk PTN
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4 sm:text-lg dark:text-slate-400">
            Masukkan nilai rata-rata raport kamu, lihat peluang diterima di berbagai program studi favorit PTN se-Indonesia.
          </p>
        </div>

        {/* Input */}
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8 dark:border-slate-700 dark:bg-slate-800/50">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-slate-300">
                <GraduationCap className="h-4 w-4 text-primary" />
                Nilai Rata-rata Raport
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={nilai}
                  onChange={(e) => setNilai(e.target.value)}
                  placeholder="Cth: 85.5"
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-lg font-bold text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-zinc-400">/100</span>
              </div>
            </div>
            <div className="w-full sm:w-48">
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-slate-300">
                <Filter className="h-4 w-4 text-primary" />
                Universitas
              </label>
              <select
                value={uniFilter}
                onChange={(e) => setUniFilter(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <option value="">Semua PTN</option>
                {universities.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
            <div className="w-full sm:w-40">
              <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-slate-300">
                <Filter className="h-4 w-4 text-primary" />
                Jurusan
              </label>
              <select
                value={catFilter}
                onChange={(e) => setCatFilter(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/5 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <option value="">Semua</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Info */}
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-blue-50 p-3 text-xs text-blue-700 sm:text-sm dark:bg-blue-900/20 dark:text-blue-300">
            <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <p>
              Data passing grade berdasarkan rata-rata SNBT 3 tahun terakhir. Peluang bersifat indikatif,
              hasil aktual tergantung pada keketatan peminat tahun berjalan.
            </p>
          </div>
        </div>

        {/* Hasil */}
        {nilai && results.length > 0 && (
          <div className="mt-6 sm:mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-zinc-900 sm:text-base dark:text-slate-100">
                Rekomendasi Program Studi
              </h3>
              <span className="text-xs text-zinc-500 dark:text-slate-400">
                {results.length} program ditemukan
              </span>
            </div>

            <div className="space-y-2">
              {topResults.map((r, i) => {
                const lbl = labelPeluang(r.peluang);
                return (
                  <div
                    key={`${r.university}-${r.program}`}
                    className="group flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-primary/30 hover:shadow-sm sm:flex-row sm:items-center sm:gap-4 dark:border-slate-700 dark:bg-slate-800/50"
                  >
                    <span className="hidden w-6 text-center text-xs font-bold text-zinc-300 sm:block dark:text-slate-600">
                      {i + 1}
                    </span>

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-slate-100">
                        {r.program}
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-slate-400">
                        {r.university}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-6">
                      <div className="text-right">
                        <p className="text-xs text-zinc-400 dark:text-slate-500">Passing Grade</p>
                        <p className="text-sm font-bold text-zinc-700 dark:text-slate-300">{r.grade}</p>
                      </div>

                      <div className="w-24 sm:w-32">
                        <div className="mb-1 flex items-center justify-between">
                          <span className={`text-xs font-bold ${lbl.color}`}>{lbl.text}</span>
                          <span className="text-xs font-bold text-zinc-700 dark:text-slate-300">
                            {Math.round(r.peluang)}%
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-slate-700">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${Math.min(r.peluang, 100)}%`,
                              backgroundColor:
                                r.peluang >= 80 ? "#16a34a" :
                                r.peluang >= 60 ? "#65a30d" :
                                r.peluang >= 40 ? "#eab308" :
                                r.peluang >= 20 ? "#ea580c" : "#dc2626",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {results.length > 20 && (
              <p className="mt-4 text-center text-xs text-zinc-400 dark:text-slate-500">
                Menampilkan 20 teratas dari {results.length} program.
              </p>
            )}
          </div>
        )}

        {/* Empty state */}
        {nilai && results.length === 0 && (
          <div className="mt-8 rounded-xl border border-dashed border-zinc-200 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-800/50">
            <TrendingUp className="mx-auto h-8 w-8 text-zinc-300 dark:text-slate-600" />
            <p className="mt-3 text-sm text-zinc-500 dark:text-slate-400">
              Tidak ada program yang cocok dengan filter yang dipilih.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
