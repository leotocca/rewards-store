export const sortProducts = (products = [], filter) => {
  if (filter === "most-recent") {
    return [...products];
  } else if (filter === "lowest-price") {
    return [...products].sort((a, b) => a.cost - b.cost);
  } else if (filter === "highest-price") {
    return [...products].sort((a, b) => b.cost - a.cost);
  } else {
    return [];
  }
};
