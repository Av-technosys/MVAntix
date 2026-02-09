"use client";

import React from "react";
import { motion } from "framer-motion";

const IndustriesWhy = () => {
  const points = [
    { text: "Performance-validated talent, not resumes", pos: "lg:translate-x-[-10%]" },
    { text: "Faster time-to-value and reduced onboarding", pos: "lg:translate-x-[10%]" },
    { text: "Scalable teams aligned to enterprise workflows", pos: "lg:translate-x-[-5%]" },
    { text: "AI-native, future-ready solutions", pos: "lg:translate-x-[5%]" },
    { text: "Long-term partnerships focused on measurable outcomes", pos: "lg:translate-x-0" }
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* TOP BRANDING: Technical Tag */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-4 px-6 py-2 border border-gray-100 rounded-full bg-gray-50/50">
             <div className="h-0.5 w-12 bg-[#7191e6]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Why Mvantix  Logic_Engine</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          
          {/* MAIN CENTERPIECE */}
          <div className="text-center mb-5 relative">
            {/* Background Decorative Rings (Tailwind Only) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200%] border border-[#7191e6]/10 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[250%] border border-[#7191e6]/5 rounded-full -z-10" />

            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900 "
            >
              More Than <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3d52a1] to-[#7191e6]">A Provider</span>
            </motion.h2>
            
            <p className="mt-6 text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8">
              Enterprises partner with MVANTIX because we deliver:
            </p>
          </div>

          {/* PERSPECTIVE STACK: Alternating Tech Blocks */}
          <div className="w-full max-w-4xl space-y-6">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-6 p-4 ${point.pos} group`}
              >
                {/* ID Number with Connector Line */}
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono font-bold text-[#7191e6]">0{idx + 1}</span>
                  <div className="w-12 h-px bg-gray-100 group-hover:w-20 group-hover:bg-[#3d52a1] transition-all duration-500" />
                </div>

                {/* The Content Plate */}
                <div className="flex-1 bg-white border border-gray-100 p-8 rounded-4xl shadow-sm group-hover:shadow-2xl group-hover:shadow-[#3d52a1]/10 group-hover:border-[#7191e6]/30 transition-all duration-500">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg md:text-xl font-semibold text-[#3d52a1] uppercase tracking-tighter leading-tight ">
                      {point.text}
                    </h3>
                    {/* Tech Dot Indicator */}
                    <div className="w-4 h-4 rounded-sm border border-gray-200 flex items-center justify-center p-[2px]">
                       <div className="w-full h-full bg-gray-50 group-hover:bg-[#7191e6] transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* BOTTOM ACCENT: System Footnote */}
    

      </div>
    </section>
  );
};

export default IndustriesWhy;