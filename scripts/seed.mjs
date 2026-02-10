import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL, { max: 1 });

const now = new Date();

const blogSeed = [
  {
    title: "Designing Calm Interfaces",
    description: "A practical guide to reducing cognitive load with layout, type, and rhythm.",
    content:
      "We explore layout hierarchy, spacing cadence, and visual anchors that make complex pages feel simple.",
    coverImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    keywords: ["design", "ui", "ux"],
    status: "published",
  },
  {
    title: "Scaling Product Content",
    description: "How to structure content so updates don’t break your site.",
    content:
      "We cover content models, slug strategy, and reusable blocks that keep marketing agile.",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    keywords: ["content", "cms", "strategy"],
    status: "published",
  },
  {
    title: "From Prototype to Launch",
    description: "Tight feedback loops and testing plans that save weeks.",
    content:
      "Learn how to prioritize experiments, validate assumptions, and ship with confidence.",
    coverImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    keywords: ["product", "launch", "testing"],
    status: "draft",
  },
  {
    title: "Performance Budgets That Stick",
    description: "Set budgets once, keep them forever.",
    content:
      "We define budgets for images, scripts, and third‑party tools with ongoing monitoring.",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    keywords: ["performance", "web", "ops"],
    status: "published",
  },
];

const caseSeed = [
  {
    title: "Retail Growth Dashboard",
    description: "Unified analytics for a global retail brand.",
    content:
      "We built a real‑time dashboard combining sales, logistics, and marketing insights.",
    coverImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    status: "published",
  },
  {
    title: "Healthcare Onboarding Revamp",
    description: "Reduced onboarding time by 46% across clinics.",
    content:
      "We redesigned flows, added self‑serve verification, and improved accessibility.",
    coverImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
    status: "published",
  },
  {
    title: "Fintech Mobile Redesign",
    description: "A faster, clearer experience for daily banking.",
    content:
      "We simplified navigation and improved transaction clarity with a new UI system.",
    coverImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    status: "draft",
  },
];

function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function seed() {
  try {
    for (const b of blogSeed) {
      const slug = slugify(b.title);
      await sql`
        insert into blogs (title, slug, description, content, cover_image, keywords, status, created_at, updated_at)
        values (
          ${b.title},
          ${slug},
          ${b.description},
          ${b.content},
          ${b.coverImage},
          ${b.keywords},
          ${b.status},
          ${now},
          ${now}
        )
        on conflict (slug) do nothing
      `;
    }

    for (const c of caseSeed) {
      const slug = slugify(c.title);
      await sql`
        insert into case_studies (title, slug, description, content, cover_image, status, created_at, updated_at)
        values (
          ${c.title},
          ${slug},
          ${c.description},
          ${c.content},
          ${c.coverImage},
          ${c.status},
          ${now},
          ${now}
        )
        on conflict (slug) do nothing
      `;
    }
  } finally {
    await sql.end({ timeout: 5 });
  }
}

seed()
  .then(() => {
    console.log("Seeded blogs and case studies.");
  })
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
