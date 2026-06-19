export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  { id: 1, name: "Siti Rahmawati", role: "Orang Tua Siswa SD", content: "Anak saya jadi lebih percaya diri dan nilainya meningkat drastis sejak les di Cakrawala. Tutornya sabar dan profesional.", rating: 5 },
  { id: 2, name: "Budi Santoso", role: "Orang Tua Siswa SMP", content: "Program les SMP-nya sangat membantu anak saya menghadapi ujian sekolah. Nilai matematika naik dari 60 jadi 85.", rating: 5 },
  { id: 3, name: "Rina Amelia", role: "Siswa SMA", content: "Persiapan UTBK di Cakrawala bikin saya lebih siap. Pembahasannya detail dan tutornya asyik. Recommended!", rating: 5 },
  { id: 4, name: "Dewi Lestari", role: "Orang Tua Siswa SD", content: "Metode belajarnya menyenangkan, anak saya jadi semangat belajar. Terima kasih Cakrawala EduCentre!", rating: 5 },
  { id: 5, name: "Ahmad Fauzi", role: "Siswa Kelas 12", content: "Tryout UTBK-nya mirip banget sama aslinya. Pembahasan soalnya lengkap banget, bikin paham konsep.", rating: 5 },
  { id: 6, name: "Maya Anggraini", role: "Orang Tua Siswa SMP", content: "Gurunya datang ke rumah, jadwal fleksibel. Anak saya jadi lebih teratur belajarnya. Sangat puas!", rating: 5 },
];

export async function getTestimonials() { return testimonials; }
