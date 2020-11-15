import React from "react";
import coin from "../../assets/svg/navbar/coin.svg";
import "./Product.css";

export const Product = (props) => {
  const { name, cost, category, img } = props.product;
  const { url: imgUri } = img;

  return (
    <div className="single-product">
      <div className="shopping-bag">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          className="shopping-bag-image"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.8822 4.53069L17.9947 18.1076C18.0334 18.594 17.8588 19.0785 17.5155 19.4366C17.1723 19.7946 16.6857 20 16.1806 20H1.81932C1.31418 20 0.827598 19.7946 0.484382 19.4365C0.141165 19.0784 -0.0334553 18.594 0.00531781 18.1074L1.11777 4.53069C1.14195 4.2253 1.40547 3.98944 1.72245 3.98944H4.75476V2.92969C4.75476 1.31426 6.11505 0 7.78706 0H10.2129C11.8849 0 13.2452 1.31426 13.2452 2.92969V3.98944H16.2775C16.5945 3.98944 16.858 4.2253 16.8822 4.53069ZM7.8 1C6.80748 1 6 2.00935 6 3.25V4H12V3.25C12 2.00935 11.1925 1 10.2 1H7.8Z"
          />
        </svg>
      </div>
      <div className="mx-5 mt-6 mb-4">
        <div className="pb-4">
          <img src={imgUri} alt={name} />
        </div>
        <div className="pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-500 ">{category}</p>
          <h3 className="text-lg text-gray-800 ">{name}</h3>
        </div>
      </div>
      <div className="single-product-description-overlay">
        <div className="flex items-center">
          <p className="text-white text-2xl mr-3">{cost}</p>
          <img src={coin} alt="" className="h-5 w-5 mt-1" />
        </div>
        <button className="w-3/4 bg-white text-lg text-gray-800 text-center rounded-full shadow cursor-pointer select-none py-2 mt-4 hover:shadow-lg transition-all duration-300 focus:outline-none active:outline-none">
          Redeem Now
        </button>
      </div>
    </div>
  );
};
