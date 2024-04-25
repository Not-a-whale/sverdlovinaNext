"use client";

import React, { startTransition } from "react";
import Image from "next/image";

import Ukraine from "@/assets/images/Ukraine.png";
import Russia from "@/assets/images/russia.png";
import { useRouter } from "next/navigation";

const countries = [
  { name: "Українська", code: "uk", flag: Ukraine },
  { name: "Російська", code: "ru", flag: Russia },
];

const FlagSelect = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);

  const router = useRouter();

  const handleClick = () => {
    const list = document.getElementById("flag-list") as HTMLUListElement;
    if (!list) return;
    list.classList.toggle("hidden");
  };

  const handleSelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    const list = document.getElementById("flag-list") as HTMLUListElement;
    if (!list) return;
    list.classList.add("hidden");
    startTransition(() => {
      router.replace(`/${country.code}`);
    });
  };

  return (
    <div className="relative">
      <button className="flex items-center gap-2" onClick={handleClick}>
        <Image
          src={selectedCountry.flag}
          width={30}
          height={25}
          alt={selectedCountry.name}
        />
        <span>{selectedCountry.name}</span>
      </button>
      <ul
        id="flag-list"
        className="absolute top-8 left-[-0.5rem] bg-transparent shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hidden"
      >
        {countries.map((country) => (
          <li
            key={country.code}
            onClick={() => {
              handleSelect(country);
            }}
            className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-background hover:font-bold`}
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
