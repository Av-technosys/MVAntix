import React from 'react'
import { 
  IconBrain,
  IconMessageChatbot,
  IconCircleCheck
} from "@tabler/icons-react";
const HomeWhyChoose = () => {
     const solutions = [
    {
      title: "AI Native & Future Ready Talent",
      desc: "Built with modern AI tools, automation mindset, and digital-first thinking.",
      icon: <IconBrain size={28} />,
      color: "from-[#7191e6] to-black"
    },
    {
      title: "Business Ready Communication",
      desc: "Client-facing professionals who think clearly, speak confidently, and deliver with ownership.",
      icon: <IconMessageChatbot size={28} />,
      color: "from-[#7191e6] to-black"
    },
    {
      title: "Zero Risk, Performance First",
      desc: " Evaluate talent in real workflows before committing. No guesswork. Only proven results.",
      icon: <IconCircleCheck size={28} />,
      color: "from-[#7191e6] to-black"
    },
  ];
  return (
      <section className="relative py-12 md:py-16 px-6 md:px-8 bg-[#3d52a1]/30 overflow-hidden">
      
      {/* Background Decor - Desktop only for performance */}
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: 1 col on mobile, 12 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold leading-13 text-slate-900 ">
              Talent Built <br />
              <span className="text-[#7191e6]">For Real</span> <br />
              Business <br /> 
              Impact
            </h2>

            <div className="space-y-6">
              <p className="text-lg md:text-md text-slate-800 font-semibold leading-tight max-w-md mx-auto lg:mx-0">
                MVANTIX delivers enterprise-ready talent built to perform from Day One.
              </p>
              
              <div className="flex gap-4 items-start text-left max-w-md mx-auto lg:mx-0">
                {/* Vertical Line - Hidden on small mobile if needed */}
                <div className="shrink-0 w-1 h-20 bg-linear-to-b from-[#7191e6] to-transparent rounded-full" />
                <p className="text-lg text-slate-600 animate-in fade-in duration-700 delay-100 slide-in-from-bottom-8">
                  Our professionals are AI native, cognitively sharp, communication ready, 
                  and execution driven, enabling faster onboarding.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-7 space-y-4 md:space-y-6">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="group relative p-px rounded-3xl md:rounded-[2.5rem] bg-slate-200 hover:bg-linear-to-r hover:from-[#7191e6] hover:to-black transition-all duration-300"
              >
                <div className="bg-white p-6 md:p-8 rounded-[1.4rem] md:rounded-[2.4rem] flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-6">
                  {/* Icon Box */}
                  <div className={`shrink-0 p-4 rounded-2xl bg-linear-to-br ${item.color} text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl  text-black tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default HomeWhyChoose;
