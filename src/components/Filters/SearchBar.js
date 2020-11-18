import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchKeyword, clearSearchKeyword } from "../../actions/filters";
import { useKeyPress } from "../../utilities/useKeyPress";

// TODO: finish searchBar

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const dispatch = useDispatch();
  const { searchKeyword } = useSelector((state) => state.filters);

  const pressedEnter = useKeyPress("Enter");

  if (pressedEnter) {
    if (keyword !== "") {
      dispatch(setSearchKeyword(keyword));
    }
  }

  const dispatchSearch = () => {
    if (keyword !== "") {
      dispatch(setSearchKeyword(keyword));
    }
    setHasSearched(true);
  };

  const clearSearch = () => {
    dispatch(clearSearchKeyword());
    setHasSearched(false);
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          type="text"
          className="w-full h-8 mr-6 rounded-3xl shadow text-sm px-5 py-5 focus:outline-none"
          placeholder="Search a product..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div
          className={`absolute top-1/2 right-0 h-3 w-3   ${
            hasSearched ? "hidden" : ""
          }`}
          onClick={() => dispatchSearch()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="fill-current text-gray-800"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </div>
        <div
          className={`absolute top-0 right-0 h-3 w-3 mt-4 mr-4 ${
            !hasSearched ? "hidden" : ""
          }`}
          onClick={() => clearSearch()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="fill-current text-gray-800"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
