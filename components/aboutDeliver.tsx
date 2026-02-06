"use client";

import Image from "next/image";
import React from "react";

export default function AboutDeliver() {
  return (
    <section className="relative w-full bg-[#dfe8e6] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE SINGLE IMAGE */}
        {/* LEFT SIDE SIMPLE NATURAL IMAGE */}
<div className="w-full">
  <Image
    src="/Images/image2.png"
    alt="Deliver"
    width={800}
    height={600}
    className="w-full h-auto"
  />
</div>


        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl text-[#7191e6] font-bold mb-4">
            What We Deliver
          </h2>

          <h3 className="text-xl font-semibold mb-4 text-[#3d52a1]">
            Enterprise Solutions & Managed Services
          </h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            MVANTIX combines elite talent with deep technical expertise across the most critical platforms in the modern enterprise.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">

            <div className="border-l-2 border-[#7191e6] pl-4">
              <h4 className="font-semibold mb-1">Platform Excellence</h4>
              <p className="text-gray-600 text-sm">
                Salesforce, ServiceNow, SAP, and Oracle Dynamics expertise.
              </p>
            </div>

            <div className="border-l-2 border-[#7191e6] pl-4">
              <h4 className="font-semibold mb-1">Cutting Edge</h4>
              <p className="text-gray-600 text-sm">
                AI/ML solutions, Data Science, Cloud & DevOps (AWS, Azure, GCP).
              </p>
            </div>

            <div className="border-l-2 border-[#7191e6] pl-4">
              <h4 className="font-semibold mb-1">Flexible Scaling</h4>
              <p className="text-gray-600 text-sm">
                Staff augmentation, Talent Pods, and Managed Services.
              </p>
            </div>

          </div>

          <button className="bg-[#7191e6] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3d52a1] transition">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}
