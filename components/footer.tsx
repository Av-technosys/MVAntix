"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  ArrowUpRight,
  Mail,
  Zap
} from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-15 pb-10 overflow-hidden border-t border-white/5">
      {/* 1. TECH BACKGROUND: Grid Overlay & Glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }} />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-[#7191e6] to-transparent shadow-[0_0_20px_#7191e6]" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-64 bg-[#7191e6]/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* BRAND SECTION */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="relative h-12 w-40"
              >
                <Image
                  src="/images/mainlogo.png"
                  alt="Mvantix Logo"
                  fill
                  className="object-contain brightness-0 invert" 
                />
              </motion.div>
            </Link>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-sm font-medium">
              We architect high-performance digital ecosystems. Merging <span className="text-white">AI precision</span> with cutting-edge <span className="text-white">enterprise solutions</span> to redefine the global tech landscape.
            </p>
           
          </div>

          {/* NAVIGATION GRID */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-8">Base_Menu</h4>
              <ul className="space-y-4">
                {['About', 'Blog', 'Career', 'Contact'].map((item) => (
                  <li key={item} className="overflow-hidden">
                    <Link href={`/${item.toLowerCase()}`} className="group flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300 font-medium">
                      <span className="relative">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-[#7191e6] transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-8">Node_Services</h4>
              <ul className="space-y-4">
                {/* Active Links added here */}
                <li>
                  <Link href="/services/Salesforce-Enterprise-Platforms" className="group flex items-center text-sm text-gray-400 hover:text-[#7191e6] transition-colors font-medium">
                    Salesforce
                  </Link>
                </li>
                <li>
                  <Link href="/services/Talent-Hiring-Solutions" className="group flex items-center text-sm text-gray-400 hover:text-[#7191e6] transition-colors font-medium">
                    Talent Engine
                  </Link>
                </li>
                <li>
                  <Link href="/services/Industries-We-Serve" className="group flex items-center text-sm text-gray-400 hover:text-[#7191e6] transition-colors font-medium">
                    Mvantix Hiring Engine 
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* NEWSLETTER/CONNECT */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-8">Global_Connect</h4>
            <div className="space-y-4">
              <a href="mailto:hello@mvantix.com" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#7191e6]/30 transition-all group">
                <Mail size={18} className="text-gray-400 group-hover:text-[#7191e6]" />
                <span className="text-sm text-gray-400 font-medium">hello@mvantix.com</span>
              </a>
              <div className="flex gap-3">
                {[ Instagram, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(113, 145, 230, 0.1)' }}
                    className="w-11 h-11 rounded-lg border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#7191e6] transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TERMINAL BAR */}
        <div className=" border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            <span className="text-[10px] tracking-[0.3em] text-gray-500 font-bold uppercase">
              © {currentYear} MVANTIX
            </span>
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;