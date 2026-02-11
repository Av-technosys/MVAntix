"use client";
import { useState } from "react";

export default function BlogContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({ type: null, msg: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, msg: "" });

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus({ type: "success", msg: "Message sent successfully!" });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: "error", msg: result.msg || "Error occurred" });
      }
    } catch {
      setStatus({ type: "error", msg: "Server error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky top-24 h-fit bg-white rounded-xl shadow overflow-hidden border">
      <img
        src="/Images/TechHub.avif"
        className="w-full h-36 object-cover"   // 👈 image smaller
        alt="Contact"
      />

      <div className="p-4">  {/* 👈 padding reduced */}
        <h3 className="font-semibold text-base mb-3 text-center">
          Get in Touch With Us
        </h3>

        {status.msg && (
          <div
            className={`mb-2 text-xs p-2 rounded ${
              status.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            name="name"
            required
            placeholder="Enter full name"
            className="w-full p-2 text-sm border rounded-lg outline-none"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Enter email"
            className="w-full p-2 text-sm border rounded-lg outline-none"
          />

          <div className="flex gap-2">
  <div className="px-3 py-2 bg-gray-100 border rounded-lg text-sm flex items-center">
    +91
  </div>

  <input
    name="mobile"
    type="tel"
    inputMode="numeric"
    pattern="[0-9]{10}"
    maxLength={10}
    required
    placeholder="Enter mobile number"
    onInput={(e) => {
      const target = e.target as HTMLInputElement;
      target.value = target.value.replace(/\D/g, "").slice(0, 10);
    }}
    className="w-full p-2 text-sm border rounded-lg outline-none"
  />
</div>



          <textarea
            name="message"
            required
            rows={2}   // 👈 textarea chhota
            placeholder="Enter your message"
            className="w-full p-2 text-sm border rounded-lg outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 text-sm rounded-lg hover:bg-blue-700"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
