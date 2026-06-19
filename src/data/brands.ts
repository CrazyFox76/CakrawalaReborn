export interface Brand {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  iconName: string;
}

export const Brands: Brand[] = [
  {
    id: 1,
    name: "Cakra Edu Partner",
    slug: "cakra-edu-partner",
    description: "Program kemitraan strategis dengan sekolah dan instansi — penyediaan guru pengganti, pelatihan guru, dan kegiatan edukatif.",
    category: "layanan",
    iconName: "Handshake",
  },
  {
    id: 2,
    name: "Rumbel Cakrawala",
    slug: "rumbel-cakrawala",
    description: "Bimbingan belajar tatap muka dan online untuk meningkatkan prestasi akademik dan pemahaman materi sekolah.",
    category: "akademik",
    iconName: "BookOpen",
  },
  {
    id: 3,
    name: "Cakrakids",
    slug: "cakrakids",
    description: "Program pendidikan anak usia dini yang interaktif untuk membangun fondasi belajar yang kuat sejak dini.",
    category: "anak",
    iconName: "Baby",
  },
  {
    id: 4,
    name: "Cakrawala Home Visit",
    slug: "cakrawala-home-visit",
    description: "Layanan les privat guru datang ke rumah untuk pembelajaran personal yang nyaman dan fleksibel.",
    category: "akademik",
    iconName: "Home",
  },
  {
    id: 5,
    name: "Cakra Tech",
    slug: "cakra-tech",
    description: "Pelatihan teknologi digital — coding, desain, AI, dan konten kreatif untuk masa depan digital.",
    category: "skills",
    iconName: "Code",
  },
  {
    id: 6,
    name: "Cakra Prestasi",
    slug: "cakra-prestasi",
    description: "Bimbingan khusus persiapan olimpiade, lomba akademik, dan seleksi masuk sekolah favorit.",
    category: "akademik",
    iconName: "Trophy",
  },
  {
    id: 7,
    name: "TryOut CBT",
    slug: "tryout-cbt",
    description: "Platform simulasi ujian berbasis komputer untuk UTBK, CPNS, Kedinasan, dan ujian sekolah.",
    category: "tryout",
    iconName: "Monitor",
  },
  {
    id: 8,
    name: "Cakra Kedinasan (Cakdin)",
    slug: "cakra-kedinasan",
    description: "Persiapan intensif seleksi perguruan tinggi kedinasan dan CPNS dengan simulasi CAT dan psikotes.",
    category: "akademik",
    iconName: "Shield",
  },
  {
    id: 9,
    name: "Cakra English Centre",
    slug: "cakra-english-centre",
    description: "Pusat pelatihan bahasa Inggris untuk semua kebutuhan — akademik, profesional, dan tes sertifikasi internasional.",
    category: "bahasa",
    iconName: "Languages",
  },
  {
    id: 10,
    name: "Cakra Language Centre",
    slug: "cakra-language-centre",
    description: "Pusat pembelajaran bahasa asing non-Inggris dan layanan akademik writing untuk studi lanjut internasional.",
    category: "bahasa",
    iconName: "Globe",
  },
  {
    id: 11,
    name: "Cakra Skills Up",
    slug: "cakra-skills-up",
    description: "Pelatihan keterampilan profesional dan soft skill untuk pengembangan diri dan kesiapan karir.",
    category: "skills",
    iconName: "TrendingUp",
  },
  {
    id: 12,
    name: "Cakra Bimskrip",
    slug: "cakra-bimskrip",
    description: "Bimbingan penyusunan tugas akhir, skripsi, tesis, dan olah data statistik dengan mentor akademis berpengalaman.",
    category: "akademik",
    iconName: "FileText",
  },
  {
    id: 13,
    name: "Cakra Islami Terpadu",
    slug: "cakra-islami-terpadu",
    description: "Program bimbingan keislaman — mengaji, tahsin, tahfidz, dan pembiasaan ibadah untuk anak dan dewasa.",
    category: "anak",
    iconName: "Heart",
  },
  {
    id: 14,
    name: "Cakra English Test",
    slug: "cakra-english-test",
    description: "Tes kemampuan bahasa Inggris standar internasional untuk kebutuhan studi dan karir.",
    category: "bahasa",
    iconName: "TrendingUp",
  },
  {
    id: 15,
    name: "Cakra Member",
    slug: "cakra-member",
    description: "Program loyalitas dan layanan jasa kreatif — editing, pengembangan web, dokumentasi, dan translator.",
    category: "layanan",
    iconName: "CreditCard",
  },
];

import { programs, type Program } from "./programs";

export interface BrandWithPrograms extends Brand {
  programs: Program[];
}

export async function getBrandsWithPrograms(): Promise<BrandWithPrograms[]> {
  return Brands.map((brand) => ({
    ...brand,
    programs: programs.filter((p) => p.brandSlug === brand.slug),
  }));
}

export async function getBrandWithProgramsBySlug(slug: string): Promise<BrandWithPrograms | null> {
  const brand = Brands.find((b) => b.slug === slug);
  if (!brand) return null;
  return {
    ...brand,
    programs: programs.filter((p) => p.brandSlug === brand.slug),
  };
}
