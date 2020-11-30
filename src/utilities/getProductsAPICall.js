import axios from "axios";
import {
  getProductsBegin,
  getProductsFailure,
  getProductsSuccess,
} from "../actions/getProducts";

const headerRequest = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
};

export function getProductsAPICall() {
  return async (dispatch) => {
    dispatch(getProductsBegin());

    try {
      const { data: products } = await axios.get(
        "https://coding-challenge-api.aerolab.co/products",
        {
          headers: { ...headerRequest },
        }
      );

      dispatch(getProductsSuccess(products));
    } catch (error) {
      console.error({ error });
      dispatch(getProductsFailure(error));
    }
  };
}
