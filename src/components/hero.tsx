import { ArrowRight, Sparkles, TrendingUp, BookOpen, Target, Award, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0f1a2e] dark:bg-[#0a111f]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-60 -top-60 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[90vh] w-full max-w-[1440px] items-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="flex flex-col">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Bimbingan Akademik & Seleksi PTN
            </div>

            <h1 className="text-[2.5rem] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Temukan Arah,{" "}
              <span className="text-amber-400">Raih Impian</span>
              <br />
              dengan Bimbingan Personal
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
              Bukan sekadar bimbel. Kami bantu kamu mengenali potensi, memilih jurusan tepat, 
              dan menyusun strategi belajar yang terarah — dari screening awal sampai lolos PTN favorit.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/screening"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-400 px-7 py-4 text-base font-bold text-[#0f1a2e] shadow-lg shadow-amber-400/25 transition-all duration-300 hover:bg-amber-300 hover:shadow-amber-400/40 hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <Sparkles className="h-5 w-5" />
                Cek Potensi Gratis
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/program"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-7 py-4 text-base font-semibold text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5"
              >
                Lihat Program
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {[
                { icon: BookOpen, text: "Les Privat 1-on-1" },
                { icon: Target, text: "Screening Akademik" },
                { icon: Award, text: "Tutor Lulusan PTN" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.text} className="inline-flex items-center gap-2 text-sm text-white/40">
                    <Icon className="h-4 w-4 text-amber-400/60" />
                    {item.text}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-amber-400/10 via-blue-500/5 to-transparent blur-xl" />
            <div className="relative w-full max-w-md animate-float rounded-xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-sm font-bold text-[#0f1a2e]">
                    AN
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Alya N.</p>
                    <p className="text-xs text-white/40">Siswa Kelas 12 - IPA</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-400">
                  Aktif
                </span>
              </div>

              <div className="mb-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Skor", value: "87.5", accent: "text-amber-400" },
                  { label: "Peringkat", value: "#12", accent: "text-emerald-400" },
                  { label: "Progress", value: "73%", accent: "text-blue-400" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg bg-white/5 px-3 py-2.5 text-center">
                    <p className={`text-lg font-bold ${item.accent}`}>{item.value}</p>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-white/30">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mb-5 space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-white/50">Matematika</span>
                    <span className="font-semibold text-white/80">85</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="h-1.5 w-[85%] rounded-full bg-gradient-to-r from-amber-400 to-amber-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-white/50">Fisika</span>
                    <span className="font-semibold text-white/80">78</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="h-1.5 w-[78%] rounded-full bg-gradient-to-r from-blue-400 to-blue-500" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-white/50">Kimia</span>
                    <span className="font-semibold text-white/80">72</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div className="h-1.5 w-[72%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-amber-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50">Rekomendasi PTN</span>
                </div>
                <div className="space-y-2">
                  {[
                    { rank: 1, uni: "Universitas Indonesia", prog: "Teknik Informatika", match: 92 },
                    { rank: 2, uni: "Institut Teknologi Bandung", prog: "STEI", match: 85 },
                    { rank: 3, uni: "Universitas Gadjah Mada", prog: "Ilmu Komputer", match: 78 },
                  ].map((item) => (
                    <div key={item.rank} className="flex items-center gap-3 rounded-md bg-white/5 px-3 py-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-400/20 text-[11px] font-bold text-amber-400">
                        {item.rank}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-white">{item.uni}</p>
                        <p className="truncate text-xs text-white/40">{item.prog}</p>
                      </div>
                      <span className="shrink-0 text-xs font-semibold text-emerald-400">{item.match}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs text-white/30">Screening terakhir: 2 hari lalu</span>
                <Link
                  href="/screening"
                  className="inline-flex items-center gap-1 text-xs font-medium text-amber-400 transition-colors hover:text-amber-300"
                >
                  Lihat Detail
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
