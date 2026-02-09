"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Casper", logo: "Casper" },
  { name: "Cloudflare", logo: "CLOUDFLARE" },
  { name: "GroupM", logo: "groupm" },
  { name: "ISG", logo: "isg" },
  { name: "Nebula", logo: "NEBULA" },
  // Duplicating for seamless loop
  { name: "Casper", logo: "Casper" },
  { name: "Cloudflare", logo: "CLOUDFLARE" },
  { name: "GroupM", logo: "groupm" },
  { name: "ISG", logo: "isg" },
  { name: "Nebula", logo: "NEBULA" },
];

const BrandCarousel = () => {
  return (
    <section className="w-full py-12 md:py-16 px-8 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* Left Side: Fixed Text */}
        <div className="z-10 bg-white pr-8 min-w-fit">
          <h2 className="text-xl md:text-2xl font-bold text-slate-600 md:text-left text-center leading-tight">
            Tech leaders trust <br />
            MVANTIX to quickly <br />
            source qualified talent
          </h2>
        </div>

        {/* Right Side: Autoplay Carousel */}
        <div className="relative flex-1 overflow-hidden">
          {/* Fading Gradients for Smoothness */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex items-center gap-16 min-w-max"
            animate={{
              x: [0, -1000] // Adjust -1000 based on total width of logos
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <span className="text-2xl md:text-4xl font-semibold tracking-tighter text-slate-800 uppercase">
                  {brand.logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BrandCarousel;