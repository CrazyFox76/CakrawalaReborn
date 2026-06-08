export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "TOEFL ITP: Soal Comparison (er/est, more/most) dan Irregular Forms",
    slug: "toefl-itp-comparison",
    excerpt:
      '"The weather today is _____ than yesterday (bad/worse/worst)" — pelajari aturan comparative & superlative degree beserta irregular forms dan contoh soal lengkap.',
    category: "Edukasi",
    date: "18 Mei 2026",
    author: "Cakrawala EduCentre",
  },
  {
    id: "2",
    title:
      "TOEFL iBT Integrated Writing: Cara Menulis 2 Paragraf yang Berlawanan (Bacaan vs Perkuliahan) dengan Efektif",
    slug: "toefl-ibt-integrated-writing",
    excerpt:
      "Reading bilang ini bagus, tapi lecturer bilang ini jelek. Waktu cuma 20 menit — strategi efektif menghadapi integrated writing task dengan membandingkan bacaan dan perkuliahan.",
    category: "Edukasi",
    date: "18 Mei 2026",
    author: "Cakrawala EduCentre",
  },
  {
    id: "3",
    title: "SIMAK UI: Pola Rotasi, Cermin, dan Pencerminan pada Soal Figural",
    slug: "simak-ui-figural",
    excerpt:
      '"Gambar ini diputar 90 derajat searah jarum jam, lalu dicerminkan. Bentuk akhirnya seperti apa?" — pahami pola rotasi, pencerminan, dan kombinasinya dalam soal figural SIMAK UI.',
    category: "Edukasi",
    date: "18 Mei 2026",
    author: "Cakrawala EduCentre",
  },
  {
    id: "4",
    title: "TOEFL ITP: Menguasai Adjective Clause (Who/Whom/Which/That) di Structure",
    slug: "toefl-itp-adjective-clause",
    excerpt:
      '"The book which is on the table is mine" — kenapa pakai which? Pelajari adjective clause dan cara menjawab soal structure dengan tepat.',
    category: "Edukasi",
    date: "15 Mei 2026",
    author: "Cakrawala EduCentre",
  },
  {
    id: "5",
    title:
      "TOEFL iBT Writing for an Academic Discussion: Cara Menanggapi Dosen + Dua Mahasiswa dalam 10 Menit",
    slug: "toefl-ibt-academic-discussion",
    excerpt:
      "Profesor: Should companies prioritize profit or social responsibility? Dua mahasiswa sudah kasih pendapat — bagaimana cara kamu menanggapinya dalam 10 menit?",
    category: "Edukasi",
    date: "15 Mei 2026",
    author: "Cakrawala EduCentre",
  },
];
