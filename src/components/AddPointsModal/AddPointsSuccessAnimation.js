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

  const resetSuccessAndCloseModal = () => {
    dispatch(addPointsResetSuccess());
    setIsModalActive(false);
  };

  if (render) {
    setTimeout(resetSuccessAndCloseModal, 1500);
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};
