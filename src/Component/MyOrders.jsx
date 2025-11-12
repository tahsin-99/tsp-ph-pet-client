import { use, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router";

const MyOrders = () => {
  const { user } = use(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://localhost:3000/my-orders?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      },
      [user]
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d);

        setLoading(false);
      });
  });
  if (loading) {
    return <p>Loading......</p>;
  }
  return (
    <>
    <p className="text-5xl font-bold mt-5">Order Details:</p>
    <div className="mt-10 px-10 space-y-5">
       {
        data.map(d=> <div className="w-full border border-gray-300 h-20 mx-auto rounded-xl flex justify-between items-center p-10 ">
                <div className="flex gap-10">
                   <div>
                     <img className="w-20 rounded-full p-" src={d.image} alt="" />
                   </div>
                   <div>
                    <p className="font-semibold text-[20px]">{d.name}</p>
                    <p className="badge bg-green-300 badge-outline">{d.location}</p>
                   </div>
                </div>
                <div>
                   <div className=" font-semibold">{d.email}</div>
                </div>
                <div>
                    <div className="badge bg-orange-300 badge-outline">{d.category}</div>
                </div>
                <div>
                    <div className="badge font-bold bg-blue-300 badge-outline">{d.price}</div>
                </div>
                <div>
                    <button className="btn btn-outline btn-error rounded-4xl w-30 text-[18px]">Cancle</button>
                </div>
        </div>)
       }
    </div>
    </>
   
  );
};

export default MyOrders;
