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
        Authorization: process.env.API_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((products) => {
        dispatch(getUserSuccess(products));
      })
      .catch((error) => dispatch(getUserFailure(error)));
  };
}
