"use client";

import React from "react";
import { motion } from "framer-motion";

const SalesSolution = () => {
  const erpServices = [
    { title: "SAP Systems", desc: "Expert SAP consulting and implementation." },
    { title: "Oracle Cloud", desc: "Oracle ERP and cloud solutions for enterprises." },
    { title: "Dynamics 365", desc: "Microsoft Dynamics 365 services and support." },
    { title: "System Sync", desc: "CRM and ERP integrations for unified data." },
    { title: "Optimization", desc: "Process optimization and advanced reporting." },
  ];

  return (
    <section className="min-h-screen bg-blue-50 flex items-center py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-stretch border-l border-gray-200">
          
          {/* Left Panel: The Vision (Sticky) */}
          <div className="lg:w-1/3 p-10 lg:p-20 bg-white lg:sticky lg:top-0 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs  font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur animate-in fade-in slide-in-from-bottom-6 duration-700 mb-10">
                Enterprise Platforms
              </h4>
              <h2 className="text-4xl md:text-6xl font-semibold leading-13 text-slate-900  mb-12">
                ERP <br /> <span className="text-[#7191e6] ">HUB</span>
              </h2>
              <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8  border-l-4 border-[#7191e6] pl-6">
                Integrated Systems for Smarter Operations. Unifying business processes and data across your entire organization.
              </p>
            </motion.div>
          </div>

          {/* Right Panel: The Services (Staggered Panels) */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {erpServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative group p-12 border-b border-r border-gray-200 min-h-87.5 flex flex-col justify-between transition-all duration-700 hover:bg-[#3d52a1] ${
                    idx === 0 ? "bg-white" : "bg-white"
                  }`}
                >
                  {/* Background Number Reveal */}
                  <span className="absolute top-10 right-10 text-8xl font-semibold text-gray-50 group-hover:text-white/5 transition-colors duration-500 pointer-events-none">
                    0{idx + 1}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold text-[#3d52a1] group-hover:text-[#7191e6] uppercase tracking-tighter mb-4 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-white/60 font-medium leading-relaxed transition-colors duration-500 max-w-50">
                      {service.desc}
                    </p>
                  </div>

                  <div className="relative z-10">
                    <div className="w-10 h-1 bg-[#7191e6] group-hover:w-full transition-all duration-700" />
                    <p className="mt-4 text-[9px] font-semibold text-[#3d52a1] group-hover:text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                      Enterprise Ready Solution
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Unique Closing Panel */}
              <motion.div 
                className="p-12 bg-[#7191e6] text-white flex flex-col justify-center items-center text-center"
                whileHover={{ backgroundColor: "#3d52a1" }}
              >
                <p className="text-xl font-semibold uppercase tracking-tighter leading-tight">
                  Better Visibility. <br /> Improved Forecasting. <br /> Operational Efficiency.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SalesSolution;