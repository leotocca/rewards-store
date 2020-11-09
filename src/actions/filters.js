export const SET_PRODUCT_CATEGORY = "SET_PRODUCT_CATEGORY";
export const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";

export const setProductCategory = (category) => ({
  type: SET_PRODUCT_CATEGORY,
  payload: { category },
});

export const setSearchKeyword = (keyword) => ({
  type: SET_SEARCH_KEYWORD,
  payload: { keyword },
});
