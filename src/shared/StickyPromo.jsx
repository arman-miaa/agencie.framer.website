import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import adImage from "../assets/adImg.avif";
import { IoIosArrowRoundForward } from "react-icons/io";

const StickyPromo = () => {
  const [showSmallBox, setShowSmallBox] = useState(false);
  const [showLargeAd, setShowLargeAd] = useState(false);

  useEffect(() => {
    const smallTimer = setTimeout(() => {
      setShowSmallBox(true);
    }, 1000); // 1 second delay for small box

    const largeTimer = setTimeout(() => {
      setShowLargeAd(true);
    }, 2000); // 2 seconds delay for large ad

    return () => {
      clearTimeout(smallTimer);
      clearTimeout(largeTimer);
    };
  }, []);

  const handleDismissLargeAd = () => {
    setShowLargeAd(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3">
      {/* Large Promo Box with animation */}
      {showLargeAd && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white rounded-xl p-4 pr-10 flex items-center gap-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-[0_0_30px_rgba(0,0,0,0.3)]"
        >
          {/* Close Button */}
          <button
            onClick={handleDismissLargeAd}
            className="absolute -top-3 -right-3 bg-white text-gray-700 rounded-full w-7 h-7 flex items-center justify-center shadow-md hover:bg-gray-100 transition duration-200"
            aria-label="Dismiss advertisement"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image */}
          <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden">
            <img
              src={adImage}
              alt="A new FREE Fun Agency Template"
              className="w-full h-full object-cover hover:scale-150 transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="flex-grow">
            <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-tight mb-1">
              A new{" "}
              <span className="text-orange-500 underline">
                <a
                  target="_blank"
                  href="https://www.framer.com/marketplace/templates/agenius/?via=zmdr1xm&dub_id=OIaHwLLyu0G9WUh0"
                >
                  FREE
                </a>
              </span>{" "}
              <br /> Fun Agency <br />
              Template For You
            </h3>
            <a
              href="https://www.framer.com/marketplace/templates/agenius/?via=zmdr1xm&dub_id=OIaHwLLyu0G9WUh0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-black flex items-center gap-1 transition-all duration-300 ease-in-out hover:translate-x-2"
            >
              REMIX NOW
              <IoIosArrowRoundForward className="text-3xl" />
            </a>
          </div>
        </motion.div>
      )}

      {/* Small Box (after 1 sec) */}
      {showSmallBox && (
        <motion.a
          href="https://www.framer.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-full shadow-md px-4 py-2 flex items-center gap-2 text-sm font-medium hover:bg-gray-100 transition duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0L0 12L12 24L24 12L12 0ZM12 4.14L19.86 12L12 19.86L4.14 12L12 4.14Z" />
          </svg>
          Made in Framer
        </motion.a>
      )}
    </div>
  );
};

export default StickyPromo;
