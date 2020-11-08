import { addPointsReducer } from "./addPoints";
import { getProducts } from "./getProducts";
import { getUser } from "./getUser";
import { getUserHistory } from "./getUserHistory";
import { redeemProduct } from "./redeemProducts";
import { combineReducers } from "redux";

export default combineReducers({
  addPointsReducer,
  getProducts,
  getUser,
  getUserHistory,
  redeemProduct,
});
