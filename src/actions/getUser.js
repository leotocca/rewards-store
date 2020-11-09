export const GET_USER_BEGIN = "GET_USER_BEGIN";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE_FAILURE";

export const getUserBegin = () => ({
  type: GET_USER_BEGIN,
});

export const getUserSuccess = (userData) => ({
  type: GET_USER_SUCCESS,
  payload: { userData },
});

export const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: { error },
});
