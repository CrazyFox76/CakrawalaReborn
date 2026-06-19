export interface WhyUsItem {
  id: number;
  title: string;
  desc: string;
  sortOrder: number;
}

export const whyUs: WhyUsItem[] = [
  { id: 1, title: "Tutor Profesional & Berpengalaman", desc: "Tutor kami adalah lulusan terbaik dari universitas ternama, berpengalaman, dan telah melalui proses seleksi ketat.", sortOrder: 1 },
  { id: 2, title: "Jadwal Belajar Fleksibel", desc: "Siswa dan orang tua dapat menyesuaikan jadwal les sesuai waktu luang tanpa mengganggu aktivitas sekolah.", sortOrder: 2 },
  { id: 3, title: "Kurikulum Terarah & Terstruktur", desc: "Materi belajar dirancang sistematis sesuai jenjang dan kebutuhan, mulai dari penguatan konsep hingga latihan soal.", sortOrder: 3 },
  { id: 4, title: "Pendampingan Intensif 1-on-1", desc: "Setiap siswa mendapat perhatian penuh dari tutor, sehingga perkembangan belajar terpantau secara optimal.", sortOrder: 4 },
  { id: 5, title: "Evaluasi Berkala", desc: "Laporan perkembangan belajar diberikan secara rutin kepada orang tua untuk memonitor kemajuan siswa.", sortOrder: 5 },
  { id: 6, title: "Biaya Terjangkau", desc: "Kualitas pendidikan terbaik dengan biaya yang kompetitif dan opsi paket yang bisa disesuaikan.", sortOrder: 6 },
];

export async function getWhyUs() { return [...whyUs].sort((a, b) => a.sortOrder - b.sortOrder); }
