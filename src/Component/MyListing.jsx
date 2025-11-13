import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyListing = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loadnig, setLoadting] = useState(true);
  useEffect(() => {
    fetch(
      `https://pet-supply-server.vercel.app/my-listing?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((pro) => {
        setData(pro);
        setLoadting(false);
      });
  }, [user]);

  const handledDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pet-supply-server.vercel.app/petsupplies/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            navigate("/");
          })
          .catch((error) => {
            error;
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (loadnig) {
    <p>Loading.......</p>;
  }
  return (
    <>
      <title>PawMart | MyList</title>
      <h1 className="text-3xl  font-bold mb-5 ml-5 mt-5">My Listing</h1>

      <div className="overflow-x-auto lg:p-4 p-2 sm:ml-4">
        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((d) => (
              <tr key={d._id}>
                <td className="border px-4 py-2 text-blue-700 font-semibold">
                  <img className="w-30 rounded-2xl" src={d.image} alt="" />
                </td>
                <td className="border px-4 py-2 font-bold">{d.name}</td>
                <td className="border px-4 py-2 font-semibold text-red-600">
                  {d.category}
                </td>
                <td className="border px-4 py-2 font-semibold">{d.price}</td>
                <td className="border px-4 py-2 ">{d.location}</td>
                <td className="border px-4 py-2">{d.date}</td>
                <div className="flex gap-5 ml-10">
                  <Link
                    to={`/update-data/${d._id}`}
                    className="btn btn-primary w-20 mt-5"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handledDelete(d._id)}
                    className="btn btn-secondary w-20 mt-5"
                  >
                    Delete
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyListing;
