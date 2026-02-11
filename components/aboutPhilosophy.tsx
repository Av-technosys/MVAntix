import React from "react";

const layers = [
  {
    title: "AI Intelligence",
    desc: "Not just using tools, but mastering GenAI, prompt engineering, and automated workflows.",
  },
  {
    title: "Cognitive Intelligence",
    desc: "Developing the CEO mindset — structured thinking, decision making, and analytical reasoning.",
  },
  {
    title: "Communication Intelligence",
    desc: "Confidence in the boardroom. Articulating complex ideas to stakeholders with clarity.",
  },
  {
    title: "Execution Intelligence",
    desc: "Discipline and ownership. Moving projects through sprint cycles with speed and accountability.",
  },
];

const AboutPhilosophy = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold leading-15 text-[#7191e6] ">
            <span className="text-black">The</span> Mvantix Philosophy
          </h2>

          <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8 max-w-2xl mx-auto">
            Intelligence. Talent. Execution. A transformation engine across
            four critical intelligence layers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {layers.map((item, i) => (
            <div
              key={i}

              className="relative p-8 rounded-2xl bg-sky-50 border border-[#3d52a1]/20 shadow-md hover:shadow-xl transition duration-300 group"
            >
              {/* Rect accent */}
              <div className="w-12 h-2 bg-[#7191e6] rounded mb-6 group-hover:w-20 transition-all duration-300" />

              <h3 className="text-xl font-semibold mb-4 text-[#3d52a1]">
                {item.title}
              </h3>

              <p className="text-gray-600 text-md font-medium leading-relaxed">
                {item.desc}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-[#7191e6]/5 transition" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutPhilosophy;
