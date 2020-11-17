import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveFilterAction } from "../../actions/filters";

export const Filters = () => {
  const [activeFilter, setActiveFilter] = useState("most-recent");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveFilterAction(activeFilter));
  }, [activeFilter, dispatch]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-5/6 flex border-b border-gray-300 mb-4 pb-4">
        <div className="flex items-center pr-8 py-2">
          <p className="text-gray-800 text-lg">16 of 32 products</p>
        </div>
        <div className="flex items-center flex-grow pl-8 border-l border-gray-300 py-2">
          <div className="text-gray-800 text-lg">Sort By: </div>

          <div
            className={`${
              activeFilter === "most-recent"
                ? "bg-brand text-white"
                : "bg-gray-200 text-gray-500"
            } text-md text-center ml-5 px-3 py-1 rounded-full shadow hover:shadow-md transition-all duration-300 cursor-pointer select-none`}
            onClick={() => setActiveFilter("most-recent")}
          >
            Most Recent
          </div>
          <div
            className={`${
              activeFilter === "lowest-price"
                ? "bg-brand text-white"
                : "bg-gray-200 text-gray-500"
            } text-md text-center ml-5 px-3 py-1 rounded-full shadow hover:shadow-md transition-all duration-300 cursor-pointer select-none`}
            onClick={() => setActiveFilter("lowest-price")}
          >
            Lowest Price
          </div>
          <div
            className={`${
              activeFilter === "highest-price"
                ? "bg-brand text-white"
                : "bg-gray-200 text-gray-500"
            } text-md text-center ml-5 px-3 py-1 rounded-full shadow hover:shadow-md transition-all duration-300 cursor-pointer select-none`}
            onClick={() => setActiveFilter("highest-price")}
          >
            Highest Price
          </div>
        </div>
        <div className="flex items-center pr-2 py-2">
          <input
            type="text"
            className="py-2 px-5 rounded-full focus:outline-none"
            placeholder="Search product..."
          />
        </div>
      </div>
    </div>
  );
};
