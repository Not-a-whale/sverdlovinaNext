import { IReview } from "@/shared/interfaces/review.interface";
import Image from "next/image";

type ReviewSlideProps = {
  review: IReview;
};

const RewiewSlide = ({ review }: ReviewSlideProps) => {
  console.log(`https://next-js-task-1vzh.vercel.app/api${review.imageUrl}`);

  return (
    <div className="flex flex-col justify-between items-start mb-12 gap-12 mx-12 mt-10">
      <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl p-6">
        <p className="pointer-events-none">{review.review}</p>
      </div>
      <div className="flex gap-5 justify-between items-start">
        <Image
          src={`https://next-js-task-1vzh.vercel.app/api${review.imageUrl}`}
          alt="Фото профілю"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p>{review.name}</p>
          <p className="text-gray-300">{review.city}</p>
        </div>
      </div>
    </div>
  );
};

export default RewiewSlide;
