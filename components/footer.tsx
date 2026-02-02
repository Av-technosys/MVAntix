"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  ArrowUpRight,
  Zap
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-black rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500">
                <Zap size={24} fill="currentColor" />
              </div>
              <span className="text-3xl font-black italic tracking-tighter text-white">MVANTIX</span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed max-w-xs">
              Engineering the digital frontier with cinematic precision and hyper-performance code.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-white font-black mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-cyan-500 transition-colors font-bold uppercase italic text-sm flex items-center group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 ml-1 transition-all group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-white font-black mb-8">Connect</h4>
            <ul className="space-y-4 text-gray-500 font-bold text-sm">
              <li className="hover:text-white transition-colors cursor-pointer italic uppercase">hello@mvantix.com</li>
              <li className="hover:text-white transition-colors cursor-pointer italic uppercase">+91 98765 43210</li>
              <li className="hover:text-white transition-colors cursor-pointer italic uppercase tracking-tighter">Jaipur, Rajasthan, India</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-white font-black mb-8">Social Ecosystem</h4>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center text-gray-500 hover:bg-white/5 hover:text-cyan-500 transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600">
            © {currentYear} MVANTIX // ALL RIGHTS RESERVED
          </div>
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;