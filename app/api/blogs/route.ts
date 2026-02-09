// src/app/api/blogs/route.ts

import { db } from "@/src/db/client";
import { blogs } from "@/src/db/schema/blogs";

export async function GET() {
  const data = await db.select().from(blogs);
  return Response.json(data);
}
