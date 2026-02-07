"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {  IconCircleCheckFilled } from "@tabler/icons-react";

const HomeStandsFor = () => {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-8 bg-gray-50 overflow-hidden">
      {/* Decorative Watermark */}
      <div className="absolute top-10 left-10 text-[10rem] font-black text-slate-50 select-none -z-10 leading-none italic uppercase hidden lg:block">
        Values
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* LEFT SIDE: CONTENT */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="h-0.5 w-12 bg-[#7191e6]" />
                <span className="text-[#7191e6] font-black uppercase tracking-[0.3em] text-xs">What MVANTIX Stands For</span>
              </div>
              
              <h2 className="text-4xl md:text-4xl lg:text-5xl  font-black text-black uppercase italic leading-[0.9] tracking-tighter text-center lg:text-left">
                Intelligence. <br />
                Talent. <br />
                <span className="text-[#7191e6]">Execution.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-center lg:text-left"
            >
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                MVANTIX represents a new era of workforce excellence.
              </p>
              
              <p className="text-slate-500 font-medium leading-relaxed text-lg">
                We develop professionals who think sharper, communicate clearly, solve complex problems, and execute work with confidence. Our model combines machine intelligence, AI fluency, cognitive training, communication mastery, and real world project exposure to produce enterprise ready professionals.

              </p>

              <div className="pt-4 border-t border-slate-100 italic font-bold text-[#7191e6] text-xl md:text-2xl">
                &quot;In simple terms, we build talent that delivers faster, adapts quicker, and performs stronger.&quot;
              </div>

             
            </motion.div>
          </div>

          {/* RIGHT SIDE: ADVANCED COMPLICATED ANIMATION */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative order-1 lg:order-2">
            
            {/* OUTER RING: Slow & Counter-Clockwise */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] md:w-[540px] md:h-[540px] border border-dashed border-slate-200 rounded-full opacity-60"
            />

            {/* MIDDLE RING: Fast & Clockwise with "Pulse" */}
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-[320px] h-80 md:w-[500px] md:h-[500px] border-2 border-dashed border-[#7191e6]/40 rounded-full"
            />

            {/* INNER GLOW DOTS: Tiny decorative elements */}
            <div className="absolute w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full border border-[#7191e6]/10" />

            {/* Background Circle Blur */}
            <div className="absolute w-72 h-72 bg-[#7191e6]/10 rounded-full blur-[100px] -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]"
            >
              {/* Main Image in Circle */}
              <div className="w-full h-full rounded-full overflow-hidden border-12 border-white shadow-2xl relative z-10">
                <Image 
                  src="/images/techcircle.jpg" 
                  alt="MVANTIX Excellence"
                  fill
                  className="object-cover  transition-all duration-700"
                />
              </div>

              {/* Certified Badge with Floating Animation */}
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-2/3 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-50 z-20"
              >
                <div className="bg-[#7191e6] p-1.5 rounded-full shadow-lg shadow-[#7191e6]/40">
                    <IconCircleCheckFilled className="text-white" size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black italic">Talent Built</span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase italic">For Speed</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeStandsFor;