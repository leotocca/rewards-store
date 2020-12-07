import {
  ADD_POINTS_BEGIN,
  ADD_POINTS_FAILURE,
  ADD_POINTS_SUCCESS,
  ADD_POINTS_RESET_SUCCESS,
  ADD_POINTS_RESET_ERROR,
} from "../actions/addPoints";

const initialState = {
  success: false,
  error: false,
  loading: false,
};

export const addPoints = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ADD_POINTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    case ADD_POINTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ADD_POINTS_RESET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: false,
      };
    case ADD_POINTS_RESET_ERROR:
      return {
        ...state,
        loading: false,
        error: false,
        success: false,
      };
    default:
      return state;
  }
};
