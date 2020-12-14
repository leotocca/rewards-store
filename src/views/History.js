import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../components/Header";
import { getUserHistoryAPICall } from "../utilities/getUserHistoryAPICall";

const History = () => {
  const { userHistory } = useSelector((state) => state.getUserHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserHistoryAPICall());
  }, [dispatch]);

  console.log({ userHistory });

  return (
    <div className="w-full h-full">
      <Header title={"User history"} />
      <div className="w-full flex justify-center">
        <div className="w-5/6 flex flex-col justify-center items-center">
          {userHistory.map((product) => (
            <div
              className="w-full flex items-center py-4 border-t border-gray-300"
              key={product.productId}
            >
              <div></div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { History };
