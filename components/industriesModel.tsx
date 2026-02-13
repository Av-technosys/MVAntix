"use client";

import React from "react";
import { motion } from "framer-motion";

const IndustriesModel = () => {
  const models = [
    { title: "Fixed Price Projects", desc: "Ideal for well-defined requirements with predictable timelines and budgets.", angle: "0deg" },
    { title: "Dedicated Teams", desc: "Exclusive teams working as an extension of your in-house workforce.", angle: "90deg" },
    { title: "Staff Augmentation", desc: "Rapid deployment of skilled professionals to fill gaps or scale teams.", angle: "180deg" },
    { title: "Managed Services", desc: "End-to-end platform management, optimization, and support.", angle: "270deg" },
  ];

  return (
    <section className="md:py-16 py-12 bg-white overflow-hidden relative min-h-screen flex items-center">

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="flex flex-col items-center">
          
          {/* CENTER TEXT: The Core */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center mb-20 lg:mb-0 z-20"
          >
            <span className="text-xs  font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur animate-in fade-in slide-in-from-bottom-6 duration-700 mb-4 block">ENGAGEMENT MODELS</span>
            <h2 className="text-4xl md:text-5xl font-semibold md:leading-13 text-slate-900 ">
              Flexible <span className="text-[#7191e6]">Delivery</span>
            </h2>
            <p className="mt-3 text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8">
              Built around your business goals through performance-validated frameworks.
            </p>
          </motion.div>

          {/* SATELLITE CARDS: Rotating around center on scroll */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 lg:mt-32 w-full">
            {models.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group relative p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:border-[#3d52a1] transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#3d52a1]/10"
              >
                {/* Visual Numbering */}
                <div className="absolute -top-4 -left-2 w-12 h-12 bg-[#7191e6] text-white flex items-center justify-center rounded-2xl rotate-[-15deg] group-hover:rotate-0 transition-transform font-semibold text-xl">
                  {idx + 1}
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-[#7191e6] uppercase tracking-tight mb-4 group-hover:text-[#3d52a1]">
                    {item.title}
                  </h3>
                  <div className="w-8 h-1 bg-[#7191e6] mb-6 group-hover:w-full transition-all duration-500" />
                  <p className="text-xs text-gray-400 font-bold leading-relaxed group-hover:text-gray-600">
                    {item.desc}
                  </p>
                </div>

                {/* Cyber Button Element */}
                <div className="mt-8 flex justify-end">
                   <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#3d52a1] group-hover:text-white transition-all text-gray-300">
                      <span className="text-xs">»</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* BOTTOM TECH BAR: Pure Tailwind */}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          className="mt-24 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-white text-[9px] font-semibold text-gray-300 tracking-[0.5em] uppercase">
            Mvantix
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IndustriesModel;