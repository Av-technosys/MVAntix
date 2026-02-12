"use client";

import React from "react";
import { motion } from "framer-motion";

const SalesBanner = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-white overflow-hidden py-12 md:py-16">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#3d52a1]/3 hidden lg:block" />
      <div className="absolute top-10 right-20 w-32 h-32 border-20 border-[#7191e6]/10 rounded-4xl hidden lg:block" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Title Section - Left */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6 ">
                <div className="w-12 h-0.5 bg-[#7191e6]" />
                <span className="text-xs  font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur animate-in fade-in slide-in-from-bottom-6 duration-700">
                  The New Standard
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl  font-semibold md:md:leading-13 text-slate-900 ">
                Enterprise Talent & <br className="md:block hidden" />
                <span className=" text-[#7191e6]">Technology Solutions</span> <br className="md:block hidden" />
                Built for Performance
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-5"
            >
              <p className=" max-w-xl text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8">
              MVANTIX delivers end to end talent and technology services designed to help enterprises 
                <span className="text-[#3d52a1] font-bold"> scale faster</span>, reduce hiring risk, 
                and execute digital transformation with confidence.
              </p>
            </motion.div>
          </div>

          {/* Side Content Section - Right (Stacked uniquely) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-4 lg:mt-25"
          >
            <div className="relative p-10 bg-[#3d52a1] text-white rounded-br-[80px]">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#7191e6]" />
              
              <p className="text-lg font-medium leading-relaxed opacity-90">
                &quot;Our services combine enterprise platforms, AI driven solutions, and performance validated talent, enabling organizations to build smarter teams, stronger workflows, and future-ready operations.&quot;

              </p>
              
             
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SalesBanner;