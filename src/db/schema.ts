import { pgTable, serial, varchar, text, integer, timestamp, boolean, primaryKey } from "drizzle-orm/pg-core";

export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description").notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  iconName: varchar("icon_name", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  brandId: integer("brand_id").references(() => brands.id),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  age: varchar("age", { length: 255 }).notNull(),
  description: text("description").notNull(),
  highlights: text("highlights").array().notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  iconName: varchar("icon_name", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id", { length: 10 }).primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  date: varchar("date", { length: 50 }).notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  readTime: varchar("read_time", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const tutors = pgTable("tutors", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  initials: varchar("initials", { length: 10 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  education: varchar("education", { length: 255 }).notNull(),
  desc: text("desc").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }).notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull().default(5),
  createdAt: timestamp("created_at").defaultNow(),
});

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: varchar("question", { length: 500 }).notNull(),
  answer: text("answer").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const passingGrades = pgTable("passing_grades", {
  id: serial("id").primaryKey(),
  university: varchar("university", { length: 255 }).notNull(),
  program: varchar("program", { length: 255 }).notNull(),
  grade: integer("grade").notNull(),
  category: varchar("category", { length: 50 }).notNull(),
  peminat: integer("peminat").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const aboutFeatures = pgTable("about_features", {
  id: serial("id").primaryKey(),
  iconName: varchar("icon_name", { length: 50 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  desc: text("desc").notNull(),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const whyUs = pgTable("why_us", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  desc: text("desc").notNull(),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  nama: varchar("nama", { length: 255 }).notNull(),
  wa: varchar("wa", { length: 50 }).notNull(),
  email: varchar("email", { length: 255 }),
  program: varchar("program", { length: 255 }).notNull(),
  jenjang: varchar("jenjang", { length: 50 }).notNull(),
  paket: varchar("paket", { length: 255 }),
  harga: integer("harga"),
  jenisLes: varchar("jenis_les", { length: 50 }),
  alamat: text("alamat"),
  waktuLes: varchar("waktu_les", { length: 255 }),
  durasi: varchar("durasi", { length: 50 }),
  orangTua: varchar("orang_tua", { length: 255 }),
  pesan: text("pesan"),
  invoiceNo: varchar("invoice_no", { length: 100 }),
  status: varchar("status", { length: 50 }).default("baru"),
  createdAt: timestamp("created_at").defaultNow(),
});

// ─── NextAuth Tables ───────────────────────────────────────────────────────────
export const users = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  password: text("password"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);

// ─── Bank Accounts ─────────────────────────────────────────────────────────────
export const bankAccounts = pgTable("bank_accounts", {
  id: serial("id").primaryKey(),
  bankName: varchar("bank_name", { length: 100 }).notNull(),
  accountNumber: varchar("account_number", { length: 50 }).notNull(),
  accountHolder: varchar("account_holder", { length: 255 }).notNull(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});
