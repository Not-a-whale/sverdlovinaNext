"use client";

import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import UkraineFlag from "@/assets/images/Ukraine.png";
import RussiaFlag from "@/assets/images/russia.png";
import Image from "next/image";

const FlagSelect = () => {
  const countries = [
    { name: "Українська", code: "UA", flag: UkraineFlag },
    { name: "Російська", code: "RU", flag: RussiaFlag },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex items-center mr-2">
          <Image
            src={option.flag}
            alt={"ukraine flag"}
            width={30}
            height={20}
          />
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center mx-2">
        <Image
          alt={option.name}
          src={option.flag["src"]}
          width={30}
          height={20}
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ marginTop: "15px", marginBottom: "5px" }}
        />
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.value)}
        options={countries}
        optionLabel="name"
        valueTemplate={selectedCountryTemplate}
        itemTemplate={countryOptionTemplate}
        className="border-0 outline-0 hover:border-0 shadow-none"
      />
    </div>
  );
};

export default FlagSelect;
