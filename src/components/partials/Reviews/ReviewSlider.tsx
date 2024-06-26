"use client";

import { IReview } from "@/shared/interfaces/review.interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import RewiewSlide from "@/components/partials/Reviews/RewiewSlide";
import { useState } from "react";
import { backupReviews } from "@/shared/consts/backup-reviews";

type ReviewSliderProps = {
  reviews: IReview[];
};

const getNumberOfSlides = () => {
  if (window === undefined) return;
  // if the width is less than 1536px then slidesPerView will be 3
  // if the width is less than 1024px then slidesPerView will be 2
  // if the width is less than 640px then slidesPerView will be 1
  if (window.innerWidth > 1536) {
    return 4;
  } else if (window.innerWidth > 1024 && window.innerWidth < 1536) {
    return 3;
  } else if (window.innerWidth > 640 && window.innerWidth < 1024) {
    return 2;
  } else {
    return 1;
  }
};

const ReviewSlider = ({ reviews }: ReviewSliderProps) => {
  const backedupReviews =
    reviews && reviews.length > 0
      ? reviews.map((review) => ({
          ...review,
          imageUrl: `${process.env.NEXT_PUBLIC_URL}/api${review.imageUrl}`,
        }))
      : backupReviews;
  const [slidesPerView, setSlidesPerView] = useState(getNumberOfSlides());

  if (window === undefined) return;

  if (window && window.innerWidth < 1536) {
    window.addEventListener("resize", () => {
      setSlidesPerView(getNumberOfSlides());
    });
  }

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper transform translate-y-[-4rem] cursor-grabbing"
    >
      {backedupReviews &&
        backedupReviews.map((review, index) => (
          <SwiperSlide key={index} className="lg:max-w-[25%] !h-auto !flex">
            <RewiewSlide
              review={{
                ...review,
              }}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ReviewSlider;
