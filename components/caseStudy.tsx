"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  IconArrowUpRight, 
  IconDatabase, 
  IconCloudCode, 
  IconRobot
} from "@tabler/icons-react";

const studies = [
  {
    category: "Cloud & ERP",
    title: "Unified Data Cloud & ERP Architecture",
    description: "Streamlined enterprise operations with unified data systems and faster deployments.",
    image: "/images/TechHub2.webp", 
    icon: <IconDatabase size={24} />,
    color: "#7191e6"
  },
  {
    category: "CRM Solutions",
    title: "Salesforce & CRM Optimization",
    description: "Delivering high-impact Salesforce solutions for smarter workforce integration.",
    image: "/images/TechHub.avif",
    icon: <IconCloudCode size={24} />,
    color: "#3d52a1"
  },
  {
    category: "AI & Automation",
    title: "AI Driven Efficiency for Enterprise",
    description: "Harnessing AI to drive automation-driven efficiency across technology firms.",
    image: "/images/herobanner.jpg",
    icon: <IconRobot size={24} />,
    color: "#7191e6"
  }
];

const CaseStudy = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl space-y-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#7191e6] font-black uppercase tracking-[0.3em] text-xs inline-block"
            >
              Case Studies & Proven Results
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-black uppercase italic leading-[0.9] tracking-tighter"
            >
              Delivering Measurable <br /> 
              <span className="text-[#3d52a1]">Business Impact</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-sm lg:text-right"
          >
            <p className="text-slate-500 font-bold italic leading-relaxed">
              We focus on real ROI, real performance, and real scalability.
            </p>
          </motion.div>
        </div>

        {/* --- CASE STUDIES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-100 shadow-2xl shadow-slate-200/40"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={study.image} 
                  alt={study.title}
                  fill
                  className="object-cover  group-hover:scale-110 transition-all duration-1000 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-90" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end text-white">
                {/* Icon Box */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-xl bg-white/10 border border-white/20"
                  style={{ color: study.color }}
                >
                  {study.icon}
                </div>
                
                <span className="text-[#7191e6] text-xs font-black uppercase tracking-widest mb-3">
                  {study.category}
                </span>
                
                <h3 className="text-3xl font-black uppercase italic leading-[0.85] mb-4 tracking-tighter group-hover:text-white transition-colors">
                  {study.title}
                </h3>

                <p className="text-slate-300 text-sm font-medium italic mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {study.description}
                </p>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50">View Success Story</span>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#7191e6] group-hover:text-white transition-all transform group-hover:rotate-45">
                    <IconArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center lg:text-left border-l-4 border-[#3d52a1] pl-8 py-4"
        >
          <p className="text-xl md:text-2xl text-slate-800 font-bold max-w-4xl">
            MVANTIX has delivered high impact solutions across healthcare, security, enterprise services, and technology firms.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudy;