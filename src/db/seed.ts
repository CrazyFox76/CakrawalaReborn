import "dotenv/config";
import { db } from "./index";
import { vouchers, leads, registrations, users } from "./schema";
import bcrypt from "bcryptjs";

async function seed() {
  console.log("Seeding vouchers...");
  await db.insert(vouchers).values([
    { code: "CAKRAWALA10", type: "nominal", value: 100000, minPurchase: 500000, maxUses: 50, isActive: true },
    { code: "DISKON15", type: "percentage", value: 15, minPurchase: 1000000, maxUses: 30, isActive: true },
    { code: "GRATIS50", type: "nominal", value: 50000, minPurchase: 300000, maxUses: 100, isActive: true },
    { code: "SISWA10", type: "percentage", value: 10, minPurchase: 0, maxUses: 200, isActive: true },
    { code: "SPESIAL30", type: "nominal", value: 300000, minPurchase: 2000000, maxUses: 10, isActive: true },
    { code: "PROMOJUNI", type: "percentage", value: 20, minPurchase: 750000, maxUses: 50, isActive: true },
    { code: "EXPIRED01", type: "nominal", value: 50000, minPurchase: 0, maxUses: 5, isActive: false },
  ]).onConflictDoNothing();

  console.log("Seeding leads...");
  await db.insert(leads).values([
    { phone: "081234567890", source: "hero" },
    { phone: "081234567891", source: "hero" },
    { phone: "081234567892", source: "landing-page" },
  ]).onConflictDoNothing();

  console.log("Seeding admin user...");
  const hashedPassword = await bcrypt.hash("admin123", 12);
  await db.insert(users).values({
    id: crypto.randomUUID(),
    name: "Admin Cakrawala",
    email: "admin@cakrawala.com",
    password: hashedPassword,
  }).onConflictDoNothing();

  console.log("Seeding sample registration...");
  await db.insert(registrations).values({
    nama: "Budi Santoso",
    wa: "081298765432",
    email: "budi@example.com",
    program: "Les Privat (Semua Mapel)",
    jenjang: "SMA",
    paket: "Paket 12 Sesi",
    harga: 1440000,
    jenisLes: "Tatap Muka (Home Visit)",
    alamat: "Jl. Merdeka No. 123, Bekasi",
    waktuLes: "Senin Rabu Jumat, 15.00 WIB",
    durasi: "90",
    orangTua: "Siti Rahmawati",
    invoiceNo: "NO. 1906/001/NASIONAL/JUNI/2026",
    status: "baru",
  });

  console.log("Seed selesai!");
}

seed().catch(console.error);
