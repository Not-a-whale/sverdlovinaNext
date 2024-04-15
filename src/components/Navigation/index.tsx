"use client";

import Logo from "@/components/Navigation/Logo";
import Phone from "@/assets/images/Phone.svg";
import Image from "next/image";
import FlagSelect from "@/components/Navigation/FlagSelect";
import { useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // check if the window object is defined
  // if it is check the scroll position
  // if the scroll position is greater than 0
  // add the class to the navbar
  // else remove it
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  // also add a nice dark bottom shadow to the navbar
  return (
    <div
      className={`flex align-middle justify-between fixed top-0 left-0 w-full z-50 transition-all 
      ${
        isScrolled
          ? "bg-white bg-opacity-90 " +
            "shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-primary"
          : "bg-transparent shadow-none text-white bg-opacity-0"
      }`}
    >
      <Logo isScrolled={isScrolled} />
      <div className="grid gap-2 xl:gap-8 grid-cols-12 items-center">
        <nav className="md:col-span-9 lg:col-span-8 xl:col-span-7">
          <ul className="flex text-base xl:text-l font-bold">
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
