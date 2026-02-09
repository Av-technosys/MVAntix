"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    { name: "Talent & Hiring Solutions Covers", path: "/services/Talent-Hiring-Solutions", },
    { name: "Industries We Serve", path: "/services/Industries-We-Serve", },
  ];

  return (
    <>
      <div className="h-20 md:h-22.5 w-full pointer-events-none" />
      <header className="fixed top-0 left-0 right-0 z-100 transition-all duration-500">
        <div
          className={`mx-auto transition-all duration-500 ${isScrolled
            ? "max-w-6xl mt-2 rounded-full bg-black/10 backdrop-blur-lg border border-white/10 px-8 py-3 shadow-2xl"
            : "max-w-full bg-white/50 backdrop-blur-sm px-10 py-6"
            }`}
        >
          <div className="flex items-center justify-between">
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
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="flex items-center gap-2 bg-[#7191e6] hover:bg-[#5a7bc7] text-white rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-tighter outline-none shadow-lg">
                  Quick Link <IconChevronDown size={14} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-110 w-56 bg-white border border-white/10 text-[#5a7bc] rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.4)] p-2 mt-4">
                  <DropdownMenuItem asChild className="focus:bg-[#7191e6] focus:text-white cursor-pointer py-3">
                    <Link href="/blog" className="flex w-full items-center justify-between uppercase text-[10px] font-bold tracking-widest">Blogs <IconArrowRight size={14} /></Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="focus:bg-[#7191e6] focus:text-white cursor-pointer py-3">
                    <Link href="/career" className="flex w-full items-center justify-between uppercase text-[10px] font-bold tracking-widest">Careers <IconArrowRight size={14} /></Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="focus:bg-[#7191e6] focus:text-white cursor-pointer py-3">
                    <Link href="/case-study" className="flex w-full items-center justify-between uppercase text-[10px] font-bold tracking-widest">Case Study <IconArrowRight size={14} /></Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-full ${isScrolled ? 'text-white bg-white/10' : 'text-black bg-black/5'}`}>
                {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-110 md:hidden"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-4 top-4 bottom-4 left-4 bg-white z-120 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden md:hidden"
              >
                <div className="flex items-center justify-between px-8 py-8 border-b border-gray-50">
                  <div className="relative h-7 w-28">
                    <Image
                      src="/images/mainlogo.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900"
                  >
                    <IconX size={20} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-8 py-10">
                  <nav className="flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                      <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl font-medium text-slate-900 tracking-tight"
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl font-medium text-slate-900 tracking-tight"
                      >
                        About
                      </Link>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7191e6]">
                          Our Services
                        </span>
                        <div className="h-px flex-1 bg-gray-100" />
                      </div>
                      <div className="grid gap-6">
                        {services.map((s) => (
                          <Link
                            key={s.path}
                            href={s.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="group flex items-center justify-between text-[15px] font-medium text-slate-600 active:text-[#3d52a1]"
                          >
                            <span className="max-w-[85%] leading-snug">{s.name}</span>
                            <IconArrowRight size={16} className="text-[#7191e6] opacity-40" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="pt-6 border-t border-gray-50 flex flex-col gap-5">
                      <Link
                        href="/blog"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-slate-700 flex items-center justify-between"
                      >
                        Blog <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-md uppercase font-bold text-slate-400">Read</span>
                      </Link>
                      <Link
                        href="/career"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-slate-700 flex items-center justify-between"
                      >
                        Careers <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-md uppercase font-bold text-slate-400">Join Us</span>
                      </Link>
                    </div>
                  </nav>
                </div>
                <div className="p-8 bg-white border-t border-gray-50">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-3 w-full bg-[#3d52a1] text-white py-5 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-lg shadow-[#3d52a1]/20 active:scale-[0.98] transition-all"
                  >
                    Contact Us <IconArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header1;