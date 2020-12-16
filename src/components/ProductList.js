import React from "react";
import PropTypes from "prop-types";
import { Product } from "./ProductList/Product";

const ProductList = ({ products }) => {
  return (
    <div className="w-5/6 flex flex-wrap justify-around items-center py-8">
      {products &&
        products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
    </div>
  );
};
ProductList.propTypes = {
  products: PropTypes.array,
};

export { ProductList };
