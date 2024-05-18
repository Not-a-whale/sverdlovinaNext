"use client";

import Logo from "@/components/shared/Logo";
import { useTranslations } from "next-intl";

const Ribbon = () => {
  const t = useTranslations("Index");

  return (
    <div
      className="
                  mt-36 md:mt-48 lg:mt-56 xl:mt-64 2xl:mt-72
                  w-full
                  lg:h-[12.5rem]
                  h-max
                  bg-gradient-to-tr
                  from-[#138BF5]
                  to-[#78C0FF]
                  flex
                  items-center
                  justify-between
                  px-[7.5%]
                  py-4
  "
    >
      <div className="hidden lg:block">
        <Logo isLogoBg={false} isScrolled={true} isEnlarged={true} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-2 items-center justify-between">
        <div className="flex flex-col w-fit">
          <h2
            className="text-white uppercase text-2xl font-bold mb-4
            lg:text-left
            text-center"
          >
            {t("ВИНИКЛИ ЗАПИТАННЯ")}
          </h2>
          <p
            className="text-white text-xl
            lg:text-left
            text-center"
          >
            {t("consultation")}
          </p>
        </div>
        <button
          onClick={() => {
            // @ts-ignore
            return document.getElementById("main_modal").showModal();
          }}
          className="btn bg-white text-background mt-4 lg:m-0 w-full md:w-1/2 max-w-xs xl:max-w-[90%] text-lg"
        >
          {t("Надіслати заявку")}
        </button>
      </div>
    </div>
  );
};

export default Ribbon;
