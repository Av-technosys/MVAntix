"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  IconSettingsAutomation, 
  IconUsers, 
  IconDeviceDesktopAnalytics, 
  IconHeadset, 
  IconRocket, 
  IconRefresh,
} from "@tabler/icons-react";

const SalesOperations = () => {
  // Exact Content from your list
  const offerings = [
    {
      title: "ITSM Deployment",
      desc: "IT Service Management (ITSM) deployment and optimization.",
      icon: <IconSettingsAutomation size={28} />,
    },
    {
      title: "ITOM & Monitoring",
      desc: "IT Operations Management (ITOM) and monitoring solutions.",
      icon: <IconDeviceDesktopAnalytics size={28} />,
    },
    {
      title: "HR Service Delivery",
      desc: "HRSD for improved employee experience and internal operations.",
      icon: <IconUsers size={28} />,
    },
    {
      title: "CSM Solutions",
      desc: "Customer Service Management (CSM) solutions for better engagement.",
      icon: <IconHeadset size={28} />,
    },
    {
      title: "Platform Upgrades",
      desc: "Workflow automation, integrations, and platform upgrades.",
      icon: <IconRefresh size={28} />,
    },
    {
      title: "Continuous Support",
      desc: "Ongoing performance optimization and continuous support.",
      icon: <IconRocket size={28} />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decorative Tech Circle */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 border-40 border-[#3d52a1]/5 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#7191e6] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              ServiceNow Capabilities
            </span>
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-black text-black leading-[1.1] tracking-tighter uppercase italic">
              Intelligent Digital Workflows <br />
              <span className="text-[#7191e6] not-italic">for Enterprise Operations</span>
            </h2>
            <p className="mt-8 text-xl text-gray-500 font-medium leading-relaxed max-w-3xl">
              MVANTIX helps organizations simplify complex operations through <span className="text-[#3d52a1] font-bold underline decoration-[#7191e6] decoration-4 underline-offset-4">ServiceNow-powered</span> digital workflows.
            </p>
          </motion.div>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-[#3d52a1]/10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#7191e6]/5 rounded-bl-[5rem] group-hover:bg-[#7191e6]/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="mb-6 text-[#3d52a1] group-hover:text-[#7191e6] group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm font-black text-[#3d52a1] uppercase tracking-wider mb-4">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Operational Results Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-10 p-1 bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden"
        >
          <div className="bg-[#3d52a1] text-white px-10 py-8 rounded-[2.8rem] flex-1 w-full">
            <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-2">Operational Results</h4>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Efficiency through automation</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 px-10 py-6 flex-2">
            {[
              "Faster resolution times",
              "Improved operational visibility",
              "Seamless workflow efficiency"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#7191e6]" />
                <span className="text-xs font-black text-[#3d52a1] uppercase tracking-tighter">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SalesOperations;