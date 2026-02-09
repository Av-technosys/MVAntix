// src/db/schema/blogs.ts
import { pgTable, uuid, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  content: text("content"),
  coverImage: text("cover_image"),
  keywords: text("keywords").array(),
  status: varchar("status", { length: 20 }).default("draft"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
