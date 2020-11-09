import {
  redeemProductBegin,
  redeemProductFailure,
  redeemProductSuccess,
} from "../actions/redeemProduct";

export function redeemProductAPICall(productId) {
  return (dispatch) => {
    dispatch(redeemProductBegin());

    fetch("https://coding-challenge-api.aerolab.co/redeem", {
      method: "POST",
      body: { productId },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.API_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(redeemProductSuccess(response));
      })
      .catch((error) => dispatch(redeemProductFailure(error)));
  };
}
