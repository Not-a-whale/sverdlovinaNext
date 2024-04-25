import SectionHeading from "@/components/SectionHeading";
import { IReview } from "@/shared/interfaces/review.interface";
import ReviewSlider from "@/components/partials/Reviews/ReviewSlider";

const getData = async (): Promise<IReview[] | undefined> => {
  try {
    const res = await fetch("http://localhost:3000/api", { cache: "no-store" });
    return (await res.json()) as IReview[];
  } catch (e) {
    console.log(e);
  }
};

const Reviews = async () => {
  const data = await getData();

  if (!data) return null;
  return (
    <>
      <SectionHeading title={"Відгуки"} />
      <ReviewSlider reviews={data} />
    </>
  );
};

export default Reviews;
