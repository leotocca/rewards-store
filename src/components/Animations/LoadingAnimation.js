import React from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../../lotties/loading-animation.json";

export const LoadingAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};
