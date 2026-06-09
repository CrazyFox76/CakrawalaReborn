"use client";

import { useState, useEffect, useRef } from "react";
import {
  Star,
  Gift,
  Zap,
  BookOpen,
  Users,
  Trophy,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

// ─── Animated counter ─────────────────────────────────────────────────────────
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

  return (
    <span ref={ref}>
      {count.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}

// ─── Cara dapat poin ───────────────────────────────────────────────────────────
const earnWays = [
  {
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    title: "Ikut Kelas",
    desc: "Hadir di setiap sesi kelas tatap muka maupun online",
    points: "+50 pts / sesi",
  },
  {
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    title: "Raih Nilai Tinggi",
    desc: "Kerjakan tryout & ujian dengan hasil terbaik",
    points: "+100 pts / ujian",
  },
  {
    icon: Users,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    title: "Ajak Teman",
    desc: "Referral teman baru yang bergabung ke Cakrawala",
    points: "+200 pts / referral",
  },
  {
    icon: Zap,
    color: "from-purple-500 to-pink-600",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    title: "Streak Belajar",
    desc: "Konsisten hadir 7 hari berturut-turut",
    points: "+300 pts / minggu",
  },
];

// ─── Hadiah redeem ─────────────────────────────────────────────────────────────
const rewards = [
  {
    icon: "🎓",
    name: "Diskon 25% Kelas",
    points: "500 pts",
    tag: "Populer",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    icon: "📚",
    name: "Modul Belajar Premium",
    points: "750 pts",
    tag: "Hot",
    tagColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    icon: "💡",
    name: "1 Sesi Konsultasi",
    points: "1.000 pts",
    tag: "Eksklusif",
    tagColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  },
  {
    icon: "🏆",
    name: "Diskon 50% Tryout",
    points: "1.500 pts",
    tag: "Terbaik",
    tagColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
];

// ─── Main Component ────────────────────────────────────────────────────────────
export default function CakraPoints() {
  return (
    <section
      id="cakrapoints"
      className="relative overflow-hidden bg-white py-16 sm:py-24 dark:bg-slate-950"
    >
      {/* ── Subtle background decoration ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-50 dark:bg-blue-950/30 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-indigo-50 dark:bg-indigo-950/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/30">
            <Star className="h-3.5 w-3.5 fill-yellow-300 text-yellow-300" />
            Program Reward Eksklusif
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Kenalkan{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                CakraPoints
              </span>
              {/* underline decoration */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 C50,0 150,0 200,6"
                  stroke="url(#grad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#4f46e5" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-500 dark:text-slate-400">
            Setiap langkah belajarmu menghasilkan poin. Kumpulkan CakraPoints dan
            tukarkan dengan hadiah, diskon, hingga akses kelas eksklusif.
          </p>
        </div>

        {/* ── Stats row ── */}
        <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto">
          {[
            { value: 1200, suffix: "+", label: "Siswa Aktif" },
            { value: 50000, suffix: "+", label: "Poin Ditukarkan" },
            { value: 98, suffix: "%", label: "Kepuasan Siswa" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-2xl font-extrabold text-blue-600 sm:text-3xl">
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Cara Mendapat Poin ── */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-xl font-bold text-slate-800 dark:text-white">
            Cara Mendapatkan Poin
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {earnWays.map((way) => (
              <div
                key={way.title}
                className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900`}
              >
                {/* gradient top border */}
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${way.color}`} />

                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${way.bg}`}>
                  <way.icon className={`h-5 w-5 ${way.iconColor}`} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">{way.title}</h4>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{way.desc}</p>
                <div className={`mt-3 inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r ${way.color} px-3 py-1 text-xs font-extrabold text-white shadow-sm`}>
                  <Star className="h-3 w-3 fill-white" />
                  {way.points}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Reward Catalog ── */}
        <div className="mt-16">
          <h3 className="mb-2 text-center text-xl font-bold text-slate-800 dark:text-white">
            Tukarkan Poinmu
          </h3>
          <p className="mb-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Pilih hadiah terbaikmu dari katalog eksklusif CakraPoints
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rewards.map((reward) => (
              <div
                key={reward.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Emoji icon */}
                <div className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 py-7 text-5xl dark:from-slate-800 dark:to-blue-950/40">
                  {reward.icon}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  {/* Tag */}
                  <span className={`self-start rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${reward.tagColor} mb-2`}>
                    {reward.tag}
                  </span>
                  <h4 className="font-bold text-slate-800 dark:text-white">{reward.name}</h4>
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                      <Star className="h-3.5 w-3.5 fill-blue-600 dark:fill-blue-400" />
                      <span className="text-sm font-extrabold">{reward.points}</span>
                    </div>
                    <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-lg group-hover:scale-110">
                      <Gift className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── How it works stepper ── */}
        <div className="mt-16 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 dark:border-slate-800 dark:from-slate-900 dark:to-blue-950/20">
          <h3 className="mb-8 text-center text-xl font-bold text-slate-800 dark:text-white">
            Cara Kerja CakraPoints
          </h3>
          <div className="relative grid gap-6 sm:grid-cols-3">
            {/* connector line */}
            <div className="absolute top-8 left-[16.5%] right-[16.5%] hidden h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 sm:block" />

            {[
              { step: "01", icon: Sparkles, color: "from-blue-500 to-indigo-600", title: "Daftar & Belajar", desc: "Ikuti kelas, kerjakan soal, dan raih pencapaian belajarmu" },
              { step: "02", icon: Star, color: "from-indigo-500 to-purple-600", title: "Kumpulkan Poin", desc: "Setiap aktivitas belajar otomatis menambah CakraPoints-mu" },
              { step: "03", icon: Gift, color: "from-purple-500 to-pink-600", title: "Redeem Hadiah", desc: "Tukar poinmu dengan diskon, modul, atau akses kelas gratis" },
            ].map((s) => (
              <div key={s.step} className="relative z-10 flex flex-col items-center text-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} shadow-lg mb-4`}>
                  <s.icon className="h-7 w-7 fill-white/20 text-white" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                  Langkah {s.step}
                </span>
                <h4 className="font-bold text-slate-800 dark:text-white">{s.title}</h4>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Zap className="h-4 w-4 fill-yellow-300 text-yellow-300" />
            Mulai Kumpulkan Poin
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            Gratis untuk semua siswa Cakrawala
          </div>
        </div>

      </div>
    </section>
  );
}
