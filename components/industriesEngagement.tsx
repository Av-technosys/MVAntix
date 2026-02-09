"use client";

import React from "react";
import { motion } from "framer-motion";

const IndustriesEngagement = () => {
  const models = [
    {
      title: "Fixed Price Projects",
      description: "Ideal for well-defined requirements with predictable timelines and budgets.",
    },
    {
      title: "Dedicated Teams",
      description: "Exclusive teams working as an extension of your in-house workforce.",
    },
    {
      title: "Staff Augmentation",
      description: "Rapid deployment of skilled professionals to fill gaps or scale teams.",
    },
    {
      title: "Managed Services",
      description: "End-to-end platform management, optimization, and support.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-blue-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT SIDE: Heading (Sticky) */}
          <div className="lg:w-2/5 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 mb-4">
                ENGAGEMENT MODELS
              </h4>
              <h2 className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900  mb-8">
                Flexible Delivery Built <br />
                <span className="text-[#7191e6]">Around Your Needs</span>
              </h2>
              <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8 mb-10">
                MVANTIX offers multiple engagement models to align with different business goals:
              </p>
              
              <div className="bg-[#3d52a1] p-8 rounded-3xl text-white inline-block">
                <p className="text-sm font-medium opacity-90">
                   Strategic frameworks for long-term scalability.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Real Asymmetric Layout */}
          <div className="lg:w-3/5">
            <div className="flex flex-col md:flex-row gap-6">
              
              {/* Column 1 - Higher position */}
              <div className="flex-1 space-y-6">
                {[models[0], models[2]].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="group relative p-8 rounded-[2.5rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#3d52a1]/5 transition-all duration-500"
                  >
                    <span className="block text-2xl font-semibold text-[#7191e6]/20 group-hover:text-[#7191e6] transition-colors mb-6">
                      0{idx === 0 ? "1" : "3"}
                    </span>
                    <h3 className="text-xl font-semibold text-[#3d52a1] mb-4">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#7191e6]/10 rounded-[2.5rem] pointer-events-none" />
                  </motion.div>
                ))}
              </div>

              {/* Column 2 - Lower position (The "Idhar-Udhar" offset) */}
              <div className="flex-1 space-y-6 md:mt-24"> 
                {[models[1], models[3]].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.1 }}
                    className="group relative p-8 rounded-[2.5rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#3d52a1]/5 transition-all duration-500"
                  >
                    <span className="block text-2xl font-semibold text-[#7191e6]/20 group-hover:text-[#7191e6] transition-colors mb-6">
                      0{idx === 0 ? "2" : "4"}
                    </span>
                    <h3 className="text-xl font-semibold text-[#3d52a1] mb-4">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#7191e6]/10 rounded-[2.5rem] pointer-events-none" />
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesEngagement;