"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { RichTextEditor } from "@/components/richTextEditor";
import { Edit2, Trash2, Plus } from "lucide-react";

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
  const [b, c] = await Promise.all([
    fetch("/api/admin/blogs"),
    fetch("/api/admin/case-studies"),
  ]);

  if (b.ok) {
    const data = await b.json();
    setBlogs(data.reverse()); // latest blog upar
  }

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
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-2 text-gray-600">Manage your blogs and case studies</p>
          </div>
          <div className="flex items-center gap-4">
            {loading && <span className="text-sm text-gray-500">Syncing...</span>}
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="rounded-lg bg-red-600 px-6 py-2 text-sm font-medium text-white shadow transition hover:bg-red-700 hover:shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-3 border-b border-gray-200">
          <button
            className={`px-6 py-3 font-medium transition ${tab === "blogs"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
              }`}
            onClick={() => setTab("blogs")}
          >
            <Plus className="mr-2 inline h-4 w-4" />
            Blogs
          </button>
          <button
            className={`px-6 py-3 font-medium transition ${tab === "case-studies"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
              }`}
            onClick={() => setTab("case-studies")}
          >
            <Plus className="mr-2 inline h-4 w-4" />
            Case Studies
          </button>
        </div>

        {/* Blogs Section */}
        {tab === "blogs" && (
          <section className="grid gap-8 lg:grid-cols-[400px_1fr]">
            {/* Form */}
            <form
              onSubmit={saveBlog}
              className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {isEditingBlog ? " Edit Blog" : " Create Blog"}
              </h2>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    value={blogForm.title}
                    onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                    placeholder="Blog title"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover Image URL
                  </label>
                  <input
                    value={blogForm.coverImage}
                    onChange={(e) => setBlogForm({ ...blogForm, coverImage: e.target.value })}
                    placeholder="https://..."
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  {blogForm.coverImage && (
                    <img
                      src={blogForm.coverImage}
                      alt="Preview"
                      className="mt-2 h-32 w-full rounded-lg object-cover"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={blogForm.description}
                    onChange={(e) => setBlogForm({ ...blogForm, description: e.target.value })}
                    placeholder="Brief description"
                    className="mt-2 h-20 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Keywords</label>
                  <input
                    value={blogForm.keywords}
                    onChange={(e) => setBlogForm({ ...blogForm, keywords: e.target.value })}
                    placeholder="keyword1, keyword2, keyword3"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Content</label>
                  <div className="mt-2">
                    <RichTextEditor
                      value={blogForm.content}
                      onChange={(content) => setBlogForm({ ...blogForm, content })}
                      placeholder="Write your content here..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={blogForm.status}
                    onChange={(e) => setBlogForm({ ...blogForm, status: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="draft"> Draft</option>
                    <option value="published"> Published</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-blue-700 hover:shadow-lg"
                >
                  {isEditingBlog ? "Update" : "Create"}
                </button>
                {isEditingBlog && (
                  <button
                    type="button"
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
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

            {/* List */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">All Blogs ({blogs.length})</h2>
              <div className="mt-6 space-y-4">
                {blogs.map((b) => (
                  <div
                    key={b.id}
                    className="flex gap-4 rounded-lg border border-gray-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    {b.coverImage && (
                      <img
                        src={b.coverImage}
                        alt={b.title}
                        className="h-24 w-32 rounded-lg object-cover shadow-sm"
                      />
                    )}
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{b.title}</div>
                      <div className="mt-1 text-xs text-gray-500">/{b.slug}</div>
                      {b.description && (
                        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                          {b.description}
                        </p>
                      )}
                      <div className="mt-3 flex gap-2">
                        <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                          {b.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-100"
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
                        <Edit2 className="inline h-4 w-4" />
                      </button>
                      <button
                        className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50"
                        onClick={() => deleteBlog(b.id)}
                      >
                        <Trash2 className="inline h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
                {blogs.length === 0 && (
                  <div className="rounded-lg border border-dashed border-gray-300 py-12 text-center">
                    <p className="text-gray-500">No blogs yet. Create one to get started! ✍️</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Case Studies Section */}
        {tab === "case-studies" && (
          <section className="grid gap-8 lg:grid-cols-[400px_1fr]">
            {/* Form */}
            <form
              onSubmit={saveCaseStudy}
              className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {isEditingCase ? "✏️ Edit Case Study" : " Create Case Study"}
              </h2>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    value={caseForm.title}
                    onChange={(e) => setCaseForm({ ...caseForm, title: e.target.value })}
                    placeholder="Case study title"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover Image URL
                  </label>
                  <input
                    value={caseForm.coverImage}
                    onChange={(e) => setCaseForm({ ...caseForm, coverImage: e.target.value })}
                    placeholder="https://..."
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  {caseForm.coverImage && (
                    <img
                      src={caseForm.coverImage}
                      alt="Preview"
                      className="mt-2 h-32 w-full rounded-lg object-cover"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={caseForm.description}
                    onChange={(e) => setCaseForm({ ...caseForm, description: e.target.value })}
                    placeholder="Brief description"
                    className="mt-2 h-20 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Content</label>
                  <div className="mt-2">
                    <RichTextEditor
                      value={caseForm.content}
                      onChange={(content) => setCaseForm({ ...caseForm, content })}
                      placeholder="Write your content here..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={caseForm.status}
                    onChange={(e) => setCaseForm({ ...caseForm, status: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="draft"> Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-blue-700 hover:shadow-lg"
                >
                  {isEditingCase ? "Update" : "Create"}
                </button>
                {isEditingCase && (
                  <button
                    type="button"
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
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

            {/* List */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                All Case Studies ({caseStudies.length})
              </h2>
              <div className="mt-6 space-y-4">
                {caseStudies.map((c) => (
                  <div
                    key={c.id}
                    className="flex gap-4 rounded-lg border border-gray-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    {c.coverImage && (
                      <img
                        src={c.coverImage}
                        alt={c.title}
                        className="h-24 w-32 rounded-lg object-cover shadow-sm"
                      />
                    )}
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{c.title}</div>
                      <div className="mt-1 text-xs text-gray-500">/{c.slug}</div>
                      {c.description && (
                        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                          {c.description}
                        </p>
                      )}
                      <div className="mt-3 flex gap-2">
                        <span className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                          {c.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-100"
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
                        <Edit2 className="inline h-4 w-4" />
                      </button>
                      <button
                        className="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50"
                        onClick={() => deleteCaseStudy(c.id)}
                      >
                        <Trash2 className="inline h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
                {caseStudies.length === 0 && (
                  <div className="rounded-lg border border-dashed border-gray-300 py-12 text-center">
                    <p className="text-gray-500">No case studies yet. Create one to get started! 📊</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
