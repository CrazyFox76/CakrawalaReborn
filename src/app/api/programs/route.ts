import { NextResponse } from "next/server";
import { db } from "@/db";
import { brands, programs } from "@/db/schema";
import { corsHeaders } from "@/lib/api-utils";

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders() });
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const allBrands = await db.select().from(brands);
  const allPrograms = await db.select().from(programs);
  const data = allBrands.map((brand) => ({
    ...brand,
    programs: allPrograms.filter((p) => p.brandId === brand.id),
  }));
  return NextResponse.json(data, { headers: corsHeaders(origin) });
}
