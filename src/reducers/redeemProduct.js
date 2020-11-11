import {
  REDEEM_PRODUCT_BEGIN,
  REDEEM_PRODUCT_FAILURE,
  REDEEM_PRODUCT_SUCCESS,
} from "../actions/redeemProduct";

const initialState = {
  hasRedeemed: [],
  error: false,
  loading: false,
};

export const redeemProductReducer = (state = initialState, action) => {
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
        hasRedeemed: action.payload.response,
      };
    case REDEEM_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
