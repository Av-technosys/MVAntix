"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { blogs } from "@/lib/data/blogs";

const Page = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 10;

  // SEARCH FILTER
  const filtered = blogs.filter((b) => {
    const q = query.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.content.toLowerCase().includes(q)
    );
  });

  // PAGINATION
  const start = (page - 1) * perPage;
  const current = filtered.slice(start, start + perPage);

  const featured = current[0];
  const gridBlogs = current.slice(1);

  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="bg-white">

      {/* HERO SEARCH */}
      <section className="w-full bg-gray-100 py-16 text-center">

        <h1 className="text-4xl text-[#3d52a1] font-semibold mb-8">
          Explore Our Latest Blogs & Insights
        </h1>

        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search blogs"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="w-full py-4 pl-6 pr-12 rounded-full shadow-md border focus:outline-none"
          />
          <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

      </section>

      {/* FEATURED BLOG */}
      {featured && (
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

          <Link href={`/blog/${featured.slug}`} className="block">
            <img src={featured.image} className="rounded-xl shadow-lg cursor-pointer" />
          </Link>

          <Link href={`/blog/${featured.slug}`} className="block cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">{featured.title}</h2>
            <p className="text-gray-600 mb-3">{featured.description}</p>
            <p className="text-sm text-gray-400">{featured.author}</p>
          </Link>

        </section>
      )}

      {/* GRID BLOGS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {gridBlogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`} className="block">
            <div className="cursor-pointer">

              <img src={blog.image} className="rounded-xl mb-3" />

              <p className="text-xs text-gray-400">
                {blog.author} • {blog.date}
              </p>

              <h3 className="font-semibold mb-2">{blog.title}</h3>

              <p className="text-sm text-gray-600">
                {blog.description}
              </p>

            </div>
          </Link>
        ))}

      </section>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2 py-16">

        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 border rounded-lg"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-2 border rounded-lg ${
              page === i + 1 ? "bg-black text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className="px-4 py-2 border rounded-lg"
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default Page;
