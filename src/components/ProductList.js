import React from "react";
import PropTypes from "prop-types";
import { Product } from "./Product/Product";
import { sortProducts } from "../utilities/sortProducts";
import { filterProducts } from "../utilities/filterProducts";

const ProductList = ({ products, filter, searchKeyword }) => {
  const filteredProducts = filterProducts(products, searchKeyword);

  const filteredAndSortedProducts = sortProducts(filteredProducts, filter);

  return (
    <div className="w-5/6 flex flex-wrap justify-around items-center py-8">
      {filteredAndSortedProducts &&
        filteredAndSortedProducts.map((product) => (
          <Product product={product} key={product._id} />
        ))}
    </div>
  );
};
ProductList.propTypes = {
  products: PropTypes.array,
  filter: PropTypes.string,
  searchKeyword: PropTypes.string,
};

export { ProductList };
