export const sortProducts = (products, filter) => {
  if (filter === "most-recent") return [...products];
  if (filter === "lowest-price")
    return [...products].sort((a, b) => a.cost - b.cost);

  if (filter === "highest-price")
    return [...products].sort((a, b) => b.cost - a.cost);
};
