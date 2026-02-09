import React from "react";

const AboutCommit = () => {
  return (
    <section className="w-full bg-blue-50 py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h1
          className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900  mb-6"
          style={{ color: "#7191e6" }}
        >
          The Mvantix <span className="text-black">Commitment</span>
        </h1>

        <p
          className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8 mb-10"
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
