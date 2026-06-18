import { NextResponse } from "next/server";
import { db } from "@/db/index";
import { testimonials } from "@/db/schema";
import { corsHeaders } from "@/lib/api-utils";

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders() });
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const data = await db.select().from(testimonials);
  return NextResponse.json(data, { headers: corsHeaders(origin) });
}
