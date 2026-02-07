"use client";
import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

const AboutVision = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* Vision Card */}
        <div className="group bg-[#dfe8e6] text-gray-900 rounded-2xl p-8 shadow-lg 
        transition-all duration-300 hover:shadow-2xl hover:scale-105
        hover:bg-gradient-to-br hover:from-[#3d52a1] hover:to-[#7191e6] hover:text-white">

          <FaEye className="text-4xl mb-4 text-[#3d52a1] transition duration-300 group-hover:text-white" />
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="leading-relaxed">
          Empowering Talent, Strengthening Enterprises Our vision is to build a global, future-ready workforce that is intelligent, adaptable, and inclusive. We aim to bridge the persistent gap between traditional education and enterprise expectations, enabling sustainable growth across all geographies. By supporting continuous learning and career acceleration, we create a world where industries scale with confidence through predictable talent performance.

          </p>
        </div>

        {/* Mission Card */}
        <div className="group bg-[#dfe8e6] text-gray-900 rounded-2xl p-8 shadow-lg 
        transition-all duration-300 hover:shadow-2xl hover:scale-105
        hover:bg-linear-to-br hover:from-[#3d52a1] hover:to-[#7191e6] hover:text-white">

          <FaBullseye className="text-4xl mb-4 text-green-600 transition duration-300 group-hover:text-white" />
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            Creating &quot;Day One Ready&quot; Professionals to transform individuals into high value professionals who contribute to enterprise environments immediately. We achieve this by aligning our specialized learning programs with real world business requirements. We focus on the Whole Professional balancing technical expertise with cognitive and communication intelligence. Through live projects, simulations, and dedicated mentorship, we ensure performance is validated through action. At MVANTIX, we don’t just train talent; we forge professionals who deliver results from their very first hour on the job.

          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutVision;
