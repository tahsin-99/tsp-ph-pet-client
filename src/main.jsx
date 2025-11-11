import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Component/Home.jsx";
import Homeayout from "./Component/Homeayout.jsx";
import PetsAndSupplies from "./Component/PetsAndSupplies.jsx";
import Login from "./Component/Login.jsx";
import Register from "./Component/Register.jsx";
import Errorpage from "./Component/Errorpage.jsx";
import AuthProvider, { AuthContext } from "./Auth/AuthProvider.jsx";
import AddListing from "./Component/AddListing.jsx";
import MyListing from "./Component/MyListing.jsx";
import MyOrders from "./Component/MyOrders.jsx";
import Pets from "./Component/Pets.jsx";
import petFoods from "./Component/PetFoods.jsx";
import PetAccesories from "./Component/PetAccesories.jsx";
import PetFoods from "./Component/PetFoods.jsx";
import PetsCare from "./Component/PetsCare.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Homeayout,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/petsandsupplies',
        Component:PetsAndSupplies,
        loader:()=>fetch('http://localhost:3000/petsupplies')
      },
      {
        path:'/register',
        Component:Register
      },
      {
        path:'/login',
        Component:Login
      },
       {
        path:'/addlisting',
        Component:AddListing
      },
       {
        path:'/mylisting',
        Component:MyListing
      },
       {
        path:'/myorders',
        Component:MyOrders
      },
       {
        path:'/pets',
        Component:Pets
      },
       {
        path:'/petsfood',
        Component:PetFoods
      },
       {
        path:'/petaccessories',
        Component:PetAccesories
      },
       {
        path:'/petcare',
        Component:PetsCare
      },

    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
