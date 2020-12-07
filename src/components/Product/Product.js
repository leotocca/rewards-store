import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { redeemProductAPICall } from "../../utilities/redeemProductAPICall";
import { redeemProductResetSuccess } from "../../actions/redeemProduct";
import coin from "../../assets/svg/navbar/coin.svg";
import { ShoppingBag } from "./ShoppingBag";
import { MissingPoints } from "./MissingPoints";
import { SuccessAnimation } from "../Animations/SuccessAnimation";
import { LoadingAnimation } from "../Animations/LoadingAnimation";
import { ErrorAnimation } from "../Animations/ErrorAnimation";
import "./Product.css";

export const Product = ({ product }) => {
  const [isBeingRedeemed, setIsBeingRedeemed] = useState(false);

  const { points } = useSelector((state) => state.getUser.userData);
  const { loading, error, success } = useSelector(
    (state) => state.redeemProduct
  );
  const { name, cost, category, img, _id: id } = product;
  const { url: imgUri } = img;

  const dispatch = useDispatch();

  const isAvailable = points - cost >= 0;

  const redeemProduct = (id) => {
    dispatch(redeemProductAPICall(id));
    setIsBeingRedeemed(true);
    setTimeout(() => {
      dispatch(redeemProductResetSuccess());
      setIsBeingRedeemed(false);
    }, 3000);
  };

  return (
    <div className="single-product">
      {isAvailable && <ShoppingBag />}
      {!isAvailable && <MissingPoints points={Math.abs(points - cost)} />}
      <div className="mx-5 mt-6 mb-4">
        <div className="pb-4">
          <img src={imgUri} alt={name} />
        </div>
        <div className="pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-500 ">{category}</p>
          <h3 className="text-lg text-brandblack ">{name}</h3>
        </div>
      </div>
      <div className="single-product-description-overlay">
        {!isBeingRedeemed && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex items-center select-none">
              <p className="text-brandwhite text-2xl mr-3">{cost}</p>
              <img src={coin} alt="" className="h-5 w-5 mt-1" />
            </div>
            <button
              className="w-3/4 bg-brandwhite text-lg text-brandblack text-center rounded-full shadow cursor-pointer select-none py-2 mt-4 hover:shadow-lg transition-all duration-300 focus:outline-none active:outline-none"
              onClick={() => redeemProduct(id)}
            >
              Redeem Now
            </button>
          </div>
        )}
        {success && isBeingRedeemed && <SuccessAnimation />}
        {loading && isBeingRedeemed && <LoadingAnimation />}
        {error && isBeingRedeemed && <ErrorAnimation />}
      </div>
    </div>
  );
};
