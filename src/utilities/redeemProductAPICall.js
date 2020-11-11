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
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjg1YTM4ODJiNjU3MDAwMWZjZTZjNDgiLCJpYXQiOjE2MDI1OTM2NzJ9.gfWDJZ2ivAHboxrzGa4awAzf-UTVmDHSJNqIDb8Ahwk",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(redeemProductSuccess(response));
      })
      .catch((error) => dispatch(redeemProductFailure(error)));
  };
}
