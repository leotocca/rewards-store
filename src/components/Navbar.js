import React from "react";
import logo from "../assets/svg/navbar/logo.svg";
import coin from "../assets/svg/navbar/coin.svg";

export const Navbar = () => {
  return (
    <div className="w-full flex py-3">
      <div className="flex-grow">
        <img src={logo} alt="" className="ml-8 h-6 w-6" />
      </div>
      <div className="flex mr-8 items-center">
        <p className="text-gray-700 text-md mr-2 font-semibold">Julia Coi</p>
        <div className="bg-gray-300 flex items-center rounded-full py-1 px-3 select-none hover:shadow-md">
          <p className="text-sm text-gray-700 mr-2">6000</p>
          <img src={coin} alt="" className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
};
