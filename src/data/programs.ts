import { BookOpen, Calculator, Beaker, GraduationCap, Globe } from "lucide-react";

export interface Program {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  age: string;
  description: string;
  highlights: string[];
}

export const programs: Program[] = [
  {
    icon: BookOpen,
    title: "Les Privat SD",
    age: "Kelas 1 - 6 SD",
    description:
      "Pembentukan dasar akademik dan kebiasaan belajar yang baik sejak dini. Pendekatan komunikatif dan menyenangkan agar siswa tidak merasa tertekan.",
    highlights: [
      "Membaca, menulis, berhitung",
      "Pendampingan intensif",
      "Metode menyenangkan",
    ],
  },
  {
    icon: Calculator,
    title: "Les Privat SMP",
    age: "Kelas 7 - 9 SMP",
    description:
      "Membantu siswa memahami materi yang lebih kompleks dan mempersiapkan ujian sekolah dengan percaya diri.",
    highlights: [
      "Matematika, IPA, Bahasa",
      "Latihan soal intensif",
      "Persiapan ujian sekolah",
    ],
  },
  {
    icon: Beaker,
    title: "Les Privat SMA",
    age: "Kelas 10 - 12 SMA",
    description:
      "Pendalaman materi dan persiapan ujian penting seperti ujian sekolah dan seleksi perguruan tinggi.",
    highlights: [
      "Semua jurusan (IPA/IPS)",
      "Persiapan ujian akhir",
      "Strategi belajar efektif",
    ],
  },
  {
    icon: GraduationCap,
    title: "UTBK & SNBT",
    age: "Siswa Kelas 12 & Alumni",
    description:
      "Program khusus persiapan UTBK SNBT dengan fokus pada penalaran, literasi, dan pemahaman konsep.",
    highlights: [
      "Tryout rutin",
      "Pembahasan soal HOTS",
      "Simulasi ujian",
    ],
  },
  {
    icon: Globe,
    title: "Bahasa Asing",
    age: "Semua Jenjang",
    description:
      "Program bahasa Inggris dan bahasa asing lainnya untuk meningkatkan kemampuan komunikasi global.",
    highlights: [
      "TOEFL/IELTS preparation",
      "Conversation class",
      "Academic writing",
    ],
  },
];
