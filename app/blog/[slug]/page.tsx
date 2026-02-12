import BlogContactForm from "@/components/blogContactForm";
import { notFound } from "next/navigation";

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

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  let blog: Blog | null = null;

  try {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`, {
  cache: "no-store",
});


    if (res.ok) {
      blog = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch blog:", error);
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

      {/* LEFT BLOG CONTENT */}
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-600 mb-6 text-lg">{blog.description}</p>

        <img
          src={blog.coverImage || "/Images/TechHub.avif"}
          className="rounded-xl mb-8 w-full h-96 object-cover"
          alt={blog.title}
        />

        {/* Keywords */}
        {blog.keywords && blog.keywords.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-8">
            {blog.keywords.map((keyword, idx) => (
              <span key={idx} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                #{keyword}
              </span>
            ))}
          </div>
        )}

        {/* Status Badge */}
        <div className="mb-6">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${blog.status === "published"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
            }`}>
            {blog.status === "published" ? "✅ Published" : "📝 Draft"}
          </span>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {blog.content && (
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          )}
        </div>

        {/* Back Link */}
        <a href="/blog" className="inline-block mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          ← Back to Blogs
        </a>
      </div>

      <BlogContactForm/>
    </div>
  );
}
