import React from "react";
import Lottie from "react-lottie";
import successAnimation from "../../lotties/success-animation.json";
import { addPointsResetSuccess } from "../../actions/addPoints";
import { useDispatch } from "react-redux";

export const AddPointsSuccessAnimation = ({ render, setIsModalActive }) => {
  const dispatch = useDispatch();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const resetSuccess = () => {
    dispatch(addPointsResetSuccess());
    setIsModalActive(false);
  };

  if (render) {
    setTimeout(resetSuccess, 2500);
  }

  return (
    <div className="w-full h-full">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};
