import { useEffect, useRef, useState } from "react";
import VideoModal from "./VideoModal";
import videoSrc from "../assets/Agencie - Digital Marketing and Creative Agency Website.mp4";
import videoImg1 from "../assets/videoImg1.avif";
import videoImg2 from "../assets/videoImg2.avif";
import { IoIosPlay } from "react-icons/io";

const Section = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVideoPinned, setIsVideoPinned] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showButton, setShowButton] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          setIsVideoPinned(true);
        } else {
          setIsVideoPinned(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = videoRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative max-w-[1820px] mx-auto px-8 2xl:px-0 pt-16 flex flex-col lg:flex-row gap-4 transition-all duration-500">
      {/* Left Box */}
      <div
        className={`relative hidden lg:flex rounded-3xl cursor-pointer overflow-hidden flex-1 transition-all duration-700 ${
          isVideoPinned
            ? "opacity-0 -translate-x-10 pointer-events-none"
            : "lg:w-1/3 opacity-100 translate-x-0"
        }`}
        onClick={() => setShowModal(true)}
      >
        {/* Text Box */}
        <div className="absolute bottom-5 left-3 right-3 bg-white bg-opacity-90 text-dark text-[22px] font-medium  px-4 py-10 rounded-xl shadow-md z-10">
          People first, profits second--that's our{" "}
          <span className="text-main">mantra</span>.
        </div>
        <img
          src={videoImg1}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle Video */}
      <div
        ref={videoRef}
        className={`relative rounded-[60px] md:rounded-3xl px-6 lg:px-0  overflow-hidden h-[75vh] transition-all duration-700 ${
          isVideoPinned ? "w-full h-[85vh]" : "lg:w-1/3"
        }`}
        onClick={() => setShowModal(true)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />

        {/* Mouse-follow Button */}
        { showButton && (
          <div
            className="absolute z-20 pointer-events-none transition-all duration-200"
            style={{
              top: mousePos.y - 30,
              left: mousePos.x - 80,
            }}
          >
            <div className="bg-white/40 border-2 border-white text-black rounded-full p-1 pr-3 flex items-center gap-2 shadow-lg">
              <IoIosPlay className="bg-black  text-main rounded-full w-8 h-8 p-1" />
              <span className="font-medium  text-gray-800">Play Showreel</span>
            </div>
          </div>
        )}
      </div>

      {/* Right Box */}
      <div
        className={`rounded-3xl hidden lg:flex cursor-pointer overflow-hidden flex-1 transition-all duration-700 ${
          isVideoPinned
            ? "opacity-0 translate-x-10 pointer-events-none"
            : "lg:w-1/3 opacity-100 translate-x-0"
        }`}
        onClick={() => setShowModal(true)}
      >
        <img
          src={videoImg2}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>

      {showModal && <VideoModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Section;
