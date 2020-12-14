import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserHistoryAPICall } from "../utilities/getUserHistoryAPICall";

const History = () => {
  const { userHistory } = useSelector((state) => state.getUserHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserHistoryAPICall());
  }, [dispatch]);

  console.log({ userHistory });

  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
};

export { History };
