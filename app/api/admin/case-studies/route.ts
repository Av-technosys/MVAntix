import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { eq, asc } from "drizzle-orm";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { caseStudies } from "@/db/schema";
import { slugify } from "@/lib/slug";

async function ensureAuthed() {
  const session = await getServerSession(authOptions);
  return !!session;
}

async function uniqueSlug(base: string) {
  let slug = base;
  let counter = 1;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const existing = await db.query.caseStudies.findFirst({
      where: eq(caseStudies.slug, slug),
      columns: { id: true },
    });
    if (!existing) return slug;
    slug = `${base}-${counter++}`;
  }
}

export async function GET() {
  const data = await db
    .select()
    .from(caseStudies)
    .orderBy(asc(caseStudies.createdAt));

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  if (!(await ensureAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const title = String(body.title ?? "").trim();
  if (!title) {
    return NextResponse.json({ error: "Title required" }, { status: 400 });
  }
  const slugBase = slugify(title);
  const slug = await uniqueSlug(slugBase);
  const [created] = await db
    .insert(caseStudies)
    .values({
      title,
      slug,
      description: body.description ?? null,
      content: body.content ?? null,
      coverImage: body.coverImage ?? null,
      status: body.status ?? "draft",
    })
    .returning();
  return NextResponse.json(created);
}
