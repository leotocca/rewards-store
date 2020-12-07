import React from "react";
import Lottie from "react-lottie";
import errorAnimation from "../../lotties/error-animation.json";
import { addPointsResetError } from "../../actions/addPoints";
import { useDispatch } from "react-redux";

export const AddPointsErrorAnimation = ({ render, setIsModalActive }) => {
  const dispatch = useDispatch();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: errorAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const resetErrorAndCloseModal = () => {
    dispatch(addPointsResetError());
    setIsModalActive(false);
  };

  if (render) {
    setTimeout(resetErrorAndCloseModal, 1500);
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="h-content w-content -mt-10">
        <Lottie options={defaultOptions} height={220} width={300} />
      </div>
      <p className="text-brandred text-xl -mt-4">
        We couldn't add points to your account
      </p>
    </div>
  );
};
