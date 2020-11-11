import { addPointsReducer } from "./addPoints";
import { getProductsReducer } from "./getProducts";
import { getUserReducer } from "./getUser";
import { getUserHistoryReducer } from "./getUserHistory";
import { redeemProductReducer } from "./redeemProduct";
import { filtersReducer } from "./filters";
import { combineReducers } from "redux";

export default combineReducers({
  addPointsReducer,
  getProductsReducer,
  getUserReducer,
  getUserHistoryReducer,
  redeemProductReducer,
  filtersReducer,
});
