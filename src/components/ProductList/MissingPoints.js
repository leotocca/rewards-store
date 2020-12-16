import React from "react";
import PropTypes from "prop-types";
import coin from "../../assets/svg/navbar/coin.svg";

const MissingPoints = ({ points }) => (
  <div className="absolute top-0 right-0 bg-gray-900 bg-opacity-50 flex items-center rounded-full py-2 px-4 mt-2 mr-2 z-10">
    <p className="text-white text-sm pt-1 mr-1">You need {points} </p>{" "}
    <img src={coin} alt="" className="h-4 w-4 mt-1" />
  </div>
);

MissingPoints.propTypes = {
  points: PropTypes.number,
};

export { MissingPoints };
