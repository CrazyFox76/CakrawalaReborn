export interface Tutor {
  name: string;
  initials: string;
  subject: string;
  education: string;
  desc: string;
}

export const tutors: Tutor[] = [
  {
    name: "Ahmad Syarif",
    initials: "AS",
    subject: "Matematika & Fisika",
    education: "S1 Teknik UI",
    desc: "Berpengalaman 5 tahun membimbing siswa SMP-SMA. Spesialis persiapan UTBK dan olimpiade sains.",
  },
  {
    name: "Nurul Hidayah",
    initials: "NH",
    subject: "Bahasa Inggris",
    education: "S1 Sastra Inggris UI",
    desc: "TOEFL score 110. Berpengalaman mengajar TOEFL/IELTS dan academic writing untuk SMA dan umum.",
  },
  {
    name: "Rizky Pratama",
    initials: "RP",
    subject: "Kimia & Biologi",
    education: "S1 Farmasi ITB",
    desc: "Membimbing siswa SMA jurusan IPA dengan pendekatan konseptual dan latihan soal HOTS.",
  },
  {
    name: "Fitriani Sari",
    initials: "FS",
    subject: "Matematika SD-SMP",
    education: "S1 Pendidikan Matematika UNJ",
    desc: "Ahli dalam membangun fondasi matematika anak dengan metode fun learning. Sudah mendampingi 100+ siswa.",
  },
];
