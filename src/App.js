import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./Routes";
import { AddPointsModal } from "./components/AddPointsModal/AddPointsModal";
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
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <Provider store={store}>
      <div
        className={`${
          isModalActive ? "h-screen overflow-hidden" : "h-full"
        } w-full relative`}
      >
        <Navbar setIsModalActive={setIsModalActive} />
        <Header />
        <div className="w-full bg-gray-100 pt-20">
          <Filters />
          <Products />
        </div>
        <AddPointsModal
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
        />
      </div>
    </Provider>
  );
}
