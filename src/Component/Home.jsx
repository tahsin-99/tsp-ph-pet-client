import React from "react";
import Banner from "./Banner";
import { Link, useLoaderData } from "react-router";
import AwarenessAndHeroes from "./Heroes";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="text-4xl font-bold text-center mt-70">Recent Items</div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-20 p-5 ">
          {data.map((d) => (
            <div
              key={d._id}
              className="card  border  w-96 shadow-sm  transform transition-transform duration-150  hover:-translate-y-4 border-[#c74d2f]  cursor-pointer p-5"
            >
              <figure>
                <img src={d.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{d.name}</h2>
                <p>{d.title}</p>
                <div className="card-actions ">
                  <div className="badge font-semibold bg-amber-500 badge-outline">
                    ৳{d.price}
                  </div>
                </div>
                <Link
                  to={`/card-ditails/${d._id}`}
                  className="btn border-[#c74d2f] hover:bg-[#c74d2f] hover:text-white active:scale-95 bg-orange-300"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AwarenessAndHeroes></AwarenessAndHeroes>
    </div>
  );
};

export default Home;
