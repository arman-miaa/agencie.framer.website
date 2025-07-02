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
        text: "We're here to redefine your business possibilities.",
        image: slide5,
      },
      {
        text: "Advanced analytics to track your growth and success metrics.",
        image: slide1,
      },
      {
        text: "24/7 customer support to help you whenever you need assistance.",
        image: slide2,
      },
    ];
      

  return (
    <section className="px-4 md:px-16 py-8">
      {/* Custom Navigation Buttons */}
      <div className="flex justify-end gap-3 mb-6">
        <button className="swiper-button-prev-custom btn btn-sm btn-outline btn-circle hover:btn-primary">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="swiper-button-next-custom btn btn-sm btn-outline btn-circle hover:btn-primary">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={3.5} // ✅ Show 3 full + 1 half slide always
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={false} // ❌ No dots
        modules={[Navigation]}
        className="benefits-swiper"
      >
        {benefits.map((benefit, index) => (
          <SwiperSlide key={index}>
            <SlideCards text={benefit.text} image={benefit.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slide;
