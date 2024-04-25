"use client";

import { IReview } from "@/shared/interfaces/review.interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import RewiewSlide from "@/components/partials/Reviews/RewiewSlide";

type ReviewSliderProps = {
  reviews: IReview[];
};

const ReviewSlider = ({ reviews }: ReviewSliderProps) => {
  console.log("reviews", reviews);
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper transform translate-y-[-4rem] cursor-grabbing"
    >
      {reviews &&
        reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <RewiewSlide review={review} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ReviewSlider;
