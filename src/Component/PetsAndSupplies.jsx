import React from 'react';
import { useLoaderData } from 'react-router';

const PetsAndSupplies = () => {
    const data=useLoaderData()
    
    return (
        <div className='flex justify-center'>
        
        <div className='grid grid-cols-3 mt-10 gap-20 p-5 '>

        {
            data.map(d=><div key={d._id} className="card border-gray-300 border-1  w-96 shadow-sm">
  <figure>
    <img
      src={d.image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {d.name}
      <div className="badge badge-secondary">{d.category}</div>
    </h2>
    <p>{d.description}</p>
    <div className="card-actions ">
      <div className="badge font-semibold bg-amber-500 badge-outline">৳{d.price}</div>
      <div className="badge bg-green-500 badge-outline">{d.location}</div>

    </div>
    <button className='btn btn-primary'>See Details</button>
  </div>
</div>)
        }

        </div>
        
        </div>
    );
};

export default PetsAndSupplies;