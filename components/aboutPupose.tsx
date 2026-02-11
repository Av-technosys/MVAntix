"use client";
import Image from "next/image";
import React from "react";

const cards = [
  {
    title: "The Skills Gap",
    desc: "Closing the distance between academic knowledge and business reality.",
    img: "/Images/product1.png",
  },
  {
    title: "The Onboarding Drag",
    desc: "Eliminating the months of ramp up time that drain resources.",
    img: "/Images/product2.png",
  },
  {
    title: "The Hiring Gamble",
    desc: "Replacing hope based hiring with performance validated certainty.",
    img: "/Images/product3.png",
  },
];


const AboutPurpose = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900  mb-2">
          Our Purpose
        </h2>

        <p className="text-4xl md:text-5xl font-semibold leading-13 text-[#7191e6]  mb-4">
          Predictable Talent. Zero Guesswork.
        </p>

        <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8 mb-12 max-w-3xl">
          Traditional training focuses on tools; we focus on readiness. We
          exist to solve the three biggest headaches in the enterprise world:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-sky-50 rounded-2xl p-6 flex flex-col justify-between overflow-hidden cursor-pointer transition duration-300 hover:shadow-xl"
            >
              <div>
                <h3 className="text-xl  text-[#3d52a1] font-semibold mb-3">{card.title}</h3>

                <p className="text-gray-700 text-md font-medium mb-4">{card.desc}</p>

                <button className="flex items-center gap-2 font-medium text-[#7191e6] transition group-hover:text-black">
                  Learn More →
                </button>
              </div>

              <div className="mt-6 overflow-hidden rounded-xl">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={400}
                  height={300}
                  className="object-contain transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPurpose;
