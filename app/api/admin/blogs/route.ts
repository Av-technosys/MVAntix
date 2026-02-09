// src/app/api/admin/blogs/route.ts

import { db } from "@/lib/db";
import { blogs } from "@/db/schema";

export async function POST(req: Request) {
  const body = await req.json();

  await db.insert(blogs).values({
    title: body.title,
    slug: body.slug,
    description: body.description,
    content: body.content,
    coverImage: body.coverImage,
    keywords: body.keywords,
    status: "published",
  });

  return Response.json({ success: true });
}
