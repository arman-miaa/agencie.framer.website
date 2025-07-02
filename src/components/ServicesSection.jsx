"use client";

import { useState, useEffect, useRef } from "react";
import { FaRegStar, FaPlus, FaMinus } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "We manage your social platforms and build your audience.",
      detailTitle: "Complete Social Strategy",
      detailDescription:
        "From content calendars to ad campaigns—we handle your online presence.",
      tags: ["Facebook", "Instagram", "Content"],
      detailImage: "/slide1.avif",
      features: ["Monthly analytics", "Post scheduling", "Custom creatives"],
    },
    {
      title: "SEO Optimization",
      description: "Appear on top of Google with smart SEO techniques.",
      detailTitle: "SEO Boost",
      detailDescription:
        "We help you appear in search results using white-hat strategies.",
      tags: ["Google", "Search", "Ranking"],
      detailImage: "/slide2.avif",
      features: [
        "Keyword research",
        "On-page optimization",
        "Backlink building",
      ],
    },
    {
      title: "Content Creation",
      description: "We craft engaging content tailored to your brand.",
      detailTitle: "Branded Content",
      detailDescription:
        "Articles, videos, graphics—we do it all in your voice.",
      tags: ["Branding", "Video", "Graphics"],
      detailImage: "/slide3.avif",
      features: ["Scriptwriting", "Editing", "Custom visuals"],
    },
  ];

  const [activeService, setActiveService] = useState(0);
  const [expandedServices, setExpandedServices] = useState({});
  const serviceRefs = useRef([]);

  // Scroll detection to highlight active service
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

  const toggleDetails = (index) => {
    setExpandedServices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollToService = (index) => {
    if (serviceRefs.current[index]) {
      serviceRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-20 py-12 pb-28">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="bg-gray-200 flex items-center w-fit mx-auto pr-4 gap-2 rounded-full mb-6">
          <div className="bg-black p-3 rounded-full text-white">
            <FaRegStar className="text-sm" />
          </div>
          <h4 className="text-sm font-medium">Our Services</h4>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          Services designed to help your brand shine brighter.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative cursor-pointer p-3 rounded-lg transition-all duration-300 ${
                  activeService === index
                    ? "bg-gray-100 border-l-4 border-red-500"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => scrollToService(index)}
              >
                {activeService === index && (
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-red-500"></div>
                  </div>
                )}
                <h3
                  className={`text-sm ${
                    activeService === index
                      ? "text-red-500 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              className="bg-white rounded-lg scroll-mt-36"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Details Button */}
              <button
                onClick={() => toggleDetails(index)}
                className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-200 font-medium mb-4"
              >
                {expandedServices[index] ? (
                  <>
                    <FaMinus className="text-sm" />
                    Hide Details
                  </>
                ) : (
                  <>
                    <FaPlus className="text-sm" />
                    View Details
                  </>
                )}
              </button>

              {/* Expanded Details */}
              {expandedServices[index] && (
                <div className="mb-6 p-6 bg-gray-50 rounded-lg border-t-4 border-gray-300 animate-in slide-in-from-top duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="order-2 md:order-1">
                      <img
                        src={service.detailImage}
                        alt={service.title}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    </div>

                    {/* Detail Text */}
                    <div className="order-1 md:order-2">
                      <h4 className="text-xl font-semibold mb-3">
                        {service.detailTitle}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.detailDescription}
                      </p>

                      {/* Features List */}
                      {service.features && (
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Divider */}
              {index < services.length - 1 && (
                <hr className="border-gray-200 my-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
