import { SET_SEARCH_KEYWORD, SET_ACTIVE_FILTER } from "../actions/filters";

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
    case SET_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload.filter,
      };
    default:
      return state;
  }
};
