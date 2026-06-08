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
      "Pelajari aturan comparative dan superlative degree dalam TOEFL ITP beserta irregular forms dan contoh soal lengkap.",
    category: "Edukasi",
    date: "18 Mei 2026",
    author: "Cakrawala EduCentre",
  },
  {
    id: "2",
    title:
      "TOEFL iBT Integrated Writing: Cara Menulis 2 Paragraf yang Berlawanan",
    slug: "toefl-ibt-integrated-writing",
    excerpt:
      "Strategi efektif menulis integrated writing task di TOEFL iBT dengan membandingkan bacaan dan perkuliahan.",
    category: "Edukasi",
    date: "18 Mei 2026",
    author: "Cakrawala EduCentre",
  },
  {
    id: "3",
    title: "SIMAK UI: Pola Rotasi, Cermin, dan Pencerminan pada Soal Figural",
    slug: "simak-ui-figural",
    excerpt:
      "Pahami pola rotasi, pencerminan, dan kombinasi keduanya dalam soal figural SIMAK UI dengan tips cepat.",
    category: "Edukasi",
    date: "18 Mei 2026",
    author: "Cakrawala EduCentre",
  },
];
