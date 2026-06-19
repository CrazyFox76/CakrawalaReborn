import { pgTable, serial, varchar, text, integer, timestamp, boolean, primaryKey } from "drizzle-orm/pg-core";

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

// ─── Vouchers ───────────────────────────────────────────────────────────────────
export const vouchers = pgTable("vouchers", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 50 }).notNull().unique(),
  type: varchar("type", { length: 20 }).notNull().default("nominal"),
  value: integer("value").notNull(),
  minPurchase: integer("min_purchase").default(0),
  maxUses: integer("max_uses").default(0),
  usedCount: integer("used_count").default(0),
  expiresAt: timestamp("expires_at"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// ─── Leads (hero lead capture) ─────────────────────────────────────────────────
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  phone: varchar("phone", { length: 50 }).notNull(),
  source: varchar("source", { length: 100 }).default("hero"),
  createdAt: timestamp("created_at").defaultNow(),
});
