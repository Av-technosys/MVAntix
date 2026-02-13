"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

const AboutCommit = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      {/* SalesBanner Theme Accents */}

      <div className="absolute top-1/2 -right-10 w-40 h-40 border-[24px] border-[#7191e6]/5 rounded-full hidden lg:block" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        {/* Small Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-0.5 bg-[#7191e6]/40" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7191e6]">
            Our Promise
          </span>
          <div className="w-8 h-0.5 bg-[#7191e6]/40" />
        </motion.div>

        {/* Heading - Synced with SalesBanner */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-semibold md:leading-13 text-slate-900 mb-8 uppercase"
        >
          The Mvantix <span className="text-[#7191e6]">Commitment</span>
        </motion.h2>

        {/* Description - Black color as per your previous style but with better line-height */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-black font-medium leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Plug and play isn&apos;t a dream; it&apos;s our standard. We are committed to
          <span className="text-[#3d52a1] font-bold"> ethical AI adoption</span>
          , inclusive growth, and long-term partnerships. When you choose
          MVANTIX, you aren&apos;t just filling a seat; you are gaining a{" "}
          <span className="underline decoration-[#7191e6] decoration-2 underline-offset-4">
            competitive edge
          </span>
          .
        </motion.p>

        {/* CTA Button - Elite Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button className="group relative px-10 py-5 bg-[#3d52a1] text-white text-sm font-black uppercase tracking-[0.2em] rounded-xl overflow-hidden transition-all hover:shadow-[0_20px_40px_-10px_rgba(61,82,161,0.4)] active:scale-95">
            <span className="relative z-10 flex items-center gap-3">
              Try for free
              <IconArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-[#7191e6] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCommit;
