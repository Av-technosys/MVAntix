"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  IconCloudLock, 
  IconDatabase, 
  IconUsersGroup, 
  IconSettingsAutomation, 
  IconInfinity, 
  IconReplace 
} from "@tabler/icons-react";

const HomeCore = () => {
  const services = [
    {
      title: "Salesforce & CRM Services",
      desc: "Consulting, implementation, integration, automation, migration, and managed services.",
      icon: <IconReplace size={32} />,
    },
    {
      title: "ServiceNow Services",
      desc: "ITSM, ITOM, HRSD, CSM, workflow automation, and platform optimization.",
      icon: <IconSettingsAutomation size={32} />,
    },
    {
      title: "AI, Data Science & ML",
      desc: "AI engineering, LLM development, MLOps, data engineering, analytics, NLP, and GenAI.",
      icon: <IconDatabase size={32} />,
    },
    {
      title: "Cloud & DevOps Expertise",
      desc: "AWS, Azure, GCP, IBM Cloud, CI/CD, security, architecture, and scalable infrastructure.",
      icon: <IconCloudLock size={32} />,
    },
    {
      title: "ERP & Enterprise Platforms",
      desc: "SAP, Oracle, Microsoft Dynamics, Salesforce CRM, ERP integrations, and digital transformation.",
      icon: <IconInfinity size={32} />,
    },
    {
      title: "Staff Augmentation",
      desc: "Certified developers, architects, analysts, engineers, and enterprise ready specialists.",
      icon: <IconUsersGroup size={32} />,
    },
  ];

  return (
    <section className="relative py-12 md:py-16 px-6 md:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d52a1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-4 text-center md:text-left  ">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center lg:justify-start gap-3"
            >
                 <div className="h-0.5 w-12 bg-[#7191e6]" />
              <span className="text-[#3d52a1] font-semibold uppercase tracking-[0.3em] text-xs">Our Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900 "
            >
              Core Services & <br className="md:block hidden" /> <span className="text-[#7191e6] ">CapabiLities</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8 border-l-2 border-[#7191e6] pl-6 max-w-xs text-left"
          >
            Technology, Talent, and Digital Workforce Solutions.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-10 h-full transition-all duration-500 hover:z-20 hover:shadow-[0_20px_50px_rgba(61,82,161,0.12)]"
            >
              <div className="relative z-10 space-y-6">
                <div className="text-[#3d52a1] bg-[#3d52a1]/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-[#7191e6] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
              
                <h3 className="text-xl font-semibold text-black uppercase leading-tight tracking-tight group-hover:text-[#3d52a1] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 font-medium text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                  {item.desc}
                </p>
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <div className="w-10 h-10 border-t-2 border-r-2 border-[#7191e6] rounded-tr-xl" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-linear-to-r from-[#3d52a1] to-[#7191e6] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCore;