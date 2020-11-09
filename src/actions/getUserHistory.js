export const GET_USER_HISTORY_BEGIN = "GET_USER_HISTORY_BEGIN";
export const GET_USER_HISTORY_SUCCESS = "GET_USER_HISTORY_SUCCESS";
export const GET_USER_HISTORY_FAILURE = "GET_USER_HISTORY_FAILURE";

export const getUserHistoryBegin = () => ({
  type: GET_USER_HISTORY_BEGIN,
});

export const getUserHistorySuccess = (userHistoryData) => ({
  type: GET_USER_HISTORY_SUCCESS,
  payload: { userHistoryData },
});

export const getUserHistoryFailure = (error) => ({
  type: GET_USER_HISTORY_FAILURE,
  payload: { error },
});
