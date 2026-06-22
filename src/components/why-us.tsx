import { Compass, Map, Target, Users, TrendingUp, Shield } from "lucide-react";

const items = [
  {
    icon: Compass,
    title: "Bimbingan, Bukan Sekadar Les",
    desc: "Kami adalah mitra pendidikan yang membantu siswa menemukan potensi dan jalur terbaik menuju masa depannya.",
  },
  {
    icon: Map,
    title: "Rencana Belajar Personal",
    desc: "Setiap siswa punya peta belajar unik berdasarkan hasil screening, target, dan gaya belajar masing-masing.",
  },
  {
    icon: Target,
    title: "Fokus ke Tujuan Akhir",
    desc: "Kami pastikan setiap langkah belajarmu mengarah ke tujuan: lolos PTN favorit atau capai target akademik.",
  },
  {
    icon: Users,
    title: "Tutor adalah Mentor",
    desc: "Lulusan PTN terbaik yang bukan cuma ngajar, tapi juga jadi mentor dan motivator belajarmu.",
  },
  {
    icon: TrendingUp,
    title: "Hasil yang Terukur",
    desc: "Rata-rata siswa kami alami peningkatan nilai signifikan dan lolos ke PTN impian mereka.",
  },
  {
    icon: Shield,
    title: "Dampingan sampai Lolos",
    desc: "Dari screening, belajar, tryout, hingga pendaftaran PTN — kami dampingi penuh sampai kamu berhasil.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-blue-300">
            <Compass className="h-3.5 w-3.5" />
            Keunggulan
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Kenapa{" "}
            <span className="text-accent">Cakrawala?</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Kami bukan bimbel biasa. Kami adalah mitra pendidikan yang membimbing setiap langkahmu.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-900 dark:ring-slate-700/50"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
