import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { AddPointsModal } from "./components/AddPointsModal/AddPointsModal";
import { Navbar } from "./components/Navbar";
import { Provider } from "react-redux";
import storeFactory from "./store";
import "./index.css";

const store = storeFactory();

const logTheStore = () => console.log({ store: store.getState() });

store.subscribe(logTheStore);

export default function App() {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <div
          className={`${
            isModalActive ? "h-screen overflow-hidden" : "h-full"
          } w-full relative`}
        >
          <Navbar setIsModalActive={setIsModalActive} />
          <Routes />
          <AddPointsModal
            isModalActive={isModalActive}
            setIsModalActive={setIsModalActive}
          />
        </div>
      </Router>
    </Provider>
  );
}
