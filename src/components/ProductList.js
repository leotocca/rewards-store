import React from "react";
import { Product } from "./Product/Product";

export const ProductList = (props) => {
  const { products } = props;
  console.log({ products });
  return (
    <div className="w-5/6 flex flex-wrap justify-around items-center py-8">
      {products.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
};
