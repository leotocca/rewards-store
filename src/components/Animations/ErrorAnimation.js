import React from "react";
import Lottie from "react-lottie";
import PropTypes from "prop-types";
import errorAnimation from "../../lotties/error-animation.json";
import { addPointsResetError } from "../../actions/addPoints";
import { useDispatch } from "react-redux";

const ErrorAnimation = ({
  isRendering,
  setIsModalActive,
  shouldShowErrorMessage,
}) => {
  const dispatch = useDispatch();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: errorAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const resetAddPointsErrorAndCloseModal = () => {
    dispatch(addPointsResetError());
    setIsModalActive(false);
  };

  if (isRendering) {
    setTimeout(resetAddPointsErrorAndCloseModal, 1500);
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div
        className={`h-content w-content ${setIsModalActive ? "-mt - 10" : ""} `}
      >
        <Lottie options={defaultOptions} height={220} width={300} />
      </div>
      {shouldShowErrorMessage && (
        <p className="text-brandred text-xl -mt-4">
          We couldnt add points to your account
        </p>
      )}
    </div>
  );
};

ErrorAnimation.propTypes = {
  isRendering: PropTypes.bool,
  setIsModalActive: PropTypes.func,
  shouldShowErrorMessage: PropTypes.bool,
};

export { ErrorAnimation };
