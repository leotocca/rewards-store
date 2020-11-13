import {
  GET_USER_BEGIN,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
} from "../actions/getUser";

const initialState = {
  userData: {},
  error: false,
  loading: false,
};

export const getUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload.userData,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
