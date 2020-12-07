export const ADD_POINTS_BEGIN = "ADD_POINTS_BEGIN";
export const ADD_POINTS_SUCCESS = "ADD_POINTS_SUCCESS";
export const ADD_POINTS_FAILURE = "ADD_POINTS_FAILURE";
export const ADD_POINTS_RESET_SUCCESS = "ADD_POINTS_RESET_SUCCESS";
export const ADD_POINTS_RESET_ERROR = "ADD_POINTS_RESET_ERROR";

export const addPointsBegin = () => ({
  type: ADD_POINTS_BEGIN,
});

export const addPointsSuccess = () => ({
  type: ADD_POINTS_SUCCESS,
});

export const addPointsFailure = (error) => ({
  type: ADD_POINTS_FAILURE,
  payload: { error },
});

export const addPointsResetSuccess = () => ({
  type: ADD_POINTS_RESET_SUCCESS,
});

export const addPointsResetError = () => ({
  type: ADD_POINTS_RESET_SUCCESS,
});
