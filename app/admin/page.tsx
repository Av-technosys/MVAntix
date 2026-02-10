"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

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

type CaseStudy = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string | null;
  coverImage: string | null;
  status: string | null;
};

type TabKey = "blogs" | "case-studies";

export default function AdminPage() {
  const router = useRouter();
  const { status } = useSession();
  const [tab, setTab] = useState<TabKey>("blogs");

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(false);

  const [blogForm, setBlogForm] = useState({
    id: "",
    title: "",
    description: "",
    content: "",
    coverImage: "",
    keywords: "",
    status: "draft",
  });

  const [caseForm, setCaseForm] = useState({
    id: "",
    title: "",
    description: "",
    content: "",
    coverImage: "",
    status: "draft",
  });

  const isEditingBlog = useMemo(() => !!blogForm.id, [blogForm.id]);
  const isEditingCase = useMemo(() => !!caseForm.id, [caseForm.id]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    void loadAll();
  }, [status]);

  async function loadAll() {
    setLoading(true);
    const [b, c] = await Promise.all([fetch("/api/admin/blogs"), fetch("/api/admin/case-studies")]);
    if (b.ok) setBlogs(await b.json());
    if (c.ok) setCaseStudies(await c.json());
    setLoading(false);
  }

  async function saveBlog(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = {
      title: blogForm.title,
      description: blogForm.description || null,
      content: blogForm.content || null,
      coverImage: blogForm.coverImage || null,
      keywords: blogForm.keywords
        ? blogForm.keywords.split(",").map((k) => k.trim()).filter(Boolean)
        : null,
      status: blogForm.status,
    };
    if (isEditingBlog) {
      await fetch(`/api/admin/blogs/${blogForm.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
    setBlogForm({
      id: "",
      title: "",
      description: "",
      content: "",
      coverImage: "",
      keywords: "",
      status: "draft",
    });
    await loadAll();
  }

  async function saveCaseStudy(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = {
      title: caseForm.title,
      description: caseForm.description || null,
      content: caseForm.content || null,
      coverImage: caseForm.coverImage || null,
      status: caseForm.status,
    };
    if (isEditingCase) {
      await fetch(`/api/admin/case-studies/${caseForm.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch("/api/admin/case-studies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
    setCaseForm({
      id: "",
      title: "",
      description: "",
      content: "",
      coverImage: "",
      status: "draft",
    });
    await loadAll();
  }

  async function deleteBlog(id: string) {
    if (!confirm("Delete this blog?")) return;
    await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    await loadAll();
  }

  async function deleteCaseStudy(id: string) {
    if (!confirm("Delete this case study?")) return;
    await fetch(`/api/admin/case-studies/${id}`, { method: "DELETE" });
    await loadAll();
  }

  if (status === "loading") {
    return <div className="px-6 py-16">Loading...</div>;
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold">Admin</h1>
        <div className="flex items-center gap-4">
          {loading && <span className="text-sm text-gray-500">Refreshing...</span>}
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        <button
          className={`rounded-full px-4 py-2 text-sm ${tab === "blogs" ? "bg-black text-white" : "border border-gray-200"
            }`}
          onClick={() => setTab("blogs")}
        >
          Blogs
        </button>
        <button
          className={`rounded-full px-4 py-2 text-sm ${tab === "case-studies" ? "bg-black text-white" : "border border-gray-200"
            }`}
          onClick={() => setTab("case-studies")}
        >
          Case Studies
        </button>
      </div>

      {tab === "blogs" && (
        <section className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <form onSubmit={saveBlog} className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold">{isEditingBlog ? "Edit Blog" : "Create Blog"}</h2>
            <div className="mt-4 grid gap-3">
              <input
                value={blogForm.title}
                onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                placeholder="Title"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                required
              />
              <input
                value={blogForm.coverImage}
                onChange={(e) => setBlogForm({ ...blogForm, coverImage: e.target.value })}
                placeholder="Cover image URL"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <input
                value={blogForm.keywords}
                onChange={(e) => setBlogForm({ ...blogForm, keywords: e.target.value })}
                placeholder="Keywords (comma separated)"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <textarea
                value={blogForm.description}
                onChange={(e) => setBlogForm({ ...blogForm, description: e.target.value })}
                placeholder="Description"
                className="h-20 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <textarea
                value={blogForm.content}
                onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                placeholder="Content"
                className="h-40 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <select
                value={blogForm.status}
                onChange={(e) => setBlogForm({ ...blogForm, status: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="submit"
                className="rounded-md bg-black px-4 py-2 text-sm text-white"
              >
                {isEditingBlog ? "Update" : "Create"}
              </button>
              {isEditingBlog && (
                <button
                  type="button"
                  className="rounded-md border border-gray-200 px-4 py-2 text-sm"
                  onClick={() =>
                    setBlogForm({
                      id: "",
                      title: "",
                      description: "",
                      content: "",
                      coverImage: "",
                      keywords: "",
                      status: "draft",
                    })
                  }
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold">All Blogs</h2>
            <div className="mt-4 space-y-3">
              {blogs.map((b) => (
                <div key={b.id} className="rounded-lg border border-gray-100 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium">{b.title}</div>
                      <div className="text-xs text-gray-500">/{b.slug}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="rounded-md border border-gray-200 px-3 py-1 text-xs"
                        onClick={() =>
                          setBlogForm({
                            id: b.id,
                            title: b.title ?? "",
                            description: b.description ?? "",
                            content: b.content ?? "",
                            coverImage: b.coverImage ?? "",
                            keywords: b.keywords?.join(", ") ?? "",
                            status: b.status ?? "draft",
                          })
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="rounded-md border border-red-200 px-3 py-1 text-xs text-red-600"
                        onClick={() => deleteBlog(b.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {blogs.length === 0 && <div className="text-sm text-gray-500">No blogs yet.</div>}
            </div>
          </div>
        </section>
      )}

      {tab === "case-studies" && (
        <section className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <form onSubmit={saveCaseStudy} className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold">
              {isEditingCase ? "Edit Case Study" : "Create Case Study"}
            </h2>
            <div className="mt-4 grid gap-3">
              <input
                value={caseForm.title}
                onChange={(e) => setCaseForm({ ...caseForm, title: e.target.value })}
                placeholder="Title"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                required
              />
              <input
                value={caseForm.coverImage}
                onChange={(e) => setCaseForm({ ...caseForm, coverImage: e.target.value })}
                placeholder="Cover image URL"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <textarea
                value={caseForm.description}
                onChange={(e) => setCaseForm({ ...caseForm, description: e.target.value })}
                placeholder="Description"
                className="h-20 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <textarea
                value={caseForm.content}
                onChange={(e) => setCaseForm({ ...caseForm, content: e.target.value })}
                placeholder="Content"
                className="h-40 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <select
                value={caseForm.status}
                onChange={(e) => setCaseForm({ ...caseForm, status: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="submit"
                className="rounded-md bg-black px-4 py-2 text-sm text-white"
              >
                {isEditingCase ? "Update" : "Create"}
              </button>
              {isEditingCase && (
                <button
                  type="button"
                  className="rounded-md border border-gray-200 px-4 py-2 text-sm"
                  onClick={() =>
                    setCaseForm({
                      id: "",
                      title: "",
                      description: "",
                      content: "",
                      coverImage: "",
                      status: "draft",
                    })
                  }
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold">All Case Studies</h2>
            <div className="mt-4 space-y-3">
              {caseStudies.map((c) => (
                <div key={c.id} className="rounded-lg border border-gray-100 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium">{c.title}</div>
                      <div className="text-xs text-gray-500">/{c.slug}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="rounded-md border border-gray-200 px-3 py-1 text-xs"
                        onClick={() =>
                          setCaseForm({
                            id: c.id,
                            title: c.title ?? "",
                            description: c.description ?? "",
                            content: c.content ?? "",
                            coverImage: c.coverImage ?? "",
                            status: c.status ?? "draft",
                          })
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="rounded-md border border-red-200 px-3 py-1 text-xs text-red-600"
                        onClick={() => deleteCaseStudy(c.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {caseStudies.length === 0 && (
                <div className="text-sm text-gray-500">No case studies yet.</div>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
