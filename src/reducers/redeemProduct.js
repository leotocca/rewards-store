import {
  REDEEM_PRODUCT_BEGIN,
  REDEEM_PRODUCT_FAILURE,
  REDEEM_PRODUCT_SUCCESS,
  REDEEM_PRODUCT_RESET_SUCCESS,
} from "../actions/redeemProduct";

const initialState = {
  success: false,
  error: false,
  loading: false,
};

export const redeemProduct = (state = initialState, action) => {
  switch (action.type) {
    case REDEEM_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case REDEEM_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case REDEEM_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case REDEEM_PRODUCT_RESET_SUCCESS:
      return {
        ...state,
        success: false,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
