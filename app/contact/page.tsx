"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send, 
  Twitter, 
  Instagram, 
  Linkedin,
  Github,
  Building2,
  MessageSquare,
  User,
  AtSign
} from "lucide-react";

const ContactPage = () => {
  return (
    <main className="bg-[#050505] min-h-screen text-white py-24 px-6 relative overflow-hidden">
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-8">
              LET&apos;S <br /> <span className="text-[#7191e6]



">CONNECT.</span>
            </h1>
            <p className="text-gray-400 text-lg font-medium max-w-md mb-12 leading-relaxed">
              Have a groundbreaking idea? Our team is ready to turn your digital vision into a cinematic reality.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#7191e6]



 border border-white/10 group-hover:border-[#7191e6]



/50 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Email Us</p>
                  <p className="text-xl font-bold italic tracking-tighter">hello@mvantix.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#7191e6]



 border border-white/10 group-hover:border-[#7191e6]



/50 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-1">Call Us</p>
                  <p className="text-xl font-bold italic tracking-tighter">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-16">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#7191e6]



 hover:text-black transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form (Updated with your fields) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0A0A0A] border border-white/5 p-8 md:p-12 rounded-[2.5rem] relative"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 flex items-center gap-2">
                    <User size={14} /> Full Name *
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#7191e6]



/50 focus:bg-white/10 transition-all font-medium"
                    required
                  />
                </div>
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 flex items-center gap-2">
                    <AtSign size={14} /> Email Address *
                  </label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#7191e6]



/50 focus:bg-white/10 transition-all font-medium"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 flex items-center gap-2">
                    <Phone size={14} /> Phone Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Enter phone number"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#7191e6]



/50 focus:bg-white/10 transition-all font-medium"
                  />
                </div>
                {/* Company Name */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 flex items-center gap-2">
                    <Building2 size={14} /> Company Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter company name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#7191e6]



/50 focus:bg-white/10 transition-all font-medium"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 flex items-center gap-2">
                  <MessageSquare size={14} /> Subject *
                </label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#7191e6]



/50 focus:bg-white/10 transition-all font-medium"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1 flex items-center gap-2">
                  <Send size={14} /> Message *
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell us more..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#7191e6]



/50 focus:bg-white/10 transition-all font-medium resize-none"
                  required
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#7191e6]



 text-black py-6 rounded-2xl font-black uppercase italic tracking-tighter flex items-center justify-center gap-3 group overflow-hidden relative"
              >
                <span className="relative z-10">Send Inquiry</span>
                <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default ContactPage;