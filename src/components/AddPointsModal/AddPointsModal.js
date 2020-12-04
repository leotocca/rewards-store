import React from "react";
import { useSelector } from "react-redux";
import { AddPointsForm } from "./AddPointsForm";
import { LoadingAnimation } from "../LoadingAnimation";
import { AddPointsSuccessAnimation } from "./AddPointsSuccessAnimation";
import { useKeyPress } from "../../utilities/useKeyPress";
import "./AddPointsModal.css";

import close from "../../assets/svg/searchbar/close.svg";

export const AddPointsModal = ({ isModalActive, setIsModalActive }) => {
  const { loading, error, success } = useSelector((state) => state.addPoints);

  const pressedEscape = useKeyPress("Escape");

  if (pressedEscape) {
    setIsModalActive(false);
  }

  return (
    <div className="h-full w-full">
      <div
        className={`${
          isModalActive ? "block" : "hidden"
        } h-screen w-full bg-gray-600 bg-opacity-75 absolute top-0 right-0 flex items-center justify-center transition-all duration-150 z-10`}
        onClick={() => setIsModalActive(false)}
      ></div>
      <div
        className={`${
          isModalActive ? "block" : "hidden"
        } center-add-points-modal mx-auto bg-white flex flex-col items-center justify-center p-20 z-20`}
      >
        <div
          onClick={() => setIsModalActive(false)}
          className="absolute top-0 right-0 h-5 w-5 mt-5 mr-5 cursor-pointer"
        >
          <img src={close} alt="" className="h-5 w-5" />
        </div>
        {!loading && !error && !success && <AddPointsForm />}
        {loading && <LoadingAnimation />}
        {success && (
          <AddPointsSuccessAnimation
            render={success}
            setIsModalActive={setIsModalActive}
          />
        )}
      </div>
    </div>
  );
};
