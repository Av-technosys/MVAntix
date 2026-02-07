import React from "react";

const AboutCommit = () => {
  return (
    <section className="w-full bg-[#dfe8e6] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h1
          className="text-2xl md:text-3xl font-bold mb-6"
          style={{ color: "#3d52a1" }}
        >
          The MVANTIX Commitment
        </h1>

        <p
          className="text-lg md:text-xl leading-relaxed mb-10"
          style={{ color: "#000000" }}
        >
          Plug and play isn&apos;t a dream; it&apos;s our standard. We are committed to
          ethical AI adoption, inclusive growth, and long-term partnerships.
          When you choose MVANTIX, you aren&apos;t just filling a seat; you are
          gaining a competitive edge.
        </p>

        <button
          className="px-8 py-4 text-white text-lg font-semibold rounded-lg transition hover:opacity-90"
          style={{ backgroundColor: "#3d52a1" }}
        >
          Try for free
        </button>

      </div>
    </section>
  );
};

export default AboutCommit;
