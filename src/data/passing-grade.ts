export type PassingGrade = {
  university: string;
  program: string;
  grade: number;
  category: "IPA" | "IPS" | "Campuran";
  peminat: number;
};

export const passingGrades: PassingGrade[] = [
  // ═══ UI ═══
  { university: "Universitas Indonesia", program: "Kedokteran", grade: 95, category: "IPA", peminat: 4500 },
  { university: "Universitas Indonesia", program: "Teknik Informatika", grade: 92, category: "Campuran", peminat: 3200 },
  { university: "Universitas Indonesia", program: "Ilmu Hukum", grade: 90, category: "IPS", peminat: 3800 },
  { university: "Universitas Indonesia", program: "Psikologi", grade: 88, category: "IPS", peminat: 2800 },
  { university: "Universitas Indonesia", program: "Akuntansi", grade: 87, category: "IPS", peminat: 2500 },
  { university: "Universitas Indonesia", program: "Ilmu Komputer", grade: 91, category: "Campuran", peminat: 3000 },
  { university: "Universitas Indonesia", program: "Hubungan Internasional", grade: 86, category: "IPS", peminat: 2200 },
  { university: "Universitas Indonesia", program: "Farmasi", grade: 89, category: "IPA", peminat: 1800 },
  { university: "Universitas Indonesia", program: "Teknik Sipil", grade: 84, category: "IPA", peminat: 1600 },
  { university: "Universitas Indonesia", program: "Keperawatan", grade: 82, category: "IPA", peminat: 1500 },

  // ═══ ITB ═══
  { university: "Institut Teknologi Bandung", program: "Teknik Informatika", grade: 93, category: "Campuran", peminat: 3500 },
  { university: "Institut Teknologi Bandung", program: "Teknik Elektro", grade: 90, category: "IPA", peminat: 2200 },
  { university: "Institut Teknologi Bandung", program: "Teknik Mesin", grade: 88, category: "IPA", peminat: 2000 },
  { university: "Institut Teknologi Bandung", program: "Fisika", grade: 82, category: "IPA", peminat: 1200 },
  { university: "Institut Teknologi Bandung", program: "Matematika", grade: 80, category: "IPA", peminat: 1000 },
  { university: "Institut Teknologi Bandung", program: "Arsitektur", grade: 87, category: "Campuran", peminat: 1800 },
  { university: "Institut Teknologi Bandung", program: "Teknik Kimia", grade: 85, category: "IPA", peminat: 1600 },

  // ═══ UGM ═══
  { university: "Universitas Gadjah Mada", program: "Kedokteran", grade: 94, category: "IPA", peminat: 4200 },
  { university: "Universitas Gadjah Mada", program: "Teknik Informatika", grade: 90, category: "Campuran", peminat: 2800 },
  { university: "Universitas Gadjah Mada", program: "Ilmu Hukum", grade: 89, category: "IPS", peminat: 3500 },
  { university: "Universitas Gadjah Mada", program: "Teknik Sipil", grade: 86, category: "IPA", peminat: 1800 },
  { university: "Universitas Gadjah Mada", program: "Psikologi", grade: 87, category: "IPS", peminat: 2400 },
  { university: "Universitas Gadjah Mada", program: "Akuntansi", grade: 86, category: "IPS", peminat: 2200 },
  { university: "Universitas Gadjah Mada", program: "Manajemen", grade: 85, category: "IPS", peminat: 2600 },
  { university: "Universitas Gadjah Mada", program: "Farmasi", grade: 88, category: "IPA", peminat: 1700 },
  { university: "Universitas Gadjah Mada", program: "Keperawatan", grade: 80, category: "IPA", peminat: 1400 },
  { university: "Universitas Gadjah Mada", program: "Ilmu Komunikasi", grade: 84, category: "IPS", peminat: 2100 },

  // ═══ ITS ═══
  { university: "Institut Teknologi Sepuluh Nopember", program: "Teknik Informatika", grade: 89, category: "Campuran", peminat: 2600 },
  { university: "Institut Teknologi Sepuluh Nopember", program: "Teknik Elektro", grade: 86, category: "IPA", peminat: 1800 },
  { university: "Institut Teknologi Sepuluh Nopember", program: "Teknik Mesin", grade: 84, category: "IPA", peminat: 1600 },
  { university: "Institut Teknologi Sepuluh Nopember", program: "Teknik Sipil", grade: 82, category: "IPA", peminat: 1400 },
  { university: "Institut Teknologi Sepuluh Nopember", program: "Desain Produk", grade: 83, category: "Campuran", peminat: 1200 },

  // ═══ IPB ═══
  { university: "IPB University", program: "Kedokteran Hewan", grade: 87, category: "IPA", peminat: 2000 },
  { university: "IPB University", program: "Teknologi Pangan", grade: 84, category: "IPA", peminat: 1500 },
  { university: "IPB University", program: "Agribisnis", grade: 78, category: "IPA", peminat: 1200 },
  { university: "IPB University", program: "Ilmu Komputer", grade: 83, category: "Campuran", peminat: 1800 },
  { university: "IPB University", program: "Teknik Sipil & Lingkungan", grade: 80, category: "IPA", peminat: 1000 },

  // ═══ UNPAD ═══
  { university: "Universitas Padjadjaran", program: "Kedokteran", grade: 93, category: "IPA", peminat: 3500 },
  { university: "Universitas Padjadjaran", program: "Ilmu Hukum", grade: 87, category: "IPS", peminat: 3000 },
  { university: "Universitas Padjadjaran", program: "Psikologi", grade: 85, category: "IPS", peminat: 2200 },
  { university: "Universitas Padjadjaran", program: "Ilmu Komunikasi", grade: 83, category: "IPS", peminat: 2000 },
  { university: "Universitas Padjadjaran", program: "Akuntansi", grade: 84, category: "IPS", peminat: 1800 },
  { university: "Universitas Padjadjaran", program: "Keperawatan", grade: 80, category: "IPA", peminat: 1300 },
  { university: "Universitas Padjadjaran", program: "Farmasi", grade: 86, category: "IPA", peminat: 1600 },

  // ═══ UNDIP ═══
  { university: "Universitas Diponegoro", program: "Kedokteran", grade: 91, category: "IPA", peminat: 3200 },
  { university: "Universitas Diponegoro", program: "Teknik Informatika", grade: 87, category: "Campuran", peminat: 2400 },
  { university: "Universitas Diponegoro", program: "Ilmu Hukum", grade: 85, category: "IPS", peminat: 2800 },
  { university: "Universitas Diponegoro", program: "Manajemen", grade: 83, category: "IPS", peminat: 2000 },
  { university: "Universitas Diponegoro", program: "Teknik Sipil", grade: 82, category: "IPA", peminat: 1500 },

  // ═══ UNAIR ═══
  { university: "Universitas Airlangga", program: "Kedokteran", grade: 93, category: "IPA", peminat: 3800 },
  { university: "Universitas Airlangga", program: "Ilmu Hukum", grade: 87, category: "IPS", peminat: 3000 },
  { university: "Universitas Airlangga", program: "Psikologi", grade: 85, category: "IPS", peminat: 2100 },
  { university: "Universitas Airlangga", program: "Akuntansi", grade: 84, category: "IPS", peminat: 1900 },
  { university: "Universitas Airlangga", program: "Farmasi", grade: 87, category: "IPA", peminat: 1700 },
  { university: "Universitas Airlangga", program: "Keperawatan", grade: 82, category: "IPA", peminat: 1400 },

  // ═══ UNIBRAW ═══
  { university: "Universitas Brawijaya", program: "Kedokteran", grade: 91, category: "IPA", peminat: 3400 },
  { university: "Universitas Brawijaya", program: "Teknik Informatika", grade: 87, category: "Campuran", peminat: 2500 },
  { university: "Universitas Brawijaya", program: "Ilmu Hukum", grade: 85, category: "IPS", peminat: 2700 },
  { university: "Universitas Brawijaya", program: "Manajemen", grade: 83, category: "IPS", peminat: 2100 },
  { university: "Universitas Brawijaya", program: "Teknik Sipil", grade: 82, category: "IPA", peminat: 1500 },

  // ═══ UPI ═══
  { university: "Universitas Pendidikan Indonesia", program: "Pendidikan Bahasa Inggris", grade: 78, category: "Campuran", peminat: 1800 },
  { university: "Universitas Pendidikan Indonesia", program: "Pendidikan Matematika", grade: 76, category: "IPA", peminat: 1500 },
  { university: "Universitas Pendidikan Indonesia", program: "Pendidikan Guru SD", grade: 72, category: "Campuran", peminat: 2000 },
  { university: "Universitas Pendidikan Indonesia", program: "Psikologi", grade: 80, category: "IPS", peminat: 1600 },

  // ═══ UNS ═══
  { university: "Universitas Sebelas Maret", program: "Kedokteran", grade: 90, category: "IPA", peminat: 3000 },
  { university: "Universitas Sebelas Maret", program: "Ilmu Hukum", grade: 84, category: "IPS", peminat: 2500 },
  { university: "Universitas Sebelas Maret", program: "Teknik Informatika", grade: 85, category: "Campuran", peminat: 2200 },
  { university: "Universitas Sebelas Maret", program: "Farmasi", grade: 84, category: "IPA", peminat: 1400 },

  // ═══ UNHAS ═══
  { university: "Universitas Hasanuddin", program: "Kedokteran", grade: 89, category: "IPA", peminat: 2800 },
  { university: "Universitas Hasanuddin", program: "Ilmu Hukum", grade: 83, category: "IPS", peminat: 2400 },
  { university: "Universitas Hasanuddin", program: "Teknik Informatika", grade: 84, category: "Campuran", peminat: 2000 },
  { university: "Universitas Hasanuddin", program: "Manajemen", grade: 80, category: "IPS", peminat: 1700 },

  // ═══ UNMUL ═══
  { university: "Universitas Mulawarman", program: "Kedokteran", grade: 85, category: "IPA", peminat: 2000 },
  { university: "Universitas Mulawarman", program: "Ilmu Hukum", grade: 78, category: "IPS", peminat: 1800 },
  { university: "Universitas Mulawarman", program: "Teknik Informatika", grade: 80, category: "Campuran", peminat: 1600 },

  // ═══ UNLAM ═══
  { university: "Universitas Lambung Mangkurat", program: "Kedokteran", grade: 84, category: "IPA", peminat: 1800 },
  { university: "Universitas Lambung Mangkurat", program: "Ilmu Hukum", grade: 76, category: "IPS", peminat: 1600 },
  { university: "Universitas Lambung Mangkurat", program: "Teknik Sipil", grade: 74, category: "IPA", peminat: 1200 },

  // ═══ PTN Regional Lain ═══
  { university: "Universitas Negeri Jakarta", program: "Psikologi", grade: 80, category: "IPS", peminat: 1800 },
  { university: "Universitas Negeri Jakarta", program: "Pendidikan Bahasa Inggris", grade: 76, category: "Campuran", peminat: 1500 },
  { university: "Universitas Negeri Semarang", program: "Kedokteran", grade: 87, category: "IPA", peminat: 2400 },
  { university: "Universitas Negeri Semarang", program: "Ilmu Hukum", grade: 80, category: "IPS", peminat: 2000 },
  { university: "Universitas Negeri Surabaya", program: "Pendidikan Matematika", grade: 75, category: "IPA", peminat: 1400 },
  { university: "Universitas Negeri Malang", program: "Kedokteran", grade: 86, category: "IPA", peminat: 2200 },
  { university: "Universitas Negeri Malang", program: "Teknik Informatika", grade: 83, category: "Campuran", peminat: 1900 },
  { university: "Universitas Negeri Padang", program: "Ilmu Hukum", grade: 74, category: "IPS", peminat: 1500 },
  { university: "Universitas Negeri Makassar", program: "Pendidikan Bahasa Inggris", grade: 72, category: "Campuran", peminat: 1300 },
  { university: "Universitas Jenderal Soedirman", program: "Kedokteran", grade: 86, category: "IPA", peminat: 2000 },
  { university: "Universitas Jenderal Soedirman", program: "Ilmu Hukum", grade: 78, category: "IPS", peminat: 1700 },
  { university: "Universitas Riau", program: "Teknik Sipil", grade: 74, category: "IPA", peminat: 1100 },
  { university: "Universitas Sriwijaya", program: "Kedokteran", grade: 86, category: "IPA", peminat: 2200 },
  { university: "Universitas Sriwijaya", program: "Ilmu Hukum", grade: 79, category: "IPS", peminat: 1800 },
  { university: "Universitas Sumatera Utara", program: "Kedokteran", grade: 87, category: "IPA", peminat: 2600 },
  { university: "Universitas Sumatera Utara", program: "Teknik Informatika", grade: 83, category: "Campuran", peminat: 2000 },
  { university: "Universitas Syiah Kuala", program: "Kedokteran", grade: 85, category: "IPA", peminat: 2000 },
  { university: "Universitas Tadulako", program: "Ilmu Hukum", grade: 70, category: "IPS", peminat: 1200 },
  { university: "Universitas Sam Ratulangi", program: "Kedokteran", grade: 84, category: "IPA", peminat: 1800 },
  { university: "Universitas Pattimura", program: "Ilmu Hukum", grade: 68, category: "IPS", peminat: 1000 },
  { university: "Universitas Bengkulu", program: "Kedokteran", grade: 82, category: "IPA", peminat: 1500 },
  { university: "Universitas Halu Oleo", program: "Teknik Sipil", grade: 68, category: "IPA", peminat: 900 },
  { university: "Universitas Mataram", program: "Kedokteran", grade: 83, category: "IPA", peminat: 1600 },
  { university: "Universitas Palangkaraya", program: "Ilmu Hukum", grade: 68, category: "IPS", peminat: 900 },
  { university: "Universitas Cenderawasih", program: "Kedokteran", grade: 78, category: "IPA", peminat: 1200 },
];

export const universities = [...new Set(passingGrades.map((p) => p.university))].sort();
export const categories = ["IPA", "IPS", "Campuran"] as const;

export function hitungPeluang(nilai: number, passingGrade: number): number {
  if (nilai <= 0) return 0;
  if (nilai >= 100) return 99;
  const selisih = nilai - passingGrade;
  if (selisih >= 5) return 90 + Math.min(selisih * 2, 9);
  if (selisih >= 2) return 75 + (selisih - 2) * 5;
  if (selisih >= 0) return 60 + selisih * 7.5;
  if (selisih >= -3) return 40 + (selisih + 3) * 6.7;
  if (selisih >= -6) return 20 + (selisih + 3) * 6.7;
  return Math.max(5, 20 + (selisih + 6) * 11.7);
}

export function labelPeluang(persen: number): { text: string; color: string } {
  if (persen >= 80) return { text: "Sangat Besar", color: "text-green-600" };
  if (persen >= 60) return { text: "Besar", color: "text-emerald-600" };
  if (persen >= 40) return { text: "Sedang", color: "text-yellow-600" };
  if (persen >= 20) return { text: "Kecil", color: "text-orange-600" };
  return { text: "Sulit", color: "text-red-600" };
}
