import {
  getProductsBegin,
  getProductsFailure,
  getProductsSuccess,
} from "../actions/geProducts";

export function getProductsAPICall() {
  return (dispatch) => {
    dispatch(getProductsBegin());

    fetch("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.API_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((products) => {
        dispatch(getProductsSuccess(products));
      })
      .catch((error) => dispatch(getProductsFailure(error)));
  };
}
