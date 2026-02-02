"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  IconMenu2, 
  IconX, 
  IconMessageCircle, 
  IconChevronDown,
  IconArrowUpRight 
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Expertise", href: "/expertise" },
  ];

  return (
    <>
      {/* FIX: Ye niche wala div header ki jagah lega page flow mein.
        Isse aapka "this is my about page" wala text header ke piche nahi chhupega.
      */}
      <div className="h-[90px] md:h-[110px] w-full" />

      <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 rounded-2xl border ${
            isScrolled 
              ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-cyan-500/20 px-8 py-3 shadow-[0_0_30px_rgba(6,182,212,0.15)]" 
              : "bg-white/50 backdrop-blur-sm border-transparent px-4 py-4" 
          }`}
        >
          {/* 1. LEFT: LOGO */}
          <div className="flex-1">
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative h-8 w-8 bg-cyan-500 rounded-sm rotate-45 group-hover:rotate-[225deg] transition-all duration-700 flex items-center justify-center">
                <span className="text-black font-black -rotate-45 group-hover:-rotate-[225deg] transition-all duration-700 text-xs">M</span>
              </div>
              <span className={`text-2xl font-black tracking-tighter uppercase italic ml-2 transition-colors ${isScrolled ? 'text-white' : 'text-black'}`}>
                MV<span className="text-cyan-400">ANTIX</span>
              </span>
            </Link>
          </div>

          {/* 2. MIDDLE: MENUS */}
          <nav className="hidden md:flex items-center gap-2 flex-none">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-bold transition-all relative group uppercase tracking-widest ${isScrolled ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-black'}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 px-4 py-2 text-sm font-bold outline-none uppercase tracking-widest ${isScrolled ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-black'}`}>
                More <IconChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#0f172a] border-cyan-500/30 text-white rounded-xl shadow-2xl p-2 min-w-[160px]">
                <DropdownMenuItem className="focus:bg-cyan-500 focus:text-black cursor-pointer rounded-lg font-bold">
                  Resources
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-cyan-500 focus:text-black cursor-pointer rounded-lg font-bold">
                  Careers
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* 3. RIGHT: CONTACT BUTTON */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button className="relative group overflow-hidden bg-transparent border border-cyan-500/50 text-cyan-400 hover:text-black hover:border-cyan-500 transition-all duration-300 rounded-lg px-6 py-5">
                <span className="relative z-10 flex items-center gap-2 font-bold uppercase tracking-tighter">
                  Connect <IconMessageCircle size={18} />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                />
              </Button>
            </Link>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-cyan-400 bg-cyan-500/10 rounded-lg"
            >
              {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="fixed inset-0 bg-[#050505] z-50 flex flex-col p-10 md:hidden"
            >
              <div className="flex justify-between items-center mb-16">
                 <span className="text-2xl font-black text-white italic">MV<span className="text-cyan-400">ANTIX</span></span>
                 <button onClick={() => setMobileMenuOpen(false)}><IconX size={32} className="text-cyan-400"/></button>
              </div>
              <nav className="flex flex-col gap-8">
                {menuItems.map((item, i) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl font-black text-white hover:text-cyan-400 uppercase italic flex items-center justify-between group"
                  >
                    {item.name}
                    <IconArrowUpRight size={40} className="opacity-0 group-hover:opacity-100 transition-all text-cyan-400" />
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header2;