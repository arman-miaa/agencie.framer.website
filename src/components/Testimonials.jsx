import { FaRegStar } from "react-icons/fa";
import client1 from "../assets/client1.avif";
import client2 from "../assets/client2.avif";
import client3 from "../assets/client3.avif";
import client4 from "../assets/client4.avif";
import client5 from "../assets/client5.avif";
import clientImg1 from "../assets/clientImg1.png";
import clientImg2 from "../assets/clientImg2.avif";
import clientImg3 from "../assets/clientImg3.avif";
import clientImg4 from "../assets/clientImg4.avif";
import clientImg5 from "../assets/clientImg5.avif";
import clientImg6 from "../assets/clientImg6.avif";

import logo1 from "../assets/logo2.svg";
import logo2 from "../assets/logo1.svg";
import logo4 from "../assets/logo7.svg";
import logo6 from "../assets/logoImg.svg";
import FadeUpOnScroll from "../shared/FadeUpOnScroll";
const Testimonials = () => {

  const testimonials = [
    {
      quote:
        "Working with this team has been a game-changer. They took our scattered ideas and turned them into a cohesive brand that truly represents who we are.",
      name: "Tobias Green",

      company: "Founder, GreenSpark Innovations",
      image: clientImg1,
      logo: logo1,
    },
    {
      quote:
        "Finally, an agency that speaks our language! They understood our vision better than we did and brought it to life in ways we never imagined.",
      name: "Haris",
      title: "Silas Leighton",
      company: "Managing Director, VentureVista",
      image: clientImg2,
      logo: logo2,
    },
    {
      quote:
        "Looking to catch big breaks, and they absolutely blew me away. From strategy to execution, every detail was spot-on and exceeded our expectations.",
      name: "Orion Vance",

      company: "CEO, Lunar Lux Co.",
      image: clientImg3,
    },
    {
      quote:
        "Our online presence went from zero to hero in no time. The team made the complex simple and delivered results that speak for themselves.",
      name: "Callum Yates",

      company: "Co-Founder, Driftwood Media",
      image: clientImg4,
      logo: logo4,
    },
    {
      quote:
        "Our online presence went from zero to hero in no time. The team made the complex simple and delivered results that speak for themselves.",
      name: "Jasper Lowell",

      company: "CEO, CopperLeaf Enterprises",
      image: clientImg5,
    },
    {
      quote:
        "They thank us that few their most important clients. The attention to detail, creativity, and professionalism they bring to every project is truly remarkable.",
      name: "Jasper Lowell",

      company: "Brand Manager, Stellar Bloom Studio",
      image: clientImg6,
      logo: logo6,
    },
  ];

  const clientAvatars = [client1, client2, client3, client4, client5];

  return (
    <div
      id="reviews"
      className=" scroll-mt-36 max-w-7xl mx-auto mt-20 md:mt-46 p-6 bg-white"
    >
      {/* Header Section */}
      <FadeUpOnScroll delay={0.2}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-gray-200 flex items-center w-fit mx-auto pr-4 gap-2 rounded-full ">
              <div className="bg-black p-[10px] rounded-full text-white">
                <FaRegStar className="text-sm" />
              </div>
              <h4 className="text-sm font-medium">Client Stories</h4>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hear stories
            </h2>

            {/* Client Avatars */}
            <div className="flex -space-x-4">
              {clientAvatars.map((avatar, index) => (
                <div
                  key={index}
                  className="w-15 h-15 rounded-2xl border-l-6 border-white overflow-hidden"
                >
                  <img
                    src={avatar || "/placeholder.svg"}
                    alt={`Client ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <span className="text-4xl md:text-5xl font-bold text-gray-900">
              straight from
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold -mt-4 text-gray-900">
            the people we helped!
          </h2>
        </div>
      </FadeUpOnScroll>

      {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
      <FadeUpOnScroll key={index} delay={0.2}>

            <div  className="flex flex-col items-start">
              {/* Quote Box */}
              <div className="bg-[#eff1f6a4] rounded-3xl p-6 pb-10 h-full w-full relative">
                {/* Big Quote Mark on Left */}
                <div className="absolute top-4 left-4 text-6xl md:text-7xl text-orange-500 leading-none font-sans">
                  "
                </div>

                {/* Quote Text */}
                <p className=" font-medium leading-relaxed pl-12">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Client Info Below */}
              <div className="flex flex-col mt-6 w-full mb-4 ml-2 md:ml-0">
                <div className="flex items-center gap-2">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mb-2"
                  />
                  <div>
                    {testimonial.logo && (
                      <span>
                        <img
                          src={testimonial.logo}
                          alt="logo"
                          className="w-14 h-14 object-fitt bg-[#eff1f6a4] px-2 py-5 rounded-full"
                        />
                      </span>
                    )}
                  </div>
                </div>
                <h4 className="font-semibold text-lg text-gray-900">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-gray-600 capitalize ">
                  {testimonial.company}
                </p>
              </div>
            </div>

      </FadeUpOnScroll>
          ))}
        </div>

      {/* Video Testimonials */}
      <FadeUpOnScroll delay={0.2}>
        <div className="grid grid-cols- md:grid-cols-2 gap-3">
          {/* box1 */}
          <div className="bg-[#eff1f6bc] flex flex-col items-center justify-center p-3 rounded-3xl">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-3xl"
                src="https://www.youtube.com/embed/Ly1auHs_ofo?si=cVW61SjcTvXAGAn4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <h3 className="font-medium text-lg mt-2">Magnus Hawthorne</h3>
              <p className="capitalize text-center text-gray-700 text-sm pb-2">
                Owner, Bayleaf
              </p>
            </div>
          </div>
          {/* box 2 */}
          <div className="bg-[#eff1f6bf] flex flex-col items-center justify-center p-3 rounded-3xl">
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-3xl"
                src="https://www.youtube.com/embed/ay2e0VXtmfI?si=E1Q3STkmqj2t6hPs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <h3 className="font-medium text-lg mt-2">Thaddeus Montgomery</h3>
              <p className="capitalize text-center text-gray-700 text-sm pb-2">
                Owner, GoldGarden
              </p>
            </div>
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  );
};

export default Testimonials;
