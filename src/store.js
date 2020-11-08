import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const storeFactory = () => createStore(rootReducer, applyMiddleware(thunk));

export default storeFactory;

const store = storeFactory();

console.log({ store: store.getState() });
