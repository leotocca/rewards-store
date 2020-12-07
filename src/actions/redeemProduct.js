export const REDEEM_PRODUCT_BEGIN = "REDEEM_PRODUCT_BEGIN";
export const REDEEM_PRODUCT_SUCCESS = "REDEEM_PRODUCT_SUCCESS";
export const REDEEM_PRODUCT_FAILURE = "REDEEM_PRODUCT_FAILURE";
export const REDEEM_PRODUCT_RESET_SUCCESS = "REDEEM_PRODUCT_RESET_SUCCESS";

export const redeemProductBegin = () => ({
  type: REDEEM_PRODUCT_BEGIN,
});

export const redeemProductSuccess = () => ({
  type: REDEEM_PRODUCT_SUCCESS,
});

export const redeemProductFailure = (error) => ({
  type: REDEEM_PRODUCT_FAILURE,
  payload: { error },
});

export const redeemProductResetSuccess = () => ({
  type: REDEEM_PRODUCT_RESET_SUCCESS,
});
