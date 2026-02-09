// src/app/api/blogs/route.ts

import { db } from "@/lib/db";
import { blogs } from "@/db/schema";

export async function GET() {
  const data = await db.select().from(blogs);
  return Response.json(data);
}
