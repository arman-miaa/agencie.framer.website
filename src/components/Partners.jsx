
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";
import logo8 from "../assets/logo8.svg";
import logo9 from "../assets/logo9.svg";
import logo10 from "../assets/logo10.svg";
import HeadingMotionLine from "../shared/HeadingMotionLine";
import { fadeIn } from "../animations/animationVariants";
import { motion } from "framer-motion";

const Partners = () => {
  const logos = [
    { id: 1, src: logo1, alt: "Logo 1" },
    { id: 2, src: logo2, alt: "Logo 2" },
    { id: 3, src: logo3, alt: "Logo 3" },
    { id: 4, src: logo4, alt: "Logo 4" },
    { id: 5, src: logo5, alt: "Logo 5" },
    { id: 6, src: logo6, alt: "Logo 6" },
    { id: 7, src: logo7, alt: "Logo 7" },
    { id: 8, src: logo8, alt: "Logo 8" },
    { id: 9, src: logo9, alt: "Logo 9" },
    { id: 10, src: logo10, alt: "Logo 10" },
  ];

  return (
    <section className="mt-12  md:mt-[150px]">
      <div className="container mx-auto px-4 md:px-20 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-[54px] font-semibold text-gray-900 md:leading-13 mb-15">
          <HeadingMotionLine index={0}>We don't just work</HeadingMotionLine>
          <br />
          <HeadingMotionLine index={1}>
            <br /> together—we
            <span className="text-orange-500"> grow</span> together.
          </HeadingMotionLine>
        </h2>

        {/* Logos Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-3xl px-8 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 }, // ছোট স্কেলে ও fade করা
            visible: {
              opacity: 1,
              scale: 1, // আস্তে আস্তে বড় হবে
              transition: {
                duration: 1.2,
                ease: "easeOut",
              },
            },
          }}
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center p-4 bg-[#eff1f6a4] rounded-2xl md:h-28 w-full"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="md:max-w-[70%] md:max-h-[70%] w-12 h-12 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
