import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="wrap bg-gray-900">
            <div className="topFooter container mx-auto  grid grid-cols-4 gap-10 justify-center">
                <div className="branding  text-white">
                    <p className='text-4xl font-bold py-3'>AmarShop</p>
                    <p className='text-gray-400'>Largest product search engine, maximum categorized online shopping mall and quickest home delivery system.</p>
                    <div className="socialLink mt-3 py-2 flex">
                    <span className="flex items-center">Follow us : <span className="ring-2 text-xl rounded-full ml-3 p-1"><FaFacebook /></span><span className="ring-2 text-xl rounded-full ml-3 p-1"><FaYoutube /></span><span className="ring-2 text-xl rounded-full ml-3 p-1"><FaTwitter /></span><span className="ring-2 text-xl rounded-full ml-3 p-1"><FaLinkedin /></span>  </span>    
                    </div>
                </div>
                <div className="branding text-white">
                    <p className='text-xl font-bold py-3'>Contract Us</p>
                    <p className='text-gray-400'>4/2, road #8, Kallyanpur,Dhaka</p>
                    <p className='text-gray-400'>Email: jahidj2255@gmail.com</p>

                </div>
                <div className="branding text-white">
                    <p className='text-xl font-bold py-3'>Let Us Help You</p>
                    <ul className='text-gray-400'>
                        <li>Your Account</li>
                        <li>Your Order</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="branding text-white">
                    <p className='text-xl font-bold py-3'>Get Amar Shop app</p>
                    <p className='text-gray-400'> Google play </p>
                </div>
            </div>
            <div className="p-6 flex justify-center items-center bg-gray-700 text-gray-300 text-md ">
                <p>2023 AmarShop.com Limited. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;