export interface CakraPointStat {
  id: number;
  label: string;
  value: number;
  suffix: string;
  sortOrder: number;
}

export interface CakraPointReward {
  id: number;
  name: string;
  points: number;
  icon: string;
  tag: string;
  sortOrder: number;
  isActive: boolean;
}

export const cakraPointStats: CakraPointStat[] = [
  { id: 1, label: "Siswa Aktif", value: 1200, suffix: "+", sortOrder: 1 },
  { id: 2, label: "Poin Ditukarkan", value: 50000, suffix: "+", sortOrder: 2 },
  { id: 3, label: "Kepuasan Siswa", value: 98, suffix: "%", sortOrder: 3 },
];

export const cakraPointRewards: CakraPointReward[] = [
  { id: 1, name: "Diskon 25% Kelas", points: 500, icon: "\uD83C\uDF93", tag: "Populer", sortOrder: 1, isActive: true },
  { id: 2, name: "Modul Belajar Premium", points: 750, icon: "\uD83D\uDCDA", tag: "Hot", sortOrder: 2, isActive: true },
  { id: 3, name: "1 Sesi Konsultasi", points: 1000, icon: "\uD83D\uDCA1", tag: "Eksklusif", sortOrder: 3, isActive: true },
  { id: 4, name: "Diskon 50% Tryout", points: 1500, icon: "\uD83C\uDFC6", tag: "Terbaik", sortOrder: 4, isActive: true },
];

export async function getCakraPointStats() { return [...cakraPointStats].sort((a, b) => a.sortOrder - b.sortOrder); }

export async function getCakraPointRewards() {
  return [...cakraPointRewards]
    .filter((r) => r.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}
