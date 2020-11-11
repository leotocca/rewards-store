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
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjg1YTM4ODJiNjU3MDAwMWZjZTZjNDgiLCJpYXQiOjE2MDI1OTM2NzJ9.gfWDJZ2ivAHboxrzGa4awAzf-UTVmDHSJNqIDb8Ahwk",
      },
    })
      .then((response) => response.json())
      .then((userHistoryData) => {
        dispatch(getUserHistorySuccess(userHistoryData));
      })
      .catch((error) => dispatch(getUserHistoryFailure(error)));
  };
}
