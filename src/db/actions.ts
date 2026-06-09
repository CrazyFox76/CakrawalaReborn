"use server";

import { db } from "./index";
import {
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
import { eq, asc, desc, like, or, sql } from "drizzle-orm";
import type { Program } from "@/data/programs";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {};

export async function getPrograms() {
  return db.select().from(programs);
}

export async function getProgramBySlug(slug: string) {
  const rows = await db.select().from(programs).where(eq(programs.slug, slug)).limit(1);
  return rows[0] ?? null;
}

export async function getBlogPosts() {
  return db.select().from(blogPosts);
}

export async function getBlogPostBySlug(slug: string) {
  const rows = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
  return rows[0] ?? null;
}

export async function getTutors() {
  return db.select().from(tutors);
}

export async function getTestimonials() {
  return db.select().from(testimonials);
}

export async function getFaqs() {
  return db.select().from(faqs);
}

export async function getPassingGrades() {
  return db.select().from(passingGrades);
}

export async function getAboutFeatures() {
  return db.select().from(aboutFeatures).orderBy(asc(aboutFeatures.sortOrder));
}

export async function getWhyUs() {
  return db.select().from(whyUs).orderBy(asc(whyUs.sortOrder));
}

export async function createRegistration(data: {
  nama: string;
  wa: string;
  email?: string | null;
  program: string;
  jenjang: string;
  paket?: string | null;
  harga?: number | null;
  jenisLes?: string | null;
  alamat?: string | null;
  waktuLes?: string | null;
  durasi?: string | null;
  orangTua?: string | null;
  pesan?: string | null;
  invoiceNo?: string | null;
}) {
  const [row] = await db.insert(registrations).values(data).returning();
  return row;
}
