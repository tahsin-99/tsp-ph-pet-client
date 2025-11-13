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
  

  useEffect(() => {
    fetch(`http://localhost:3000/my-orders?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(d);
        setLoading(false);
      });
  }, [user]);

  const handleDownload = () => {
    const doc = new jsPDF();

    
    const columns = [
      "Name",
      "ProductName",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone"
    ];

   
    const rows = data.map((item) => [
      item.name,
      item.buyerName,
      item.price,
      item.quantity,
      item.address,
      item.date,
      item.phone || "",
    ]);

    
    autoTable(doc,{
      head: [columns],
      body: rows,
    });

    
    doc.save("my-orders.pdf");
  };

  if (loading) return <Loading></Loading>;

  return (
   <><title>PawMart | MyOrder</title>
    <div className="p-5">
        
      <h1 className="text-3xl font-bold mb-5">My Orders</h1>
      
      <div className="overflow-x-auto lg:p-4">
        <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Buyer Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d._id}>
              <td className="border px-4 py-2 text-blue-700 font-semibold">{d.name}</td>
              <td className="border px-4 py-2">{d.buyerName}</td>
              <td className="border px-4 py-2 font-semibold text-red-600">{d.price}</td>
              <td className="border px-4 py-2 font-semibold">{d.quantity}</td>
              <td className="border px-4 py-2 ">{d.address}</td>
              <td className="border px-4 py-2">{d.date}</td>
              <td className="border px-4 py-2 font-bold">{d.phone || ""}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      </div>
      <button
        onClick={handleDownload}
        className="mb-5 btn btn-secondary mt-10"
      >
        Download PDF
      </button>
    </div>
    </>
  );
};

export default MyOrders;
