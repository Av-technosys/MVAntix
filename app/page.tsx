"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconRocket,
  IconShieldCheck,
  IconCpu,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100 rounded-full blur-[120px] opacity-50" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-100 rounded-full blur-[120px] opacity-50" />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold mb-8"
            >
              <IconRocket size={16} />
              <span>Next-Gen Tech Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase italic leading-[0.9]"
            >
              ACCELERATING <br />
              <span className="text-orange-600">DIGITAL</span> FUTURE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-gray-600 font-medium max-w-2xl"
            >
              MVAntix helps businesses scale with advanced AI automation, custom
              software, and high-performance digital strategies. Turn your
              vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-black hover:bg-orange-600 text-white px-8 py-7 rounded-2xl text-lg font-bold transition-all group">
                Start Project{" "}
                <IconArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-black text-black px-8 py-7 rounded-2xl text-lg font-bold hover:bg-black hover:text-white transition-all"
              >
                View Work
              </Button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<IconCpu size={40} />}
              title="AI Integration"
              desc="Deep neural networks and LLMs tailored for your business needs."
              delay={0.4}
            />
            <FeatureCard
              icon={<IconShieldCheck size={40} />}
              title="Secure Cloud"
              desc="Enterprise-grade security for your data and infrastructure."
              delay={0.5}
            />
            <FeatureCard
              icon={<IconArrowRight size={40} />}
              title="Scalable Ops"
              desc="Systems designed to grow with your user base seamlessly."
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const FeatureCard = ({ icon, title, desc, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:bg-white hover:shadow-xl transition-all group"
  >
    <div className="text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2">
      {title}
    </h3>
    <p className="text-gray-500 font-medium leading-relaxed">{desc}</p>
  </motion.div>
);

export default HomePage;
