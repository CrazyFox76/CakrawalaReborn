import "dotenv/config";
import { db } from "./index";
import { vouchers } from "./schema";

async function seed() {
  console.log("Seeding vouchers...");
  await db.insert(vouchers).values([
    { code: "CAKRAWALA10", type: "nominal", value: 100000, minPurchase: 500000, maxUses: 50, isActive: true },
    { code: "DISKON15", type: "percentage", value: 15, minPurchase: 1000000, maxUses: 30, isActive: true },
    { code: "GRATIS50", type: "nominal", value: 50000, minPurchase: 300000, maxUses: 100, isActive: true },
  ]).onConflictDoNothing();

  console.log("Seed selesai!");
}

seed().catch(console.error);
