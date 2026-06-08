import {
  BookOpen,
  Home,
  MessageSquare,
  ShoppingBag,
  Baby,
  Languages,
  TrendingUp,
  Laptop,
  Code,
  Monitor,
  Handshake,
  FileText,
  Heart,
  Globe,
  Trophy,
  Shield,
  CreditCard
} from "lucide-react";

export interface Program {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  age: string;
  description: string;
  highlights: string[];
  category: "akademik" | "bahasa" | "anak" | "skills" | "layanan";
}

export const programs: Program[] = [
  {
    icon: BookOpen,
    title: "Rumbel Cakrawala (Rumah Belajar)",
    age: "Semua Jenjang (SD, SMP, SMA)",
    description:
      "Program bimbingan belajar tatap muka kelas reguler dan intensif untuk meningkatkan prestasi akademik dan pemahaman materi sekolah.",
    highlights: ["Bimbingan tatap muka", "Tutor berpengalaman", "Kurikulum sekolah terbaru"],
    category: "akademik",
  },
  {
    icon: Home,
    title: "Cakrawala Home Visit",
    age: "Semua Jenjang",
    description:
      "Layanan les privat guru datang ke rumah untuk kenyamanan belajar maksimal dan pembelajaran yang disesuaikan secara personal.",
    highlights: ["Guru datang ke rumah", "Jadwal fleksibel", "Fokus 1-on-1"],
    category: "akademik",
  },
  {
    icon: MessageSquare,
    title: "Cakrashare (Brainly)",
    age: "Siswa & Guru",
    description:
      "Platform diskusi dan tanya jawab interaktif untuk membantu menyelesaikan tugas sekolah dengan penjelasan yang jelas dan cepat.",
    highlights: ["Tanya jawab tugas 24/7", "Komunitas belajar aktif", "Pembahasan langkah demi langkah"],
    category: "layanan",
  },
  {
    icon: ShoppingBag,
    title: "Cakra Bookstore",
    age: "Umum",
    description:
      "Penyedia buku teks pelajaran, modul soal tryout, dan referensi belajar terlengkap untuk mendukung persiapan ujian.",
    highlights: ["Buku sekolah terlengkap", "Modul soal eksklusif", "Diskon menarik untuk siswa"],
    category: "layanan",
  },
  {
    icon: Baby,
    title: "Cakrakids",
    age: "PAUD & TK (Usia 3 - 6 tahun)",
    description:
      "Program stimulasi tumbuh kembang anak usia dini berfokus pada membaca, menulis, berhitung (calistung) dengan metode bermain yang menyenangkan.",
    highlights: ["Calistung interaktif", "Pendidikan karakter", "Metode ramah anak"],
    category: "anak",
  },
  {
    icon: Languages,
    title: "Cakra English Centre",
    age: "Semua Usia",
    description:
      "Pusat pelatihan bahasa Inggris intensif dari dasar hingga tingkat lanjut, termasuk percakapan (speaking) dan tata bahasa.",
    highlights: ["Fokus percakapan sehari-hari", "TOEFL/IELTS preparation", "Guru bersertifikasi"],
    category: "bahasa",
  },
  {
    icon: TrendingUp,
    title: "Cakra Skills Up",
    age: "Remaja & Dewasa",
    description:
      "Program pelatihan keterampilan digital dan praktis untuk mempersiapkan diri menghadapi dunia kerja dan meningkatkan produktivitas.",
    highlights: ["Pelatihan IT & digital", "Keterampilan siap kerja", "Sertifikat resmi"],
    category: "skills",
  },
  {
    icon: Laptop,
    title: "Rumbel Cakrawala (Kelas Online)",
    age: "Semua Jenjang",
    description:
      "Program bimbingan belajar jarak jauh (online) yang interaktif dengan fasilitas rekaman kelas dan materi digital lengkap.",
    highlights: ["Belajar online interaktif", "Akses rekaman kelas", "Materi & kuis digital"],
    category: "akademik",
  },
  {
    icon: Code,
    title: "Cakra Tech",
    age: "Siswa & Umum",
    description:
      "Pelatihan coding, pemrograman web, robotika, dan kecerdasan buatan untuk membangun logika berpikir komputasional sejak dini.",
    highlights: ["Coding & robotika anak", "Logika & problem solving", "Proyek teknologi nyata"],
    category: "skills",
  },
  {
    icon: Monitor,
    title: "TryOut CBT",
    age: "Siswa Kelas 6, 9, 12 & Alumni",
    description:
      "Platform simulasi ujian berbasis komputer yang dirancang semirip mungkin dengan sistem ujian resmi (UTBK, ANBK, Ujian Sekolah).",
    highlights: ["Sistem mirip UTBK asli", "Analisis kelemahan & nilai", "Bank soal terupdate"],
    category: "akademik",
  },
  {
    icon: Handshake,
    title: "Cakra Edu Partner",
    age: "Sekolah & Instansi",
    description:
      "Kemitraan strategis dengan sekolah dan instansi untuk penyediaan guru pengganti, kegiatan ekstrakurikuler, dan pelatihan peningkatan kompetensi guru.",
    highlights: ["Kolaborasi sekolah & instansi", "Penyedia tutor ekskul", "Workshop & seminar guru"],
    category: "layanan",
  },
  {
    icon: FileText,
    title: "Cakra Bimskrip",
    age: "Mahasiswa",
    description:
      "Bimbingan penyusunan tugas akhir, skripsi, tesis, dan olah data statistik dengan mentor akademis berpengalaman.",
    highlights: ["Bimbingan skripsi & tesis", "Olah data statistik", "Pendampingan sampai lulus"],
    category: "akademik",
  },
  {
    icon: Heart,
    title: "Cakra Islami Terpadu",
    age: "Anak-anak & Remaja",
    description:
      "Program bimbingan keislaman terpadu, termasuk cara membaca Al-Qur'an (Tahsin/Tahfidz), fiqih ibadah praktis, dan akhlak.",
    highlights: ["Tahsin & tahfidz Quran", "Pembiasaan ibadah harian", "Kisah inspiratif Islami"],
    category: "anak",
  },
  {
    icon: Globe,
    title: "Cakra Language Centre",
    age: "Semua Jenjang",
    description:
      "Pusat pembelajaran bahasa asing non-Inggris seperti bahasa Mandarin, Jepang, Korea, Jerman, dan Arab untuk studi atau karir.",
    highlights: ["Bahasa Mandarin, Jepang, Arab", "Sertifikasi kemampuan bahasa", "Penutur asli (Native Speaker)"],
    category: "bahasa",
  },
  {
    icon: Trophy,
    title: "Cakra Prestasi",
    age: "Siswa Berbakat",
    description:
      "Bimbingan khusus persiapan olimpiade sains nasional (OSN), lomba akademik, dan kompetisi bergengsi tingkat nasional.",
    highlights: ["Persiapan olimpiade (OSN)", "Soal tingkat tinggi (HOTS)", "Mentoring juara lomba"],
    category: "akademik",
  },
  {
    icon: Shield,
    title: "Cakra Kedinasan (Cakdin)",
    age: "Lulusan SMA/SMK",
    description:
      "Program persiapan intensif seleksi masuk perguruan tinggi kedinasan seperti STAN, STIS, IPDN, AKPOL, dan AKMIL.",
    highlights: ["Tes SKD, TIU, TKP, TWK", "Tryout sistem CAT rutin", "Pelatihan fisik & psikologi"],
    category: "akademik",
  },
  {
    icon: CreditCard,
    title: "Cakra Member",
    age: "Semua Pelanggan",
    description:
      "Program loyalitas keanggotaan eksklusif dengan berbagai keuntungan seperti diskon biaya bimbingan, voucher belajar, dan prioritas layanan.",
    highlights: ["Diskon khusus biaya bimbel", "Prioritas pendaftaran program", "Akses seminar & webinar gratis"],
    category: "layanan",
  },
];
