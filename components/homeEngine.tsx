"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconCpu,
  IconBrain,
  IconMessage2,
  IconRocket,
  IconFingerprint,
} from "@tabler/icons-react";

const HomeEngine = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pillars = [
    {
      title: "AI Intelligence",
      desc: "Hands-on experience with GenAI tools, automation, prompt engineering, and research workflows.",
      icon: <IconCpu size={32} />,
      color: "from-[#7191e6] to-[#3d52a1]",
      shadow: "shadow-blue-500/20",
    },
    {
      title: "Cognitive Intelligence",
      desc: "Structured problem solving, analytical reasoning, logic building, and decision making ability.",
      icon: <IconBrain size={32} />,
      color: "from-[#7191e6] to-[#3d52a1]",
      shadow: "shadow-indigo-500/20",
    },
    {
      title: "Communication Intelligence",
      desc: "Business communication, articulation, confidence, and professional presence.",
      icon: <IconMessage2 size={32} />,
      color: "from-[#7191e6] to-[#3d52a1]",
      shadow: "shadow-[#7191e6]/20",
    },
    {
      title: "Execution Intelligence",
      desc: "Real client-style work, sprint cycles, workflow discipline, and project simulations.",
      icon: <IconRocket size={32} />,
      color: "from-[#7191e6] to-[#3d52a1]",
      shadow: "shadow-black/20",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 px-6 md:px-8 bg-[#3d52a1] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#7191e6 0.5px, transparent 0.5px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#7191e6]/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-6 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3"
          >
            <IconFingerprint
              className="text-[#7191e6] animate-pulse"
              size={24}
            />
            <span className="text-[#7191e6] font-semibold uppercase tracking-[0.4em] text-xs">
              The Transformation Engine
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-5xl font-semibold leading-  text-white uppercase "
          >
            THE MVANTIX TALENT <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7191e6] to-cyan-400">
              TRANSFORMATION
            </span>{" "}
            ENGINE
          </motion.h2>

          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Building Talent Across Four Intelligence Layers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="glow"
                    className="absolute -inset-4 bg-[#7191e6]/20 rounded-4xl blur-2xl z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
              <div className="relative z-10 h-full bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-4xl hover:border-[#7191e6]/50 transition-colors duration-500 overflow-hidden">
                <span className="absolute -right-1 -bottom-4 text-8xl font-semibold text-white/5  select-none">
                  0{idx + 1}
                </span>
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${pillar.color} flex items-center justify-center text-white mb-8 shadow-2xl ${pillar.shadow} group-hover:scale-110 transition-transform duration-500`}
                >
                  {pillar.icon}
                </div>

                <h3 className="text-xl font-semibold text-white uppercase  mb-4 tracking-tight group-hover:text-[#7191e6] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-slate-400 text-sm font-medium leading-relaxed relative z-10">
                  {pillar.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-linear-to-r group-hover:from-transparent group-hover:via-[#7191e6] group-hover:to-transparent transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-px rounded-full bg-linear-to-r from-transparent via-[#7191e6]/50 to-transparent w-full max-w-4xl" />
          <p className="mt-8 text-2xl md:text-3xl font-semibold text-white uppercase tracking-tighter">
            &quot;Talent that behaves like experienced professionals{" "}
            <span className="text-[#7191e6]">from Day One.</span>&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeEngine;
