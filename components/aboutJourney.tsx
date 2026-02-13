"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    title: "Month 1:",
    heading: `The MVANTIX Intelligence Lab (The "Forge")`,
    desc: `During the first month, talent undergoes rigorous, free training within an AI driven learning engine. Instead of just learning tools, they develop the high level cognitive habits required for modern enterprise environments.`,
    points: [
      "Machine Thinking Mindset: Developing an AI native approach to problem solving and automation.",
      "Cognitive Fluency: Enhancing analytical reasoning and structured decision making.",
      "Communication Mastery: Training in professional articulation and stakeholder presence.",
      "Project Execution Discipline: Mastering workflow ownership and accountability.",
    ],
    img: "/images/service.webp",
  },
  {
    title: "Month 2:",
    heading: `Talent in Action (The "Test Drive")`,
    desc: `In the second month, MVANTIX offers Free Deployment. This allows your teams to work alongside the talent inside your actual workflows at zero risk. You don't have to guess if they are a fit; you observe it firsthand:`,
    points: [
      "Performance: Can they actually deliver the work?",
      "Ownership: Do they take initiative or wait for instructions?",
      "Culture Fit: Do they integrate seamlessly with your existing team?",
      "Speed & Communication: How quickly do they adapt and how clearly do they report progress?",
    ],
    img: "/images/service.webp",
  },
  {
    title: "Month 3 Onward:",
    heading: `The MVANTIX Partnership (The "Scale")`,
    desc: `Once performance is proven, the engagement shifts to a formal partnership that is paid only if you approve.`,
    points: [
      "Flexible Models: Hire full time, contract, or scale up with dedicated 'Talent Pods'.",
      "Performance-Driven: A relationship built on trust and results.",
    ],
    img: "/product4.jpg",
  },
];

const AboutJourney = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-gray-50 py-12 md:py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-semibold md:leading-13 text-[#7191e6] text-center mb-12">
        The Mvantix <span className="text-black"> Journey </span>
      </h2>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* mobile line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 md:hidden" />
        <motion.div
          style={{ height }}
          className="absolute left-4 top-0 w-1 bg-[#3d52a1] origin-top md:hidden"
        />

        {/* desktop line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 -translate-x-1/2" />
        <motion.div
          style={{ height }}
          className="hidden md:block absolute left-1/2 top-0 w-1 bg-[#3d52a1] -translate-x-1/2 origin-top"
        />

        {steps.map((step, i) => (
          <div key={i} className="mb-16 relative w-full">
            {/* mobile dot */}
            <div className="md:hidden absolute left-0 top-3 w-6 h-6 bg-[#7191e6] rounded-full border-4 border-white" />

            {/* desktop dot */}
            <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-[#7191e6] rounded-full -translate-x-1/2 border-4 border-white" />

            {/* mobile layout */}
            <div className="md:hidden pl-14">
              <div className="bg-sky-50 border shadow-md rounded-xl p-5">
                <h3 className="font-semibold text-[#3d52a1] mb-1">
                  {step.title}
                </h3>
                {step.heading && (
                  <h4 className="font-medium text-gray-800 mb-2">
                    {step.heading}
                  </h4>
                )}
                <p className="text-gray-600 text-sm mb-3">{step.desc}</p>

                {step.points && (
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                    {step.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                )}

                <Image
                  src={step.img}
                  alt=""
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg mt-4"
                />
              </div>
            </div>

            {/* desktop layout */}
            <div className="hidden md:flex items-center justify-between w-full">
              {i % 2 === 0 ? (
                <>
                  <div className="w-[40%] bg-sky-50 border shadow-md rounded-xl p-6">
                    <h3 className="font-semibold  text-[#3d52a1] mb-2">
                      {step.title}
                    </h3>
                    {step.heading && (
                      <h4 className="font-semibold text-xl text-gray-800 mb-2">
                        {step.heading}
                      </h4>
                    )}
                    <p className="text-gray-600 text-sm font-medium mb-3">
                      {step.desc}
                    </p>

                    {step.points && (
                      <ul className="list-disc pl-5 text-gray-600 font-medium text-sm space-y-1">
                        {step.points.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="w-[40%] flex justify-start">
                    <Image src={step.img} alt="" width={280} height={280} />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[40%] flex justify-center">
                    <Image src={step.img} alt="" width={280} height={280} />
                  </div>

                  <div className="w-[40%] bg-sky-50 border shadow-md rounded-xl p-6">
                    <h3 className="font-semibold text-[#3d52a1] mb-2">
                      {step.title}
                    </h3>
                    {step.heading && (
                      <h4 className="font-semibold text-xl text-gray-800 mb-2">
                        {step.heading}
                      </h4>
                    )}
                    <p className="text-gray-600 font-medium text-sm mb-3">
                      {step.desc}
                    </p>

                    {step.points && (
                      <ul className="list-disc pl-5 font-medium text-gray-600 text-sm space-y-1">
                        {step.points.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutJourney;
