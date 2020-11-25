import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchKeyword, clearSearchKeyword } from "../../actions/filters";
import searchIcon from "../../assets/svg/searchbar/searchIcon.svg";
import close from "../../assets/svg/searchbar/close.svg";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const setAndDispatchSearch = (value) => {
    console.log({ value });

    setKeyword(value);
    dispatch(setSearchKeyword(keyword));
  };

  const clearSearch = () => {
    setKeyword("");
    dispatch(clearSearchKeyword());
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          type="text"
          className="w-full h-8 mr-6 rounded-3xl shadow text-sm px-5 py-5 focus:outline-none"
          placeholder="Search a product..."
          value={keyword}
          onChange={(e) => setAndDispatchSearch(e.target.value)}
        />
        <div
          className={`absolute top-0 right-0 h-3 w-3 mt-4 mr-4 ${
            keyword !== "" ? "hidden" : ""
          }`}
        >
          <img src={searchIcon} alt="" />
        </div>
        <div
          className={`absolute top-0 right-0 h-3 w-3 mt-4 mr-4 ${
            keyword === "" ? "hidden" : ""
          }`}
          onClick={() => clearSearch()}
        >
          <img src={close} alt="" />
        </div>
      </div>
    </div>
  );
};
