"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string | null;
  coverImage: string | null;
  keywords: string[] | null;
  status: string | null;
};

const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const perPage = 10;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          // Filter only published blogs
          const published = data.filter((b: Blog) => b.status === "published");
          setBlogs(published);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // SEARCH FILTER
  const filtered = blogs.filter((b) => {
    const q = query.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      (b.description?.toLowerCase().includes(q) ?? false) ||
      (b.content?.toLowerCase().includes(q) ?? false)
    );
  });

  // PAGINATION
  const start = (page - 1) * perPage;
  const current = filtered.slice(start, start + perPage);

  const featured = current[0];
  const gridBlogs = current.slice(1);

  const totalPages = Math.ceil(filtered.length / perPage);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading blogs...</p>
      </div>
    );
  }

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
            <img 
              src={featured.coverImage || "/Images/TechHub.avif"} 
              alt={featured.title}
              className="rounded-xl shadow-lg cursor-pointer w-full h-80 object-cover" 
            />
          </Link>

          <Link href={`/blog/${featured.slug}`} className="block cursor-pointer">
            <h2 className="text-2xl font-bold mb-4">{featured.title}</h2>
            <p className="text-gray-600 mb-3">{featured.description}</p>
            <div className="flex gap-2 flex-wrap">
              {featured.keywords?.slice(0, 3).map((keyword, idx) => (
                <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>

        </section>
      )}

      {/* GRID BLOGS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {gridBlogs.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {gridBlogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`} className="block">
               <div className="cursor-pointer rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">


                  <img 
                    src={blog.coverImage || "/Images/TechHub.avif"} 
                    alt={blog.title}
                    className="rounded-xl mb-3 w-full h-48 object-cover" 
                  />

                  <h3 className="font-semibold mb-2 line-clamp-2">{blog.title}</h3>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    {blog.description}
                  </p>

                  {blog.keywords && blog.keywords.length > 0 && (
                    <div className="flex gap-1 flex-wrap mt-3">
                      {blog.keywords.slice(0, 2).map((keyword, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No blogs found matching your search.</p>
          </div>
        )}
      </section>

      {/* PAGINATION */}
    {/* PAGINATION */}
<section className="max-w-6xl mx-auto px-6 pb-16 flex justify-center">
  <div className="flex items-center gap-2">

    {/* Previous */}
    <button
      onClick={() => setPage((p) => Math.max(1, p - 1))}
      className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
    >
      <FaChevronLeft />
      Previous
    </button>

    {/* Numbers */}
    {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map((p) => (
      <button
        key={p}
        onClick={() => setPage(p)}
        className={`px-4 py-2 border rounded-lg transition ${
          page === p
            ? "border-[#7191e6] text-[#7191e6] bg-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {p}
      </button>
    ))}

    {/* Next */}
    <button
      onClick={() => setPage((p) => Math.min(totalPages || 1, p + 1))}
      className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
    >
      Next
      <FaChevronRight />
    </button>

  </div>
</section>

    </div>
  );
};

export default Page;
