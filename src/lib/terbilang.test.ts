import { describe, it, expect } from "vitest";
import { terbilang } from "./terbilang";

describe("terbilang", () => {
  it("converts 0", () => expect(terbilang(0)).toBe(""));
  it("converts 1", () => expect(terbilang(1)).toBe("satu"));
  it("converts 11", () => expect(terbilang(11)).toBe("sebelas"));
  it("converts 12", () => expect(terbilang(12)).toBe("dua belas"));
  it("converts 20", () => expect(terbilang(20)).toBe("dua puluh"));
  it("converts 21", () => expect(terbilang(21)).toBe("dua puluh satu"));
  it("converts 100", () => expect(terbilang(100)).toBe("seratus"));
  it("converts 101", () => expect(terbilang(101)).toBe("seratus satu"));
  it("converts 200", () => expect(terbilang(200)).toBe("dua ratus"));
  it("converts 1000", () => expect(terbilang(1000)).toBe("seribu"));
  it("converts 2000", () => expect(terbilang(2000)).toBe("dua ribu"));
  it("converts 1000000", () => expect(terbilang(1_000_000)).toBe("satu juta"));
  it("converts 1500000", () => expect(terbilang(1_500_000)).toBe("satu juta lima ratus ribu"));
  it("converts large number", () => expect(terbilang(2_500_000_000)).toBe("dua miliar lima ratus juta"));
});
