"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconSend,
  IconLoader2,
  IconCircleDot,
  IconDeviceAnalytics,
  IconRocket,
  IconCheck,
  IconExclamationCircle
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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "", // backend key
    company: "",
    enquiryFor: "", // backend key
    message: "",
  });

  const mapUrl = "https://www.google.com/maps";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", mobile: "", company: "", enquiryFor: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-10 bg-[#7191e6]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Let’s build something <span className="text-[#7191e6]">extraordinary.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 bg-slate-50/50 p-8 rounded-4xl border border-slate-100">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600">Full Name *</label>
                  <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" className="bg-white border-slate-200 h-12 focus-visible:ring-[#7191e6]" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600">Email Address *</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" className="bg-white border-slate-200 h-12 focus-visible:ring-[#7191e6]" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600">Phone Number</label>
                  <Input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter phone number" className="bg-white border-slate-200 h-12 focus-visible:ring-[#7191e6]" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600">Company Name</label>
                  <Input name="company" value={formData.company} onChange={handleChange} placeholder="Enter company name" className="bg-white border-slate-200 h-12 focus-visible:ring-[#7191e6]" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-600">Subject / Enquiry For *</label>
                  <Input name="enquiryFor" value={formData.enquiryFor} onChange={handleChange} required placeholder="How can we help?" className="bg-white border-slate-200 h-12 focus-visible:ring-[#7191e6]" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-slate-600">Message *</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us more..." className="bg-white border-slate-200 min-h-30 focus-visible:ring-[#7191e6] resize-none" />
                </div>

                <div className="md:col-span-2 space-y-4 pt-2">
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-2 p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100 text-sm font-medium">
                        <IconCheck size={18} /> Message sent successfully!
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-sm font-medium">
                        <IconExclamationCircle size={18} /> Something went wrong.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button disabled={loading} className="group relative w-full md:w-auto bg-[#3d52a1] text-white px-10 py-6 rounded-xl font-bold overflow-hidden transition-all shadow-lg border-none disabled:opacity-70">
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? <IconLoader2 className="animate-spin" size={20} /> : (
                        <span className="flex items-center gap-2 font-semibold">
                          Send Message <IconSend size={18} />
                        </span>
                      )}
                    </div>
                    {!loading && <div className="absolute inset-0 bg-[#7191e6] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />}
                  </Button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-5 flex flex-col">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="relative flex-1 bg-[#3d52a1] rounded-[40px] p-10 text-white overflow-hidden shadow-2xl flex flex-col justify-between border-b-8 border-r-8 border-[#7191e6]/20">
                <RightSideDecoration />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold leading-tight mb-2">Global Vision, <br /> Local Presence.</h3>
                </div>
                <div className="relative z-10 space-y-6 mt-8">
                  <div className="flex items-center gap-5">
                    <IconMapPin size={20} className="text-[#7191e6]" />
                    <p className="font-bold text-sm">Jaipur, Rajasthan, India</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <IconMail size={20} className="text-[#7191e6]" />
                    <p className="font-bold text-sm">hello@mvantix.com</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <IconPhone size={20} className="text-[#7191e6]" />
                    <p className="font-bold text-sm">+91 78777 27352</p>
                  </div>
                </div>
                <div className="relative z-10 mt-8 flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-[10px] font-bold uppercase opacity-60 tracking-widest">Success Rate</span>
                  <span className="text-sm font-black text-[#7191e6]">98%</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;