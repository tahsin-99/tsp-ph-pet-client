import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
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
          .then(() => {
            setData(data.filter((item) => item._id !== id));
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your listing has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-800 dark:text-gray-100">
        Loading.......
      </p>
    );
  }

  return (
    <>
      <title>PawMart | MyList</title>
      <h1 className="text-3xl font-bold mb-5 ml-5 mt-5 text-gray-800 dark:text-gray-100">
        My Listing
      </h1>

      <div className="overflow-x-auto lg:p-4 p-2 sm:ml-4">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d._id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="border px-4 py-2 text-center">
                  <img className="w-30 rounded-2xl" src={d.image} alt={d.name} />
                </td>
                <td className="border px-4 py-2 font-bold text-gray-800 dark:text-gray-100">
                  {d.name}
                </td>
                <td className="border px-4 py-2 font-semibold text-red-600 dark:text-red-400">
                  {d.category}
                </td>
                <td className="border px-4 py-2 font-semibold text-gray-800 dark:text-gray-100">
                  {d.price}
                </td>
                <td className="border px-4 py-2 text-gray-800 dark:text-gray-100">
                  {d.location}
                </td>
                <td className="border px-4 py-2 text-gray-800 dark:text-gray-100">
                  {d.date}
                </td>
                <td className="border px-4 py-2 flex gap-3 justify-center">
                  <Link
                    to={`/update-data/${d._id}`}
                    className="btn btn-primary w-20 bg-blue-500 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handledDelete(d._id)}
                    className="btn btn-secondary w-20 bg-red-500 text-white dark:bg-red-600 dark:hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyListing;
