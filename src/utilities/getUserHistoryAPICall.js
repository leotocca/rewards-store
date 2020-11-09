import {
  getUserHistoryBegin,
  getUserHistoryFailure,
  getUserHistorySuccess,
} from "../actions/getUserHistory";

export function getUserHistoryAPICall() {
  return (dispatch) => {
    dispatch(getUserHistoryBegin());

    fetch("https://coding-challenge-api.aerolab.co/user/history", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.API_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((userHistoryData) => {
        dispatch(getUserHistorySuccess(userHistoryData));
      })
      .catch((error) => dispatch(getUserHistoryFailure(error)));
  };
}
