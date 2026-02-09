import { db } from "@/src/db/client";
import { blogs } from "@/src/db/schema/blogs";
import { eq } from "drizzle-orm";

// /api/blogs/[slug]/route.ts
export async function GET(
  req: Request,
  { params }: { params: { slug: string } },
) {
  const blog = await db.select().from(blogs).where(eq(blogs.slug, params.slug));

  return Response.json(blog[0]);
}
