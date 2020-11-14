import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import Routes from "./Routes";
// import Navbar from "./components/Navbar";
// import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Filters } from "./components/Filters/Filters";
import { Provider } from "react-redux";
import storeFactory from "./store";
import { Products } from "./views/Products";

const store = storeFactory();

const logTheStore = () => console.log({ store: store.getState() });

store.subscribe(logTheStore);

export default function App() {
  return (
    <Provider store={store}>
      <div className="w-full">
        <Navbar />
        <Header />
        <Filters />
        <Products />
      </div>
    </Provider>
  );
}
