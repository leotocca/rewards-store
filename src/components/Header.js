import React from "react";
import bgheader from "../assets/images/header/bg.jpg";

export const Header = () => (
  <div
    className="w-full  h-64 flex justify-center items-end bg-cover bg-center select-none"
    style={{ backgroundImage: `url(${bgheader})` }}
  >
    <h1 className="w-5/6 font-semibold text-4xl text-white mb-5">
      Electronics
    </h1>
  </div>
);
