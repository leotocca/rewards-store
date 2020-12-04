import React from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../lotties/loading-animation.json";

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
    <div className="w-full h-full">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};
