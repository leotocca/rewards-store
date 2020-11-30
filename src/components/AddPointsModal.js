import React, { useState } from "react";
import close from "../assets/svg/searchbar/close.svg";
import { addPointsAPICall } from "../utilities/addPointsAPICall";
import { useDispatch } from "react-redux";

export const AddPointsModal = ({ isModalActive, setIsModalActive }) => {
  const [activeAmount, setActiveAmount] = useState(1000);

  const dispatch = useDispatch();

  return (
    <div
      className={`${
        isModalActive ? "block" : "hidden"
      } h-screen w-full bg-gray-800 bg-opacity-75 absolute top-0 right-0 z-50 flex items-center justify-center transition-all duration-150 op`}
    >
      <div className="relative bg-white flex flex-col items-center justify-center p-20">
        <div
          onClick={() => setIsModalActive(false)}
          className="absolute top-0 right-0 h-5 w-5 mt-5 mr-5 cursor-pointer"
        >
          <img src={close} alt="" className="h-5 w-5" />
        </div>
        <h2 className="text-gray-800 text-2xl">
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
            onClick={() => dispatch(addPointsAPICall(activeAmount))}
            className="border-brand border-2 bg-transparent text-brand rounded-3xl mx-auto py-1 px-5 w-1/2 text-lg font-semibold hover:bg-brand hover:text-white transition-all duration-300 shadow hover:shadow-lg focus:outline-none"
          >
            Add Points
          </button>
        </div>
      </div>
    </div>
  );
};