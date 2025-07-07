

import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaPalette,
  FaCode,
  FaCogs,
  FaShoppingCart,
  FaChartLine,
  FaEnvelopeOpenText,
  FaPenNib,
  FaMobileAlt,
  FaBoxOpen,
} from "react-icons/fa";

// ⬇️ Map tags to icons
const iconMap = {
  "UI UX Design": <FaPalette />,
  "Custom Website Design": <FaCode />,
  "E-Commerce Development": <FaShoppingCart />,
  "Content Management System (CMS)": <FaCogs />,
  "Website Maintenance and Support": <FaCogs />,
  "SEO Integration": <FaChartLine />,
  "UX/UI Optimization": <FaPalette />,

  "SEO (Search Engine Optimization)": <FaChartLine />,
  "PPC Advertising": <FaChartLine />,
  "Social Media Marketing": <FaEnvelopeOpenText />,
  "Email Marketing": <FaEnvelopeOpenText />,
  "Content Marketing": <FaPenNib />,

  "Logo Design": <FaPenNib />,
  "Brand Straegy & Positioning": <FaChartLine />,
  "Visual Identity Design": <FaPalette />,
  "Brand Guidelines": <FaCogs />,
  "Social Media Graphics": <FaPenNib />,
  "Email Design": <FaEnvelopeOpenText />,
  "Pitch Decks & Presentations": <FaPenNib />,
  "Packaging Design": <FaBoxOpen />,

  "UI/UX for Apps": <FaMobileAlt />,
  "Custom App Development": <FaCode />,
  "Mobile Optimization": <FaMobileAlt />,
  "App Store Optimization": <FaChartLine />,
};

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="rounded-4xl  bg-[#eff1f6a4] scroll-mt-20 px-4 py-4">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 pt-2 px-4">{service.title}</h3>
      <p className="text-gray-800 mb-8 leading-relaxed px-4">
        {service.description}
      </p>

      {/* ✅ Tags with individual icons */}
      {service.tags && service.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12 px-4">
          {service.tags.map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-3 py-1  text-sm font-medium rounded-full border border-gray-300"
            >
              {iconMap[tag] || <FaCode />}
              {tag}
            </span>
          ))}
        </div>
      )}

      <button
        onClick={toggleDetails}
        className={`group flex items-center text-xl font-medium justify-between w-full px-4 py-6 rounded-2xl transition-colors duration-300 cursor-pointer ${
          isExpanded
            ? "bg-black text-white sticky top-20 z-10"
            : "bg-white text-gray-700"
        }`}
      >
        {isExpanded ? (
          <span className="flex items-center justify-between w-full gap-2  font-medium">
            Hide Details
            <span className="ml-2">
              <FaMinus className="text-white" />
            </span>
          </span>
        ) : (
          <span className="flex items-center justify-between w-full gap-2 font-medium">
            View Details
            {/* Button hover  */}
            <span className="ml-2 p-4 rounded-2xl transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
              <FaPlus className="text-sm" />
            </span>
          </span>
        )}
      </button>

      {isExpanded && (
        <div className="mb-6 p-6  rounded-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col">
            {/* Image Section */}
            <div className="mb-4">
              <img
                src={service.detailImage || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-[570px]  object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* Text Section */}
            <div>
              <h4 className="text-xl font-semibold mt-4">
                {service.detailTitle || "Detailed Overview"}
              </h4>

              {service.features && service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 before:content-['•'] before:text-black before:mr-2 before:text-lg"
                    >
                      <span className="text-gray-600">
                        <span className="font-semibold text-black">
                          {feature.title}:
                        </span>{" "}
                        {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
