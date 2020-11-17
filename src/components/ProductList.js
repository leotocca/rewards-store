import React from "react";
import { Product } from "./Product/Product";
import { sortProducts } from "../utilities/sortProducts";

export const ProductList = (props) => {
  const { products, filter } = props;

  const sortedProducts = sortProducts(products, filter);

  console.log({ sortedProducts });
  return (
    <div className="w-5/6 flex flex-wrap justify-around items-center py-8">
      {sortedProducts &&
        sortedProducts.map((product) => (
          <Product product={product} key={product._id} />
        ))}
    </div>
  );
};
