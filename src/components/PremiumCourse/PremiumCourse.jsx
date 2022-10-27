import React from "react";
import { useLoaderData } from "react-router-dom";

const PremiumCourse = () => {
  const premium = useLoaderData();
  const { price, name, extra } = premium;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-60">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>price: {price}</p>
        <p>Extra feature: {extra}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PremiumCourse;
