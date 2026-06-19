import { NextResponse } from "next/server";
import { getPassingGrades } from "@/data/passing-grade";
import { corsHeaders } from "@/lib/api-utils";

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders() });
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const data = getPassingGrades();
  return NextResponse.json(data, { headers: corsHeaders(origin) });
}
