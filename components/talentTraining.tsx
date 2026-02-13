"use client";

import React from "react";
import { motion } from "framer-motion";

const TalentTraining = () => {
  const trainingServices = [
    "End-user training for Salesforce and ServiceNow",
    "Upskilling programs for admins, developers, and consultants",
    "AI, cloud, and data engineering enablement",
    "Continuous knowledge transfer and mentorship"
  ];

  return (
    <section className="py-12 md:py-16 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Fixed Branding Context */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-0.5 bg-[#7191e6]"></span>
                <span className="text-xs  font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur animate-in fade-in slide-in-from-bottom-6 duration-700">Training & Enablement</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-semibold md:leading-13 text-slate-900  mb-8">
               Upskilling Teams for
                <span className="text-[#7191e6]"> Long-Term Success</span>
              </h2>
              
              <div className="p-8 bg-gray-50 border-l-4 border-[#3d52a1] rounded-r-2xl">
                <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8">
                  MVANTIX delivers structured training and enablement programs aligned with enterprise needs.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: The Terminal Stack */}
          <div className="lg:col-span-7 space-y-4">
            {trainingServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative overflow-hidden bg-white border border-gray-100 p-8 md:p-12 rounded-4xl hover:border-[#7191e6] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#3d52a1]/5"
              >
                {/* Background Numbering */}
                <span className="absolute -right-1 -bottom-8 text-9xl font-semibold text-gray-50 group-hover:text-[#7191e6]/5 transition-colors">
                  0{idx + 1}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-mono text-[#7191e6] font-semibold uppercase">Service_Stream // 0{idx + 1}</span>
                    <div className="flex-1 h-1px bg-gray-50 group-hover:bg-[#7191e6]/20 transition-all"></div>
                  </div>
                  
                  <h3 className="text-xl md:text-xl font-semibold text-[#3d52a1] uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500 max-w-md">
                    {service}
                  </h3>
                </div>

                {/* Micro Tech Element */}
                <div className="mt-8 flex gap-1 group-hover:translate-y-1.25 transition-transform">
                   <div className="w-1 h-1 bg-[#3d52a1]" />
                   <div className="w-4 h-1 bg-[#7191e6]" />
                   <div className="w-1 h-1 bg-gray-100" />
                </div>
              </motion.div>
            ))}

            {/* Final Statement Panel */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="p-10 bg-[#3d52a1] rounded-4xl text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6"
            >
              <p className="text-white text-lg font-semibold uppercase tracking-tighter">
                We ensure teams remain future-ready through continuous learning.
              </p>
              <div className="px-6 py-2 bg-[#7191e6] text-white text-[10px] font-semibold uppercase tracking-widest rounded-full animate-pulse">
                System_Active
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TalentTraining;