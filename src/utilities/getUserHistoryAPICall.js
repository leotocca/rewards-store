import axios from "axios";
import {
  getUserHistoryBegin,
  getUserHistoryFailure,
  getUserHistorySuccess,
} from "../actions/getUserHistory";

const headerRequest = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
};

export function getUserHistoryAPICall() {
  return async (dispatch) => {
    dispatch(getUserHistoryBegin());

    try {
      const { data: userHistoryData } = await axios.get(
        "https://coding-challenge-api.aerolab.co/user/history",
        {
          headers: { ...headerRequest },
        }
      );
      dispatch(getUserHistorySuccess(userHistoryData));
    } catch (error) {
      console.error({ error });
      dispatch(getUserHistoryFailure(error));
    }
  };
}
