"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Image import kiya
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMenu2,
  IconX,
  IconPhone,
  IconChevronDown,
  IconArrowRight,
} from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Salesforce & Enterprise Platforms Covers", path: "/services/Salesforce-Enterprise-Platforms", },
    { name: "Talent & Hiring Solutions Covers", path: "/services/Talent-Hiring-Solutions",},
    { name: "Industries We Serve", path: "/services/Industries-We-Serve",  },
  ];

  return (
    <>
      <div className="h-20 md:h-22.5 w-full pointer-events-none" />

      {/* Header layer z-[100] */}
      <header className="fixed top-0 left-0 right-0 z-100 transition-all duration-500">
        <div 
          className={`mx-auto transition-all duration-500 ${
            isScrolled 
              ? "max-w-5xl mt-4 rounded-full bg-black/80 backdrop-blur-md border border-white/10 px-8 py-3 shadow-2xl" 
              : "max-w-full bg-white/50 backdrop-blur-sm px-10 py-6"
          }`}
        >
          <div className="flex items-center justify-between">
        
            {/* Left: Contact */}
            <div className="hidden md:flex items-center gap-6 flex-1">
              <Link
                href="/contact"
                className={`group relative flex items-center gap-3 text-sm font-semibold transition-all ${isScrolled ? 'text-white' : 'text-black'}`}
              >
                <div className="relative p-2 bg-[#7191e6] rounded-full text-white">
                  <IconPhone size={14} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] uppercase text-[#7191e6] font-bold">Availability</span>
                  <span className="group-hover:text-[#7191e6] transition-colors">Get in Touch</span>
                </div>
              </Link>
            </div>

            {/* Center: Logo */}
            <div className="flex-none">
              <Link href="/" className="group flex flex-col items-center">
                <motion.div whileHover={{ scale: 1.05 }} className="relative h-10 w-32 md:h-12 md:w-40">
                  <Image
                    src="/images/mainlogo.png"
                    alt="Mvantix Logo"
                    fill
                    priority
                    className={`object-contain transition-all duration-500 ${isScrolled ? 'brightness-0 invert' : ''}`} 
                  />
                </motion.div>
              </Link>
            </div>

            {/* Right: Nav Links */}
            <div className="hidden md:flex items-center justify-end gap-6 flex-1">
              <nav className="flex items-center gap-6 ">
                <Link href="/" className={`text-xs font-bold uppercase tracking-widest relative group transition-all ${isScrolled ? 'text-white' : 'text-black/70 hover:text-black'}`}>
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7191e6] group-hover:w-full transition-all" />
                </Link>

                <Link href="/about" className={`text-xs font-bold uppercase tracking-widest relative group transition-all ${isScrolled ? 'text-white' : 'text-black/70 hover:text-black'}`}>
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7191e6] group-hover:w-full transition-all" />
                </Link>

                {/* SERVICES SELECT (z-[110] Content) */}
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest outline-none group cursor-pointer transition-all ${isScrolled ? 'text-white' : 'text-black/70 hover:text-black'}`}>
                    Services 
                    <IconChevronDown size={14} className="group-data-[state=open]:rotate-180 transition-transform duration-200" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-110 w-56 bg-white border-none shadow-[0_15px_50px_rgba(0,0,0,0.2)] rounded-xl p-2 mt-4 animate-in fade-in slide-in-from-top-2">
                    {services.map((service) => (
                      <DropdownMenuItem key={service.path} asChild className="focus:bg-[#7191e6] focus:text-white cursor-pointer rounded-lg py-3">
                        <Link href={service.path} className="flex items-center justify-between w-full font-bold text-[10px] uppercase tracking-wider">
                          <span className="flex items-center gap-3"> {service.name}</span>
                          <IconArrowRight size={12} className="opacity-40" />
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>

              {/* QUICK LINKS SELECT (z-[110] Content) */}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="flex items-center gap-2 bg-[#7191e6] hover:bg-[#5a7bc7] text-white rounded-full px-5 py-2 text-xs font-black uppercase tracking-tighter outline-none shadow-lg">
                  Quick Link <IconChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-110 w-56 bg-black border border-white/10 text-white rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.4)] p-2 mt-4">
                  <DropdownMenuItem asChild className="focus:bg-[#7191e6] focus:text-white cursor-pointer py-3">
                    <Link href="/blog" className="flex w-full items-center justify-between uppercase text-[10px] font-bold tracking-widest">Blogs <IconArrowRight size={14}/></Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="focus:bg-[#7191e6] focus:text-white cursor-pointer py-3">
                    <Link href="/careers" className="flex w-full items-center justify-between uppercase text-[10px] font-bold tracking-widest">Case Study <IconArrowRight size={14}/></Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-full ${isScrolled ? 'text-white bg-white/10' : 'text-black bg-black/5'}`}>
                {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="fixed inset-0 bg-black z-120 flex flex-col items-center justify-center gap-6 md:hidden"
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black text-white uppercase italic tracking-tighter">Home</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black text-white uppercase italic tracking-tighter">About</Link>
              <div className="flex flex-col items-center gap-4 bg-white/5 p-8 rounded-3xl w-[85%] border border-white/5">
                <span className="text-[#7191e6] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Our Services</span>
                {services.map((s) => (
                   <Link key={s.path} href={s.path} onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-white/70 hover:text-white uppercase tracking-tight">{s.name}</Link>
                ))}
              </div>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black text-[#7191e6] uppercase italic tracking-tighter mt-4">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header1;