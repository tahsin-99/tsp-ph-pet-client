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

import PetAccesories from "./Component/PetAccesories.jsx";
import PetFoods from "./Component/PetFoods.jsx";
import PetsCare from "./Component/PetsCare.jsx";
import CardDetails from "./Component/CardDetails.jsx";
import PrivateRoute from "./Component/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import Loading from "./Component/Loading.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Homeayout,
    hydrateFallbackElement:<Loading></Loading>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        index:true,
        Component:Home,
        loader:()=>fetch('http://localhost:3000/latest-post')
      },
      {
        path:'/petsandsupplies',
        Component:PetsAndSupplies,
        loader:()=>fetch('http://localhost:3000/petsupplies')
      },
      {
         path:'/card-ditails/:id',
        element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        
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
         element:<PrivateRoute><AddListing></AddListing></PrivateRoute>,
      },
       {
        path:'/mylisting',
         element:<PrivateRoute><MyListing></MyListing></PrivateRoute>,
      },
       {
        path:'/myorders',
         element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
      },
       {
        path:'/pets',
        Component:Pets,
        loader:()=>fetch('http://localhost:3000/pets')
      },
       {
        path:'/petsfood',
        Component:PetFoods,
        loader:()=>fetch('http://localhost:3000/petsfood')
      },
       {
        path:'/petaccessories',
        Component:PetAccesories,
        loader:()=>fetch('http://localhost:3000/petsaccessories')
      },
       {
        path:'/petcare',
        Component:PetsCare,
        loader:()=>fetch('http://localhost:3000/petsproducts')
      },

    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
