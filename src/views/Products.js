import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAPICall } from "../utilities/getProductsAPICall";

// import { addPointsAPICall } from "../utilities/addPointsAPICall";
import { getUserAPICall } from "../utilities/getUserAPICall";
import { getUserHistoryAPICall } from "../utilities/getUserHistoryAPICall";
// import { redeemProductAPICall } from "../utilities/redeemProductAPICall";

export const Products = () => {
  // const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  dispatch(getProductsAPICall());

  dispatch(getUserAPICall());
  dispatch(getUserHistoryAPICall());

  // console.log({ products });

  return <div className="w-full"></div>;
};
