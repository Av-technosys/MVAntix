"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { IconPlayerPlayFilled, IconCircleCheckFilled } from "@tabler/icons-react";

const ExecutiveHero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-white overflow-hidden flex items-center pt-5">
      
      {/* --- BACKGROUND DESIGN ELEMENTS --- */}
      {/* SalesBanner Theme Accents */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#3d52a1]/5 hidden lg:block -skew-x-6 translate-x-20" />
      
      {/* Floating Circles for depth */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#7191e6]/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#3d52a1]/5 blur-[120px] rounded-full" />

      {/* Grid Overlay - Minimal style */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* --- LEFT CONTENT: TYPOGRAPHY --- */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7191e6]/10 border border-[#7191e6]/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7191e6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7191e6]"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7191e6]">
              Next-Gen Talent Transformation
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-center md:text-left font-semibold md:md:leading-13 text-slate-900"
          >
            Building the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-[#7191e6]">Day One</span> Workforce
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl text-lg  text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8"
          >
            The Gap is Real. We Bridge It. Most hiring bets on potential—<span className="text-[#3d52a1] font-bold">MVAntix bets on performance</span>. We build AI-native professionals ready to deliver impact from the first login.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link href="/contact" className="group relative px-8 py-4 bg-[#3d52a1] text-white rounded-xl font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#3d52a1]/30">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-[#7191e6] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link> 
            
            <Link href="/services/Talent-Hiring-Solutions" className="px-8 py-4 border-2 border-slate-200 text-slate-900 hover:border-[#7191e6] hover:text-[#7191e6] rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2">
              Learn More
            </Link> 
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="pt-4 flex flex-wrap justify-center lg:justify-start gap-6"
          >
            {['AI Native', 'Enterprise Ready', 'Performance Validated'].map((text) => (
              <div key={text} className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <IconCircleCheckFilled size={16} className="text-[#7191e6]" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- RIGHT CONTENT: UNIQUE VIDEO/UI PLACEHOLDER --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Main Video Container */}
          <div className="relative aspect-square md:aspect-video lg:aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl group">
            {/* Placeholder for Video */}
            <div className="absolute inset-0 bg-linear-to-br from-[#3d52a1] via-slate-900 to-black flex items-center justify-center">
               <div className="text-center space-y-4">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mx-auto cursor-pointer group-hover:bg-[#7191e6] transition-colors"
                  >
                    <IconPlayerPlayFilled className="text-white translate-x-0.5" size={32} />
                  </motion.div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Watch Transformation</p>
               </div>
            </div>

            {/* Floating UI Element inside video */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-[10px] text-[#7191e6] font-black uppercase tracking-tighter">Real-time Performance</div>
                  <div className="text-white font-bold">Talent Analytics Hub</div>
                </div>
                <div className="h-8 w-12 bg-[#7191e6] rounded-md animate-pulse" />
              </div>
            </div>
          </div>

          {/* Decorative floating square - MVAntix signature */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-[16px] border-[#7191e6]/20 rounded-4xl -z-10 animate-bounce" style={{ animationDuration: '4s' }} />
        </motion.div>

      </div>
    </section>
  );
};

export default ExecutiveHero;