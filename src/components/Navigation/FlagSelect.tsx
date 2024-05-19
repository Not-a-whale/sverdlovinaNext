"use client";

import React, { startTransition } from "react";
import Image from "next/image";

import Ukraine from "@/assets/images/Ukraine.png";
import Russia from "@/assets/images/russia.png";
import { useParams, useRouter } from "next/navigation";
import { usePathname } from "@/navigation";

const countries = [
  { name: "Українська", code: "uk", flag: Ukraine },
  { name: "Російська", code: "ru", flag: Russia },
];

type FlagSelectProps = {
  isMobile?: boolean;
};

const FlagSelect = ({ isMobile }: FlagSelectProps) => {
  const params = useParams();
  const router = useRouter();
  const path = usePathname();

  const [selectedCountry, setSelectedCountry] = React.useState(
    countries.find((country) => country.code === params.locale) || countries[0],
  );
  const selectionClass = isMobile ? "flag-list-mobile" : "flag-list";

  const handleClick = () => {
    const list = document.getElementById(selectionClass) as HTMLUListElement;
    if (!list) return;
    list.classList.toggle("hidden");
  };

  const handleSelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    const list = document.getElementById(selectionClass) as HTMLUListElement;
    if (!list) return;
    list.classList.add("hidden");
    startTransition(() => {
      router.push(`/${country.code}${path}`);
    });
  };

  return (
    <div className="relative">
      <button className="flex items-center gap-2 mx-auto" onClick={handleClick}>
        <Image
          src={selectedCountry.flag}
          width={30}
          height={25}
          alt={selectedCountry.name}
        />
        <span>{selectedCountry.name}</span>
      </button>
      <ul
        id={selectionClass}
        className="absolute right-[50%] w-full lg:w-max transform translate-x-1/2 mt-2 bg-transparent shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hidden"
      >
        {countries.map((country) => (
          <li
            key={country.code}
            onClick={() => {
              handleSelect(country);
            }}
            className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-background hover:font-bold w-max`}
          >
            <Image
              src={country.flag}
              width={30}
              height={25}
              alt={country.name}
            />
            <span className="font-regular">{country.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlagSelect;
