import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import Routes from "./Routes";
// import Navbar from "./components/Navbar";
// import { Footer } from "./components/Footer";
import { Provider } from "react-redux";
import storeFactory from "./store";
import { Products } from "./views/Products";

const store = storeFactory();

const logTheStore = () => console.log({ store: store.getState() });

store.subscribe(logTheStore);

export default function App() {
  return (
    <Provider store={store}>
      <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
        <Products />
      </div>
    </Provider>
  );
}
