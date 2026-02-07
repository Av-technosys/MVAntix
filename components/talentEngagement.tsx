"use client";

import React from "react";
import { motion } from "framer-motion";

const TalentEngagement = () => {
  const models = [
    {
      title: "Fixed Price Projects",
      desc: "Ideal for well-defined requirements with predictable timelines and budgets.",
      code: "FPP_01",
    },
    {
      title: "Dedicated Teams",
      desc: "Exclusive teams working as an extension of your in-house workforce.",
      code: "DED_02",
    },
    {
      title: "Staff Augmentation",
      desc: "Rapid deployment of skilled professionals to fill gaps or scale teams.",
      code: "AUG_03",
    },
    {
      title: "Managed Services",
      desc: "End-to-end platform management, optimization, and support.",
      code: "MAN_04",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 z-0 flex justify-between px-20 opacity-20 pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-px h-full bg-gray-200" />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER: Bold & Off-Center */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6 mb-4"
          >
            <span className="text-[10px] font-black tracking-[0.6em] text-[#7191e6] uppercase">Engagement Systems</span>
            <div className="h-px flex-1 bg-gray-100" />
          </motion.div>
          
          <h2 className="text-6xl md:text-[100px] font-black text-black tracking-tighter leading-[0.8] uppercase italic">
            Flexible <br />
            <span className="text-[#7191e6] not-italic">Delivery</span>
          </h2>
          <p className="mt-8 text-gray-400 font-bold uppercase tracking-widest text-xs italic">
            MVANTIX offers multiple engagement models to align with different business goals.
          </p>
        </div>

        {/* THE SWITCH-BOARD GRID */}
        <div className="flex flex-col border-t border-[#3d52a1]">
          {models.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row items-stretch border-b border-gray-100 hover:bg-gray-50/50 transition-all duration-500"
            >
              {/* Index Column */}
              <div className="p-8 md:w-32 border-r border-gray-100 flex items-center justify-center">
                <span className="text-2xl font-black text-gray-200 group-hover:text-[#7191e6] transition-colors italic">
                  0{idx + 1}
                </span>
              </div>

              {/* Code Column */}
              <div className="p-8 md:w-48 border-r border-gray-100 hidden lg:flex items-center">
                <span className="text-[10px] font-mono font-bold text-gray-400 group-hover:text-[#3d52a1]">
                  {`// ${item.code}`}
                </span>
              </div>

              {/* Title Column */}
              <div className="p-8 md:w-1/3 flex items-center">
                <h3 className="text-2xl md:text-3xl font-black text-[#3d52a1] uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                  {item.title}
                </h3>
              </div>

              {/* Description Column */}
              <div className="p-8 flex-1 flex items-center bg-white md:bg-transparent">
                <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-md group-hover:text-gray-800 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Arrow Column */}
              <div className="p-8 md:w-24 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-10 h-10 rounded-full bg-[#3d52a1] flex items-center justify-center text-white rotate-[-45deg]">
                    →
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CLOSING STATMENT: Wide Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 bg-[#3d52a1] rounded-[2rem] flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <div className="w-24 h-24 border-4 border-white rounded-full" />
          </div>
          
          <h4 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter z-10">
            Built Around <span className="text-[#7191e6]">Your Needs</span>
          </h4>
          
          <div className="mt-6 md:mt-0 flex items-center gap-4 z-10">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#3d52a1] bg-[#7191e6]" />)}
             </div>
             <span className="text-[10px] font-black uppercase tracking-widest">Global Delivery Active</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TalentEngagement;