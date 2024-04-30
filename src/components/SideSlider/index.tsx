"use client";

// import Swiper core and required modules
import { A11y, Autoplay, EffectCards } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Image1 from "@/assets/images/side_slider/image_1.jpeg";
import Image2 from "@/assets/images/side_slider/image_2.jpeg";
import Image3 from "@/assets/images/side_slider/image_3.jpeg";

// import Swiper core and required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const SideSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCards, Autoplay, A11y]}
      effect={"cards"}
      grabCursor={true}
      className="lg:min-w-[40%] xl:min-w-[40%] 2xl:min-w-[800px] w-max h-[70vh] lg:h-[75vh] xl:h-[80vh] 2xl:h-[90vh]"
    >
      <SwiperSlide>
        <Image
          className="block w-[100%] h-[100%] object-cover object-center rounded-lg"
          src={Image3}
          alt="Pouring water slider image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="block w-[100%] h-[100%]] object-cover object-center rounded-lg"
          src={Image1}
          alt="Water drop slider image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="block w-[100%] h-[100%] object-cover object-center rounded-lg"
          src={Image2}
          alt="Water splash slider image"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SideSlider;
