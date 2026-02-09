"use client";

import React, { useRef } from 'react';
import Image from 'next/image'; // Image import kiya
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  ArrowUpRight
} from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="bg-[#050505] text-white overflow-x-hidden selection:bg-[#7191e6] selection:text-black">
      <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-75 bg-[#7191e6]/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            
            {/* Brand Column - Logo Added Here */}
            <div className="lg:col-span-1">
              <Link href="/">
                <motion.div 
                  className="flex items-center gap-2 mb-6 group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-12 w-44"> {/* Logo Size adjust karne ke liye */}
                    <Image
                      src="/images/mainlogo.png"
                      alt="Mvantix Logo"
                      fill
                      className="object-contain " 
                      // 'brightness-0 invert' logo ko white kar dega kyunki footer black hai
                    />
                  </div>
                </motion.div>
              </Link>
              <p className="text-gray-500 font-medium leading-relaxed max-w-xs">
                Engineering the digital frontier with cinematic precision and hyper-performance code.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-white font-semibold mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-500 hover:text-[#7191e6] transition-colors font-bold uppercase text-sm flex items-center group">
                      {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 ml-1 transition-all group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-white font-semibold mb-8">Connect</h4>
              <ul className="space-y-4 text-gray-500 font-bold text-sm">
                <li className="hover:text-white transition-colors cursor-pointer uppercase">hello@mvantix.com</li>
                <li className="hover:text-white transition-colors cursor-pointer uppercase">+91 98765 43210</li>
                <li className="hover:text-white transition-colors cursor-pointer uppercase tracking-tighter">Jaipur, Rajasthan, India</li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-white font-semibold mb-8">Social Ecosystem</h4>
              <div className="flex gap-4">
                {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center text-gray-500 hover:bg-white/5 hover:text-[#7191e6] transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-semibold uppercase tracking-[0.5em] text-gray-600">
              © {currentYear} MVANTIX // ALL RIGHTS RESERVED
            </div>
            
            <div className="flex gap-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;