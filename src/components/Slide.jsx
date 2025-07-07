import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SlideCards from "../shared/SlideCards";
import slide1 from "../assets/slide1.avif";
import slide2 from "../assets/slide2.avif";
import slide3 from "../assets/slide3.avif";
import slide4 from "../assets/slide4.avif";
import slide5 from "../assets/slide5.avif";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slide = () => {
  const swiperRef = useRef(null);
  const [isMobileOneCard, setIsMobileOneCard] = useState(false);

  const benefits = [
    {
      text: "Our team comes up with out-of-the-box ideas to make your brand stand out.",
      image: slide1,
    },
    {
      text: "We take care of generating leads while you focus on doing what you love—running your business!",
      image: slide2,
    },
    {
      text: "Your brand stays visible 24/7 with our automated marketing strategies.",
      image: slide3,
    },
    {
      text: "Every solution is tailored to fit your unique business needs—no cookie-cutter strategies here!",
      image: slide4,
    },
    {
      text: "Get big agency results without breaking the bank.",
      image: slide5,
    },
  ];

  useEffect(() => {
    const checkWidth = () => {
      const w = window.innerWidth;
      setIsMobileOneCard(w < 857); // 857px এর নিচে 1টা slide
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section className="relative">
      {/* ✅ Middle arrows for 1 slide on small screen */}
      {isMobileOneCard && (
        <div className="absolute z-10 w-full top-1/2 -translate-y-1/2 flex justify-between px-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-main p-3 rounded-3xl text-white text-xl shadow"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-main p-3 rounded-3xl text-white text-xl shadow"
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}

      {/* ✅ Desktop top-right arrows */}
      {!isMobileOneCard && (
        <div className="flex justify-end gap-3 mb-6 mt-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-main p-3 rounded-xl text-white text-2xl"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-main p-3 rounded-xl text-white text-2xl"
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}

      {/* ✅ Swiper Slider */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        modules={[Navigation]}
        className="benefits-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          857: {
            slidesPerView: 2.5,
          },
          1124: {
            slidesPerView: 3.5,
          },
        }}
      >
        {benefits.map((benefit, index) => (
          <SwiperSlide key={index} className="h-auto">
            <SlideCards text={benefit.text} image={benefit.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slide;
