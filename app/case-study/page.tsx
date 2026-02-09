"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data/caseStudies";

export default function CaseStudyPage() {
  return (
    <section className="min-h-screen bg-white px-6 py-24">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-24"
      >
        Case Studies
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-28 max-w-6xl mx-auto px-6">

        {caseStudies.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative group flex flex-col items-center"
          >

            <Link href={`/case-study/${item.slug}`} className="w-full">

              <Image
                src={item.img}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-3xl shadow-lg"
              />

              <div className="
                absolute left-1/2 -translate-x-1/2
                bottom-[-55px]
                w-[85%]
                bg-white p-6
                rounded-2xl shadow-xl
                transition duration-500 group-hover:-translate-y-2
              ">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </Link>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
