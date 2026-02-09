"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SalesAi = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const aiServices = [
    { title: "AI Engineering", desc: "AI engineering and scalable model development." },
    { title: "Generative AI", desc: "Generative AI and Large Language Model (LLM) solutions." },
    { title: "Machine Learning", desc: "Machine learning model design, deployment, and optimization." },
    { title: "NLP & Automation", desc: "Natural Language Processing (NLP) and intelligent automation." },
    { title: "Data Engineering", desc: "Data engineering, ETL pipelines, and analytics infrastructure." },
    { title: "MLOps", desc: "MLOps and AI lifecycle management." },
  ];

  return (
    <section className="py-12 md:py-16 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs  font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur animate-in fade-in slide-in-from-bottom-6 duration-700 mb-4"
          >
            Intelligence Driven
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900    "
          >
            Ai , Machine Learning &  <br /> <span className="text-[#7191e6]">Data Science</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 border-t border-gray-100 relative">
          <div className="lg:w-7/12 py-6">
            {aiServices.map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                className="group relative py-10 border-b border-gray-100 cursor-pointer"
              >
                <div className="flex items-center gap-8 px-4 transition-transform duration-500 group-hover:translate-x-4">
                  <span className={`text-xl font-semibold transition-colors duration-300 ${hoveredIndex === idx ? 'text-[#7191e6]' : 'text-gray-200'}`}>
                    0{idx + 1}
                  </span>
                  <h3 className={`text-2xl md:text-3xl font-semibold uppercase tracking-tighter transition-colors duration-300 ${hoveredIndex === idx ? 'text-[#3d52a1]' : 'text-gray-300'}`}>
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-5/12 relative">
            <div className="lg:sticky lg:top-40 py-10 lg:pl-10 h-fit">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-[#3d52a1] p-10 md:p-12 rounded-[3rem] text-white shadow-2xl shadow-[#3d52a1]/20 relative overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7191e6] rounded-full blur-[60px] opacity-30" />
                  
                  <div className="relative z-10">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7191e6] mb-6 block">
                      Capabilities / 0{hoveredIndex + 1}
                    </span>
                    <h4 className="text-2xl font-semibold uppercase  mb-6 leading-tight">
                      {aiServices[hoveredIndex].title}
                    </h4>
                    <p className="text-lg text-white/80 font-medium leading-relaxed">
                      {aiServices[hoveredIndex].desc}
                    </p>
                    
                    <div className="mt-8 flex items-center gap-4">
                       <div className="w-10 h-1 bg-[#7191e6]" />
                       <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Enterprise Grade AI</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-12 pl-6 border-l-2 border-gray-100"
              >
                <p className="text-gray-400 text-sm font-semibold max-w-xs">
                  &quot;We build responsible, scalable, and business-aligned AI solutions that drive smarter decision making.&quot;
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesAi;