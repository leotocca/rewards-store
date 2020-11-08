export const SET_PRODUCT_CATEGORY = "SET_PRODUCT_CATEGORY";
export const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";

export const GET_USER_BEGIN = "GET_USER_BEGIN";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE_FAILURE";

export const GET_USER_HISTORY_BEGIN = "GET_USER_HISTORY_BEGIN";
export const GET_USER_HISTORY_SUCCESS = "GET_USER_HISTORY_SUCCESS";
export const GET_USER_HISTORY_FAILURE = "GET_USER_HISTORY_FAILURE";

export const ADD_POINTS_BEGIN = "ADD_POINTS_BEGIN";
export const ADD_POINTS_SUCCESS = "ADD_POINTS_SUCCESS";
export const ADD_POINTS_FAILURE = "ADD_POINTS_FAILURE";

export const REDEEM_PRODUCT_BEGIN = "REDEEM_PRODUCT_BEGIN";
export const REDEEM_PRODUCT_SUCCESS = "REDEEM_PRODUCT_SUCCESS";
export const REDEEM_PRODUCT_FAILURE = "REDEEM_PRODUCT_FAILURE";

export const GET_PRODUCTS_BEGIN = "GET_PRODUCTS_BEGIN";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const setProductCategory = (category) => ({
  type: SET_PRODUCT_CATEGORY,
  payload: { category },
});

export const setSearchKeyword = (keyword) => ({
  type: SET_SEARCH_KEYWORD,
  payload: { keyword },
});

// GET USER ACTION CREATORS

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

// GET USER HISTORY ACTION CREATORS

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

// ADD POINTS ACTION CREATORS

export const addPointsBegin = () => ({
  type: GET_USER_BEGIN,
});

export const addPointsSuccess = (response) => ({
  type: GET_USER_SUCCESS,
  payload: { response },
});

export const addPointsFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: { error },
});

// REDEEM PRODUCT ACTION CREATORS

export const redeemProductBegin = () => ({
  type: GET_USER_BEGIN,
});

export const redeemProductSuccess = (response) => ({
  type: GET_USER_SUCCESS,
  payload: { response },
});

export const redeemProductFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: { error },
});

// GET PRODUCTS ACTION CREATORS

export const getProductsBegin = () => ({
  type: GET_USER_BEGIN,
});

export const getProductsSuccess = (products) => ({
  type: GET_USER_SUCCESS,
  payload: { products },
});

export const getProductsFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: { error },
});
