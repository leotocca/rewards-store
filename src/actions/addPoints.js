export const ADD_POINTS_BEGIN = "ADD_POINTS_BEGIN";
export const ADD_POINTS_SUCCESS = "ADD_POINTS_SUCCESS";
export const ADD_POINTS_FAILURE = "ADD_POINTS_FAILURE";

export const addPointsBegin = () => ({
  type: ADD_POINTS_BEGIN,
});

export const addPointsSuccess = (response) => ({
  type: ADD_POINTS_SUCCESS,
  payload: { response },
});

export const addPointsFailure = (error) => ({
  type: ADD_POINTS_FAILURE,
  payload: { error },
});
