"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type CaseStudy = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  coverImage: string | null;
  status: string | null;
};

export default function CaseStudyPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const perPage = 9;

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await fetch("/api/admin/case-studies");
        if (res.ok) {
          const data = await res.json();
          const published = data.filter(
            (c: CaseStudy) => c.status === "published"
          );
          setCaseStudies(published);
        }
      } catch (error) {
        console.error("Failed to fetch case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  const start = (page - 1) * perPage;
  const current = caseStudies.slice(start, start + perPage);
  const totalPages = Math.ceil(caseStudies.length / perPage);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading case studies...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-24">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-[#7191e6] text-center mb-24"
      >
        Case Studies
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28 max-w-6xl mx-auto px-6">

      {current.map((data, i) => (
  <motion.div
    key={data.id}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.15 }}
    viewport={{ once: true }}
    className="group"
  >
    <Link href={`/case-study/${data.slug}`}>

      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border">

        <Image
          src={data.coverImage || "/Images/TechHub.avif"}
          alt={data.title}
          width={900}
          height={600}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">

          <h2 className="text-lg font-semibold mb-2">
            {data.title}
          </h2>

          {data.description && (
            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {data.description}
            </p>
          )}

          <div className="mt-auto">
            <span className="inline-block w-full text-center py-2 rounded-lg border text-blue-600 font-medium group-hover:bg-blue-600 group-hover:text-white transition">
              Explore Case Study
            </span>
          </div>

        </div>

      </div>

    </Link>
  </motion.div>
))}


      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-24 gap-2">

          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-4 py-2 border rounded-lg"
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-4 py-2 border rounded-lg ${
                page === p
                  ? "border-blue-600 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="px-4 py-2 border rounded-lg"
          >
            <FaChevronRight />
          </button>

        </div>
      )}

    </section>
  );
}
