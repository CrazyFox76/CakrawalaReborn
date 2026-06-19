import { describe, it, expect } from "vitest";
import { Brands } from "@/data/brands";
import { programs } from "@/data/programs";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog-posts";
import { tutors } from "@/data/tutors";
import { prices } from "@/data/prices";
import { faqs } from "@/data/faqs";
import { bankAccounts } from "@/data/bank-accounts";
import { passingGrades } from "@/data/passing-grade";
import { cakraPointStats, cakraPointRewards } from "@/data/cakra-points";
import { whyUs } from "@/data/why-us";
import { aboutFeatures } from "@/data/about-features";

describe("Data files", () => {
  it("Brands has items with required fields", () => {
    expect(Brands.length).toBeGreaterThan(0);
    for (const b of Brands) {
      expect(b.id).toBeDefined();
      expect(b.name).toBeTruthy();
      expect(b.slug).toBeTruthy();
    }
  });

  it("Programs has items linked to brands", () => {
    expect(programs.length).toBeGreaterThan(0);
    const brandSlugs = new Set(Brands.map((b) => b.slug));
    for (const p of programs) {
      expect(p.title).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(brandSlugs.has(p.brandSlug)).toBe(true);
    }
  });

  it("Testimonials has items", () => {
    expect(testimonials.length).toBeGreaterThan(0);
    for (const t of testimonials) {
      expect(t.name).toBeTruthy();
      expect(t.content).toBeTruthy();
    }
  });

  it("Blog posts have unique slugs", () => {
    expect(blogPosts.length).toBeGreaterThan(0);
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("Tutors has items", () => {
    expect(tutors.length).toBeGreaterThan(0);
    for (const t of tutors) {
      expect(t.name).toBeTruthy();
      expect(t.subject).toBeTruthy();
    }
  });

  it("Prices has items", () => {
    expect(prices.length).toBeGreaterThan(0);
    for (const p of prices) {
      expect(p.jenjang).toBeTruthy();
      expect(p.harga).toBeGreaterThan(0);
    }
  });

  it("FAQs has items", () => {
    expect(faqs.length).toBeGreaterThan(0);
    for (const f of faqs) {
      expect(f.question).toBeTruthy();
      expect(f.answer).toBeTruthy();
    }
  });

  it("Bank accounts has items", () => {
    expect(bankAccounts.length).toBeGreaterThan(0);
    for (const b of bankAccounts) {
      expect(b.bankName).toBeTruthy();
      expect(b.accountNumber).toBeTruthy();
    }
  });

  it("Passing grades has items", () => {
    expect(passingGrades.length).toBeGreaterThan(0);
    for (const p of passingGrades) {
      expect(p.university).toBeTruthy();
      expect(p.program).toBeTruthy();
      expect(p.grade).toBeGreaterThan(0);
    }
  });

  it("Cakra point stats has items", () => {
    expect(cakraPointStats.length).toBeGreaterThan(0);
    expect(cakraPointRewards.length).toBeGreaterThan(0);
  });

  it("Why us has items", () => {
    expect(whyUs.length).toBeGreaterThan(0);
    for (const w of whyUs) {
      expect(w.title).toBeTruthy();
      expect(w.desc).toBeTruthy();
    }
  });

  it("About features has items", () => {
    expect(aboutFeatures.length).toBeGreaterThan(0);
    for (const a of aboutFeatures) {
      expect(a.title).toBeTruthy();
      expect(a.desc).toBeTruthy();
    }
  });
});
