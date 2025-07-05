import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Discover & Strategize",
    desc: "We dive deep into understanding your brand, goals, and audience. Through collaborative discussions and research, we craft a clear roadmap tailored to your needs.",
  },
  {
    id: 2,
    title: "Build & Launch",
    desc: "Our creative team gets to work, blending innovation with strategy to design visuals, content, and assets that resonate with your brand. Every detail is refined to perfection.",
  },
  {
    id: 3,
    title: "Discover & Strategize",
    desc: "We dive deep into understanding your brand, goals, and audience. Through collaborative discussions and research, we craft a clear roadmap tailored to your needs.",
  },
  {
    id: 4,
    title: "Refine & Grow",
    desc: "We don't stop at the launch. We analyze performance, gather feedback, and fine-tune to ensure your brand keeps evolving and thriving in the digital landscape.",
  },
];

const ProcessSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex h-[500px] gap-2 transition-all duration-500">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={step.id}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-500 cursor-pointer  rounded-3xl overflow-hidden flex flex-col justify-between ${
                isActive
                  ? "bg-black text-white flex-[1]"
                  : "bg-gray-100 text-orange-500 flex-none w-[95px]"
              }`}
            >
              <div
                className={`text-[120px] font-bold px-6 ml-2 pt-6 flex items-center gap-4 ${
                  !isActive ? "text-right justify-end" : ""
                }`}
              >
                <span>{step.id}</span>
                {isActive && <span className="text-4xl">{step.title}</span>}
              </div>

              {isActive && (
                <div className="px-6 pb-8 mt-6">
                
                  <p className="text-white/90 text-2xl font-medium px-8 pl-24 leading-relaxed ">
                    {step.desc}
                  </p>
                </div>
              )}
            </div>
          );
        })}  
      </div>
    </div>
  );
};

export default ProcessSlide;
