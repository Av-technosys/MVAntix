"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconSend,
  IconLoader2,
  IconCircleDot,
  IconDeviceAnalytics,
  IconExternalLink,
  IconRocket,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const RightSideDecoration = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#7191e6]/30 rounded-full blur-[60px]" />
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute top-20 right-10 w-20 h-20 border border-white/20 rounded-2xl"
    />
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute bottom-10 right-20 w-8 h-8 rounded-full border-2 border-[#7191e6]/40"
    />
  </div>
);

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  // --- MAP LINK (Change this to your actual office link) ---
  const mapUrl =
    "https://www.google.com/maps/search/Mvantix+Jaipur+Rajasthan+India";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-10 bg-[#7191e6]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Let’s build something{" "}
              <span className="text-[#7191e6]">extraordinary.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* LEFT SIDE: FORM */}
            <div className="lg:col-span-7 bg-slate-50/50 p-8 rounded-4xl border border-slate-100">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="Enter your name"
                    className="bg-white border-slate-200 h-12 focus-visible:ring-[#7191e6]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600">
                    Email Address *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white border-slate-200 h-12 focus-visible:ring-[#7191e6]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600">
                    Phone Number
                  </label>
                  <Input
                    placeholder="Enter phone number"
                    className="bg-white border-slate-200 h-12 focus-visible:ring-[#7191e6]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600">
                    Company Name
                  </label>
                  <Input
                    placeholder="Enter company name"
                    className="bg-white border-slate-200 h-12 focus-visible:ring-[#7191e6]"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-600">
                    Subject *
                  </label>
                  <Input
                    required
                    placeholder="How can we help?"
                    className="bg-white border-slate-200 h-12 focus-visible:ring-[#7191e6]"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-600">
                    Message *
                  </label>
                  <Textarea
                    required
                    placeholder="Tell us more about your project..."
                    className="bg-white border-slate-200 min-h-30 focus-visible:ring-[#7191e6] resize-none"
                  />
                </div>
                <div className="md:col-span-2 pt-2">
                  <Button
                    disabled={loading}
                    className="w-full md:w-auto bg-[#3d52a1] hover:bg-[#7191e6] text-white px-10 py-6 rounded-xl font-bold transition-all shadow-lg shadow-[#3d52a1]/20"
                  >
                    {loading ? (
                      <IconLoader2 className="animate-spin" />
                    ) : (
                      <span className="flex items-center gap-2 italic font-semibold">
                        Send Message <IconSend size={18} />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* RIGHT SIDE: INFO CARD */}
            <div className="lg:col-span-5 flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative flex-1 bg-[#3d52a1] rounded-[40px] p-10 text-white overflow-hidden shadow-2xl flex flex-col justify-between border-b-8 border-r-8 border-[#7191e6]/20"
              >
                <RightSideDecoration />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10 mb-6">
                    <IconCircleDot
                      className="text-[#7191e6] animate-pulse"
                      size={14}
                    />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                      Connect Locally
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold leading-tight mb-2 italic">
                    Global Vision,
                    <br /> Local Presence.
                  </h3>
                  <p className="text-white/60 text-sm font-medium">
                    Empowering enterprises with validated talent and AI-driven
                    solutions.
                  </p>
                </div>

                <div className="relative z-10 space-y-6 mt-8">
                  <div className="flex items-center gap-5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <IconMapPin size={20} className="text-[#7191e6]" />
                    </div>
                    <p className="font-bold text-sm">
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <IconMail size={20} className="text-[#7191e6]" />
                    </div>
                    <p className="font-bold text-sm">contact@mvantix.com</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <IconPhone size={20} className="text-[#7191e6]" />
                    </div>
                    <p className="font-bold text-sm">+91 78777 27352</p>
                  </div>
                </div>

                <div className="relative z-10 mt-8 flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <IconDeviceAnalytics size={18} className="text-[#7191e6]" />
                    <span className="text-[10px] font-bold uppercase opacity-60 tracking-widest">
                      Success Rate
                    </span>
                  </div>
                  <span className="text-sm font-black text-[#7191e6]">98%</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION: COMPACT & CLICKABLE */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* SMALL COMPACT MAP */}
            <div className="lg:col-span-5">
              <div className="relative h-75 rounded-4xl overflow-hidden border border-slate-100 shadow-2xl group cursor-pointer">
                {/* Clickable Overlay to open Google Maps */}
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20"
                />

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.382562431!2d75.71397335!3d26.8851417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63d0cf22e0a2!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  className="group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                />
              </div>
            </div>

            {/* TEXT CONTENT WITH DESIGN */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-[#7191e6]/20 rounded-full" />
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                  Seamlessly bridging the gap between{" "}
                  <span className="text-[#7191e6]">Idea & Execution.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#7191e6]/10 flex items-center justify-center text-[#7191e6]">
                    <IconRocket size={24} />
                  </div>
                  <h4 className="font-bold text-slate-800">Fast Deployment</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    We don't just consult; we execute. Get your solutions live
                    with our rapid response team.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#3d52a1]/10 flex items-center justify-center text-[#3d52a1]">
                    <IconDeviceAnalytics size={24} />
                  </div>
                  <h4 className="font-bold text-slate-800">
                    Precision Analytics
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Data-driven decisions are at our core. Every transmission is
                    backed by performance metrics.
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Line */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"
                    />
                  ))}
                </div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                  Trusted by 50+ Enterprises
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
