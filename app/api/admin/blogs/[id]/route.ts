import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { eq } from "drizzle-orm";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { blogs } from "@/db/schema";

async function ensureAuthed() {
  const session = await getServerSession(authOptions);
  return !!session;
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await ensureAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await context.params;
  const id = params.id;
  const body = await req.json();
  const [updated] = await db
    .update(blogs)
    .set({
      title: body.title ?? undefined,
      description: body.description ?? undefined,
      content: body.content ?? undefined,
      coverImage: body.coverImage ?? undefined,
      keywords: Array.isArray(body.keywords) ? body.keywords : undefined,
      status: body.status ?? undefined,
      updatedAt: new Date(),
    })
    .where(eq(blogs.id, id))
    .returning();
  return NextResponse.json(updated ?? null);
}

export async function DELETE(
  _req: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!(await ensureAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const params = await context.params;
  const id = params.id;
  await db.delete(blogs).where(eq(blogs.id, id));
  return NextResponse.json({ ok: true });
}
