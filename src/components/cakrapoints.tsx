"use client";

import { useState, useEffect, useRef } from "react";
import {
  Star, Gift, Zap, BookOpen, Users, Trophy,
  ArrowRight, CheckCircle, Sparkles,
} from "lucide-react";

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
            if (current >= end) { setCount(end); clearInterval(interval); }
            else { setCount(Math.floor(current)); }
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

const earnWays = [
  { icon: BookOpen, title: "Ikut Kelas", desc: "Hadir di setiap sesi kelas", points: "+50 pts/sesi", iconBg: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
  { icon: Trophy, title: "Nilai Tinggi", desc: "Kerjakan tryout dengan hasil terbaik", points: "+100 pts/ujian", iconBg: "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" },
  { icon: Users, title: "Ajak Teman", desc: "Referral teman bergabung ke Cakrawala", points: "+200 pts/referral", iconBg: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" },
  { icon: Zap, title: "Streak Belajar", desc: "Konsisten hadir 7 hari berturut-turut", points: "+300 pts/minggu", iconBg: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
];

interface Stat { value: number; suffix: string; label: string }
interface Reward { name: string; points: number; icon: string; tag: string }

const tagColors: Record<string, string> = {
  Populer: "bg-primary/10 text-primary dark:bg-primary/20",
  Hot: "bg-accent/10 text-accent dark:bg-accent/20",
  Eksklusif: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  Terbaik: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
};

export default function CakraPoints({ stats, rewards }: { stats: Stat[]; rewards: Reward[] }) {
  return (
    <section id="cakrapoints" className="scroll-mt-20 bg-white py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-blue-300">
            <Star className="h-3.5 w-3.5" />
            Program Reward
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Kenalan dengan{" "}
            <span className="text-accent">CakraPoints</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Setiap langkah belajarmu menghasilkan poin. Tukarkan dengan hadiah, diskon, dan akses kelas eksklusif.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 sm:max-w-md sm:mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-900">
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-center text-lg font-bold text-slate-900 dark:text-white">Cara Dapat Poin</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {earnWays.map((way) => (
              <div key={way.title} className="rounded-xl bg-slate-50 p-5 transition-all hover:shadow-sm dark:bg-slate-900">
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${way.iconBg}`}>
                  <way.icon className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">{way.title}</h4>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{way.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 rounded-lg bg-primary/5 px-2.5 py-1 text-xs font-bold text-primary dark:bg-primary/20 dark:text-blue-300">
                  <Star className="h-3 w-3" />
                  {way.points}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-1 text-center text-lg font-bold text-slate-900 dark:text-white">Tukarkan Poin</h3>
          <p className="mb-6 text-center text-sm text-slate-500">Pilih hadiah terbaik dari katalog eksklusif</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rewards.map((reward) => (
              <div key={reward.name} className="group rounded-xl bg-slate-50 shadow-sm transition-all hover:shadow-md dark:bg-slate-900">
                <div className="flex items-center justify-center py-7 text-4xl">{reward.icon}</div>
                <div className="p-4 pt-0">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tagColors[reward.tag] || tagColors.Populer}`}>
                    {reward.tag}
                  </span>
                  <h4 className="mt-2 font-bold text-slate-900 dark:text-white">{reward.name}</h4>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm font-bold text-primary">
                      <Star className="h-3.5 w-3.5" />
                      {reward.points.toLocaleString("id-ID")} pts
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition-all group-hover:scale-105">
                      <Gift className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-slate-50 p-8 dark:bg-slate-900">
          <h3 className="mb-8 text-center text-lg font-bold text-slate-900 dark:text-white">Cara Kerja</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { step: "01", icon: Sparkles, title: "Daftar & Belajar", desc: "Ikuti kelas dan raih pencapaian belajarmu" },
              { step: "02", icon: Star, title: "Kumpulkan Poin", desc: "Setiap aktivitas belajar otomatis menambah poin" },
              { step: "03", icon: Gift, title: "Redeem Hadiah", desc: "Tukar poinmu dengan diskon atau kelas gratis" },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-sm">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Langkah {s.step}
                </span>
                <h4 className="mt-1 font-bold text-slate-900 dark:text-white">{s.title}</h4>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-light hover:shadow-md"
          >
            <Zap className="h-4 w-4" />
            Mulai Kumpulkan Poin
            <ArrowRight className="h-4 w-4" />
          </a>
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            Gratis untuk semua siswa
          </span>
        </div>
      </div>
    </section>
  );
}
