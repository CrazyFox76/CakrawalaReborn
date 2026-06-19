import { NextResponse } from "next/server";
import { getBlogPosts } from "@/data/blog-posts";
import { corsHeaders } from "@/lib/api-utils";

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders() });
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const posts = getBlogPosts();
  return NextResponse.json(posts, { headers: corsHeaders(origin) });
}
