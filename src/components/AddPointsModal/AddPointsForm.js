import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPointsAPICall } from "../../utilities/addPointsAPICall";

export const AddPointsForm = () => {
  const [activeAmount, setActiveAmount] = useState(4000);
  const dispatch = useDispatch();

  const dispatchAddPoints = () => {
    dispatch(addPointsAPICall(activeAmount));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-brandblack text-2xl">
        How many points would you like to add?
      </h2>
      <div className="w-full flex items-center justify-around mt-8">
        <div
          className={`${
            activeAmount === 1000
              ? "bg-brand text-white"
              : "bg-gray-200 text-gray-500"
          } text-xl text-center px-10 py-1 rounded-3xl shadow hover:shadow-md transition-all duration-300 cursor-pointer select-none`}
          onClick={() => setActiveAmount(1000)}
        >
          1000
        </div>
        <div
          className={`${
            activeAmount === 5000
              ? "bg-brand text-white"
              : "bg-gray-200 text-gray-500"
          } text-xl text-center px-10 py-1 rounded-3xl shadow hover:shadow-md transition-all duration-300 cursor-pointer select-none`}
          onClick={() => setActiveAmount(5000)}
        >
          5000
        </div>
        <div
          className={`${
            activeAmount === 7500
              ? "bg-brand text-white"
              : "bg-gray-200 text-gray-500"
          } text-xl text-center px-10 py-1 rounded-3xl shadow hover:shadow-md transition-all duration-300 cursor-pointer select-none`}
          onClick={() => setActiveAmount(7500)}
        >
          7500
        </div>
      </div>
      <div className="w-full flex justify-center mt-12">
        <button
          onClick={() => dispatchAddPoints()}
          className="border-brand border-2 bg-transparent text-brand rounded-3xl mx-auto py-1 px-5 w-1/2 text-lg font-semibold hover:bg-brand hover:text-white transition-all duration-300 shadow hover:shadow-lg focus:outline-none"
        >
          Add Points
        </button>
      </div>
    </div>
  );
};
