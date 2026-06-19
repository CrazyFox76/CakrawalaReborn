import { NextResponse } from "next/server";
import { getBrandsWithPrograms } from "@/data/brands";
import { corsHeaders } from "@/lib/api-utils";

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders() });
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const data = getBrandsWithPrograms();
  return NextResponse.json(data, { headers: corsHeaders(origin) });
}
