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
    <section className="bg-primary py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Kenapa Memilih Cakrawala?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:mt-4 sm:text-lg">
            Kami berkomitmen memberikan pengalaman belajar terbaik untuk
            kesuksesan akademik putra-putri Anda.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all sm:p-6 hover:bg-white/10"
            >
              <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-gold-400 sm:h-5 sm:w-5" />
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {r.title}
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-white/60 sm:text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
