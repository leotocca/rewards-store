import React from "react";
import Lottie from "react-lottie";
import PropTypes from "prop-types";
import successAnimation from "../../lotties/success-animation.json";
import { addPointsResetSuccess } from "../../actions/addPoints";
import { useDispatch } from "react-redux";

const SuccessAnimation = ({ isRendering, setIsModalActive }) => {
  const dispatch = useDispatch();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const resetAddPointsSuccessAndCloseModal = () => {
    dispatch(addPointsResetSuccess());
    setIsModalActive(false);
  };

  if (isRendering) {
    setTimeout(resetAddPointsSuccessAndCloseModal, 1500);
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

SuccessAnimation.propTypes = {
  isRendering: PropTypes.bool,
  setIsModalActive: PropTypes.func,
};

export { SuccessAnimation };
