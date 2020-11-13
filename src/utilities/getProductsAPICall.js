import {
  getProductsBegin,
  getProductsFailure,
  getProductsSuccess,
} from "../actions/getProducts";

export function getProductsAPICall() {
  return (dispatch) => {
    dispatch(getProductsBegin());

    fetch("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // TODO: Setear correctamente el .env
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjg1YTM4ODJiNjU3MDAwMWZjZTZjNDgiLCJpYXQiOjE2MDI1OTM2NzJ9.gfWDJZ2ivAHboxrzGa4awAzf-UTVmDHSJNqIDb8Ahwk",
      },
    })
      .then((response) => response.json())
      .then((products) => {
        dispatch(getProductsSuccess(products));
      })
      .catch((error) => dispatch(getProductsFailure(error)));
  };
}
