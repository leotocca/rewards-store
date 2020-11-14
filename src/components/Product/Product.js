import React from "react";
import coin from "../../assets/svg/navbar/coin.svg";
import shoppingBag from "../../assets/svg/product/shopping-bag.svg";
import "./Product.css";

export const Product = (props) => {
  const { name, cost, category, img } = props.product;
  const { url: imgUri } = img;

  return (
    <div className="single-product">
      <div className="absolute top-0 right-0 mr-4 mt-3 bg-white rounded-full p-4">
        <img src={shoppingBag} alt="" className="h-5 w-5 mt-1" />
      </div>
      <div className="mx-5 my-8">
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
        <p className="w-3/4 bg-white text-lg text-gray-800 text-center rounded-full shadow cursor-pointer select-none py-2 mt-4 hover:shadow-lg transition-all duration-300">
          Redeem Now
        </p>
      </div>
    </div>
  );
};
