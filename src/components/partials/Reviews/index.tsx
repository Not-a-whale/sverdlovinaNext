import SectionHeading from "@/components/SectionHeading";
import { IReview } from "@/shared/interfaces/review.interface";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const ReviewSlider = dynamic(
  () => import("@/components/partials/Reviews/ReviewSlider"),
  { ssr: false },
);

const getData = async (): Promise<IReview[] | undefined> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`, {
      cache: "no-store",
    });
    return (await res.json()) as IReview[];
  } catch (e) {
    console.log(e);
  }
};

const Reviews = async () => {
  const t = useTranslations("Index");
  const data = await getData();

  if (!data) return null;
  return (
    <>
      <SectionHeading title={t("Відгуки")} />
      <ReviewSlider reviews={data} />
    </>
  );
};

export default Reviews;
