import React from "react";

export const Product = (props) => {
  const { title, points, category, imgUri } = props.product;

  return (
    <div>
      <div>
        <img src={imgUri} alt={title} />
      </div>
      <div>
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{points}</p>
      </div>
    </div>
  );
};
