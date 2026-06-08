import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Tutor Profesional & Berpengalaman",
    desc: "Tutor kami adalah lulusan terbaik dari universitas ternama, berpengalaman, dan telah melalui proses seleksi ketat.",
  },
  {
    title: "Jadwal Belajar Fleksibel",
    desc: "Siswa dan orang tua dapat menyesuaikan jadwal les sesuai waktu luang tanpa mengganggu aktivitas sekolah.",
  },
  {
    title: "Kurikulum Terarah & Terstruktur",
    desc: "Materi belajar dirancang sistematis sesuai jenjang dan kebutuhan, mulai dari penguatan konsep hingga latihan soal.",
  },
  {
    title: "Pendampingan Intensif 1-on-1",
    desc: "Setiap siswa mendapat perhatian penuh dari tutor, sehingga perkembangan belajar terpantau secara optimal.",
  },
  {
    title: "Evaluasi Berkala",
    desc: "Laporan perkembangan belajar diberikan secara rutin kepada orang tua untuk memonitor kemajuan siswa.",
  },
  {
    title: "Biaya Terjangkau",
    desc: "Kualitas pendidikan terbaik dengan biaya yang kompetitif dan opsi paket yang bisa disesuaikan.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Kenapa Memilih Cakrawala?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Kami berkomitmen memberikan pengalaman belajar terbaik untuk
            kesuksesan akademik putra-putri Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <div className="mb-3 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-gold-400" />
                <h3 className="text-base font-semibold text-white">
                  {r.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/60">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
