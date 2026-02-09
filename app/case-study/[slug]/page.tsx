import { caseStudies } from "@/lib/data/caseStudies";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CaseDetail({ params }: Props) {
  const { slug } = await params;

  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return <div className="p-10">Case study not found</div>;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <Link href="/case-study" className="text-blue-600 mb-6 inline-block">
        ← Back to case studies
      </Link>

      <h1 className="text-4xl font-bold mb-6">{study.title}</h1>

      <Image
        src={study.img}
        alt={study.title}
        width={1000}
        height={600}
        className="rounded-2xl mb-8"
      />

      <p className="text-lg leading-relaxed whitespace-pre-line">
        {study.full}
      </p>
    </section>
  );
}
