import React from "react";
import { FaPaw, FaHeart, FaTruck, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 
      bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl font-bold 
          text-gray-800 dark:text-gray-100 mb-4">
          About <span className="text-orange-500">PawMart</span>
        </h1>
        <p className="text-lg 
          text-gray-600 dark:text-gray-400">
          Your trusted online store for pet food, accessories, toys, and care
          products. We care for your pets like family.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-8 max-w-6xl mx-auto">

        {[
          {
            icon: <FaPaw />,
            title: "Pet-Friendly Products",
            desc: "Carefully selected food, toys, and accessories that are safe and healthy for your pets.",
          },
          {
            icon: <FaHeart />,
            title: "Made with Love",
            desc: "Every product we sell is chosen with love, care, and your pet’s happiness in mind.",
          },
          {
            icon: <FaTruck />,
            title: "Fast Delivery",
            desc: "Quick and reliable delivery so your pets never have to wait for what they need.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Trusted Quality",
            desc: "Premium quality products that meet safety standards and pet care needs.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 text-center shadow-md
            bg-white dark:bg-gray-800
            hover:shadow-xl dark:hover:shadow-orange-500/10
            transition-all duration-300"
          >
            <div className="text-4xl text-orange-500 mx-auto mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2
              text-gray-800 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="max-w-4xl mx-auto mt-16 rounded-2xl shadow-md p-8 text-center
        bg-white dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-4
          text-gray-800 dark:text-gray-100">
          Why Choose PawMart?
        </h2>
        <p className="text-lg 
          text-gray-600 dark:text-gray-400">
          Because your pets deserve the best. From nutritious food to fun toys and
          essential care products, PawMart is your one-stop solution for happy pets
          and stress-free shopping.
        </p>
      </div>
    </div>
  );
};

export default About;
