"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconShieldCheck,
  IconCpu,
  IconMessageChatbot,
  IconBolt,
  IconTimeline,
  IconChartLine
} from "@tabler/icons-react";
import Link from "next/link";

const outcomes = [
  {
    title: "Faster performing teams",
    icon: <IconBolt size={28} />,
    desc: "Accelerated execution and rapid project delivery.",
    color: "#7191e6"
  },
  {
    title: "AI augmented workflows",
    icon: <IconCpu size={28} />,
    desc: "Seamlessly integrating AI tools into daily operations.",
    color: "#3d52a1"
  },
  {
    title: "Leadership Talent",
    icon: <IconMessageChatbot size={28} />,
    desc: "Stronger communication and leadership-ready mindset.",
    color: "#7191e6"
  },
  {
    title: "Execution Ready",
    icon: <IconShieldCheck size={28} />,
    desc: "Professionals who hit the ground running from day one.",
    color: "#3d52a1"
  },
  {
    title: "Future-proof Pipelines",
    icon: <IconTimeline size={28} />,
    desc: "Sustainable workforce strategy for long-term growth.",
    color: "#7191e6"
  },
  {
    title: "Smarter Hiring",
    icon: <IconChartLine size={28} />,
    desc: "Lowering recruitment risks with validated talent.",
    color: "#3d52a1"
  }
];

const HomeOutcome = () => {
  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-100 h-400 bg-[#7191e6]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#3d52a1]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#7191e6] font-semibold uppercase tracking-[0.4em] text-xs"
          >
            The Result
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold md:md:leading-13 text-slate-900 "
          >
            The Mvantix <span className="text-[#3d52a1]">Outcome</span>
          </motion.h2>
          <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8">
            Building the Future of Talent
          </p>
        </div>

        {/* OUTCOMES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-[#3d52a1]/10 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}10`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-black uppercase leading-none tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FINAL STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-28 text-center"
        >
          <div className="space-y-4">
            <h4 className="text-2xl md:text-2xl font-semibold text-slate-300 uppercase  tracking-tighter">
              MVANTIX does not just prepare talent for the future.
            </h4>
            <h4 className="text-4xl md:text-5xl font-semibold text-black uppercase leading-[0.85] tracking-tighter">
              We prepare the <span className="text-[#3d52a1]">future of talent.</span>
            </h4>
          </div>

          <div className="mt-12 flex justify-center">
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="group relative px-8 py-3 bg-[#3d52a1] text-white font-semibold uppercase rounded-2xl text-xl shadow-xl overflow-hidden transition-all flex items-center gap-3 border-none"
>

  <Link href={"/career"} className="relative z-10 flex items-center gap-3">
    Join The Future
  </Link>

  <div className="absolute inset-0 bg-[#7191e6] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
</motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeOutcome;