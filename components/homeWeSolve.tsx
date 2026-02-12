"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";


const HomeWeSolve = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 500, damping: 50 });
  const springY = useSpring(y, { stiffness: 500, damping: 50 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };
  const background = useTransform(
    [springX, springY],
    ([latestX, latestY]) =>
      `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(113, 145, 230, 0.35), transparent 80%)`
  );

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-12 md:py-16 bg-white overflow-hidden group/section"
    >
      {/* --- WORKING MOUSE GLOW --- */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-10 group-hover/section:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT SIDE: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-4/5 md:aspect-square lg:aspect-auto lg:h-150 border border-slate-100 bg-slate-200">
              <Image
                src="/images/TechHub.avif"
                alt="The Talent Gap Problem"
                fill
                className="object-cover"
                priority
              />

            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-12 bg-[#7191e6]" />
                <span className="text-[#7191e6] font-semibold uppercase tracking-[0.3em] text-xs inline-block">
                  The Problem We Solve
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold md:md:leading-13 text-slate-900">
                The Talent Gap <br />
                Enterprises Can <br />
                No Longer <span className="text-[#3d52a1]">Ignore</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600">
              <p className="text-md  text-slate-900 leading-tight text-center lg:text-left">
                Today’s workforce enters the job market with degrees, but not readiness.
              </p>

              <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8">
                struggle with AI skill shortages, weak communication, poor problem solving ability, long onboarding cycles, and high hiring risks.
              </p>

              <motion.div
                whileHover={{ x: 10 }}
                className="p-8 bg-slate-50 rounded-4xl border-l-[6px] border-[#3d52a1] font-bold shadow-sm relative group cursor-default"
              >

                <span className="relative z-10 text-slate-800 text-lg leading-snug block">
                  Traditional hiring and training models fail to deliver predictable, high performance talent. MVANTIX exists to change that permanently by creating talent built for speed, intelligence, and real business execution.


                </span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeWeSolve;