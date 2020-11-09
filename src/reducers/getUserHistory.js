import {
  GET_USER_HISTORY_BEGIN,
  GET_USER_HISTORY_FAILURE,
  GET_USER_HISTORY_SUCCESS,
} from "../actions/getUserHistory";

const initialState = {
  userHistory: {},
  error: false,
  loading: false,
};

export const getUserHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_HISTORY_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_USER_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        userHistory: action.payload.userHistoryData,
      };
    case GET_USER_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
