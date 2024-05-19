import { IReview } from "@/shared/interfaces/review.interface";
import Image, { ImageLoaderProps } from "next/image";

type ReviewSlideProps = {
  review: IReview;
};

const RewiewSlide = ({ review }: ReviewSlideProps) => {
  console.log(`https://sverdlovina-next.vercel.app/api${review.imageUrl}`);

  const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="flex flex-col justify-between items-center mb-20 gap-12 mx-9 mt-10">
      <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl p-6 flex-1">
        <p className="pointer-events-none text-xl lg:text-2xl">
          {review.review}
        </p>
      </div>
      <div className="flex gap-5 justify-start items-start mr-auto">
        <Image
          loader={imageLoader}
          src={review.imageUrl}
          alt="Фото профілю"
          width={70}
          height={70}
          className="rounded-full w-[70px] h-[70px] object-cover"
        />
        <div className="flex flex-col">
          <p className="font-bold">{review.name}</p>
          <p className="text-gray-300">{review.city}</p>
        </div>
      </div>
    </div>
  );
};

export default RewiewSlide;
