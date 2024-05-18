import SectionHeading from "@/components/SectionHeading";
import { IReview } from "@/shared/interfaces/review.interface";
import ReviewSlider from "@/components/partials/Reviews/ReviewSlider";
import { useTranslations } from "next-intl";

const getData = async (): Promise<IReview[] | undefined> => {
  console.log(
    "process.env.NEXT_PUBLIC_URL",
    `${process.env.NEXT_PUBLIC_URL}api`,
  );

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
