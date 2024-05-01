import styles from "./index.module.scss";

import Image from "next/image";

import Image1 from "@/assets/images/side_slider/image_1.jpeg";
import Image2 from "@/assets/images/side_slider/image_2.jpeg";
import Image3 from "@/assets/images/side_slider/image_3.jpeg";

const SideSlider = () => {
  return (
    <div
      className={`${styles.about__composition} w-full sm:mx-auto sm:mt-4 lg:m-0 md:w-3/4 lg:w-[45%] 2xl:w-[30%]`}
    >
      <Image
        className={
          styles.about__composition__photo +
          " " +
          styles.about__composition__photo__1
        }
        src={Image1}
        alt="Pouring water slider image"
      />
      <Image
        className={
          styles.about__composition__photo +
          " " +
          styles.about__composition__photo__2
        }
        src={Image2}
        alt="Water drop slider image"
      />
      <Image
        className={
          styles.about__composition__photo +
          " " +
          styles.about__composition__photo__3
        }
        src={Image3}
        alt="Water splash slider image"
      />
    </div>
  );
};

export default SideSlider;
