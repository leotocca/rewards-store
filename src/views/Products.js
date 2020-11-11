import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAPICall } from "../utilities/getProductsAPICall";
// import { addPointsAPICall } from "../utilities/addPointsAPICall";
import { getUserAPICall } from "../utilities/getUserAPICall";
import { getUserHistoryAPICall } from "../utilities/getUserHistoryAPICall";
// import { redeemProductAPICall } from "../utilities/redeemProductAPICall";

export const Products = () => {
  //   const { products } = useSelector((state) => state.getProductsReducer);

  const dispatch = useDispatch();

  dispatch(getProductsAPICall());

  dispatch(getUserAPICall());
  dispatch(getUserHistoryAPICall());

  //   console.log({ products });

  return (
    <div className="ml-6 pt-1">
      <h1 className="text-2xl text-blue-700 leading-tight">
        Tailwind and Create React App
      </h1>
      <p className="text-base text-gray-700 leading-normal">
        Building apps together
      </p>
    </div>
  );
};
