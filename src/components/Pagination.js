import React from "react";
import PropTypes from "prop-types";
import leftArrow from "../assets/svg/pagination/chevron-left.svg";
import rightArrow from "../assets/svg/pagination/chevron-right.svg";

const Pagination = ({ handleChange, currentPage }) => {
  return (
    <section className="w-full flex justify-center mt-10">
      <div className="flex">
        <div
          className="flex justify-center items-center border border-brand px-4 py-3 hover:bg-gray-200 cursor-pointer select-none transition-all duration-300"
          onClick={() => handleChange("prev")}
        >
          <img src={leftArrow} alt="" />
        </div>
        <div
          className={`flex justify-center items-center border border-brand px-5 py-3 ${
            currentPage === 1
              ? "bg-brand text-white"
              : "text-brand hover:bg-gray-200"
          } cursor-pointer select-none transition-all duration-300`}
          onClick={() => handleChange(1)}
        >
          1
        </div>
        <div
          className={`flex justify-center items-center border border-brand px-5 py-3 ${
            currentPage === 2
              ? "bg-brand text-white"
              : "text-brand hover:bg-gray-200"
          }  cursor-pointer select-none transition-all duration-300`}
          onClick={() => handleChange(2)}
        >
          2
        </div>
        <div
          className="flex justify-center items-center border border-brand px-4 py-3  hover:bg-gray-200 cursor-pointer select-none transition-all duration-300"
          onClick={() => handleChange("next")}
        >
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </section>
  );
};

Pagination.propTypes = {
  handleChange: PropTypes.func,
  currentPage: PropTypes.number,
};

export { Pagination };
