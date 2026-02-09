"use client";

import React from "react";
import { motion } from "framer-motion";

const SalesCloud = () => {
  const cloudServices = [
    { title: "Cloud Architecture", desc: "Cloud architecture and infrastructure design." },
    { title: "Multi-Cloud", desc: "AWS, Azure, GCP, and IBM Cloud solutions." },
    { title: "DevOps", desc: "CI/CD pipeline automation and DevOps implementation." },
    { title: "Cloud Security", desc: "Cloud security, compliance, and monitoring." },
    { title: "Optimization", desc: "Infrastructure optimization and cost management." },
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl ">
        
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden items-stretch gap-0 border-2 border-[#3d52a1]">
          
          {/* Left Block: Main Branding */}
          <div className="lg:w-1/3 bg-[#3d52a1] p-12 text-white flex flex-col justify-between min-h-125">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#7191e6] text-[10px] font-semibold uppercase tracking-[0.5em] mb-6 block">
                Infrastructure
              </span>
              <h2 className="text-5xl uppercase tracking-tighter leading-none mb-8">
                Cloud & <br /> DevOps <br /> <span className="text-[#7191e6]">Services</span>
              </h2>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                MVANTIX enables enterprises to build cloud-native, resilient, and scalable systems.
              </p>
            </motion.div>

            <div className="pt-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7191e6] border-t border-white/10 pt-6">
                SECURE. SCALABLE. HIGH-PERFORMANCE.
              </p>
            </div>
          </div>

          {/* Right Block: Content Mosaic */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2">
            {cloudServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 border border-gray-100 flex flex-col justify-between group hover:bg-gray-50 transition-all duration-500 ${
                  idx === 0 ? "md:col-span-2 bg-gray-50/50" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold text-[#7191e6] uppercase tracking-widest">
                      Capability / 0{idx + 1}
                    </span>
                    <div className="w-8 h-px bg-gray-200 group-hover:w-12 group-hover:bg-[#3d52a1] transition-all" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#3d52a1] uppercase tracking-tighter mb-4">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-sm">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-8 overflow-hidden h-1 w-full bg-gray-100 relative">
                  <motion.div 
                    className="absolute inset-0 bg-[#3d52a1] -translate-x-full group-hover:translate-x-0 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Tagline - Overlapping the border */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-12 lg:-mt-6 relative z-20 bg-white rounded-2xl border-2 border-[#3d52a1] p-8 md:p-12 max-w-4xl mx-auto text-center shadow-2xl"
        >
          <p className="text-[#3d52a1] text-lg md:text-2xl font-semibold uppercase tracking-tighter">
            We help organizations accelerate deployments, improve reliability, and <span className="text-[#7191e6]">scale with confidence.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default SalesCloud;