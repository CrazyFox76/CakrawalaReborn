export interface Price {
  id: number;
  jenjang: string;
  sesi: number;
  harga: number;
  isPopular: boolean;
}

export const prices: Price[] = [
  { id: 1, jenjang: "PAUD/TK", sesi: 6, harga: 540000, isPopular: true },
  { id: 2, jenjang: "PAUD/TK", sesi: 12, harga: 960000, isPopular: false },
  { id: 3, jenjang: "PAUD/TK", sesi: 24, harga: 1680000, isPopular: false },
  { id: 4, jenjang: "SD", sesi: 6, harga: 600000, isPopular: false },
  { id: 5, jenjang: "SD", sesi: 12, harga: 1080000, isPopular: true },
  { id: 6, jenjang: "SD", sesi: 24, harga: 1920000, isPopular: false },
  { id: 7, jenjang: "SMP", sesi: 6, harga: 720000, isPopular: false },
  { id: 8, jenjang: "SMP", sesi: 12, harga: 1260000, isPopular: true },
  { id: 9, jenjang: "SMP", sesi: 24, harga: 2280000, isPopular: false },
  { id: 10, jenjang: "SMA", sesi: 6, harga: 840000, isPopular: false },
  { id: 11, jenjang: "SMA", sesi: 12, harga: 1440000, isPopular: true },
  { id: 12, jenjang: "SMA", sesi: 24, harga: 2640000, isPopular: false },
  { id: 13, jenjang: "Umum/Mahasiswa", sesi: 6, harga: 900000, isPopular: false },
  { id: 14, jenjang: "Umum/Mahasiswa", sesi: 12, harga: 1560000, isPopular: true },
  { id: 15, jenjang: "Umum/Mahasiswa", sesi: 24, harga: 2880000, isPopular: false },
];

export async function getPrices() {
  return [...prices].sort((a, b) => {
    if (a.jenjang < b.jenjang) return -1;
    if (a.jenjang > b.jenjang) return 1;
    return a.sesi - b.sesi;
  });
}
