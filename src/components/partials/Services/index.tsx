import SectionHeading from "@/components/SectionHeading";

import pic1 from "@/assets/images/services_pics/drilling.svg";
import pic2 from "@/assets/images/services_pics/hydroelectric_drilling.svg";
import pic3 from "@/assets/images/services_pics/pillar_drilling.svg";
import pic4 from "@/assets/images/services_pics/hydroelectric_works.svg";
import pic5 from "@/assets/images/services_pics/finding.svg";
import pic6 from "@/assets/images/services_pics/water_low.svg";
import pic7 from "@/assets/images/services_pics/electricchemprotection.svg";
import pic8 from "@/assets/images/services_pics/tampones.svg";
import Image from "next/image";

import styles from "./index.module.scss";

const Services = () => {
  const services = [
    {
      title: "Буріння свердловин",
      img: pic1,
    },
    {
      title: "БУРІННЯ ГІДРОЕКОЛОГІЧНИХ СВЕРДЛОВИН НА ВОДУ",
      img: pic2,
    },
    {
      title: "БУРІННЯ СВЕРДЛОВИН ПІД БУРОНАБИВНІ ПАЛІ",
      img: pic3,
    },
    {
      title: "ГІДРОЕКОЛОГІЧНІ РОБОТИ",
      img: pic4,
    },
    {
      title: "ІНЖЕНЕРНО-ГЕОЕКОЛОГІЧНІ \n" + "ТА ГЕОДЕЗИЧНІ \n" + "ВИШУКУВАННЯ",
      img: pic5,
    },
    {
      title: "БУДІВЕЛЬНЕ ВОДОЗНИЖЕННЯ",
      img: pic6,
    },
    {
      title: "ЕЛЕКТРОХІМЗАХИСТ",
      img: pic7,
    },
    {
      title: "ТАМПОНУВАННЯ СВЕРДЛОВИНИ",
      img: pic8,
    },
  ];
  return (
    <>
      <SectionHeading title={"Види послуг"} />;
      {/*4 column css grid that would collapse into two column grid when the viewport is tablet*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:grid-cols-4 md:gap-20 mx-[15%]">
        {services.map((service, index) => {
          if (index === 4) {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <div
                  className={`flex w-[10rem]
                h-[10rem] flex-col items-center justify-center
                text-center rounded-lg  ${styles.__image}`}
                >
                  <div className={`w-[60px] h-[60px] relative`}>
                    <Image
                      className="absolute top-0 left-1/4 transform -translate-x-3/4 -translate-y-[85%] scale-[2]"
                      src={service.img}
                      alt={service.title}
                    />
                  </div>
                </div>
                <p className="text-primary font-bold text-lg mt-5">
                  {service.title}
                </p>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <div
                className={`flex flex-col items-center justify-center
               text-center
                w-[10rem]
                h-[10rem]
                rounded-lg
                ${styles.__image}
                `}
              >
                <Image src={service.img} alt={service.title} />
              </div>
              <p className="text-primary font-bold text-lg mt-5 uppercase">
                {service.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
