"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Zap, 
  Globe, 
  Target, 
  ArrowUpRight 
} from "lucide-react";
import Link from 'next/link';

// --- Types ---
interface StatProps {
  label: string;
  value: string;
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

// --- Sub-components ---

const ValueCard = ({ icon, title, desc }: ValueCardProps) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
  >
    <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white uppercase tracking-tighter mb-3 italic">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed font-medium">
      {desc}
    </p>
  </motion.div>
);

const Stat = ({ label, value }: StatProps) => (
  <div className="flex flex-col">
    <span className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-1">{value}</span>
    <span className="text-xs uppercase tracking-[0.2em] text-cyan-500 font-bold">{label}</span>
  </div>
);

// --- Main Page Component ---

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[180px]" />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-6 px-4 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-md"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Innovation Studio</span>
          </motion.div>
          
          <motion.h1 
            style={{ opacity: textOpacity }}
            className="text-6xl md:text-[9rem] font-black leading-[0.8] uppercase italic tracking-tighter"
          >
            BEYOND <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500">LIMITS</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-gray-400 text-lg md:text-xl max-w-xl mx-auto font-medium"
          >
            MVANTIX is where high-performance engineering meets cinematic digital design.
          </motion.p>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-24 border-y border-white/5 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <Stat label="Global Reach" value="25+" />
            <Stat label="Tech Stack" value="Next.js" />
            <Stat label="Uptime" value="99.9%" />
            <Stat label="Projects" value="150+" />
          </div>
        </div>
      </section>

      {/* 3. Values Grid */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <ValueCard 
              icon={<Zap size={40} />}
              title="Hyper Speed"
              desc="We optimize for core web vitals and millisecond precision in every line of code."
            />
            <ValueCard 
              icon={<Target size={40} />}
              title="Pixel Perfect"
              desc="Design is not just how it looks, but how it moves. We ensure a premium aesthetic."
            />
            <ValueCard 
              icon={<Globe size={40} />}
              title="Scalable"
              desc="Our architectures grow with your business, from startup to enterprise level."
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Scrolling Text Marquee */}
      <section className="py-20 bg-cyan-500 text-black overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex gap-10 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter">
              • MVANTIX • INNOVATE • DISRUPT • SCALE
            </span>
          ))}
        </motion.div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/5 blur-[120px] -z-10" />
       <motion.div 
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-10 leading-none">
    START THE <br /><span className="text-cyan-500">REVOLUTION</span>
  </h2>
  <button className="group bg-white text-black px-12 py-6 rounded-full text-xl font-bold uppercase italic flex items-center gap-3 mx-auto hover:bg-cyan-500 transition-colors">
  <Link href={"/contact"}>  Contact Us</Link> <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </button>
</motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm uppercase tracking-widest font-bold">
        © 2026 MVANTIX Innovation Studio
      </footer>
    </main>
  );
}