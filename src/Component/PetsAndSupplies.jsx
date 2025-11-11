import React from 'react';
import { useLoaderData } from 'react-router';

const PetsAndSupplies = () => {
    const data=useLoaderData()
    
    return (
        <>
        
        <div className='grid grid-cols-3 mt-10 gap-6 p-5'>

        {
            data.map(d=><div key={d._id} className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {d.name}
      <div className="badge badge-secondary">{d.category}</div>
    </h2>
    <p>{d.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">${d.price}</div>
      <div className="badge badge-outline">View Ditails</div>
    </div>
  </div>
</div>)
        }

        </div>
        
        </>
    );
};

export default PetsAndSupplies;