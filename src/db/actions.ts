"use server";

import { db } from "./index";
import { users, registrations, leads, vouchers } from "./schema";
import { eq, and, sql } from "drizzle-orm";
import bcrypt from "bcryptjs";
import type { NewRegistration } from "./types";

// ─── Static Data (imported from data files) ───────────────────────
import {
  getBrandsWithPrograms as dataGetBrandsWithPrograms,
  getBrandWithProgramsBySlug as dataGetBrandWithProgramsBySlug,
} from "@/data/brands";
import { getPrograms as dataGetPrograms, getPopularPrograms as dataGetPopularPrograms } from "@/data/programs";
import { getBlogPosts as dataGetBlogPosts, getBlogPostBySlug as dataGetBlogPostBySlug } from "@/data/blog-posts";
import { getTutors as dataGetTutors } from "@/data/tutors";
import { getTestimonials as dataGetTestimonials } from "@/data/testimonials";
import { getFaqs as dataGetFaqs } from "@/data/faqs";
import { getPassingGrades as dataGetPassingGrades } from "@/data/passing-grade";
import { getAboutFeatures as dataGetAboutFeatures } from "@/data/about-features";
import { getWhyUs as dataGetWhyUs } from "@/data/why-us";
import { getActiveBankAccounts as dataGetActiveBankAccounts } from "@/data/bank-accounts";
import { getPrices as dataGetPrices } from "@/data/prices";
import { getCakraPointStats as dataGetCakraPointStats, getCakraPointRewards as dataGetCakraPointRewards } from "@/data/cakra-points";

export async function getBrandsWithPrograms() { return dataGetBrandsWithPrograms(); }
export async function getBrandWithProgramsBySlug(slug: string) { return dataGetBrandWithProgramsBySlug(slug); }
export async function getPrograms() { return dataGetPrograms(); }
export async function getPopularPrograms() { return dataGetPopularPrograms(); }
export async function getBlogPosts() { return dataGetBlogPosts(); }
export async function getBlogPostBySlug(slug: string) { return dataGetBlogPostBySlug(slug); }
export async function getTutors() { return dataGetTutors(); }
export async function getTestimonials() { return dataGetTestimonials(); }
export async function getFaqs() { return dataGetFaqs(); }
export async function getPassingGrades() { return dataGetPassingGrades(); }
export async function getAboutFeatures() { return dataGetAboutFeatures(); }
export async function getWhyUs() { return dataGetWhyUs(); }
export async function getActiveBankAccounts() { return dataGetActiveBankAccounts(); }
export async function getPrices() { return dataGetPrices(); }
export async function getCakraPointStats() { return dataGetCakraPointStats(); }
export async function getCakraPointRewards() { return dataGetCakraPointRewards(); }

// ─── Auth ──────────────────────────────────────────────────────────
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

// ─── Registrations ─────────────────────────────────────────────────
export async function createRegistration(data: NewRegistration) {
  const rows = await db.insert(registrations).values(data).returning();
  return rows[0];
}

// ─── Leads ─────────────────────────────────────────────────────────
export async function createLead(phone: string, source = "hero") {
  const rows = await db.insert(leads).values({ phone, source }).returning();
  return rows[0];
}

// ─── Search ─────────────────────────────────────────────────────────
export async function searchAll(query: string) {
  const { blogPosts } = await import("@/data/blog-posts");
  const { programs } = await import("@/data/programs");
  const { Brands } = await import("@/data/brands");
  const q = query.toLowerCase();

  const blogResults = blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q),
  );

  const programResults = programs
    .filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    .map((p) => {
      const brand = Brands.find((b) => b.slug === p.brandSlug);
      return {
        id: p.id,
        title: p.title,
        slug: p.slug,
        age: p.age,
        description: p.description,
        brandId: brand?.id ?? 0,
        brandSlug: p.brandSlug,
        iconName: p.iconName,
        category: p.category,
      };
    });

  return { blogPosts: blogResults, programs: programResults };
}

// ─── Vouchers ──────────────────────────────────────────────────────
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
