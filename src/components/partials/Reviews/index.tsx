"use client";

import SectionHeading from "@/components/SectionHeading";
import { IReview } from "@/shared/interfaces/review.interface";
import ReviewSlider from "@/components/partials/Reviews/ReviewSlider";
import { useEffect, useState } from "react";

const getData = async (): Promise<IReview[] | undefined> => {
  try {
    const res = await fetch("/api", { cache: "no-store" });
    return (await res.json()) as IReview[];
  } catch (e) {
    console.log(e);
  }
};

const Reviews = async () => {
  const [data, setData] = useState<IReview[]>([]);
  useEffect(() => {
    getData()
      .then((data) => {
        console.log("data", data);
        if (data) {
          setData(data);
        } else {
          setData([]);
        }
      })
      .catch((e) => console.log(e));
  });

  return (
    <>
      <SectionHeading title={"Відгуки"} />
      <ReviewSlider reviews={data} />
    </>
  );
};

export default Reviews;
