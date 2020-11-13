import { addPoints } from "./addPoints";
import { getProducts } from "./getProducts";
import { getUser } from "./getUser";
import { getUserHistory } from "./getUserHistory";
import { redeemProduct } from "./redeemProduct";
import { filters } from "./filters";
import { combineReducers } from "redux";

export default combineReducers({
  addPoints,
  getProducts,
  getUser,
  getUserHistory,
  redeemProduct,
  filters,
});
