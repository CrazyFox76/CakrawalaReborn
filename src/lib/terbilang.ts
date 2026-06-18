const angka = [
  "", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh",
  "delapan", "sembilan", "sepuluh", "sebelas",
];

function terbilangUnder(n: number): string {
  if (n < 12) return angka[n];
  if (n < 20) return `${angka[n - 10]} belas`;
  if (n < 100) {
    const puluhan = Math.floor(n / 10);
    const sisa = n % 10;
    return sisa === 0 ? `${angka[puluhan]} puluh` : `${angka[puluhan]} puluh ${angka[sisa]}`;
  }
  if (n < 200) return `seratus ${terbilangUnder(n - 100)}`;
  if (n < 1000) {
    const ratusan = Math.floor(n / 100);
    const sisa = n % 100;
    return sisa === 0 ? `${angka[ratusan]} ratus` : `${angka[ratusan]} ratus ${terbilangUnder(sisa)}`;
  }
  if (n < 2000) return `seribu ${terbilangUnder(n - 1000)}`;
  if (n < 1_000_000) {
    const ribuan = Math.floor(n / 1000);
    const sisa = n % 1000;
    return sisa === 0 ? `${terbilangUnder(ribuan)} ribu` : `${terbilangUnder(ribuan)} ribu ${terbilangUnder(sisa)}`;
  }
  return `${n}`;
}

export function terbilang(n: number): string {
  if (n < 1_000_000_000) return terbilangUnder(n);
  const milyar = Math.floor(n / 1_000_000_000);
  const sisa = n % 1_000_000_000;
  return sisa === 0 ? `${terbilangUnder(milyar)} miliar` : `${terbilangUnder(milyar)} miliar ${terbilangUnder(sisa)}`;
}
