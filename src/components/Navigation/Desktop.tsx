"use client";

import Logo from "@/components/shared/logo";
import FlagSelect from "@/components/Navigation/FlagSelect";
import { useTranslations } from "next-intl";
import { PhoneLink } from "@/components/shared/phone-link";
import { Link } from "@/navigation";

type MobileProps = {
  isScrolled: boolean;
};

export const Desktop = ({ isScrolled }: MobileProps) => {
  const t = useTranslations("Index");
  return (
    <>
      <Logo isScrolled={isScrolled} />
      <div className="hidden lg:flex items-center 2xl:w-[50%] xl:w-[60%] lg:w-[70%] md:w-[80%]">
        <nav className="flex-[60%]">
          <ul className="flex text-base xl:text-l font-bold w-full justify-between">
            <li className="md:px-3 lg:px-7 xl:px-8 2xl:px-10 flex items-center">
              <Link href="/about_us">{t("Про_компанію")}</Link>
            </li>
            <li className="md:px-3 lg:px-7 xl:px-8 2xl:px-10 flex items-center">
              <Link href="/services">{t("Послуги")}</Link>
            </li>
            <li className="md:px-3 lg:px-7 xl:px-8 2xl:px-10 flex items-center">
              <Link href="/gallery">{t("Фотогалерея")}</Link>
            </li>
            <li className="md:px-3 lg:px-7 xl:px-8 2xl:px-10 flex items-center">
              <Link href="/contacts">{t("Контакти")}</Link>
            </li>
          </ul>
        </nav>
        <div
          className="
         border-x-[255, 255, 255, .2]
         border-y-0
         border-2
         h-full
         w-full
         mx-auto
         px-1
         flex justify-between
         items-center
         min-w-1/2
         gap-2
         flex-[20%]"
        >
          <div
            className="flex items-center justify-between gap-2
          mx-auto px-1"
          >
            <PhoneLink />
          </div>
        </div>
        <div className="flex-[20%]">
          <FlagSelect />
        </div>
      </div>
    </>
  );
};
