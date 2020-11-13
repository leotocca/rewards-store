import React from "react";

export const Filters = () => {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-5/6 flex border-b border-gray-300 mb-4 pb-4">
        <div className="pr-8">
          <p className="text-gray-800 text-lg">16 of 32 products</p>
        </div>
        <div className="flex items-center pl-8 border-l border-gray-300">
          <div className="text-gray-800 text-lg">Sort By:</div>
          <div className="bg-gray-200 text-gray-500 text-lg ml-5 px-3 py-2 rounded-full shadow hover:shadow-lg transition-all duration-150">
            Most Recent
          </div>
          <div className="bg-blue-400 text-white text-lg ml-5 px-3 py-2 rounded-full  shadow hover:shadow-lg transition-all duration-150">
            Lowest Price
          </div>
          <div className="bg-gray-200 text-gray-500 text-lg ml-5 px-3 py-2 rounded-full  shadow hover:shadow-lg transition-all duration-150">
            Highest Price
          </div>
        </div>
      </div>
    </div>
  );
};
