

import { useState, useEffect, useRef } from "react";
import { FaRegStar } from "react-icons/fa";
import ServiceCard from "../shared/ServiceCard";
import hideImg1 from "../assets/hideImg1.avif";
import hideImg2 from "../assets/hideImg2.avif";
import hideImg3 from "../assets/hideImg3.avif";
import hideImg4 from "../assets/hideImg4.avif";


//  4 Services Sample Data
const defaultServices = [
  {
    title: "Web Development",
    description:
      "Your website is like your digital handshake—it’s the first thing people notice about you online. Our Web Design & Development services are all about making that handshake firm, friendly, and unforgettable.",
    tags: [
      "UI UX Design",
      "Custom Website Design",
      "E-Commerce Development",
      "Content Management System (CMS)",
      "Website Maintenance and Support",
      "SEO Integration",
      "UX/UI Optimization",
    ],
    detailTitle: "What’s Included:",

    detailImage: hideImg1,
    features: [
      ": Eye candy for your website! We make sure every button, color, and layout looks gorgeous and matches your vibe.",
      ": No frustrating clicks here! We map out smooth and intuitive user experiences that guide visitors effortlessly.",
      ": Need something extra special? We’ll code your dream site from scratch, tailored to your exact needs.",
      ": Selling stuff online? We’ll create a secure, easy-to-navigate store that makes checkout a breeze. ",
      " : Want to update your site without calling us every time? We’ll hook you up with WordPress or Webflow for DIY magic.",
      " : Think of us as your website’s personal trainer—keeping it fit, fast, and fabulous.",
      " : Your site will look perfect on all screens, from giant monitors to tiny phones.",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Let’s face it, the internet is a noisy place. But with our Digital Marketing services, you won’t just stand out—you’ll shine. We’ll help you show up where your customers are hanging out, whether that’s Google, Instagram, or somewhere in between. Think of us as your online hype team, always finding clever ways to boost your visibility and drive those sweet, sweet clicks.",
    tags: [
      "SEO (Search Engine Optimization)",
      "PPC Advertising",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
    ],
    detailTitle: "Marketing Solutions",
    detailDescription: "Our campaigns are crafted to bring results.",
    detailImage: hideImg2,
    features: ["Google Ads", "Analytics Setup", "Conversion Optimization"],
  },
  {
    title: "Branding & Creative Services",
    description:
      "Your brand is so much more than a logo—it’s your story, your personality, and your promise to customers. Our Branding & Creative Services bring your identity to life in a way that’s bold, beautiful, and 100% you. We’ll help you stand out, stick in people’s minds, and make your competitors go, “Whoa, that’s cool.”",
    tags: [
      "Logo Design",
      "Brand Straegy & Positioning",
      "Visual Identity Design",
      "Brand Guidelines",
      "Social Media Graphics",
      "Email Design",
      "Pitch Decks & Presentations",
      "Packaging Design",
    ],
    detailTitle: "Intuitive UI/UX",
    detailDescription: "We craft user-centered designs for every platform.",
    detailImage: hideImg3,
    features: ["User Flow", "High Fidelity Design", "Component System"],
  },
  {
    title: "App Design & Development",
    description:
      "Got a brilliant app idea? Let’s make it a reality! Whether it’s a mobile game, a productivity tool, or the next big social platform, we’ll build something that’s smooth, sleek, and downright addictive. Our apps are made with love (and a whole lot of coding).",
    tags: [
      "UI/UX for Apps",
      "Custom App Development",
      "Mobile Optimization",
      "App Store Optimization",
    ],
    detailTitle: "Strong Brand Foundation",
    detailDescription: "We help you define and build your brand's personality.",
    detailImage: hideImg4,
    features: ["Logo Design", "Style Guide", "Brand Messaging"],
  },
];

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
    <div className="container mx-auto px-4 md:px-40 pt-40">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="bg-gray-200 flex items-center w-fit mx-auto pr-4 gap-2 rounded-full ">
          <div className="bg-black p-[10px] rounded-full text-white">
            <FaRegStar className="text-sm" />
          </div>
          <h4 className="text-sm font-medium">{badgeText}</h4>
        </div>
        <h2 className="text-3xl md:text-5xl mt-1 font-bold leading-tight w-1/2 mx-auto">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
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

        {/* Main Cards */}
        <div className="lg:col-span-3 space-y-8">
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
    </div>
  );
};

export default ServicesSection;
