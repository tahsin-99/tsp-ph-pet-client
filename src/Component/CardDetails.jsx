import React from "react";
import { useLoaderData } from "react-router";

const CardDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={data.image} className="w-100 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{data.name}</h1>
            <p className="py-6">{data.description}</p>
            <button className="btn btn-primary rounded-3xl">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
