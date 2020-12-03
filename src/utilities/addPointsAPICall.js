import axios from "axios";
import {
  addPointsBegin,
  addPointsFailure,
  addPointsSuccess,
} from "../actions/addPoints";
import { getUserAPICall } from "./getUserAPICall";

const headerRequest = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
};

export function addPointsAPICall(points) {
  if (typeof points !== "number") {
    console.error("addPoints() can only receive a Number as a parameter");
  }
  return async (dispatch) => {
    dispatch(addPointsBegin());

    try {
      const { data } = await axios.post(
        "https://coding-challenge-api.aerolab.co/user/points",
        {
          amount: points,
        },
        {
          headers: { ...headerRequest },
        }
      );

      dispatch(addPointsSuccess(data));
      dispatch(getUserAPICall());
    } catch (error) {
      console.error({ error });
      dispatch(addPointsFailure(error));
    }
  };
}
