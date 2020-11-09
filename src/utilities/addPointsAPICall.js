import {
  addPointsBegin,
  addPointsFailure,
  addPointsSuccess,
} from "../actions/addPoints";

export function addPointsAPICall(points) {
  if (typeof points !== Number) {
    console.error("addPoints() can only receive a Number as a parameter");
  }

  return (dispatch) => {
    dispatch(addPointsBegin());

    fetch("https://coding-challenge-api.aerolab.co/user/me", {
      method: "POST",
      body: { amount: points },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.API_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPointsSuccess(response));
      })
      .catch((error) => dispatch(addPointsFailure(error)));
  };
}
