import React, { use, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import Loading from "./Loading";
import Swal from "sweetalert2";

const CardDetails = () => {
  const navigate = useNavigate();
  const orderRef = useRef(null);
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  const handleModalOrder = () => {
    orderRef.current.showModal();
  };

  const handleOrder = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      buyerName: e.target.buyerName.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      address: e.target.address.value,
      date: e.target.date.value,
      phone: e.target.phone.value,
    };

    fetch(`http://localhost:3000/my-orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, ordered_by: user.email }),
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        Swal.fire({
          title: "Order has Confirmed",
          icon: "success",
        });
        navigate("/myorders");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/petsupplies/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      });
  }, [user, id]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <title>{data.name}</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={data.image} className="w-100 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{data.name}</h1>
            <p className="py-6">{data.description}</p>
            <div className=" gap-3 font-semibold">
              <p className="py-6"><span className="font-bold">Category : </span>{data.category}</p>
              <p className="py-6"><span className="font-bold">Location : </span>{data.location}</p>
              <p className="py-6"><span className="font-bold">Price: </span>৳ {data.price}</p>
            
            </div>
            <p className="py-6">{data.email}</p>
            <button
              onClick={handleModalOrder}
              className="btn border-[#c74d2f] hover:bg-[#c74d2f] hover:text-white rounded-3xl"
            >
              Order Now
            </button>

           

            <dialog
              ref={orderRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Give You Information</h3>

                <form onSubmit={handleOrder} className="">
                  <fieldset className="fieldset ">
                    <label className="label font-semibold text-black">
                      Produt Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input  w-full"
                      placeholder="Enter Name"
                      defaultValue={data.name}
                      readOnly
                    />
                    <label className="label font-semibold text-black">
                      Buyer Name
                    </label>
                    <input
                      type="text"
                      name="buyerName"
                      className="input  w-full"
                      placeholder="Enter Name"
                      defaultValue={user.displayName}
                      required
                    />

                    <label className="label font-semibold text-black">
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      className="input  w-full"
                      placeholder="Enter Your Price"
                      defaultValue={data.price}
                      readOnly
                    />
                    <label className="label font-semibold text-black">
                      Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      className="input  w-full"
                      placeholder="Enter Your Quantity"
                      required
                    />
                    <label className="label font-semibold text-black">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="input  w-full"
                      placeholder="Enter Your Address"
                      required
                    />

                    <label className="label font-semibold text-black">
                      Date
                    </label>
                    <input
                      name="date"
                      type="datetime-local"
                      className="input w-full"
                    />

                    <label className="label font-semibold text-black">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="input w-full"
                      placeholder="Enter Your Phone Number"
                      required
                    />

                    <button type="submit" className="btn border-[#c74d2f] hover:bg-[#c74d2f] hover:text-white mt-10 active:scale-95 bg-orange-300">
                      Submit
                    </button>
                  </fieldset>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
