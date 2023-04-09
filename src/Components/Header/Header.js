import React from 'react';
import { FaCartArrowDown, FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <div className="wrap">
            <div className='bg-yellow-600'>
                <div className="logoAndNav container mx-auto flex flex-row items-center justify-between py-5">
                    <div className="logoSection">
                        <div className="icon text-white text-3xl p-3 flex flex-row items-center"> 
                            <FaCartArrowDown />
                            <span className='font-mono ml-2'> AmarShop</span>
                        </div>
                    </div>
                    <div className="SearchOption ">
                    <div className="Option flex flex-row">
                        <input className="w-96 h-12  px-3 py-2 focus:outline-none  focus:border-2 border-gray-500 rounded-l-md" type="text" placeholder="Search what you want" />
                        <div className='w-16 h-12 bg-yellow-500 text-white p-3 rounded-r-md flex items-center justify-center cursor-pointer hover:bg-yellow-400' type='submit'> <FaSearch /> </div>
                    </div>
                </div>
                <div className="CartAndLogin flex flex-row items-center space-x-3"> 
                  <NavLink to='/logInPage' > <div className="signInSection border border-white p-3 rounded text-white flex items-center font-semibold justify-center space-x-1 hover:bg-yellow-400"> <FaUser /> <span>Sign In</span> </div> </NavLink>
                  <NavLink to='/cartPage' > <div className=" p-3 cursor-pointer border border-white rounded flex flex-row items-center space-x-1 text-white text-md font-semibold hover:bg-yellow-400"> <FaShoppingCart /> <span>Cart: 0</span></div>  </NavLink>
                </div>
            </div>
        </div>
        <Navbar />  
        </div>
    );
};

export default Header;