import axios from "axios";
import {
  redeemProductBegin,
  redeemProductFailure,
  redeemProductSuccess,
} from "../actions/redeemProduct";

const headerRequest = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
};

export function redeemProductAPICall(productId) {
  return async (dispatch) => {
    dispatch(redeemProductBegin());

    try {
      console.log({ productId });
      const { data } = await axios.post(
        "https://coding-challenge-api.aerolab.co/redeem",
        {
          productId,
        },
        {
          headers: { ...headerRequest },
        }
      );
      dispatch(redeemProductSuccess(data));
    } catch (error) {
      console.error({ error });
      dispatch(redeemProductFailure(error));
    }
  };
}
