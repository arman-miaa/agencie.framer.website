import { BsTwitterX } from "react-icons/bs";
import img1 from "../assets/aboutImg1.avif";
import img2 from "../assets/aboutImg2.avif";
import img3 from "../assets/aboutImg3.avif";
import { Wand2, Brain, Cpu } from "lucide-react";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import FadeUpOnScroll from "../shared/FadeUpOnScroll";

const About = () => {
  const teamMembers = [
    {
      name: "Zephyr Callahan",
      role: "Lead Designer / Brand Strategist",
      badge: "CREATIVE WIZARD",
      badgeIcon: Wand2,
      image: img1,
      social: {
        linkedin: "https://www.linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Thane Vesper",
      role: "Business Development Manager",
      badge: "STRATEGY GENIUS",
      badgeIcon: Brain,
      image: img2,
      social: {
        linkedin: "https://www.linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Leander Frost",
      role: "Lead Developer",
      badge: "TECH ALCHEMIST",
      badgeIcon: Cpu,
      image: img3,
      social: {
        linkedin: "https://www.linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ];

  return (
    <div className="max-w-7xl md:mx-auto mt-28 md:mt-58 bg-white mx-4 px-4 xl:px-0">
      {/* Header Section */}
      <FadeUpOnScroll delay={0.2}>
        <div className="mb-12 ">
          <div className="bg-gray-200 w-fit  pr-3 rounded-2xl flex items-center gap-2 mb-6">
            <div className="bg-black p-[10px] rounded-full text-white">
              <FaRegStar className="text-sm" />
            </div>
            <h4 className="text-sm font-medium">About Us</h4>
          </div>

          <div className="max-w-3xl ">
            <p className="text-gray-700 text-lg md:text-2xl leading-8 mb-6">
              We started as a small group of passionate creators who believed
              that great ideas deserve bold execution. What began over
              coffee-fueled brainstorming sessions has grown into a thriving
              digital agency dedicated to{" "}
              <span className="font-semibold">helping brands stand out.</span>
            </p>

            <p className="text-gray-700 text-lg md:text-2xl leading-8">
              Our mission is simple:{" "}
              <span className="font-semibold">
                to craft creative, impactful solutions that drive results.
              </span>
              With a vision{" "}
              <span className="font-semibold">
                to empower businesses to shine in a crowded world
              </span>
              , we combine strategy, design, and a touch of magic{" "}
              <span className="font-semibold">
                to bring your ideas to life.
              </span>
              Let's make something amazing together!
            </p>
          </div>
        </div>
      </FadeUpOnScroll>

      {/* Team Section */}
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4 mt-16">
        {/* Team Members */}
        {teamMembers.map((member, index) => (
          <div key={index} className="relative bg-gray-100 rounded-2xl shadow">
            <div className="rounded-lg overflow-hidden">
              {/* Badge */}
              <span className="absolute top-0 left-0 z-10 bg-orange-600 text-white px-4 py-3 flex items-center gap-2 rounded-l-3xl rounded-tr-3xl text-xs font-semibold">
                <member.badgeIcon className="w-4 h-4" />
                {member.badge}
              </span>

              {/* Image */}
              <div className="px-4 pb-4 pt-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Member Info */}
            <div className="mt-4 px-4 pb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{member.role}</p>

              {/* Social Icons */}
              <div className="flex text-3xl items-center gap-2">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  className="w-8 h-8 text-4xl"
                >
                  <BiLogoLinkedinSquare />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  className="w-8 h-8 mt-1 bg-gray-200 "
                >
                  <BsTwitterX />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Join Our Team Card */}
        <div className="bg-orange-600  shadow rounded-2xl p-6 text-white flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-2xl font-bold mb-4">You can be here</h3>
            <p className=" leading-relaxed">
              We value curiosity, creativity, and a can-do attitude. Oh, and
              coffee— lots of coffee. Come join our team that celebrates your
              unique skills and helps you unlock your full potential.
            </p>
          </div>

          <button className="bg-black cursor-pointer rounded-full text-white px-6 py-3  font-semibold hover:bg-gray-800 transition-colors mt-6">
            Join Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
