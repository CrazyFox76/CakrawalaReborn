import { NextResponse } from "next/server";

export function corsHeaders(origin?: string | null) {
  return {
    "Access-Control-Allow-Origin": origin ?? "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export function handleOptions(request: Request) {
  if (request.method === "OPTIONS") {
    return NextResponse.json(null, { headers: corsHeaders() });
  }
}
