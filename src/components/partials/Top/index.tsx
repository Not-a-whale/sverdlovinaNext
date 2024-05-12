import MainForm from "@/components/partials/Top/Form";
import React from "react";

type TopProps = {
  children?: React.ReactNode;
  backgroundImg?: string;
  heading: string;
  description: string | React.ReactNode;
};

const Top = ({ children, heading, backgroundImg, description }: TopProps) => {
  const handleFormSubmit = (data: {
    name: string;
    phone: string;
    email: string;
  }) => {
    console.log(data);
  };

  return (
    <div
      style={{
        ...(backgroundImg
          ? {
              backgroundImage: `url("/background_images/background-${backgroundImg}.jpeg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { backgroundColor: "transparent" }),
      }}
    >
      <div
        className="flex
        gap-6
        lg:gap-0
        flex-col
        lg:flex-row
        mx-auto
        items-center
        justify-between md:w-[75%] lg:w-[90%] left-[5%] right-[5%]
        z-20 transform
        py-24
        lg:min-h-[80vh]
        "
      >
        <div className="max-w-[90%] lg:max-w-[45%] mx-auto">
          <h1
            className="font-['Futura']
            text-[2.5rem]
            lg:text-left
            text-center
            mb-4
            lg:mb-0
           md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] leading-[2.4rem] xl:leading-[3rem] 2xl:leading-[4rem] font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
          >
            {heading}
          </h1>
          <p
            className="md:my-4 lg:my-8
            text-center text-white text-[1.2rem] md:text-[1.5rem]
            lg:text-left"
          >
            {description}
          </p>
        </div>
        <div className="flex flex-col justify-center w-[90%] lg:w-[45%] mx-auto ">
          <MainForm />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Top;
