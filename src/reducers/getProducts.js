import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
} from "../actions/getProducts";

const initialState = {
  products: [],
  error: false,
  loading: false,
};

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};
