import { SET_SEARCH_KEYWORD, SET_PRODUCT_CATEGORY } from "../actions/filters";

const initialState = {
  productCategory: undefined,
  searchKeyword: undefined,
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_KEYWORD:
      return {
        ...state,

        searchKeyword: action.payload.keyword,
      };
    case SET_PRODUCT_CATEGORY:
      return {
        ...state,
        productCategory: action.payload.category,
      };
    default:
      return state;
  }
};
