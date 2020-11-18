import {
  SET_SEARCH_KEYWORD,
  SET_ACTIVE_FILTER,
  CLEAR_SEARCH_KEYWORD,
} from "../actions/filters";

const initialState = {
  activeFilter: undefined,
  searchKeyword: undefined,
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload.keyword,
      };
    case CLEAR_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: undefined,
      };
    case SET_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload.filter,
      };
    default:
      return state;
  }
};
