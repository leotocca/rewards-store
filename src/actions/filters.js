export const SET_ACTIVE_FILTER = "SET_ACTIVE_FILTER";
export const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";
export const CLEAR_SEARCH_KEYWORD = "CLEAR_SEARCH_KEYWORD";

export const setActiveFilterAction = (filter) => ({
  type: SET_ACTIVE_FILTER,
  payload: { filter },
});

export const setSearchKeyword = (keyword) => ({
  type: SET_SEARCH_KEYWORD,
  payload: { keyword },
});

export const clearSearchKeyword = () => ({
  type: CLEAR_SEARCH_KEYWORD,
});
