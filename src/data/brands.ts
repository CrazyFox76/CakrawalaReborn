export interface BrandProgram {
  id: number;
  name: string;
}

export interface Brand {
  name: string;
  slug: string;
  desc: string;
  programs: BrandProgram[];
}

export const brands: Brand[] = [
  {
    name: "Cakra Edu Partner",
    slug: "cakra-edu-partner",
    desc: "Layanan kemitraan pendidikan untuk sekolah dan institusi, mencakup pelatihan guru, studi tour, dan pendampingan kurikulum.",
    programs: [
      { id: 1, name: "Talent Mapping & Digital Psychotest" },
      { id: 2, name: "In House Training For Teacher" },
      { id: 3, name: "In House Training For Student" },
      { id: 4, name: "Educational Tour" },
      { id: 6, name: "Workshop Curriculum" },
    ],
  },
  {
    name: "Rumbel Cakrawala (Rumah Belajar)",
    slug: "rumbel-cakrawala",
    desc: "Pusat belajar intensif untuk pendalaman materi akademik bagi siswa SD, SMP, dan SMA.",
    programs: [
      { id: 5, name: "Pendalaman Materi" },
    ],
  },
  {
    name: "Cakra Tech",
    slug: "cakra-tech",
    desc: "Program penguasaan teknologi digital dan AI untuk generasi muda, dari coding hingga data science.",
    programs: [
      { id: 7, name: "Workshop AI & Media" },
      { id: 13, name: "AI Guided" },
      { id: 35, name: "Coding Dasar & Game Development" },
      { id: 36, name: "Design Creative" },
      { id: 37, name: "Video Editing & Content Creator Class" },
      { id: 38, name: "Data Science For Teenager" },
    ],
  },
  {
    name: "Cakrakids",
    slug: "cakrakids",
    desc: "Program pendidikan anak usia dini yang menyenangkan — calistung, bahasa Inggris, dan mental aritmatika.",
    programs: [
      { id: 8, name: "Calistung" },
      { id: 9, name: "English For Kids" },
      { id: 10, name: "Mental Math" },
    ],
  },
  {
    name: "Cakrawala Home Visit",
    slug: "cakrawala-home-visit",
    desc: "Les privat ke rumah dengan bimbingan intensif dan jadwal fleksibel untuk semua jenjang.",
    programs: [
      { id: 11, name: "Pendampingan PR Harian" },
      { id: 12, name: "Remedial Khusus" },
    ],
  },
  {
    name: "Cakra Prestasi",
    slug: "cakra-prestasi",
    desc: "Program persiapan masuk sekolah unggulan dan favorit dari tingkat SMP hingga SMA.",
    programs: [
      { id: 14, name: "Masuk MTS Unggulan" },
      { id: 15, name: "Masuk Swasta Nasional & Internasional" },
      { id: 16, name: "Persiapan MAN IC" },
      { id: 17, name: "Persiapan Labschool" },
      { id: 18, name: "Persiapan Tarnus & Krida" },
      { id: 19, name: "Persiapan MHT" },
    ],
  },
  {
    name: "TryOut CBT",
    slug: "tryout-cbt",
    desc: "Simulasi ujian berbasis CBT untuk UTBK, SIMAK UI, dan tes seleksi lainnya dengan analisis skor otomatis.",
    programs: [
      { id: 20, name: "Psychometrics Credines Modul" },
      { id: 21, name: "Intensif TPS & Literasi UTBK" },
      { id: 22, name: "Akselerasi Penalaran MTK" },
      { id: 23, name: "SNBT AI Predicted" },
      { id: 24, name: "Persiapan SIMAK UI" },
    ],
  },
  {
    name: "Cakra Kedinasan (Cakdin)",
    slug: "cakra-kedinasan",
    desc: "Bimbingan intensif untuk seleksi masuk sekolah kedinasan dan CPNS dengan metode terarah.",
    programs: [
      { id: 25, name: "Persiapan PKN STAN, STIS" },
      { id: 26, name: "Persiapan IPDN, STIN" },
      { id: 27, name: "Akpol Akmil" },
      { id: 28, name: "Persiapan CPNS" },
    ],
  },
  {
    name: "Cakra English Centre",
    slug: "cakra-english-centre",
    desc: "Program bahasa Inggris untuk tes internasional seperti TOEFL, IELTS, GMAT, dan GRE.",
    programs: [
      { id: 29, name: "SIT/ICT Preparation" },
      { id: 30, name: "GMAT & GRE" },
      { id: 31, name: "IELTS Preparation" },
      { id: 32, name: "TOEFL iBT Preparation" },
    ],
  },
  {
    name: "Cakra Language Centre",
    slug: "cakra-language-centre",
    desc: "Layanan bahasa untuk keperluan akademik dan profesional, termasuk essay writing dan scholarship coaching.",
    programs: [
      { id: 33, name: "AI Essay & Motivation Letter" },
      { id: 34, name: "Scholarship Interview Coaching" },
      { id: 42, name: "Academic Writing" },
    ],
  },
  {
    name: "Cakra Skills Up",
    slug: "cakra-skills-up",
    desc: "Program pengembangan soft skill dan keterampilan profesional untuk siswa dan umum.",
    programs: [
      { id: 39, name: "Public Speaking & Debate" },
      { id: 40, name: "MUN (Model United Nations)" },
      { id: 43, name: "Microsoft Office Professional" },
    ],
  },
  {
    name: "Cakra Bimskrip",
    slug: "cakra-bimskrip",
    desc: "Bimbingan penulisan skripsi, tesis, dan disertasi dengan pendampingan dari awal hingga sidang.",
    programs: [
      { id: 41, name: "Bimbingan Skripsi & Tesis" },
    ],
  },
  {
    name: "Cakra Islami Terpadu",
    slug: "cakra-islami-terpadu",
    desc: "Program mengaji dan tahsin untuk anak dan dewasa dengan metode yang mudah dan menyenangkan.",
    programs: [
      { id: 44, name: "Mengaji & Tahsin Anak" },
      { id: 45, name: "Mengaji & Tahsin Dewasa" },
    ],
  },
  {
    name: "Cakra Member",
    slug: "cakra-member",
    desc: "Layanan keanggotaan untuk jasa kreatif digital, termasuk desain grafis, website, dan dokumentasi.",
    programs: [
      { id: 46, name: "Jasa Editing Grafis & Video" },
      { id: 47, name: "Jasa Pembuatan Landing Page & Website" },
      { id: 48, name: "Dokumentasi & Translator" },
    ],
  },
];

export const allPrograms = brands.flatMap((b) => b.programs);
