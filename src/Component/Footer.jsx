import React from 'react';
import xImg from '../assets/x.png'
import inImg from '../assets/in.png'
import fImg from '../assets/f.png'
import mImg from '../assets/m.png'
import logo from '../assets/logo2.png'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className=' bg-amber-900 text-center lg:w-full  sm:w-full  lg:mx-auto text-black  md:ml-4 mt-30'>
        <div className=' w-full  grid sm:grid-cols-5 grid-cols-1
        h-auto gap-20 items-center p-4 '>
            <div className='text-black'>
        <h2 className='text-2xl font-bold mb-4 w-40'><img src={logo} alt="" /></h2>
        <p className='text-gray-300'>Our website is a warm and trusted platform that connects loving homes with adorable pets waiting to be adopted. We believe every pet deserves a safe, happy, and caring family. Visitors can easily browse pets by breed, age, or location to find their perfect companion. Alongside adoption, we also provide a wide range of nutritious and high-quality pet food made with natural ingredients to keep pets strong and active. Each adoption story shared on our site inspires others to open their hearts to animals in need. </p>
            </div>
            <div className='space-y-4'>
        <h3 className='font-semibold text-black'>Company</h3>
        <Link to='/about' className='text-gray-300'>About Us</Link>
        <p className='text-gray-300'>Our Mission</p>
        <p className='text-gray-300'> Contact Saled </p>
            </div>
            <div className='space-y-4' >
         <h3  className='font-semibold text-black'>Services</h3>
       <p className='text-gray-300'>Products & Services</p>
        <p className='text-gray-300'>Customer Stories</p>
        <p className='text-gray-300'>Download Apps </p>
            </div>
            <div className='space-y-4'>
        <h3  className='font-semibold text-black'>Information</h3>
       <p className='text-gray-300'>Privacy Policy</p>
        <p className='text-gray-300'>Terms & Condition</p>
        <p className='text-gray-300'>Join Us </p>
            </div>
            <div className='space-y-2 text-black'>
            <h3 className='font-semibold text-white'>Social Links</h3>
           <div className='text-gray-300 space-y-2'>
             <img src={xImg} alt="" /><a href="https://x.com/">PawMart System</a>
            <img src={inImg} alt="" /><a href="https://www.linkedin.com/">PawMart System</a>
            <img src={fImg} alt="" /><a href="https://www.facebook.com/">PawMart System</a>
            <img src={mImg} alt="" /><a href="https://mail.google.com/">support@cst.com</a>
           </div>
           
            </div>
                                      
        </div>
        <div >
            <p className=' text-gray-300  text-[16px] text-center mb-8'>
                © 2025 PawMart All rights reserved.
            </p>
        </div>
        </footer>
        
        
    );
};

export default Footer;