import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Loading from "./Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pet-server-sable.vercel.app/my-orders?email=${user.email}`, {
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
      "Phone",
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

    autoTable(doc, {
      head: [columns],
      body: rows,
    });

    doc.save("my-orders.pdf");
  };

  if (loading) return <Loading />;

  return (
    <>
      <title>PawMart | MyOrder</title>
      <div className="p-5 bg-gray-50 dark:bg-gray-900 min-h-screen mt-50">
        <h1 className="text-3xl font-bold mb-5 text-gray-800 dark:text-gray-100">
          My Orders
        </h1>

        <div className="overflow-x-auto lg:p-4">
          <table className="table-auto w-full border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
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
                <tr
                  key={d._id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <td className="border px-4 py-2 text-blue-700 font-semibold dark:text-blue-400">
                    {d.name}
                  </td>
                  <td className="border px-4 py-2 text-gray-800 dark:text-gray-100">
                    {d.buyerName}
                  </td>
                  <td className="border px-4 py-2 font-semibold text-red-600 dark:text-red-400">
                    {d.price}
                  </td>
                  <td className="border px-4 py-2 font-semibold text-gray-800 dark:text-gray-100">
                    {d.quantity}
                  </td>
                  <td className="border px-4 py-2 text-gray-800 dark:text-gray-100">
                    {d.address}
                  </td>
                  <td className="border px-4 py-2 text-gray-800 dark:text-gray-100">
                    {d.date}
                  </td>
                  <td className="border px-4 py-2 font-bold text-gray-800 dark:text-gray-100">
                    {d.phone || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={handleDownload}
          className="mb-5 btn btn-secondary mt-10 bg-orange-400 dark:bg-orange-500 text-white hover:bg-orange-500 dark:hover:bg-orange-600"
        >
          Download PDF
        </button>
      </div>
    </>
  );
};

export default MyOrders;
