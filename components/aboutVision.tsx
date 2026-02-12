"use client";
import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const AboutVision = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Vision Card */}
        <div className="group relative bg-sky-50 rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
          
          {/* Smooth Transition Layer */}
          <div className="absolute inset-0 bg-linear-to-br from-[#3d52a1] to-[#7191e6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

          {/* Content Wrapper */}
          <div className="relative z-10 transition-colors duration-500">
            <FaEye className="text-4xl mb-6 text-[#3d52a1] group-hover:text-white transition-colors duration-500" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">
              Our Vision
            </h2>
            <p className="leading-relaxed text-gray-900 group-hover:text-white transition-colors duration-500">
              Empowering Talent, Strengthening Enterprises Our vision is to build a global, future-ready workforce that is intelligent, adaptable, and inclusive. We aim to bridge the persistent gap between traditional education and enterprise expectations, enabling sustainable growth across all geographies. By supporting continuous learning and career acceleration, we create a world where industries scale with confidence through predictable talent performance.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="group relative bg-sky-50 rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
          
          {/* Smooth Transition Layer */}
          <div className="absolute inset-0 bg-linear-to-br from-[#3d52a1] to-[#7191e6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />

          {/* Content Wrapper */}
          <div className="relative z-10 transition-colors duration-500">
            <FaBullseye className="text-4xl mb-6 text-green-600 group-hover:text-white transition-colors duration-500" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">
              Our Mission
            </h2>
            <p className="leading-relaxed text-gray-900 group-hover:text-white transition-colors duration-500">
              Creating &quot;Day One Ready&quot; Professionals to transform individuals into high value professionals who contribute to enterprise environments immediately. We achieve this by aligning our specialized learning programs with real world business requirements. We focus on the Whole Professional balancing technical expertise with cognitive and communication intelligence. Through live projects, simulations, and dedicated mentorship, we ensure performance is validated through action. At MVANTIX, we don’t just train talent; we forge professionals who deliver results from their very first hour on the job.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutVision;