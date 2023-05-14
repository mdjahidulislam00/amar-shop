import React, { useContext } from 'react';
import { FaCartArrowDown, FaShoppingCart, FaSearch, FaUser } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import {NavLink} from 'react-router-dom';
import { currentUser} from '../../App';
import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebase.config';

const app = initializeApp(firebaseConfig);

const Header = () => {
    const[logInUser, setLogInUser] = useContext(currentUser);

    const auth = getAuth(app);
    const handelSignOutUser = () =>
        signOut(auth)
        .then(() => {
            setLogInUser(' ');
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    return (
        <div className="bg-yellow-600 ">
            <div className='container mx-auto'>
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
                  <NavLink to='/signUpPage' > <div className="signInSection border border-white p-2 rounded-lg text-white flex items-center font-semibold justify-center space-x-1 hover:bg-yellow-400"> <FaUser /> {logInUser.email ? <span onClick={() => handelSignOutUser()} >{logInUser.email.displayName}</span> : <span>Sign Up</span>}  </div> </NavLink>
                  <NavLink to='/cartPage' > <div className=" p-2 cursor-pointer border border-white rounded-lg flex flex-row items-center space-x-1 text-white text-md font-semibold hover:bg-yellow-400"> <FaShoppingCart /> <span>Cart</span></div>  </NavLink>
                </div>
            </div>
        </div>
        <Navbar />  
        </div>
    );
};

export default Header;