"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconCircleChevronRight,
  IconX,
  IconSend,
  IconLoader2,
  IconCircleCheck
} from "@tabler/icons-react";

const HomeModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const stages = [
    {
      title: "Month 1 MVANTIX Intelligence Lab",
      desc: "Talent enters our AI powered training engine to build cognitive strength, AI fluency, communication excellence, and execution discipline.",
      icon: <IconHexagonNumber1 size={40} />,
      tag: "The Foundation",
    },
    {
      title: "Month 2 Talent in Action (Free Deployment)",
      desc: "Your teams evaluate MVANTIX talent in real workflows with zero hiring risk. You observe performance, ownership, adaptability, speed, and culture fit.",
      icon: <IconHexagonNumber2 size={40} />,
      tag: "Zero Risk Evaluation",
    },
    {
      title: "Month 3 Onward MVANTIX Partnership",
      desc: "Hire or scale dedicated talent pods only if performance meets your expectations. No resumes. No guesswork. Only proven ability.",
      icon: <IconHexagonNumber3 size={40} />,
      tag: "Scale With Confidence",
    },
  ];
  const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      company: formData.get("company"),
      enquiryFor: formData.get("enquiryFor"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.flag === 1) {
        setStatus('success');
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus('idle');
        }, 2000); 
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="model-section" className="relative py-12 md:py-16 px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <span className="w-12 h-0.5 bg-[#3d52a1]" />
            <span className="text-[#3d52a1] font-semibold uppercase tracking-[0.3em] text-xs">A Performance Based Approach</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-semibold md:leading-13 text-slate-900 ">
            Our Signature <br />
            <span className="text-[#7191e6]">3-Stage</span> Model
          </h2>
          <p className="text-lg text-slate-600 mt-4">A Risk-Free, Performance Based Hiring Approach</p>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block -z-10" />
          {stages.map((stage, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2, duration: 0.6 }} viewport={{ once: true }} className="group relative">
              <div className="h-full bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-[#3d52a1]/10 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-10">
                  <div className="text-[#3d52a1] group-hover:scale-110 transition-transform duration-500">{stage.icon}</div>
                  <span className="px-4 py-1 rounded-full bg-white text-[10px] font-semibold uppercase tracking-widest text-slate-400 border border-slate-100 group-hover:border-[#7191e6] group-hover:text-[#7191e6] transition-colors">{stage.tag}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black uppercase leading-tight tracking-tight">{stage.title}</h3>
                  <div className="w-12 h-1 bg-[#7191e6] group-hover:w-full transition-all duration-700" />
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{stage.desc}</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <IconCircleChevronRight size={32} className="text-slate-200 group-hover:text-[#3d52a1] transition-colors cursor-pointer" onClick={() => setIsModalOpen(true)} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-20 p-10 rounded-[3rem] bg-linear-to-br from-[#3d52a1] to-[#7191e6] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-3xl font-semibold uppercase tracking-tighter">Ready to see talent in action?</h4>
            <p className="font-medium text-white/80">Experience Month 2 with zero strings attached.</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="group relative bg-white text-[#3d52a1] px-10 py-5 rounded-full font-semibold uppercase text-sm overflow-hidden transition-all shadow-xl active:scale-95 border border-[#3d52a1]/10">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get Started Now</span>
            <div className="absolute inset-0 bg-[#7191e6] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { if(!isSubmitting) setIsModalOpen(false) }} className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }} className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden z-[110]">
              <div className="h-1.5 w-full bg-linear-to-r from-[#3d52a1] to-[#7191e6]" />
              <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 transition-colors">
                <IconX size={20} />
              </button>

              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Begin Your <span className="text-[#7191e6]">Journey</span></h3>
                  <p className="text-slate-500 text-xs mt-2 font-medium">Quickly fill the details to unlock 3-stage model access.</p>
                </div>

                <form className="space-y-4" onSubmit={handleModalSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <input name="name" type="text" placeholder="Full Name *" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#7191e6] focus:bg-white outline-none transition-all text-xs font-medium" required />
                    <input name="email" type="email" placeholder="Email Address *" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#7191e6] focus:bg-white outline-none transition-all text-xs font-medium" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input name="mobile" type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#7191e6] focus:bg-white outline-none transition-all text-xs font-medium" />
                    <input name="company" type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#7191e6] focus:bg-white outline-none transition-all text-xs font-medium" />
                  </div>

                  <input name="enquiryFor" type="text" placeholder="Subject / Interest *" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#7191e6] focus:bg-white outline-none transition-all text-xs font-medium" required />
                  <textarea name="message" rows={3} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#7191e6] focus:bg-white outline-none transition-all text-xs font-medium resize-none" required></textarea>
                  {status === 'success' && (
                    <div className="p-3 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-lg flex items-center gap-2">
                      <IconCircleCheck size={16}/> Request Sent! We&apos;ll get back to you.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-3 bg-rose-50 text-rose-700 text-[10px] font-bold rounded-lg">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button 
                    disabled={isSubmitting}
                    className="group relative w-full py-4 bg-[#3d52a1] text-white rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 overflow-hidden transition-all shadow-lg active:scale-[0.98] border-none disabled:opacity-70"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? <IconLoader2 className="animate-spin" size={14}/> : 'Send Request'}
                      {!isSubmitting && <IconSend size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                    </span>
                    <div className="absolute inset-0 bg-[#7191e6] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HomeModel;