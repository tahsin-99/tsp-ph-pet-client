import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';


const Homeayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
           <main className='flex-1'>
             <Outlet></Outlet>
           </main>
            <Footer></Footer>
        </div>
    );
};

export default Homeayout;