import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ScrollToTop from "./Scrooltop";



const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
