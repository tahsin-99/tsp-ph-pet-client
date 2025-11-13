import React from 'react';
import { Link, useLoaderData } from 'react-router';

const PetFoods = () => {
    const data=useLoaderData()

    return (
       <>
       <title>PawMart | PetFoods</title>
       <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-20 p-5 ">
          {data.map((d) => (
            <div
              key={d._id}
              className="card  border  w-96 shadow-sm
              transform transition-transform duration-150  hover:-translate-y-4 border-[#c74d2f]"
            >
              <figure>
                <img src={d.image} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {d.name}
                  <div className="badge badge-secondary">{d.category}</div>
                </h2>
                <p>{d.title}</p>
                <div className="card-actions ">
                  <div className="badge font-semibold bg-amber-500 badge-outline">
                    ৳{d.price}
                  </div>
                  <div className="badge bg-green-500 badge-outline">
                    {d.location}
                  </div>
                  <div className="badge bg-blue-300 badge-outline">
                    {d.date}
                  </div>
                </div>
                <Link to={`/card-ditails/${d._id}`} className="btn border-[#c74d2f] hover:bg-[#c74d2f] hover:text-white active:scale-95 bg-orange-300">
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    );
};

export default PetFoods;