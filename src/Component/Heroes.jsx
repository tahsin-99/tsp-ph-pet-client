import React from "react";
import Awareness from "./Awareness";

const Heroes = () => {
  const heroes = [
    {
      id: 1,
      name: "Rofiq Hasan",
      image:
        "https://plus.unsplash.com/premium_photo-1691030256110-550925623d7c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaGklMjBib3l8ZW58MHx8MHx8fDA%3D",
      story: "Adopted two rescued dogs and helps local shelters weekly.",
    },
    {
      id: 2,
      name: "Brishti Rahman",
      image:
        "https://img.freepik.com/premium-photo/portrait-young-woman-standing-against-tree-trunk_1048944-4307308.jpg?semt=ais_hybrid&w=740&q=80",
      story: "Saved a stray kitten and inspired others to foster animals.",
    },
    {
      id: 3,
      name: "Mridul Hasan",
      image:
        "https://media.istockphoto.com/id/2164916591/photo/portrait-of-young-man-against-sky.jpg?s=612x612&w=0&k=20&c=0-H7hVr6tuZi0DrriIeu7YxRM-_jNrYdzHM41e6wGrM=",
      story: "Runs a small cat rescue group that has rehomed 40+ cats.",
    },
    {
      id: 4,
      name: "Akash Ahmed",
      image:
        "https://images.unsplash.com/photo-1620845411584-8b2b52fd1eba?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZ2xhZGVzaGklMjBib3l8ZW58MHx8MHx8fDA%3D",
      story: "Volunteers every weekend at PawMart adoption events.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-8 md:px-16 lg:px-24 text-gray-800 dark:text-gray-100 ">
      
     
     

     
      <div className="text-center mb-8 mt-16">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-20 mt-80">
          🦸‍♀️ Meet Our Pet Heroes
        </h2>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-50">
        {heroes.map((hero) => (
          <div
            key={hero.id}
            className="bg-white dark:bg-gray-800 border border-[#c74d2f] rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <img
              src={hero.image}
              alt={hero.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-emerald-400"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {hero.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-200 text-sm mt-2">
              {hero.story}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heroes;
