import { describe, it, expect } from "vitest";
import programsData from "@/data/programs-data.json";
import passingGradesData from "@/data/passing-grades-data.json";
import { Brands } from "@/data/brands";

describe("programs-data.json", () => {
  it("has items with all required fields", () => {
    expect(programsData.length).toBeGreaterThan(0);
    for (const p of programsData) {
      expect(typeof p.id).toBe("number");
      expect(typeof p.brandSlug).toBe("string");
      expect(typeof p.title).toBe("string");
      expect(typeof p.slug).toBe("string");
      expect(typeof p.age).toBe("string");
      expect(typeof p.description).toBe("string");
      expect(Array.isArray(p.highlights)).toBe(true);
      expect(typeof p.category).toBe("string");
      expect(typeof p.iconName).toBe("string");
      expect(typeof p.isPopular).toBe("boolean");
    }
  });

  it("has valid brandSlug values", () => {
    const brandSlugs = new Set(Brands.map((b) => b.slug));
    for (const p of programsData) {
      expect(brandSlugs.has(p.brandSlug)).toBe(true);
    }
  });
});

describe("passing-grades-data.json", () => {
  it("has items with all required fields", () => {
    expect(passingGradesData.length).toBeGreaterThan(0);
    for (const p of passingGradesData) {
      expect(typeof p.university).toBe("string");
      expect(typeof p.program).toBe("string");
      expect(typeof p.grade).toBe("number");
      expect(["IPA", "IPS", "Campuran"]).toContain(p.category);
      expect(typeof p.peminat).toBe("number");
    }
  });
});
