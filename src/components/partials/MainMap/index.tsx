"use client";

import ReviewForm from "@/components/partials/MainMap/ReviewForm";
import Map from "@/components/Map";

const MainMap = () => {
  return (
    <div className="h-[80vh] lg:h-[35vh] w-full mt-36 md:mt-48 lg:mt-56 xl:mt-64 2xl:mt-80 bg-red-200 relative">
      <ReviewForm />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#85C4FB] to-[#fff] z-10 opacity-50"></div>
      <Map />
    </div>
  );
};

export default MainMap;
