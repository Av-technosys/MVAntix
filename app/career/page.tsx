'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence} from "framer-motion";
import { 
  IconArrowRight, 
  IconSparkles,
  IconTarget, 
  IconRocket, 
  IconBrandZapier,
  IconUsersGroup,
  IconHierarchy2,
  IconRoute,
  IconBriefcase,
  IconClock,
  IconChecks,
  IconMessageDots,
  IconCode,
  IconCurrencyDollar,
  IconWifi,
  IconSchool,
  IconHeartPlus,
  IconFocus2,
  IconChevronDown, 
  IconUpload, 
  IconSend, 
  IconCircleCheck, 
  IconLoader2
} from "@tabler/icons-react";
const page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [fileName, setFileName] = useState<string>(''); // For UI feedback on file upload

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');
        setErrorMessage('');

        const form = event.currentTarget;
        const formData = new FormData(form);

        // UI Form field 'message' ko API ke 'project' field mein map karne ke liye:
        const msg = formData.get('message');
        if (msg) formData.append('project', msg as string);

        try {
            // Note: API endpoint humne /api/sendmail banaya tha
            const response = await fetch('/api/sendmail', {
                method: 'POST',
                body: formData, // Multipart data automatically handled
            });

            const data = await response.json();

            if (data.flag === 1) {
                setStatus('success');
                form.reset();
                setFileName('');
            } else {
                setErrorMessage(data?.msg || 'Something went wrong. Please try again.');
                setStatus('error');
            }
        } catch (error) {
            setErrorMessage('Network error. Please try again.');
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };
const values = [
    {
      title: 'Customer obsession',
      desc: 'We listen deeply and build for outcomes, not vanity metrics.',
      icon: <IconUsersGroup size={24} stroke={1.5} />,
    },
    {
      title: 'Elegant execution',
      desc: 'We favor simple, durable solutions and rigorous engineering.',
      icon: <IconHierarchy2 size={24} stroke={1.5} />,
    },
    {
      title: 'Growth mindset',
      desc: 'We teach, learn, and iterate fast without cutting corners.',
      icon: <IconRoute size={24} stroke={1.5} />,
    },
  ];
  const roles = [
    {
      title: 'AI Product Engineer',
      type: 'Full-time - Remote',
      desc: 'Own end-to-end delivery of AI features from design to production.',
    },
    {
      title: 'Frontend Experience Designer',
      type: 'Full-time - Hybrid',
      desc: 'Craft polished interfaces that make complex systems feel simple.',
    },
    {
      title: 'ML Ops Specialist',
      type: 'Contract - Remote',
      desc: 'Ship reliable pipelines, monitoring, and deployment workflows.',
    },
    {
      title: 'Growth & Partnerships',
      type: 'Full-time - Remote',
      desc: 'Drive strategy, storytelling, and growth experiments.',
    },
  ];
  const steps = [
    { 
      step: '01', 
      title: 'Intro call', 
      text: 'A short chat to learn about your goals and our needs.',
      icon: <IconMessageDots size={20} />
    },
    { 
      step: '02', 
      title: 'Skill interview', 
      text: 'Deep dive into your craft with our core engineering team.',
      icon: <IconCode size={20} />
    },
    { 
      step: '03', 
      title: 'Practical exercise', 
      text: 'A real-world prompt, scoped to be fair, fast, and insightful.',
      icon: <IconRocket size={20} />
    },
    { 
      step: '04', 
      title: 'Final fit', 
      text: 'Meet leadership and align on values, vision, and scope.',
      icon: <IconChecks size={20} />
    },
  ];
  const benefits = [
    { title: 'Competitive compensation', icon: <IconCurrencyDollar size={20} /> },
    { title: 'Flexible remote policy', icon: <IconWifi size={20} /> },
    { title: 'Annual learning stipend', icon: <IconSchool size={20} /> },
    { title: 'Premium health coverage', icon: <IconHeartPlus size={20} /> },
    { title: 'Dedicated focus blocks', icon: <IconFocus2 size={20} /> },
    { title: 'Career growth coaching', icon: <IconRocket size={20} /> },
  ];
    return (
        <div className="bg-white text-slate-900">
            {/* Hero */}
       <section className="relative overflow-hidden bg-white py-12 md:py-16 ">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#7191e6]/5 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7191e6]/20 bg-[#7191e6]/5 px-4 py-1.5 mb-6">
              <IconSparkles size={16} className="text-[#7191e6]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7191e6]">Careers at MVAntix</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl leading-[1.1] mb-6">
              Build AI products that <br />
              <span className="text-[#7191e6]">move real businesses</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl font-medium">
              We are a product-minded team designing practical AI systems for growth, automation, and insight. Join us to ship meaningful work.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#open-roles" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#7191e6] transition-all flex items-center gap-2 group">
                View open roles <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#apply" className="border-2 border-slate-100 px-8 py-4 rounded-full font-bold text-sm text-slate-700 hover:border-[#7191e6] hover:text-[#7191e6] transition-all">
                Apply now
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Distributed team', value: 'Remote-first', icon: <IconBrandZapier size={20}/> },
                { label: 'Work style', value: 'Deep focus', icon: <IconTarget size={20}/> },
                { label: 'Growth', value: 'Learning budget', icon: <IconRocket size={20}/> },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                  <div className="text-[#7191e6] mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{item.label}</p>
                  <p className="font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-10 shadow-2xl shadow-slate-200/40 relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7191e6] mb-4 tracking-widest">// Team snapshot</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Small, senior, high-trust</h3>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                We keep teams lean and highly collaborative. You will own problems end-to-end and work closely with founders.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {[
                  'Ship weekly with measurable outcomes',
                  'Design systems that scale',
                  'Work with modern AI stacks'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100/50">
                    <IconCircleCheck size={20} className="text-emerald-500" />
                    <span className="text-sm font-bold text-slate-700">{text}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 shadow-sm" />
                  ))}
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Join the elite</span>
              </div>
            </div>

            {/* Floating Badge Animation */}
           
          </motion.div>

        </div>
      </div>
    </section>

            {/* Values */}
         <section className="relative border-t border-slate-100 bg-[#f8fafc] py-24 overflow-hidden">
      {/* Tech-Design Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px)] bg-[size:40px] opacity-20" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#7191e6]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16"
        >
          <div className="max-w-md">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#7191e6] font-black mb-3">
              // Our values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              The way we build, <span className="text-[#7191e6] font-medium">together.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 font-medium leading-relaxed border-l-2 border-[#7191e6]/20 pl-6">
            We are a systems-driven team: we value clear thinking, honest feedback, and craft that earns trust.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-[#7191e6]/10"
            >
              {/* Card Icon with Animated Background */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-[#7191e6] group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#7191e6] transition-colors">
                {item.title}
              </h3>
              
              <p className="mt-4 text-sm leading-relaxed text-slate-500 font-medium">
                {item.desc}
              </p>

              {/* Subtle Decorative Line */}
              <div className="mt-8 h-1 w-12 rounded-full bg-slate-100 transition-all group-hover:w-full group-hover:bg-[#7191e6]/20" />
              
              {/* Corner Accent */}
              <div className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="h-2 w-2 rounded-full bg-[#7191e6]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

            {/* Benefits */}
          <section className="relative border-t border-slate-100 bg-white py-24 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-[#7191e6]/5 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left space-y-6"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#7191e6] font-black italic mb-3">
                // Benefits
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                A place built for <br />
                <span className="text-[#7191e6]">deep work</span>
              </h2>
            </div>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              We invest in the conditions that let great people do great work: focus time, autonomy, and supportive systems.
            </p>
          </motion.div>

          {/* Right Benefits Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-white hover:border-[#7191e6]/30 hover:shadow-[0_20px_40px_-15px_rgba(113,145,230,0.1)]"
              >
                {/* Icon Container */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-400 shadow-sm transition-all group-hover:bg-[#7191e6] group-hover:text-white group-hover:border-[#7191e6] group-hover:rotate-6">
                  {benefit.icon}
                </div>

                {/* Text */}
                <p className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                  {benefit.title}
                </p>

                {/* Subtle Glow Hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#7191e6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

            {/* Open roles */}
           <section id="open-roles" className="relative border-t border-slate-100 bg-[#fbfcfd] py-24">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7191e6]/5 blur-[120px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7191e6] animate-pulse" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-black">
                // Open roles
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Join the <span className="text-[#7191e6]">MVAntix</span> team
            </h2>
          </div>
          <p className="max-w-md text-slate-500 font-medium text-lg leading-relaxed">
            We are always looking for builders who love shipping and learning. Explore a few priority openings below.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((role, idx) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-[2rem] border border-slate-200 bg-white p-8 transition-all hover:border-[#7191e6]/30 hover:shadow-[0_20px_40px_-15px_rgba(113,145,230,0.15)] overflow-hidden"
            >
              {/* Internal Accent Glow on Hover */}
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#7191e6]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#7191e6] transition-colors tracking-tight">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:bg-[#7191e6]/10 group-hover:text-[#7191e6] transition-colors">
                    <IconClock size={12} />
                    {role.type}
                  </div>
                </div>

                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  {role.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <a
                    href="#apply"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all"
                  >
                    Apply for this role 
                    <div className="flex items-center justify-center h-8 w-8 rounded-full border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <IconArrowRight size={16} />
                    </div>
                  </a>
                  
                  {/* Subtle Icon Background */}
                  <IconBriefcase className="opacity-[0.03] absolute -right-2 top-1/2 -translate-y-1/2 rotate-12 group-hover:scale-110 transition-transform duration-500" size={80} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-[2rem] bg-slate-900 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#7191e633,transparent)]" />
          <p className="relative z-10 text-white font-bold text-lg">
            Don&apos;t see a perfect fit? 
            <a href="#contact" className="text-[#7191e6] ml-2 hover:underline">Send us an open application -&gt;</a>
          </p>
        </motion.div>
      </div>
    </section>
            {/* Process */}
          <section className="relative border-t border-slate-100 bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          
          {/* Left Sticky Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#7191e6] font-black mb-4">
              // Hiring process
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Transparent from <br />
              <span className="text-[#7191e6]">hello to offer</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
              We move quickly and keep communication clear at every step. Expect thoughtful feedback and a respectful experience.
            </p>
            
            {/* Minimalist Decoration */}
            <div className="mt-12 hidden lg:block">
              <div className="h-24 w-[1px] bg-linear-to-b from-[#7191e6] to-transparent" />
            </div>
          </motion.div>

          {/* Right Steps Roadmap */}
          <div className="relative space-y-6">
            {/* Desktop Vertical Line Connector */}
            <div className="absolute left-[2.25rem] top-8 bottom-8 w-[1px] bg-slate-100 hidden md:block" />

            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex items-start gap-6 rounded-[2rem] border border-slate-100 bg-slate-50/30 p-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 hover:border-[#7191e6]/20"
              >
                {/* Step Indicator */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-200 text-[#7191e6] shadow-sm transition-all group-hover:bg-[#7191e6] group-hover:text-white group-hover:scale-110">
                  <span className="text-sm font-black">{item.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#7191e6]">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Hover Reveal Decoration */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-[0.05] transition-opacity hidden md:block">
                   <span className="text-8xl font-black text-slate-900">{item.step}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>

            {/* Application form */}
<section id="apply" className="relative border-t border-slate-100 bg-[#fbfcfd] py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#7191e6]/20 to-transparent" />
      
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#7191e6] font-black mb-3">// Apply</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Tell us about <br /> <span className="text-[#7191e6]">yourself</span>
              </h2>
              <p className="mt-6 text-lg text-slate-500 font-medium leading-relaxed">
                Share your background and what you want to build next. We respond to every application within <span className="text-slate-900 font-bold underline decoration-[#7191e6]/30">7 days</span>.
              </p>
            </div>

            {/* Values Card */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:rotate-12 transition-transform">
                <IconCircleCheck size={80} stroke={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-6">What we value in applicants</h3>
              <ul className="space-y-4">
                {[
                  'Clear communication and ownership',
                  'Evidence of shipped work',
                  'Curiosity about AI and systems',
                  'Ability to collaborate across disciplines',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-4 text-slate-600 font-medium text-sm">
                    <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#7191e6]/10 flex items-center justify-center text-[#7191e6]">
                      <IconCircleCheck size={14} stroke={3} />
                    </div>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Side: Form */}
         <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto py-12"
        >
            <form
                onSubmit={handleSubmit}
                className="rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)]"
            >
                <div className="grid gap-6 sm:grid-cols-2">
                    {/* Full Name - API expects 'fullName' */}
                    <div className="space-y-2 sm:col-span-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                        <input
                            className="w-full h-14 rounded-2xl border border-slate-100 bg-slate-50/50 px-5 text-sm font-bold text-slate-900 outline-none transition focus:bg-white focus:border-[#7191e6] focus:ring-4 focus:ring-[#7191e6]/5"
                            placeholder="Jane Doe"
                            type="text"
                            name="fullName"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                        <input
                            className="w-full h-14 rounded-2xl border border-slate-100 bg-slate-50/50 px-5 text-sm font-bold text-slate-900 outline-none transition focus:bg-white focus:border-[#7191e6] focus:ring-4 focus:ring-[#7191e6]/5"
                            placeholder="you@example.com"
                            type="email"
                            name="email"
                            required
                        />
                    </div>

                    {/* Mobile - API expects 'mobile' */}
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                        <input
                            className="w-full h-14 rounded-2xl border border-slate-100 bg-slate-50/50 px-5 text-sm font-bold text-slate-900 outline-none transition focus:bg-white focus:border-[#7191e6] focus:ring-4 focus:ring-[#7191e6]/5"
                            placeholder="+91 00000 00000"
                            type="tel"
                            name="mobile"
                            required
                        />
                    </div>

                    {/* Role Select - API expects 'role' */}
                    <div className="space-y-2 sm:col-span-2 relative">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Role interested in</label>
                        <div className="relative">
                            <select
                                name="role"
                                className="w-full h-14 appearance-none rounded-2xl border border-slate-100 bg-slate-50/50 px-5 text-sm font-bold text-slate-900 outline-none transition focus:bg-white focus:border-[#7191e6] focus:ring-4 focus:ring-[#7191e6]/5"
                            >
                                <option>AI Product Engineer</option>
                                <option>Frontend Experience Designer</option>
                                <option>ML Ops Specialist</option>
                                <option>Growth & Partnerships</option>
                                <option>Other</option>
                            </select>
                            <IconChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                        </div>
                    </div>

                    {/* Location - API expects 'location' */}
                    <div className="space-y-2 sm:col-span-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Current Location</label>
                        <input
                            className="w-full h-14 rounded-2xl border border-slate-100 bg-slate-50/50 px-5 text-sm font-bold text-slate-900 outline-none transition focus:bg-white focus:border-[#7191e6] focus:ring-4 focus:ring-[#7191e6]/5"
                            placeholder="e.g. Jaipur, India"
                            type="text"
                            name="location"
                            required
                        />
                    </div>

                    {/* Resume Upload - API expects 'resume' */}
                    <div className="space-y-2 sm:col-span-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Resume</label>
                        <div className="relative group/file">
                            <input
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                type="file"
                                name="resume"
                                accept=".pdf,.docx"
                                onChange={handleFileChange}
                                required
                            />
                            <div className="h-14 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 px-5 flex items-center gap-3 text-sm font-bold text-slate-400 transition group-hover/file:border-[#7191e6]/40 group-hover/file:bg-white">
                                <IconUpload size={18} />
                                <span className="truncate">{fileName || "Upload PDF or Docx"}</span>
                            </div>
                        </div>
                    </div>

                    {/* Message - Maps to API 'project' */}
                    <div className="space-y-2 sm:col-span-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Proudest Project / Objective</label>
                        <textarea
                            className="w-full min-h-[120px] rounded-2xl border border-slate-100 bg-slate-50/50 px-5 py-4 text-sm font-bold text-slate-900 outline-none transition focus:bg-white focus:border-[#7191e6] focus:ring-4 focus:ring-[#7191e6]/5"
                            placeholder="Share the problem, your approach, and the outcome."
                            name="message"
                            required
                        />
                    </div>
                </div>

                {/* Consent */}
                <label className="mt-6 flex items-start gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-[#7191e6] focus:ring-[#7191e6]"
                        required
                    />
                    <span className="text-[11px] font-medium text-slate-500 leading-tight">
                        I agree to be contacted about my application and understand my data will be handled securely.
                    </span>
                </label>

                {/* Success/Error UI */}
                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-100 p-4 flex items-center gap-3 text-emerald-700 text-sm font-bold">
                            <IconCircleCheck size={20} /> 🎉 Sent successfully! We'll talk soon.
                        </motion.div>
                    )}
                    {status === 'error' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 rounded-2xl bg-rose-50 border border-rose-100 p-4 text-rose-700 text-sm font-bold">
                            ⚠️ {errorMessage}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 w-full h-14 rounded-full bg-slate-900 text-white font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-[#7191e6] hover:shadow-2xl hover:shadow-[#7191e6]/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                    {isSubmitting ? (
                        <IconLoader2 className="animate-spin" size={20} />
                    ) : (
                        <>Submit application <IconSend size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                </button>
            </form>
        </motion.div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default page
