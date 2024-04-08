"use client";

import React from "react";
import UkraineFlag from "@/assets/images/Ukraine.png";
import RussiaFlag from "@/assets/images/russia.png";

const FlagSelect = () => {
  const countries = [
    { name: "Українська", code: "UA", flag: UkraineFlag },
    { name: "Російська", code: "RU", flag: RussiaFlag },
  ];

  return <div className="card flex justify-content-center"></div>;
};

export default FlagSelect;
