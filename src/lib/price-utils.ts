import type { Price } from "@/data/prices";

export type GroupedPrice = Record<string, { sesi: number; harga: number; isPopular: boolean }[]>;

export function groupPricesByJenjang(prices: Price[]): GroupedPrice {
  return prices.reduce<GroupedPrice>((acc, p) => {
    if (!acc[p.jenjang]) acc[p.jenjang] = [];
    acc[p.jenjang].push({ sesi: p.sesi, harga: p.harga, isPopular: p.isPopular });
    return acc;
  }, {});
}
