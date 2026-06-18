export function terbilang(n: number): string {
  const angka = [
    "", "satu", "dua", "tiga", "empat", "lima",
    "enam", "tujuh", "delapan", "sembilan", "sepuluh",
    "sebelas",
  ];

  if (n < 12) return angka[n];
  if (n < 20) return `${angka[n - 10]} belas`;
  if (n < 100) {
    const puluhan = Math.floor(n / 10);
    const sisa = n % 10;
    return `${angka[puluhan]} puluh${sisa ? ` ${angka[sisa]}` : ""}`;
  }
  if (n < 200) return `seratus${n > 100 ? ` ${terbilang(n - 100)}` : ""}`;
  if (n < 1000) {
    const ratusan = Math.floor(n / 100);
    const sisa = n % 100;
    return `${angka[ratusan]} ratus${sisa ? ` ${terbilang(sisa)}` : ""}`;
  }
  if (n < 2000) return `seribu${n > 1000 ? ` ${terbilang(n - 1000)}` : ""}`;
  if (n < 1_000_000) {
    const ribuan = Math.floor(n / 1000);
    const sisa = n % 1000;
    return `${terbilang(ribuan)} ribu${sisa ? ` ${terbilang(sisa)}` : ""}`;
  }
  if (n < 1_000_000_000) {
    const jutaan = Math.floor(n / 1_000_000);
    const sisa = n % 1_000_000;
    return `${terbilang(jutaan)} juta${sisa ? ` ${terbilang(sisa)}` : ""}`;
  }
  return `${terbilang(Math.floor(n / 1_000_000_000))} miliar${n % 1_000_000_000 > 0 ? ` ${terbilang(n % 1_000_000_000)}` : ""}`;
}
