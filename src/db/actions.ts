"use server";

import { db } from "./index";
import {
  users,
  bankAccounts,
  brands,
  programs,
  blogPosts,
  tutors,
  testimonials,
  faqs,
  passingGrades,
  aboutFeatures,
  whyUs,
  registrations,
  leads,
  prices,
  cakraPointStats,
  cakraPointRewards,
  vouchers,
} from "./schema";
import { eq, asc, or, ilike, and, sql } from "drizzle-orm";
import bcrypt from "bcryptjs";
import type { NewRegistration } from "./types";

// ─── Programs (for sitemap etc.) ──────────────────────────────────────────────
export async function getPrograms() {
  return db.select().from(programs);
}

// ─── Blog ──────────────────────────────────────────────────────────────────────
export async function getBlogPosts() {
  return db.select().from(blogPosts);
}

export async function getBlogPostBySlug(slug: string) {
  const rows = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
  return rows[0] ?? null;
}

// ─── Tutors ────────────────────────────────────────────────────────────────────
export async function getTutors() {
  return db.select().from(tutors);
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
export async function getTestimonials() {
  return db.select().from(testimonials);
}

// ─── FAQs ──────────────────────────────────────────────────────────────────────
export async function getFaqs() {
  return db.select().from(faqs);
}

// ─── Passing Grades ────────────────────────────────────────────────────────────
export async function getPassingGrades() {
  return db.select().from(passingGrades);
}

// ─── About ─────────────────────────────────────────────────────────────────────
export async function getAboutFeatures() {
  return db.select().from(aboutFeatures).orderBy(asc(aboutFeatures.sortOrder));
}

export async function getWhyUs() {
  return db.select().from(whyUs).orderBy(asc(whyUs.sortOrder));
}

// ─── Auth ──────────────────────────────────────────────────────────────────────
export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const hashedPassword = await bcrypt.hash(data.password, 12);
  const id = crypto.randomUUID();
  const rows = await db
    .insert(users)
    .values({
      id,
      name: data.name,
      email: data.email,
      password: hashedPassword,
    })
    .returning();
  return rows[0];
}

// ─── Bank Accounts ─────────────────────────────────────────────────────────────
export async function getActiveBankAccounts() {
  return db
    .select()
    .from(bankAccounts)
    .where(eq(bankAccounts.isActive, true));
}

// ─── Prices ────────────────────────────────────────────────────────────────────
export async function getPrices() {
  return db.select().from(prices).orderBy(asc(prices.jenjang), asc(prices.sesi));
}

// ─── Brands (from DB) ──────────────────────────────────────────────────────────
export async function getBrandsWithPrograms() {
  const allBrands = await db.select().from(brands);
  const allPrograms = await db.select().from(programs);
  return allBrands.map((brand) => ({
    ...brand,
    programs: allPrograms.filter((p) => p.brandId === brand.id),
  }));
}

export async function getBrandWithProgramsBySlug(slug: string) {
  const brand = await db
    .select()
    .from(brands)
    .where(eq(brands.slug, slug))
    .then((rows) => rows[0] ?? null);
  if (!brand) return null;
  const brandPrograms = await db
    .select()
    .from(programs)
    .where(eq(programs.brandId, brand.id));
  return { ...brand, programs: brandPrograms };
}

// ─── Registrations ─────────────────────────────────────────────────────────────
export async function createRegistration(data: NewRegistration) {
  const rows = await db.insert(registrations).values(data).returning();
  return rows[0];
}

// ─── CakraPoints ───────────────────────────────────────────────────────────────
export async function getCakraPointStats() {
  return db.select().from(cakraPointStats).orderBy(asc(cakraPointStats.sortOrder));
}

export async function getCakraPointRewards() {
  return db.select().from(cakraPointRewards).where(eq(cakraPointRewards.isActive, true)).orderBy(asc(cakraPointRewards.sortOrder));
}

// ─── Leads ─────────────────────────────────────────────────────────────────────
export async function createLead(phone: string, source = "hero") {
  const rows = await db.insert(leads).values({ phone, source }).returning();
  return rows[0];
}

export async function getPopularPrograms() {
  return db.select().from(programs).where(eq(programs.isPopular, true));
}

// ─── Search ────────────────────────────────────────────────────────────────────
export async function searchAll(query: string) {
  const blogResults = await db
    .select()
    .from(blogPosts)
    .where(
      or(
        ilike(blogPosts.title, `%${query}%`),
        ilike(blogPosts.excerpt, `%${query}%`),
        ilike(blogPosts.category, `%${query}%`),
      )
    );

  const programResults = await db
    .select({
      id: programs.id,
      title: programs.title,
      slug: programs.slug,
      age: programs.age,
      description: programs.description,
      brandId: programs.brandId,
      brandSlug: brands.slug,
      iconName: programs.iconName,
      category: programs.category,
    })
    .from(programs)
    .leftJoin(brands, eq(programs.brandId, brands.id))
    .where(
      or(
        ilike(programs.title, `%${query}%`),
        ilike(programs.description, `%${query}%`),
      )
    );

  return { blogPosts: blogResults, programs: programResults };
}

// ─── Vouchers ──────────────────────────────────────────────────────────────────
export async function validateVoucher(code: string, purchaseAmount: number) {
  const rows = await db
    .select()
    .from(vouchers)
    .where(
      and(
        eq(vouchers.code, code.toUpperCase()),
        eq(vouchers.isActive, true),
      )
    );

  const voucher = rows[0] ?? null;
  if (!voucher) return { valid: false, error: "Kode voucher tidak ditemukan" } as const;

  if (voucher.expiresAt && new Date(voucher.expiresAt) < new Date()) {
    return { valid: false, error: "Kode voucher sudah kadaluwarsa" } as const;
  }

  const maxUses = voucher.maxUses ?? 0;
  const usedCount = voucher.usedCount ?? 0;
  if (maxUses > 0 && usedCount >= maxUses) {
    return { valid: false, error: "Kuota voucher sudah habis" } as const;
  }

  if (purchaseAmount < (voucher.minPurchase ?? 0)) {
    return { valid: false, error: `Minimal pembelian Rp ${(voucher.minPurchase ?? 0).toLocaleString("id-ID")}` } as const;
  }

  let discount = 0;
  if (voucher.type === "nominal") {
    discount = voucher.value;
  } else if (voucher.type === "percentage") {
    discount = Math.round(purchaseAmount * voucher.value / 100);
  }

  return { valid: true, discount, code: voucher.code, type: voucher.type } as const;
}

export async function redeemVoucher(code: string) {
  await db
    .update(vouchers)
    .set({ usedCount: sql`${vouchers.usedCount} + 1` })
    .where(eq(vouchers.code, code));
}
