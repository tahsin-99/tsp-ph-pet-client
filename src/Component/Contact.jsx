import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaw } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
    const handleSend=()=>{
        Swal.fire({
  title: "Message sent",
  icon: "success",
  draggable: true
});
    }
  return (
    <div className="min-h-screen py-16 px-4 
                    bg-orange-50 dark:bg-gray-900 transition-colors">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          We’re here to help you and your pets. Reach out anytime!
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {[
            { icon: <FaPhoneAlt />, title: "Phone", text: "+880 1234-567890" },
            { icon: <FaEnvelope />, title: "Email", text: "support@pawmart.com" },
            { icon: <FaMapMarkerAlt />, title: "Address", text: "Dhaka, Bangladesh" },
            { icon: <FaPaw />, title: "Support", text: "24/7 Pet Care Assistance" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl 
                         border-2 border-orange-200 dark:border-orange-500
                         p-6 text-center hover:shadow-xl hover:scale-105
                         transition"
            >
              <div className="text-3xl text-orange-500 mx-auto mb-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-1 
                             text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.text}
              </p>
            </div>
          ))}

        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl 
                        border-2 border-orange-300 dark:border-orange-500
                        p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6 
                         text-gray-800 dark:text-white">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-xl border-2
                           bg-white dark:bg-gray-900
                           text-gray-800 dark:text-white
                           border-gray-200 dark:border-gray-700
                           focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-xl border-2
                           bg-white dark:bg-gray-900
                           text-gray-800 dark:text-white
                           border-gray-200 dark:border-gray-700
                           focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 rounded-xl border-2
                           bg-white dark:bg-gray-900
                           text-gray-800 dark:text-white
                           border-gray-200 dark:border-gray-700
                           focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>

            <button
              onClick={handleSend}
              className="w-full bg-orange-500 text-white font-semibold
                         py-3 rounded-xl hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
