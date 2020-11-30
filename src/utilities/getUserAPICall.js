import axios from "axios";
import {
  getUserBegin,
  getUserFailure,
  getUserSuccess,
} from "../actions/getUser";

const headerRequest = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
};

export function getUserAPICall() {
  return async (dispatch) => {
    dispatch(getUserBegin());

    try {
      const { data: userData } = await axios.get(
        "https://coding-challenge-api.aerolab.co/user/me",
        {
          headers: { ...headerRequest },
        }
      );

      dispatch(getUserSuccess(userData));
    } catch (error) {
      console.error({ error });
      dispatch(getUserFailure(error));
    }
  };
}
