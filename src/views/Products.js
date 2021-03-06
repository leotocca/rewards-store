import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAPICall } from "../utilities/getProductsAPICall";
import { ProductList } from "../components/ProductList";
import { Filters } from "../components/Filters/Filters";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
import { usePagination } from "../utilities/usePagination";
import { sortProducts } from "../utilities/sortProducts";
import { filterProducts } from "../utilities/filterProducts";
import { LoadingAnimation } from "../components/Animations/LoadingAnimation";

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAPICall());
  }, [dispatch]);

  const { products = [] } = useSelector((state) => state.getProducts);
  const { activeFilter, searchKeyword } = useSelector((state) => state.filters);

  const filteredProducts = filterProducts(products, searchKeyword);

  const filteredAndSortedProducts = sortProducts(
    filteredProducts,
    activeFilter
  );

  const paginatedProducts = usePagination(filteredAndSortedProducts, 16);

  const handlePaginationChange = (request) => {
    if (typeof request === "number") paginatedProducts.jump(request);
    if (request === "prev") paginatedProducts.prev();
    if (request === "next") paginatedProducts.next();
  };

  return (
    <div className="w-full h-full">
      <Header title={"Electronics"} />
      <div className="w-full bg-gray-100 pt-8 sm:pt-20">
        <Filters
          pageQuantity={paginatedProducts.maxPage}
          productsAmount={filteredAndSortedProducts.length}
        />
        <div className="w-full flex flex-col items-center justify-center pb-20">
          {paginatedProducts.currentData().length === 0 && (
            <div className="w-full h-full flex items-center justify-center py-32 ">
              <LoadingAnimation />
            </div>
          )}
          {paginatedProducts.currentData().length !== 0 && (
            <ProductList products={paginatedProducts.currentData()} />
          )}
          {paginatedProducts.currentData().length !== 0 &&
            paginatedProducts.maxPage !== 1 && (
              <Pagination
                handleChange={handlePaginationChange}
                currentPage={paginatedProducts.currentPage}
              />
            )}
        </div>
      </div>
    </div>
  );
};
