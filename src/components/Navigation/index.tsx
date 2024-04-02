import Logo from "@/components/Navigation/Logo";
import Phone from "@/assets/images/Phone.svg";
import Image from "next/image";
import FlagSelect from "@/components/Navigation/FlagSelect";

const Navigation = () => {
  return (
    <div className="flex align-middle justify-between fixed top-0 left-0 w-full z-20">
      <Logo />
      <div className="grid gap-2 xl:gap-8 grid-cols-12 items-center">
        <nav className="md:col-span-9 lg:col-span-8 xl:col-span-7">
          <ul className="flex text-white text-base xl:text-l font-bold">
            <li className="md:px-2 lg:px-4 xl:px-10 flex items-center">
              <a href="/about">Про компанію</a>
            </li>
            <li className="md:px-2 lg:px-4 xl:px-10 flex items-center">
              <a href="/services">Послуги</a>
            </li>
            <li className="md:px-2 lg:px-4 xl:px-10 flex items-center">
              <a href="/gallery">Фотогалерея</a>
            </li>
            <li className="md:px-2 lg:px-4 xl:px-10 flex items-center">
              <a href="/contacts">Контакти</a>
            </li>
          </ul>
        </nav>
        <div
          className="md:col-span-2
         border-x-[255, 255, 255, .2]
         border-y-0
         border-2
         h-full
         w-full
         text-white
         mx-auto
         px-1
         lg:col-span-3
         flex justify-between
         items-center
         min-w-1/2
         gap-2"
        >
          <div
            className="flex items-center justify-between gap-2
          mx-auto px-1"
          >
            <Image src={Phone} alt="Phone" />
            <a href="tel:+380938054922">+380938054922</a>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-2">
          <FlagSelect />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
