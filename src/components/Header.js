import React from "react";
import PropTypes from "prop-types";
import bgheader from "../assets/images/header/bg.jpg";

const Header = ({ title }) => (
  <div
    className="w-full h-40 sm:h-64 flex justify-center items-end bg-cover bg-center select-none"
    style={{ backgroundImage: `url(${bgheader})` }}
  >
    <h1 className="w-5/6 font-semibold text-4xl text-white mb-5">{title}</h1>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

export { Header };
