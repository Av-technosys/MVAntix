"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconChevronRight } from "@tabler/icons-react";

const SalesForceService = () => {
  // Aapka exact content list
  const capabilities = [
    "Salesforce consulting and roadmap planning",
    "Implementation and customization across Sales, Service, Marketing, Data & Experience Clouds",
    "Data migration and system integration",
    "Workflow automation and Lightning app development",
    "AppExchange solutions and AI-driven enhancements",
    "Ongoing managed services, optimization, and support",
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT SIDE: Heading & Description (Sticky on Desktop) */}
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs  font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur animate-in fade-in slide-in-from-bottom-6 duration-700 mb-4">
                Salesforce Services
              </h4>
              <h2 className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900  mb-8">
                End to End CRM & <br />
                <span className="text-[#7191e6] ">Digital Experience Solutions</span>
              </h2>
              <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8 mb-10">
                MVANTIX provides comprehensive Salesforce services that help enterprises streamline sales, service, marketing, and customer engagement across the entire lifecycle.
              </p>
              
              {/* Feature Highlights from content */}
              <div className="bg-[#3d52a1] p-8 rounded-3xl text-white">
                <p className="text-sm font-medium leading-relaxed opacity-90">
                  &quot;We focus on building scalable, secure, and adoption-ready Salesforce solutions that deliver measurable ROI and long-term business value.&quot;
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Capabilities List (Modern Vertical Cards) */}
          <div className="lg:w-1/2">
            <div className="space-y-4">
              <p className="text-[10px] font-semibold text-[#3d52a1]/40 uppercase tracking-[0.3em] mb-6 ml-2">
                Our Salesforce capabilities include:
              </p>
              
              {capabilities.map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative flex items-center justify-between p-6 md:p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-[#3d52a1]/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-2xl font-semibold text-[#7191e6]/20 group-hover:text-[#7191e6] transition-colors">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm md:text-base font- text-[#3d52a1] leading-tight">
                      {text}
                    </h3>
                  </div>
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                    <IconChevronRight size={24} className="text-[#7191e6]" />
                  </div>
                  
                  {/* Subtle Border Glow on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#7191e6]/10 rounded-2xl pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SalesForceService;