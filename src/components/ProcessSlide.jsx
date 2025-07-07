import { useState, useEffect } from "react";

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
    title: "Optimize & Scale",
    desc: "We analyze data and performance, identify opportunities, and adjust strategies to help your brand thrive in the digital landscape.",
  },
  {
    id: 4,
    title: "Refine & Grow",
    desc: "We don't stop at the launch. We analyze performance, gather feedback, and fine-tune to ensure your brand keeps evolving and thriving.",
  },
];

const ProcessSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-10">
      {isDesktop ? (
        // ➤ Desktop view (slide style)
        <div className="flex h-[500px] gap-2 transition-all duration-500">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={step.id}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-500 cursor-pointer rounded-4xl overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? "bg-black text-white flex-[1]"
                    : "bg-gray-100 text-orange-500 flex-none w-[95px]"
                }`}
              >
                <div
                  className={`text-[120px] font-bold ml-2 hover:mr-2 transition-all duration-300 pt-6 flex items-center gap-4 ${
                    !isActive ? "text-right justify-end" : "ml-10"
                  }`}
                >
                  <span>{step.id}</span>
                  {isActive && <span className="text-4xl">{step.title}</span>}
                </div>

                {isActive && (
                  <div className="px-6 pb-8 mt-6">
                    <p className="text-white/90 text-2xl font-medium px-8 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        // ➤ Mobile & tablet view (stacked cards with gray bg)
        <div className="flex flex-col gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-100 text-black rounded-4xl p-6 sticky top-24 z-10 shadow-md"
            >
              {/* Number + Title in one row */}
              <div className="flex items-center gap-12  mb-2">
                <span className="text-9xl font-bold leading-none">
                  {step.id}
                </span>
                <div>
                  <h3 className="text-3xl font-semibold">{step.title}</h3>
                  {/* Description below */}
                  <p className="text-xl leading-relaxed mt-6 text-gray-800 pr-8">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProcessSlide;
