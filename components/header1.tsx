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
  IconArrowRight
} from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

  return (
    <>
      <div className="h-20 md:h-[90px] w-full pointer-events-none" />

      <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
        <div 
          className={`mx-auto transition-all duration-500 ${
            isScrolled 
              ? "max-w-5xl mt-4 rounded-full bg-black/90 backdrop-blur-lg border border-white/10 px-8 py-3 shadow-2xl" 
              : "max-w-full bg-white/50 backdrop-blur-sm px-10 py-6"
          }`}
        >
          <div className="flex items-center justify-between">
        
            <div className="hidden md:flex items-center gap-6 flex-1">
              <Link 
                href="/contact" 
                className={`group relative flex items-center gap-3 text-sm font-semibold transition-all ${isScrolled ? 'text-white' : 'text-black'}`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#7191e6]/40 rounded-full animate-ping scale-75" />
                  <div className="relative p-2 bg-[#7191e6] rounded-full text-white shadow-[0_0_15px_rgba(113,145,230,0.4)]">
                    <IconPhone size={14} />
                  </div>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] uppercase text-[#7191e6] font-bold tracking-tighter">Availability</span>
                  <span className="group-hover:text-[#7191e6] transition-colors">Get in Touch</span>
                </div>
              </Link>
            </div>

            {/* Logo Section Start */}
            <div className="flex-none">
              <Link href="/" className="group flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative h-10 w-32 md:h-12 md:w-40" // Logo ki size yahan se adjust karein
                >
                  <Image
                    src="/images/mainlogo.png"
                    alt="Mvantix Logo"
                    fill
                    priority
                    className={`object-contain transition-all duration-500 ${isScrolled ? 'brightness-0 invert' : ''}`} 
                    // brightness-0 invert: Scroll hone par logo white ho jayega (agar dark background hai)
                  />
                </motion.div>
                <div className="h-0.5 w-0 bg-[#7191e6] group-hover:w-full transition-all duration-300 mt-1" />
              </Link>
            </div>
            {/* Logo Section End */}

            <div className="hidden md:flex items-center justify-end gap-6 flex-1">
              <nav className="flex items-center gap-6 ">
                {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Services", path: "/services" }
                ].map((item) => (
                  <Link 
                    key={item.name}
                    href={item.path}
                    className={`text-xs font-bold uppercase tracking-widest transition-all relative group ${isScrolled ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7191e6] group-hover:w-full transition-all" />
                  </Link>
                ))}
              </nav>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 bg-[#7191e6] hover:bg-[#5a7bc7] text-white rounded-full px-5 py-2 text-xs font-black uppercase tracking-tighter transition-all outline-none focus:ring-2 ring-[#7191e6] ring-offset-2 ring-offset-black">
                  Quick Link <IconChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-black border-white/10 text-white font-poppins rounded-xl shadow-2xl">
                  <DropdownMenuLabel className="text-[#7191e6] text-[10px] uppercase tracking-widest">Navigation</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  
                  <DropdownMenuItem asChild className="focus:bg-[#7191e6] focus:text-white cursor-pointer py-3">
                    <Link href="/portfolio" className="flex w-full items-center justify-between">Portfolio <IconArrowRight size={14}/></Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild className="focus:bg-[#7191e6] focus:text-white cursor-pointer py-3">
                    <Link href="/careers" className="flex w-full items-center justify-between">Careers <IconArrowRight size={14}/></Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild className="focus:bg-[#7191e6] focus:text-white cursor-pointer py-3">
                    <Link href="/blog" className="flex w-full items-center justify-between">Tech Blog <IconArrowRight size={14}/></Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator className="bg-white/10" />
                  
                  <DropdownMenuItem asChild className="text-[#7191e6] font-bold focus:bg-white focus:text-black cursor-pointer">
                     <Link href="/contact" className="w-full">Project Inquiry</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-full ${isScrolled ? 'text-white bg-white/10' : 'text-black bg-black/5'}`}
              >
                {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black z-[-1] flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-black text-white hover:text-[#7191e6] uppercase italic tracking-tighter"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header1;