import {
  getUserBegin,
  getUserFailure,
  getUserSuccess,
} from "../actions/getUser";

export function getUserAPICall() {
  return (dispatch) => {
    dispatch(getUserBegin());

    fetch("https://coding-challenge-api.aerolab.co/user/me", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjg1YTM4ODJiNjU3MDAwMWZjZTZjNDgiLCJpYXQiOjE2MDI1OTM2NzJ9.gfWDJZ2ivAHboxrzGa4awAzf-UTVmDHSJNqIDb8Ahwk",
      },
    })
      .then((response) => response.json())
      .then((products) => {
        dispatch(getUserSuccess(products));
      })
      .catch((error) => dispatch(getUserFailure(error)));
  };
}
