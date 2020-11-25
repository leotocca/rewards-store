export const filterProducts = (products, searchKeyword) => {
  return products.filter((product) => {
    return searchKeyword === undefined
      ? true
      : product.name.toLowerCase().includes(searchKeyword.toLowerCase());
  });
};
