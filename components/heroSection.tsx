"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/homevideo.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-6xl  font-semibold tracking-tighter text-black uppercase leading-[0.95]"
          >
            Transforming Talent Into <br />
            <span className="text-[#7191e6]">Enterprise Ready</span> Power
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 space-y-4 max-w-3xl"
          >
            <p className="text-lg md:text-xl text-gray-700 font-semibold">
              MVANTIX is a digital cognitive workforce engine that transforms
              raw talent into AI native, communication strong, cognitively
              sharp, and execution ready professionals.
            </p>
            <p className="text-base md:text-lg text-gray-500 font-medium">
              Our mission is simple: help enterprises scale faster with
              job-ready talent and help professionals build future-proof careers
              through real-world skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            {/* PRIMARY BUTTON: Start Hiring Smarter */}
            <Button className="group relative bg-[#3d52a1] text-white px-8 py-7 rounded-2xl text-lg font-bold overflow-hidden transition-all border-none">
              <Link
                href={"/contact"}
                className="relative z-10 flex items-center"
              >
                Start Hiring Smarter
                <IconArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              {/* Slide-up Background Layer */}
              <div className="absolute inset-0 bg-[#7191e6] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Button>

            {/* SECONDARY/OUTLINE BUTTON: Explore Our Model */}
            <Button
              variant="outline"
              className="group relative border-2 border-[#3d52a1] text-[#3d52a1] px-8 py-7 rounded-2xl text-lg font-bold overflow-hidden transition-all hover:text-white bg-transparent"
            >
              <Link href="#model-section" className="relative z-10">
                Explore Our Model
              </Link>
              {/* Slide-up Background Layer */}
              <div className="absolute inset-0 bg-[#3d52a1] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
