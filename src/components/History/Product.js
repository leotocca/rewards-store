import React from "react";
import PropTypes from "prop-types";
import * as dayjs from "dayjs";

const Product = ({ product }) => {
  const { img, name, cost, category, createDate } = product;

  return (
    <div className="w-full flex items-center py-6 sm:py-4 border-t border-gray-300 hover:bg-gray-100 transition-all duration-200  first:border-t-0">
      <div className="h-16 w-16 ml-8 flex items-center justify-center">
        <img src={img.hdUrl} alt={name} className="object-fit" />
      </div>
      <div className="flex flex-col ml-10 ">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex flex-col md:flex-row mt-1">
          <p className="text-sm">
            <span className="font-semibold">Cost:</span> {cost}
          </p>
          <p className="text-sm md:ml-4">
            <span className="font-semibold">Category: </span> {category}
          </p>
          <p className="text-sm md:ml-4">
            <span className="font-semibold">Redeemed on:</span>{" "}
            {dayjs(createDate.split("T")[0]).format("DD/MM/YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export { Product };
