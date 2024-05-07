"use client";

import { useState } from "react";
import { Desktop } from "@/components/Navigation/Desktop";
import { Mobile } from "@/components/Navigation/Mobile";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // check if the window object is defined
  // if it is check the scroll position
  // if the scroll position is greater than 0
  // add the class to the navbar
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
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
      className={`flex align-middle items-center lg:items-stretch justify-between fixed top-0 left-0 w-full z-50 transition-all 
      ${
        isScrolled
          ? "bg-white bg-opacity-90 " +
            "shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-primary"
          : "bg-transparent shadow-none text-white bg-opacity-0"
      }`}
    >
      <Desktop isScrolled={isScrolled} />
      <Mobile isScrolled={isScrolled} />
    </div>
  );
};

export default Navigation;
