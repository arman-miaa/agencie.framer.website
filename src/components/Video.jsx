import { useEffect, useRef, useState } from "react";
import VideoModal from "./VideoModal";
import videoSrc from "../assets/Agencie - Digital Marketing and Creative Agency Website.mp4";

const Section = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVideoPinned, setIsVideoPinned] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 100) {
          setIsVideoPinned(true);
        } else {
          setIsVideoPinned(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-4 transition-all duration-500">
      {/* Left Box */}
      <div
        className={`rounded-3xl overflow-hidden flex-1 transition-all duration-700 ${
          isVideoPinned
            ? "opacity-0 -translate-x-10 pointer-events-none"
            : "lg:w-1/3 opacity-100 translate-x-0"
        }`}
        onClick={() => setShowModal(true)}
      >
        <img
          src="https://i.ibb.co/3yYKZdB/box1.jpg"
          alt="box1"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle Video */}
      <div
        ref={videoRef}
        className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
          isVideoPinned ? "w-full" : "lg:w-1/3"
        }`}
        onClick={() => setShowModal(true)}
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        {!isVideoPinned && (
          <button className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black/40">
            ▶ Play Showreel
          </button>
        )}
      </div>

      {/* Right Box */}
      <div
        className={`rounded-3xl overflow-hidden flex-1 transition-all duration-700 ${
          isVideoPinned
            ? "opacity-0 translate-x-10 pointer-events-none"
            : "lg:w-1/3 opacity-100 translate-x-0"
        }`}
        onClick={() => setShowModal(true)}
      >
        <img
          src="https://i.ibb.co/0JvXyd4/box3.jpg"
          alt="box3"
          className="w-full h-full object-cover"
        />
      </div>

      {showModal && <VideoModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Section;
