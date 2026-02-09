"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Fingerprint,
  BarChart3,
  MonitorSmartphone,
  Cpu,
  ArrowRight,
} from "lucide-react";

// Types for Services
interface ServiceProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  index: number;
}

const services = [
  {
    title: "AI & Neural Networks",
    desc: "We build self-learning systems that automate complex decision-making processes with 99% precision.",
    icon: <Cpu size={32} />,
  },
  {
    title: "Next-Gen Web Apps",
    desc: "Ultra-fast, SEO-optimized, and cinematic web experiences using Next.js and high-end motion design.",
    icon: <Code2 size={32} />,
  },
  {
    title: "Blockchain Security",
    desc: "Bulletproof smart contracts and decentralized architectures for the modern financial era.",
    icon: <Fingerprint size={32} />,
  },
  {
    title: "Cloud Infrastructure",
    desc: "Scaling your business to millions of users without a single millisecond of downtime.",
    icon: <Layers size={32} />,
  },
  {
    title: "Data Intelligence",
    desc: "Turning raw data into actionable visual insights using advanced predictive analytics.",
    icon: <BarChart3 size={32} />,
  },
  {
    title: "UI/UX Architecture",
    desc: "Designing interfaces that aren't just pretty, but psychologically engineered for conversion.",
    icon: <MonitorSmartphone size={32} />,
  },
];

const ServiceCard = ({ title, desc, icon, index }: ServiceProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    whileHover={{ scale: 1.02 }}
    className="relative group p-10  bg-[#0A0A0A] border border-white/5 overflow-hidden"
  >
    {/* Animated Background Glow */}
    <div
      className="absolute inset-0 bg-linear-to-br from-[#7191e6]



/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    />

    <div className="relative z-10">
      <div
        className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#7191e6]



 mb-8 border border-white/10 group-hover:border-[#7191e6]



/50 group-hover:bg-[#7191e6]



/10 transition-all duration-500"
      >
        {icon}
      </div>
      <h3 className="text-2xl font-semibold  uppercase tracking-tighter text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-500 font-medium leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
        {desc}
      </p>
      <div
        className="flex items-center gap-2 text-[#7191e6]



 font-bold uppercase text-xs tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0"
      >
        Read More <ArrowRight size={14} />
      </div>
    </div>
  </motion.div>
);

export default function ServicesPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen py-32 px-6 overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-[#7191e6]



 font-semibold uppercase tracking-[0.4em] text-sm mb-6"
          >
            <div
              className="w-10 h-0.5 bg-[#7191e6]



"
            />
            Our Expertise
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[8rem] font-semibold  uppercase tracking-tighter leading-[0.85]"
          >
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-400 to-gray-700">
              THE IMPOSSIBLE.
            </span>
          </motion.h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              desc={service.desc}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Interactive Bottom Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-1 bg-linear-to-r from-transparent via-[#7191e6]



/50 to-transparent rounded-[3rem]"
        >
          <div className="bg-[#080808] rounded-[2.9rem] py-20 px-10 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold  uppercase tracking-tighter mb-8">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
              Every business is unique. We don&apos;=t believe in
              one-size-fits-all. Tell us your vision, and we&apos;ll build the
              tech to reach it.
            </p>
            <button
              className="bg-[#7191e6]



 text-black px-14 py-6 rounded-full font-semibold uppercase  tracking-tighter hover:bg-white transition-all transform hover:scale-105 active:scale-95"
            >
              Get a Quote Now
            </button>
          </div>
        </motion.div>
      </div>

      <footer className="mt-20 text-center text-white/20 text-[10px] font-semibold uppercase tracking-[0.5em]">
        MVANTIX // DEPLOYING THE FUTURE
      </footer>
    </main>
  );
}
