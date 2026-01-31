import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import swiper1 from "../assets/caroussel_imgs/swiper1.jpeg";
import swiper2 from "../assets/caroussel_imgs/swiper2.jpeg";
import swiper3 from "../assets/caroussel_imgs/swiper3.jpeg";
import swiper4 from "../assets/caroussel_imgs/swiper4.jpeg";
import swiper5 from "../assets/caroussel_imgs/swiper5.jpeg";

const SwiperShow = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      direction="vertical"
      slidesPerView={2}
      centeredSlides
      spaceBetween={16}
      loop
      speed={3000}
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      className="h-full w-full px-5"
    >
      {[swiper1, swiper2, swiper3, swiper4, swiper5].map((img, index) => (
        <SwiperSlide
          key={index}
          className="flex aspect-square items-center justify-center"
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperShow;
