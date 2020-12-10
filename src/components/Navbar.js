import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/svg/navbar/logo.svg";
import coin from "../assets/svg/navbar/coin.svg";
import { getUserAPICall } from "../utilities/getUserAPICall";

const Navbar = ({ setIsModalActive }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAPICall());
  }, [dispatch]);

  const { userData } = useSelector((state) => state.getUser);
  const { name, points } = userData;
  return (
    <div className="w-full flex py-3 sticky top-0 bg-white z-10 shadow">
      <div className="flex-grow">
        <img src={logo} alt="" className="ml-8 h-6 w-6" />
      </div>
      {/* TODO: Wire the methods for adding points and seeing history */}

      <div className="flex items-center border-r border-gray-400 mr-8 pr-8 ">
        <p
          onClick={() => setIsModalActive(true)}
          className="text-gray-700 hover:text-brand text-md mr-6 font-semibold select-none cursor-pointer transition-all duration-150"
        >
          Add points
        </p>
        <p className="text-gray-700 hover:text-brand text-md font-semibold select-none cursor-pointer transition-all duration-150">
          History
        </p>
      </div>

      <div className="flex mr-8 items-center">
        <p className="text-gray-700 text-md mr-2 font-semibold">{name}</p>
        <div className="bg-gray-300 flex items-center rounded-3xl py-1 px-3 select-none shadow hover:shadow-md transition-all duration-300">
          <p className="text-sm text-gray-700 mr-2">{points}</p>
          <img src={coin} alt="coin" className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setIsModalActive: PropTypes.func,
};

export { Navbar };
