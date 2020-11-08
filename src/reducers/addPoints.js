import {
  ADD_POINTS_BEGIN,
  ADD_POINTS_FAILURE,
  ADD_POINTS_SUCCESS,
} from "../actions";

const initialState = {
  points: 0,
  error: false,
  loading: false,
};

const addPointsReducer = (state = initialState, action) => {
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
        points: action.payload["new Points"],
      };
    case ADD_POINTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default addPointsReducer;
