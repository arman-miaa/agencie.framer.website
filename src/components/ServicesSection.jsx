import { RiArrowRightSFill } from "react-icons/ri";

import { useState, useEffect, useRef } from "react";
import { FaRegStar } from "react-icons/fa";
import ServiceCard from "../shared/ServiceCard";
import serviceData from "../data/services.json";
import MarqueeSection from "./MarqueeSection";

//  4 Services Sample Data

const defaultServices = serviceData;

const ServicesSection = ({
  badgeText = "Our services",
  title = "Services designed to help your brand shine brighter.",
  services = defaultServices,
}) => {
  const [activeService, setActiveService] = useState(0);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      serviceRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveService(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToService = (index) => {
    if (serviceRefs.current[index]) {
      serviceRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      id="services"
      className="container mx-auto px-4 xl:px-20 2xl:px-40 pt-20 md:pt-40 "
    >
      {/* Header */}
      <div className="text-center md:mb-12">
        <div className="bg-[#eff1f6a4] flex items-center w-fit mx-auto pr-4 gap-2 rounded-full ">
          <div className="bg-black p-[10px] rounded-full text-white">
            <FaRegStar className="text-sm" />
          </div>
          <h4 className="text-sm font-medium">{badgeText}</h4>
        </div>
        <h2 className="text-3xl md:text-[52px] font-semibold text-gray-900 leading-13 lg:w-5/9 mx-auto mt-2">
          {title}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row  mt-12 md:mt-16">
        {/* Sidebar: Hidden on small devices */}
        <div className="hidden md:block md:w-2/3 xl:w-1/4">
          <div className="sticky top-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative cursor-pointer px-3 py-[2px] rounded-lg transition-all duration-300 ${
                  activeService === index ? "ml-3" : ""
                }`}
                onClick={() => scrollToService(index)}
              >
                {activeService === index && (
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                    <RiArrowRightSFill className="text-2xl text-main" />
                  </div>
                )}
                <h3
                  className={`${
                    activeService === index
                      ? "text-black font-semibold ml-1"
                      : "text-gray-800 text-[17px]"
                  }`}
                >
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Main Cards */}
        <div className="w-full md:w-2/3 xl:w-3/4 space-y-8">
          {services.map((service, index) => (
            <div key={index} ref={(el) => (serviceRefs.current[index] = el)}>
              <ServiceCard
                service={service}
                index={index}
                isLast={index === services.length - 1}
              />
            </div>
          ))}
        </div>
      </div>

      <MarqueeSection />
    </div>
  );
};

export default ServicesSection;
