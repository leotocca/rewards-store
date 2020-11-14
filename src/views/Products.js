import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAPICall } from "../utilities/getProductsAPICall";
import { ProductList } from "../components/ProductList";

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAPICall());
  }, [dispatch]);

  const { products } = useSelector((state) => state.getProducts);

  console.log({ products });
  return (
    <div className="w-full flex justify-center">
      <ProductList products={products} />
    </div>
  );
};
