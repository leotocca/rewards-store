import React from "react";
import bgheader from "../assets/images/header/bg.jpg";

export const Header = () => (
  <div
    className="w-full relative h-64"
    style={{ backgroundImage: `url(${bgheader})` }}
  >
    <h1 className="absolute bottom-0 left-0 mb-4 ml-8 font-semibold text-4xl text-white">
      Electronics
    </h1>
  </div>
);
