import { useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useContext } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Loading from "./Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:3000/my-orders?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      });
  }, [user]);

  const handleDownload = () => {
    const doc = new jsPDF();

    
    const columns = [
      "Name",
      "Email",
      "Category",
      "Price",
      "Location",
      "Date",
    ];

   
    const rows = data.map((item) => [
      item.name,
      item.email,
      item.category,
      item.price,
      item.location,
      item.date || "",
    ]);

    
    autoTable(doc,{
      head: [columns],
      body: rows,
    });

    
    doc.save("my-orders.pdf");
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">My Orders</h1>
      
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Buyer Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Email Address</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d._id}>
              <td className="border px-4 py-2 text-blue-700 font-semibold">{d.name}</td>
              <td className="border px-4 py-2">{user.displayName}</td>
              <td className="border px-4 py-2">{d.category}</td>
              <td className="border px-4 py-2 font-semibold">{user.email}</td>
              <td className="border px-4 py-2 text-red-600 font-semibold">{d.price}</td>
              <td className="border px-4 py-2">{d.location}</td>
              <td className="border px-4 py-2">{d.date || ""}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <button
        onClick={handleDownload}
        className="mb-5 btn btn-secondary mt-10"
      >
        Download PDF
      </button>
    </div>
  );
};

export default MyOrders;
