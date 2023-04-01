import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className=" p-5 bg-gray-300">
            <ul className="container mx-auto flex flex-row space-x-5 text-lg font-semibold">
               <NavLink to='/Home'><li className='flex items-center cursor-pointer hover:text-gray-600'><span className="mr-1"><FaHome /></span>Home</li> </NavLink>
               <NavLink to='/Shop'> <li className='flex items-center cursor-pointer hover:text-gray-600'><span className="mr-1"><FaUser /></span>Shop</li></NavLink>
            </ul>
        </div>
    );
};

export default Navbar;