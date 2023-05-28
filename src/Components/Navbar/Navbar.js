import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaArrowDown, FaArrowUp, FaBars, FaHome, FaShopify, FaUser } from 'react-icons/fa';
import ProductCategory from '../ProductCategory/ProductCategory';
import { useState } from 'react';

const Navbar = () => {
    const [categoryShow, setCategoryShow] = useState(false);
    const handelCategoryHidden =()=>{
        console.log('clicked')
    }

    return (
        <div className=" p-5 bg-gray-300">
            <div>
                <ul className="container mx-auto flex flex-row space-x-5 text-lg font-semibold">
                    <NavLink to='/Home'><li className='flex items-center cursor-pointer hover:text-gray-600'><span className="mr-1"><span className="text-2xl text-gray-500"><FaHome /></span></span>Home</li> </NavLink>
                    <NavLink to='/Shop'> <li className='flex items-center cursor-pointer hover:text-gray-600'><span className="mr-1"><span className="text-2xl text-gray-500"><FaShopify /></span> </span>Shop</li></NavLink>
                    <NavLink to='/Shop'> <li onClick={()=>setCategoryShow(!categoryShow)} className='flex items-center cursor-pointer hover:text-gray-600'><span className="text-2xl text-gray-500"><FaBars /></span><span className="ml-1"> Category</span> <span className="text-2xl text-yellow-500 mt-2 ml-1">{categoryShow? <FaArrowUp /> : ''}</span></li></NavLink>
                </ul>
            </div>
            { categoryShow ?
            <div className='mt-3'>
                <ProductCategory />
            </div> : ''
            }
        </div>
    );
};

export default Navbar;