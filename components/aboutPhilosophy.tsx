"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconBrain,  IconMessages, IconBolt, IconSettingsAutomation } from "@tabler/icons-react";

const MinimalPhilosophyHub = () => {
  const layers = [
    {
      id: "01",
      title: "AI Intelligence",
      tag: "GenAI Mastery",
      desc: "Not just using tools, but mastering GenAI, prompt engineering, and automated workflows.",
      icon: <IconSettingsAutomation size={20} />
    },
    {
      id: "02",
      title: "Cognitive Intelligence",
      tag: "CEO Mindset",
      desc: "Developing the CEO mindset — structured thinking, decision making, and analytical reasoning.",
      icon: <IconBrain size={20} />
    },
    {
      id: "03",
      title: "Communication Intelligence",
      tag: "Boardroom Clarity",
      desc: "Confidence in the boardroom. Articulating complex ideas to stakeholders with clarity.",
      icon: <IconMessages size={20} />
    },
    {
      id: "04",
      title: "Execution Intelligence",
      tag: "Ownership",
      desc: "Discipline and ownership. Moving projects through sprint cycles with speed and accountability.",
      icon: <IconBolt size={20} />
    }
  ];

  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-white overflow-hidden py-16 md:py-24">
      {/* SalesBanner Background Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full  hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-32 h-32 border-[20px] border-[#7191e6]/10 rounded-4xl hidden lg:block" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header - Synced with SalesBanner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                <div className="w-12 h-0.5 bg-[#7191e6]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  The Mvantix Philosophy
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl text-center md:text-left font-semibold md:leading-13 text-slate-900 uppercase">
                The <span className="text-[#7191e6]">Transformation</span> <br className="md:block hidden" />
                Engine
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg text-slate-600 text-center md:text-left lg:text-right font-medium leading-relaxed opacity-90"
            >
              Intelligence. Talent. Execution. Built across <span className="text-[#3d52a1] font-bold">four critical</span> intelligence layers.
            </motion.p>
          </div>
        </div>

        {/* Minimal List with Philosophy Content */}
        <div className="border-t border-slate-100">
          {layers.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative border-b border-slate-100 py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 hover:px-8 transition-all duration-500"
            >
              {/* Subtle Blue Background reveal */}
              <div className="absolute inset-0 bg-[#3d52a1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-xl" />

              <div className="flex items-center gap-8 md:gap-12">
                <span className="text-sm font-black text-[#7191e6]/40 group-hover:text-[#7191e6] transition-colors">
                  {item.id}
                </span>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 transition-colors group-hover:text-[#3d52a1]">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#7191e6] mt-1 block">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-12">
                <p className="max-w-[320px] text-slate-600 text-sm font-medium leading-relaxed hidden lg:block opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
                
              
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MinimalPhilosophyHub;