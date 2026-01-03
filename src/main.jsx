import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Component/Home.jsx";

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
import HomeLayout from "./Component/HomeLayout.jsx";
import Update from "./Component/Update.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://pet-supply-server.vercel.app/latest-post"),
      },
      {
        path: "/petsandsupplies",
        Component: PetsAndSupplies,
        loader: () => fetch("https://pet-supply-server.vercel.app/petsupplies"),
      },
      {
        path:'/about',
        Component:About
      },
       {
        path:'/contact',
        Component:Contact
      },
      {
        path: "/card-ditails/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-data/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/addlisting",
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/mylisting",
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/myorders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/pets",
        Component: Pets,
        loader: () => fetch("https://pet-supply-server.vercel.app/pets"),
      },
      {
        path: "/petsfood",
        Component: PetFoods,
        loader: () => fetch("https://pet-supply-server.vercel.app/petsfood"),
      },
      {
        path: "/petaccessories",
        Component: PetAccesories,
        loader: () =>
          fetch("https://pet-supply-server.vercel.app/petsaccessories"),
      },
      {
        path: "/petcare",
        Component: PetsCare,
        loader: () =>
          fetch("https://pet-supply-server.vercel.app/petsproducts"),
      },
    ],
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
