import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaArrowRight } from "react-icons/fa";
import TitleSection from "../shared/TitleSection";

import img1 from "../assets/portfolio1.avif";
import img2 from "../assets/portfoliobox2.avif";
import img3 from "../assets/portfoliobox3.avif";
import boxTopImg from "../assets/boxtop.svg";
import boxTopImg1 from "../assets/boxtop1.svg";
import boxTopImg2 from "../assets/boxtop2.svg";


import PortfolioHideBoxFirst from "./PortfolioHideBoxFirst";
import PortfolioHideLastBox from "./PortfolioHideLastBox";
import { RiArrowRightSLine } from "react-icons/ri";

const PortfolioSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const portfolioData = [
    {
      image: img1,
      topBoxImage: boxTopImg,
      topBoxImageWidth: "w-26",
      tags: ["BRANDING", "PACKAGING", "STRATEGY", "DIGITAL PRESENCE"],
      title: "Frostify - Redefining Ice Cream Cool",
    },
    {
      image: img2,
      topBoxImage: boxTopImg1,
      topBoxImageWidth: "w-12",
      tags: [
        "DISCOVERY & RESEARCH",
        "WWBSITE DESIGN",
        "CONTENT STAATEGY",
        "SEO & MARKETING INTEGRATION",
        "RE BRANDING",
      ],
      title: "CritterShield - Pest Solutions Rebranding",
      liveLink: "https://www.behance.net",
    },
    {
      image: img3,
      topBoxImage: boxTopImg2,
      topBoxImageWidth: "w-12",
      tags: ["UX RESEARCH", "UI DESIGN", "FRAMER DEVELOPMENT", "PERFORMANCE"],
      title:
        "How we revamped an Agency's digital presence to drive 40% more client engagement",
      hasSecondButton: true,
      liveLink: "https://agencie.framer.website",
    },
  ];

  return (
    <div
      id="project"
      className="scroll-mt-36 mt-14 md:mt-[110px] max-w-7xl mx-auto px-4"
    >
      <TitleSection
        badgeText="Our Portfolio"
        title="Explore the projects where we played, experimented, and built something amazing."
      />

      <div className="mt-16 space-y-10 max-w-2xl mx-auto ">
        {portfolioData.map((project, index) => (
          <div
            key={index}
            className="space-y-0 relative rounded-3xl overflow-hidden"
          >
            {/* Main Image */}
            <div className="aspect-[4/3] overflow-hidden  ">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Top Box Image */}
              <div className="bg-[#eff1f6f1] ml-4 z-50 top-122 p-1 px-6 rounded-lg absolute">
                <img
                  src={project.topBoxImage}
                  alt="Top Box Decoration"
                  className={`rounded py-1 px-2 object-cover ${project.topBoxImageWidth}`}
                />
              </div>
            </div>

            {/* Bottom Content Box */}
            <div className="bg-[#eff1f6a4] mt-2 p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium mt-4 text-gray-800 bg-white px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold  leading-tight">
                {project.title}
              </h3>

              <div className="space-y-3 pt-2">
                {/* Box 3: Live site button on top */}
                {index === 2 && project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between py-3 px-6 rounded-3xl text-white font-semibold bg-black hover:bg-gray-800 transition-colors duration-200"
                  >
                    <span className="text-lg">View Live Site</span>
                    <RiArrowRightSLine className="text-main text-3xl" />
                  </a>
                )}

                {/* Expand Button for box 1 and 3 */}
                {(index === 0 || index === 2) && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full flex items-center justify-between py-3 px-6 rounded-full text-white text-lg cursor-pointer font-semibold bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
                  >
                    <span>
                      {expandedIndex === index
                        ? "Hide Details"
                        : "Expand Details"}
                    </span>
                    {expandedIndex === index ? (
                      <FaChevronUp className="" />
                    ) : (
                      <FaChevronDown className="" />
                    )}
                  </button>
                )}

                {/* Box 2: Only live site button */}
                {index === 1 && project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between py-3 px-6 rounded-3xl text-white font-semibold bg-black hover:bg-gray-800 transition-colors duration-200"
                  >
                    <span className="text-lg">View Live Site</span>
                    <RiArrowRightSLine className="text-main text-3xl" />
                  </a>
                )}
              </div>

              {/* Conditional Expand Content */}
              {expandedIndex === index && (
                <div className="pt-4 text-white text-sm animate-in fade-in duration-300">
                  {index === 0 && <PortfolioHideBoxFirst />}
                  {index === 2 && <PortfolioHideLastBox />}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
