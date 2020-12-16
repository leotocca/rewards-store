import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../components/Header";
import { getUserHistoryAPICall } from "../utilities/getUserHistoryAPICall";
import { Product } from "../components/History/Product";
import { LoadingAnimation } from "../components/Animations/LoadingAnimation";
import { v4 as uuid } from "uuid";

const History = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserHistoryAPICall());
  }, [dispatch]);

  const { userHistory } = useSelector((state) => state.getUserHistory);

  const sortedUserProducts = [
    ...userHistory.sort(
      (a, b) => new Date(b.createDate) - new Date(a.createDate)
    ),
  ];

  return (
    <div className="w-full h-full">
      <Header title={"User history"} />
      <div className="w-full flex justify-center py-10">
        <div className="w-5/6 flex flex-col justify-center items-center">
          {sortedUserProducts.length !== 0 &&
            sortedUserProducts.map((product) => (
              <Product product={product} key={uuid()} />
            ))}
          {sortedUserProducts.length === 0 && (
            <div className="w-full h-full flex items-center justify-center py-32 ">
              <LoadingAnimation />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { History };
