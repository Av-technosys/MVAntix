"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  IconUsers, 
  IconSchool, 
  IconChartInfographic, 
  IconRocket,
  IconArrowRight
} from "@tabler/icons-react";

const steps = [
  {
    title: "Source",
    icon: <IconUsers size={32} />,
    description: "We source talent through academic partnerships, professional networks, and diverse talent pools.",
    color: "#7191e6"
  },
  {
    title: "Train",
    icon: <IconSchool size={32} />,
    description: "We train using immersive, real world, enterprise-aligned programs.",
    color: "#3d52a1"
  },
  {
    title: "Upskill",
    icon: <IconChartInfographic size={32} />,
    description: "We upskill teams through AI driven assessments and continuous learning.",
    color: "#7191e6"
  },
  {
    title: "Deploy",
    icon: <IconRocket size={32} />,
    description: "We deploy talent with flexible engagement models including full time, as a Service.",
    color: "#3d52a1"
  }
];

const HomeBusiness = () => {
  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#7191e6] font-semibold uppercase tracking-[0.4em] text-xs"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900 "
          >
            Our Business <span className="text-[#3d52a1]">Model</span>
          </motion.h2>
          <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8 max-w-2xl mx-auto">
            A scalable pipeline of future-ready professionals, built for modern enterprise demands.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-12 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group z-10"
            >
              <div className="h-full p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-10"
                  style={{ backgroundColor: `${step.color}15`, color: step.color }}
                >
                  {step.icon}
                </div>
                <span className="absolute top-6 right-8 text-slate-200 font-semibold text-4xl opacity-50 group-hover:text-[#7191e6]/20 transition-colors">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-semibold text-black uppercase mb-4 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-8 w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="w-full h-full"
                    style={{ backgroundColor: step.color }}
                  />
                </div>
              </div>
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-12 z-20 text-slate-300">
                  <IconArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-8 rounded-4xl bg-[#3d52a1] text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-semibold tracking-tighter uppercase">The Result?</h4>
            <p className="text-white/70 font-medium">A scalable pipeline of future-ready professionals.</p>
          </div>
          <button className="px-8 py-4 bg-white text-[#3d52a1] rounded-xl font-semibold uppercase text-sm hover:scale-105 transition-transform shadow-lg">
            Start Scaling Now
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeBusiness;