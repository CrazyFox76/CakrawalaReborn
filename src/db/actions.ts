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
} from "./schema";
import { eq, asc } from "drizzle-orm";
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
