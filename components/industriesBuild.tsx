"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconArrowRight, IconBroadcast } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const IndustriesBuild = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT SIDE: Image Layout (The Visual Focus) */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image with unique border-radius */}
              <div className="relative z-10 w-full aspect-4/5 md:aspect-square rounded-[3rem] rounded-tr-none overflow-hidden shadow-2xl">
                <Image
                  src="/images/service.webp" // Yahan apni image path dalein
                  alt="Build Together"
                  fill
                  className="object-cover"
                />
                {/* Subtle Brand Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#3d52a1]/40 to-transparent" />
              </div>

              {/* Floating Asymmetric Card (Idhar-udhar element) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-4 md:-right-8 z-20 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 max-w-60"
              >
                <div className="flex items-center gap-3 mb-3 text-[#7191e6]">
                  <IconBroadcast size={24} />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Live Support</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-snug ">
                  Explore how MVANTIX can support your growth.
                </p>
              </motion.div>

              {/* Background Decorative Shape */}
              <div className="absolute -top-10 -left-10 w-full h-full border-2 border-[#7191e6]/10 rounded-[3rem] rounded-tr-none -z-10" />
            </motion.div>
          </div>

          {/* RIGHT SIDE: Content (Your exact text) */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#7191e6] mb-6">
                LET’S BUILD TOGETHER
              </h4>
              <h2 className="text-4xl md:text-5xl font-semibold md:leading-13 text-slate-900 mb-8 tracking-tight">
                Scalable Talent. <br />
                Smarter Technology. <br />
                <span className="text-[#3d52a1]">Real Results.</span>
              </h2>
              <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8 mb-10">
                Whether you are modernizing platforms, scaling teams, or building AI-driven capabilities, 
                <span className="font-semibold text-slate-900"> MVANTIX</span> delivers the talent and technology required to move faster and perform better.
              </p>

              <div className="flex flex-wrap gap-5">
              <button className="group relative px-10 py-4 bg-[#3d52a1] text-white rounded-full font-bold flex items-center gap-3 overflow-hidden transition-all shadow-xl shadow-[#3d52a1]/20 active:scale-95 border-none">
  <Link href={"/contact"} className="relative z-10 flex items-center gap-3">
    Get in touch
    <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
  </Link>
  <div className="absolute inset-0 bg-[#7191e6] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
</button>
              </div>

              {/* Subtle Dots Pattern (From your code) */}
              <div 
                className="mt-12 w-24 h-12 opacity-30" 
                style={{ 
                  backgroundImage: 'radial-gradient(#3d52a1 1px, transparent 1px)', 
                  backgroundSize: '12px 12px' 
                }} 
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesBuild;