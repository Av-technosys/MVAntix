"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconCircleChevronRight
} from "@tabler/icons-react";



const HomeModel = () => {
  
  const stages = [
    {
      title: "Month 1  MVANTIX Intelligence Lab",
      desc: "Talent enters our AI powered training engine to build cognitive strength, AI fluency, communication excellence, and execution discipline.",
      icon: <IconHexagonNumber1 size={40} />,
      tag: "The Foundation"
    },
    {
      title: "Month 2  Talent in Action (Free Deployment)",
      desc: "Your teams evaluate MVANTIX talent in real workflows with zero hiring risk. You observe performance, ownership, adaptability, speed, and culture fit.",
      icon: <IconHexagonNumber2 size={40} />,
      tag: "Zero Risk Evaluation"
    },
    {
      title: "Month 3 Onward  MVANTIX Partnership",
      desc: "Hire or scale dedicated talent pods only if performance meets your expectations. No resumes. No guesswork. Only proven ability.",
      icon: <IconHexagonNumber3 size={40} />,
      tag: "Scale With Confidence"
    },
  ];

  return (
    <section id="model-section" className="relative py-12 md:py-16 px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-4"
          >
            <span className="w-12 h-0.5 bg-[#3d52a1]" />
            <span className="text-[#3d52a1] font-semibold uppercase tracking-[0.3em] text-xs">A Performance Based Approach</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900 ">
            Our Signature <br />
            <span className="text-[#7191e6]">3-Stage</span> Model
          </h2>
          <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8 mt-4">
            A Risk-Free, Performance Based Hiring Approach
          </p>
        </div>

        {/* STAGES GRID */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block -z-10" />

          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* CARD */}
              <div className="h-full bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-[#3d52a1]/10 transition-all duration-500 group-hover:-translate-y-2">

                {/* ICON & TAG */}
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[#3d52a1] group-hover:scale-110 transition-transform duration-500">
                    {stage.icon}
                  </div>
                  <span className="px-4 py-1 rounded-full bg-white text-[10px] font-semibold uppercase tracking-widest text-slate-400 border border-slate-100 group-hover:border-[#7191e6] group-hover:text-[#7191e6] transition-colors">
                    {stage.tag}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black uppercase leading-tight tracking-tight">
                    {stage.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#7191e6] group-hover:w-full transition-all duration-700" />
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
                <div className="mt-8 flex justify-end">
                  <IconCircleChevronRight
                    size={32}
                    className="text-slate-200 group-hover:text-[#3d52a1] transition-colors"
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-10 rounded-[3rem] bg-linear-to-br from-[#3d52a1] to-[#7191e6] text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-3xl font-semibold uppercase  tracking-tighter">Ready to see talent in action?</h4>
            <p className="font-medium text-white/80">Experience Month 2 with zero strings attached.</p>
          </div>
          <button className="bg-white text-[#3d52a1] px-10 py-5 rounded-full font-semibold uppercase  text-sm hover:bg-black hover:text-white transition-all shadow-xl">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeModel;