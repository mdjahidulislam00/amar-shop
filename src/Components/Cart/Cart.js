import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowCircleLeft, FaCartArrowDown, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const addToCarts = props.addToCart;
    const totalPrice = addToCarts.reduce((totalPrice, items) => totalPrice + items.price , 0);
    const[cartVisible, setCartVisible] = useState(false)

    return (
        <div className="fixed right-0">
            <div onClick={()=>setCartVisible(!cartVisible)} className="text-md font-bold bg-yellow-400 rounded-full pt-2 ml-1 cursor-pointer  position-fixed text-center flex flex-col items-center "> <span className='text-xl text-white'><FaCartArrowDown /> </span> <span className="float-right text-white">{addToCarts.length}</span> <span className="text-white rounded-full text-lg px-2 py-1 bg-gray-400 ring-2 ring-white hover:text-xl"> {cartVisible? <FaArrowRight /> : <FaArrowLeft /> } </span> </div>
            { cartVisible?
                <div className="w-60 fixed right-0 flex flex-col items-center justify-between bg-gray-200 border-2 border-gray-400 rounded-lg mx-5">
                    <div className="header w-full text-lg p-2 bg-gray-300 text-gray-900 font-bold text-center">Cart Review</div>
                    <p className='text-lg text-gray-500 font-bold text-center '>Total Items: {addToCarts.length}</p>
                    <p className='text-lg text-gray-500 font-bold text-center'>Order Total: {totalPrice} $</p>
                    <Link to='/cartPage' > <div className="cartReview w-full rounded bg-yellow-600 text-white font-semibold text-lg px-12 py-1 my-2 text-center cursor-pointer hover:bg-yellow-400">Review</div></Link>
                </div> : ''
            }
        </div>
        
    );
};

export default Cart;