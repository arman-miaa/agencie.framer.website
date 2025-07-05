import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const HiddenSlide = ({ images }) => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-[480px] object-cover rounded-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for swiper navigation and pagination */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 30px;
          height: 30px;
          background-color: #d1d5db;
          border-radius: 50%;
          color: white;
        }

        /* arrow icon size adjust */
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px; /* ছোট icon */
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background-color: #6b7280; /* Tailwind gray-500 */
          opacity: 1;
          width: 10px;
          height: 10px;
        }

        .swiper-pagination-bullet-active {
          background-color: #4b5563;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </div>
  );
};

export default HiddenSlide;
