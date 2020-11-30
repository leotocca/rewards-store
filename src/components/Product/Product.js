import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { redeemProductAPICall } from "../../utilities/redeemProductAPICall";
import coin from "../../assets/svg/navbar/coin.svg";
import { ShoppingBag } from "./ShoppingBag";
import { MissingPoints } from "./MissingPoints";
import "./Product.css";

export const Product = (props) => {
  const { points } = useSelector((state) => state.getUser.userData);
  const { name, cost, category, img, _id: id } = props.product;
  const { url: imgUri } = img;

  const dispatch = useDispatch();

  const isAvailable = points - cost >= 0;

  return (
    <div className="single-product">
      {isAvailable && <ShoppingBag />}
      {!isAvailable && <MissingPoints points={points - cost} />}
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
        <div className="flex items-center select-none">
          <p className="text-white text-2xl mr-3">{cost}</p>
          <img src={coin} alt="" className="h-5 w-5 mt-1" />
        </div>
        <button
          className="w-3/4 bg-white text-lg text-gray-800 text-center rounded-full shadow cursor-pointer select-none py-2 mt-4 hover:shadow-lg transition-all duration-300 focus:outline-none active:outline-none"
          onClick={() => dispatch(redeemProductAPICall(id))}
        >
          Redeem Now
        </button>
      </div>
    </div>
  );
};
