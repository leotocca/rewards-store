import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAPICall } from "../utilities/getProductsAPICall";
import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/Pagination";
import { usePagination } from "../utilities/usePagination";
import { sortProducts } from "../utilities/sortProducts";
import { filterProducts } from "../utilities/filterProducts";

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAPICall());
  }, [dispatch]);

  const { products } = useSelector((state) => state.getProducts);
  const { activeFilter, searchKeyword } = useSelector((state) => state.filters);

  const filteredProducts = filterProducts(products, searchKeyword);

  const filteredAndSortedProducts = sortProducts(
    filteredProducts,
    activeFilter
  );

  // const paginatedProducts = usePagination(filteredAndSortedProducts, 16);

  const handlePaginationChange = (request) => {
    if (typeof request === "number") paginatedProducts.jump(request);
    if (request === "prev") paginatedProducts.prev();
    if (request === "next") paginatedProducts.next();
  };

  // <ProductList products={paginatedProducts.currentData()} />
  return (
    <div className="w-full flex flex-col items-center justify-center pb-20">
      <ProductList products={products} />
      <Pagination handleChange={handlePaginationChange} />
    </div>
  );
};
