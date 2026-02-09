import { blogs } from "@/lib/data/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="p-10">Blog not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

      {/* LEFT BLOG CONTENT */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-600 mb-6">{blog.description}</p>

        <img
          src={blog.image}
          className="rounded-xl mb-8"
          alt={blog.title}
        />

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>

          <div>
            <p className="font-medium">{blog.author}</p>
            <p className="text-sm text-gray-400">{blog.date}</p>
          </div>
        </div>

        <div className="whitespace-pre-line text-lg leading-7">
          {blog.content}
        </div>
      </div>

      {/* RIGHT CONTACT CARD */}
      <div className="sticky top-24 h-fit bg-white rounded-xl shadow overflow-hidden">

        <img
          src="/Images/techcircle.jpg"
          className="w-full h-38 object-cover"
          alt="Contact"
        />

        <div className="p-4">
          <h3 className="font-semibold text-base mb-3">
            📬 Get in Touch With Us
          </h3>

          <input
            placeholder="Enter full name"
            className="w-full mb-2 p-2 text-sm border rounded-lg"
          />

          <input
            placeholder="Enter email"
            className="w-full mb-2 p-2 text-sm border rounded-lg"
          />

          <input
            placeholder="Enter mobile number"
            className="w-full mb-2 p-2 text-sm border rounded-lg"
          />

          <textarea
            placeholder="Enter your message"
            rows={3}
            className="w-full mb-3 p-2 text-sm border rounded-lg"
          />

          <button className="w-full bg-blue-800 text-white py-2 text-sm rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
