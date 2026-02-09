import { db } from "@/lib/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

// /api/blogs/[slug]/route.ts
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const blog = await db.select().from(blogs).where(eq(blogs.slug, slug));

  return Response.json(blog[0]);
}
