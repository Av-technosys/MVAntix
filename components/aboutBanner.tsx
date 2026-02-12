"use client";
import Link from "next/link";
import React from "react";

const TradingHero = () => {
  return (
    <section className="relative min-h-screen bg-[#dfe8e6] text-white overflow-hidden flex items-center">
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-r from-[#3d52a1]/20 via-[#7191e6]/20 to-[#3d52a1]/20 animate-pulse blur-3xl" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#7191e6_1px,transparent_1px),linear-gradient(90deg,#7191e6_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900 ">
            Building the Day One Workforce
            <span className="block text-[#7191e6]">The Gap is Real. We Bridge It.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8">
            In today&apos;s digital economy, a degree is a starting point, but Enterprise Readiness is the finish line. 
            Most hiring fails because it bets on potential. MVANTIX bets on performance. We are a next generation 
            talent transformation company. We don&apos;t just find talent; we build professionals who are AI native, 
            communication-strong, and ready to deliver measurable impact from the moment they log in.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 bg-[#3d52a1] hover:bg-[#2f3f7e] rounded-lg font-semibold transition">
             <Link href={"/contact"}> Get Started </Link>
            </button>
            <button className="px-8 py-3 border border-[#3d52a1] text-[#7191e6] hover:bg-[#7191e6] hover:text-black rounded-lg transition">
             <Link href={"/services/Talent-Hiring-Solutions"}> Learn More </Link> 
            </button>
          </div>
        </div>

        {/* Right UI */}
        <div className="bg-linear-to-br from-gray-900 to-black border border-[#7191e6]/40 rounded-xl p-6 shadow-xl backdrop-blur">
          <div className="text-sm text-gray-400 mb-4">
            Enterprise Ready Talent Preview
          </div>

          <div className="h-48 bg-linear-to-t from-[#3d52a1]/20 to-transparent rounded-lg flex items-end">
            <div className="w-full h-[70%] bg-[#7191e6]/30 rounded-lg animate-pulse" />
          </div>

          <div className="mt-4 text-xs text-gray-500">
            Workforce transformation in action
          </div>
        </div>

      </div>
    </section>
  );
};

export default TradingHero;
