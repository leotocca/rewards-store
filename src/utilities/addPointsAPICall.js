import {
  addPointsBegin,
  addPointsFailure,
  addPointsSuccess,
} from "../actions/addPoints";

export function addPointsAPICall(points) {
  if (typeof points !== "number") {
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
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjg1YTM4ODJiNjU3MDAwMWZjZTZjNDgiLCJpYXQiOjE2MDI1OTM2NzJ9.gfWDJZ2ivAHboxrzGa4awAzf-UTVmDHSJNqIDb8Ahwk",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(addPointsSuccess(response));
      })
      .catch((error) => dispatch(addPointsFailure(error)));
  };
}
