import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../components/Header";
import { getUserHistoryAPICall } from "../utilities/getUserHistoryAPICall";
import { v4 as uuid } from "uuid";
import * as dayjs from "dayjs";

const History = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserHistoryAPICall());
  }, [dispatch]);

  const { userHistory } = useSelector((state) => state.getUserHistory);

  return (
    <div className="w-full h-full">
      <Header title={"User history"} />
      <div className="w-full flex justify-center py-10">
        <div className="w-5/6 flex flex-col justify-center items-center">
          {userHistory.map((product) => (
            <div
              className="w-full flex items-center py-4 border-t border-gray-300"
              key={uuid()}
            >
              <div className="h-16 w-16 flex items-center justify-center">
                <img
                  src={product.img.hdUrl}
                  alt={product.name}
                  className="object-fit"
                />
              </div>
              <div className="flex flex-col ml-10 ">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex mt-1">
                  <p className="text-sm">
                    <span className="font-semibold">Cost:</span> {product.cost}
                  </p>
                  <p className="text-sm ml-4">
                    <span className="font-semibold">Category: </span>{" "}
                    {product.category}
                  </p>
                  <p className="text-sm ml-4">
                    <span className="font-semibold">Redeemed on:</span>{" "}
                    {dayjs(product.createDate.split("T")[0]).format(
                      "DD/MM/YYYY"
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { History };
