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
      {
        text: "Our team comes up with out-of-the-box ideas to make your brand stand out.",
        image: slide1,
      },
      {
        text: "We take care of generating leads while you focus on doing what you love—running your business!",
        image: slide2,
      },
    ];
      

  return (
    <section className="">
      {/* Custom Navigation Buttons */}
      <div className="flex justify-end gap-3 mb-6 mt-2">
        <button className="swiper-button-next-custom bg-main p-3 rounded-xl text-white text-2xl cursor-pointer ">
          <IoIosArrowBack />
        </button>
        <button className="swiper-button-next-custom bg-main p-3 rounded-xl text-white text-2xl cursor-pointer ">
          <IoIosArrowForward />
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={3.5}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={false}
        modules={[Navigation]}
        className="benefits-swiper"
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
