import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type CaseStudy = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string | null;
  coverImage: string | null;
  status: string | null;
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CaseDetail({ params }: Props) {
  const { slug } = await params;

  let study: CaseStudy | null = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/admin/case-studies`,
      { cache: "no-store" }
    );

    if (res.ok) {
      const all: CaseStudy[] = await res.json();
      study = all.find((s) => s.slug === slug) || null;
    }
  } catch (error) {
    console.error(error);
  }

  if (!study) {
    return <div className="p-10">Case study not found</div>;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <Link href="/case-study" className="text-blue-600 mb-6 inline-block">
        ← Back to case studies
      </Link>

      <h1 className="text-4xl font-bold mb-6">{study.title}</h1>
<h1 className="text-xl font-semibold mb-6">{study.description}</h1>
      <Image
        src={study.coverImage || "/Images/TechHub.avif"}
        alt={study.title}
        width={1000}
        height={600}
        className="rounded-2xl mb-8 w-full h-96 object-cover"
      />

      <div className="prose prose-lg max-w-none">
        {study.content && (
          <div dangerouslySetInnerHTML={{ __html: study.content }} />
        )}
      </div>
    </section>
  );
}
