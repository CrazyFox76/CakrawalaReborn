import { NextResponse } from "next/server";
import { db } from "@/db/index";
import { blogPosts } from "@/db/schema";
import { corsHeaders } from "@/lib/api-utils";

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders() });
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const posts = await db.select().from(blogPosts).orderBy(blogPosts.date);
  return NextResponse.json(posts, { headers: corsHeaders(origin) });
}
