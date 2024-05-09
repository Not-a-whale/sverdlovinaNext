"use client";

// import Swiper core and required modules
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Image1 from "@/assets/images/slider/slider-image-1.jpeg";
import Image2 from "@/assets/images/slider/slider-image-2.jpeg";
import Image3 from "@/assets/images/slider/slider-image-3.jpeg";

// import Swiper core and required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const TopSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ type: "bullets", clickable: true }}
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
      className="h-full w-full"
    >
      <SwiperSlide>
        <Image
          className="block w-full h-full object-cover object-center"
          src={Image3}
          alt="Pouring water slider image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="block w-full h-full object-cover object-center"
          src={Image1}
          alt="Water drop slider image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="block w-full h-full object-cover object-center"
          src={Image2}
          alt="Water splash slider image"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default TopSlider;
