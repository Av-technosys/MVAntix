"use client";

import React from "react";
import { motion } from "framer-motion";

const TalentPods = () => {
  const talents = [
    { title: "Certified Specialists", code: "AUTH_CERT", desc: "Certified Salesforce & ServiceNow professionals" },
    { title: "Tech Experts", code: "TECH_STACK", desc: "AI, Data Science, Cloud, ERP, and Full-Stack experts" },
    { title: "Engagement", code: "MODEL_ENG", desc: "Flexible engagement models: full-time, part-time, project-based" },
    { title: "Deployment", code: "DEPLOY_SYS", desc: "Onsite, hybrid, and remote deployment options" },
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden font-sans relative">
      
      {/* BACKGROUND TECH PATTERN */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#3d52a1 0.5px, transparent 0.5px), linear-gradient(90deg, #3d52a1 0.5px, transparent 0.5px)`, backgroundSize: '50px 50px' }} />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TOP ROW: Title + Featured Image */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
               <span className="h-0.5 w-10 bg-[#7191e6]"></span>
               <span className="text-xs  font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur animate-in fade-in slide-in-from-bottom-6 duration-700">Talent Node / v4.0</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900  mb-8 ">
              Performance <br />
              <span className="text-[#7191e6] ">Validated</span>
            </h2>
            <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8 max-w-md">
              Certified, enterprise-ready professionals through flexible staffing models.
            </p>
          </motion.div>

          {/* TECH IMAGE 1: Large Abstract */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 border border-[#7191e6]/20 rounded-[3rem] group-hover:inset-0 transition-all duration-700" />
            <div className="h-100 w-full bg-gray-100 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Talent Collaboration"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#3d52a1]/80 to-transparent flex flex-col justify-end p-10">
                 <p className="text-white text-[10px] font-semibold tracking-[0.5em] uppercase mb-2">Internal_System_View</p>
                 <p className="text-white/70 text-xs ">&quot;Trained to integrate seamlessly into workflows.&quot;</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE ROW: The Core Grid with Embedded Small Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Service Card 1 */}
        

          {/* TECH IMAGE 2: Small Grid Image */}
          <motion.div className="lg:col-span-2 h-62.5 bg-gray-50 rounded-4xl overflow-hidden relative border border-gray-100 group">
             <img 
               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
               alt="Dev Team"
               className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
             />
             <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-gray-100">
                <p className="text-[#3d52a1] text-[10px] font-semibold tracking-widest uppercase">Pod_Active</p>
             </div>
          </motion.div>

          {/* Remaining Service Cards */}
          {talents.slice(2, 4).map((t, i) => (
            <motion.div key={i} className="p-10 border border-gray-100 rounded-4xl hover:bg-gray-50 transition-all group">
               <span className="text-[9px] font-mono text-[#7191e6] mb-4 block"> {t.code}</span>
               <h3 className="text-xl font-semibold text-[#3d52a1] uppercase mb-4">{t.title}</h3>
               <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
          
          
          {/* FINAL DARK BLOCK */}
          <div className="lg:col-span-2 bg-[#3d52a1] p-12 rounded-4xl text-white flex flex-col justify-between">
             <p className="text-3xl font-semibold uppercase leading-tight tracking-tighter">
                Performance-Validated & <br /> <span className="text-[#7191e6]">Enterprise-Ready</span>
             </p>
             <div className="flex justify-between items-end mt-10">
                <span className="text-[10px] font-mono opacity-50 tracking-[0.3em]">POD_SYS_STABLE_100%</span>
                <div className="h-10 w-10 border-2 border-[#7191e6] rounded-full animate-pulse" />
             </div>
          </div>
            {talents.slice(0, 2).map((t, i) => (
            <motion.div key={i} className="p-10 border border-gray-100 rounded-4xl hover:bg-gray-50 transition-all group">
               <span className="text-[9px] font-mono text-[#7191e6] mb-4 block"> {t.code}</span>
               <h3 className="text-xl font-semibold text-[#3d52a1] uppercase mb-4">{t.title}</h3>
               <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TalentPods;