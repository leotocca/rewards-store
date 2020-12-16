import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setActiveFilterAction } from "../../actions/filters";
import { SearchBar } from "./SearchBar";

const Filters = ({ pageQuantity, productsAmount }) => {
  const [activeFilter, setActiveFilter] = useState("most-recent");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveFilterAction(activeFilter));
  }, [activeFilter, dispatch]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 flex border-b flex-wrap border-gray-300 mb-4 pb-4">
        <div className="flex items-center text-center lg:text-left lg:pr-8 py-2 order-2 lg:order-1">
          {pageQuantity === 1 && (
            <p className="text-gray-800 text-md lg:text-lg">
              {productsAmount} of {productsAmount} products
            </p>
          )}
          {pageQuantity !== 1 && (
            <p className="text-gray-800 text-md lg:text-lg">
              16 of {productsAmount} products
            </p>
          )}
        </div>
        <div className="flex items-center flex-wrap flex-grow lg:pl-8 lg:border-l lg:border-gray-300 py-2 order-1 ">
          <div className="w-full lg:w-auto text-gray-800 text-md lg:text-lg">
            Sort By:{" "}
          </div>

          <div className="flex items-center w-full lg:w-auto mt-3 lg:mt-0">
            <div
              className={`${
                activeFilter === "most-recent"
                  ? "bg-brand text-white"
                  : "bg-gray-200 text-gray-500"
              } text-sm lg:text-md text-center lg:ml-5 px-3 py-1 rounded-3xl shadow hover:shadow-md transition-all duration-300 cursor-pointer select-none`}
              onClick={() => setActiveFilter("most-recent")}
            >
              Most Recent
            </div>
            <div
              className={`${
                activeFilter === "lowest-price"
                  ? "bg-brand text-white"
                  : "bg-gray-200 text-gray-500"
              } text-sm lg:text-md text-center ml-2 lg:ml-5 px-3 py-1 rounded-3xl shadow hover:shadow-md transition-all duration-300 cursor-pointer select-none`}
              onClick={() => setActiveFilter("lowest-price")}
            >
              Lowest Price
            </div>
            <div
              className={`${
                activeFilter === "highest-price"
                  ? "bg-brand text-white"
                  : "bg-gray-200 text-gray-500"
              } text-sm lg:text-md text-center ml-2 lg:ml-5 px-3 py-1 rounded-3xl shadow hover:shadow-md transition-all duration-300 cursor-pointer select-none`}
              onClick={() => setActiveFilter("highest-price")}
            >
              Highest Price
            </div>
          </div>
        </div>

        <div className="w-full lg:w-64 flex items-center pr-2 py-2 mt-2 lg:mt-0 order-1">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = {
  pageQuantity: PropTypes.number,
  productsAmount: PropTypes.number,
};

export { Filters };
