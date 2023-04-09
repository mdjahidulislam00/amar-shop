import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const addToCarts = props.addToCart;
    const totalPrice = addToCarts.reduce((totalPrice, items) => totalPrice + items.price , 0);
    return (
        <div className="w-60 h-80 border-4 border-white flex flex-col items-center justify-between bg-gray-300 rounded mx-5">
                <div className="header w-full text-lg p-2 bg-gray-400 text-gray-900 font-bold text-center">Cart Review</div>
                <p className='text-lg text-red-500 font-bold text-center p-1'>Total Items: {addToCarts.length}</p>
                <p className='text-lg text-red-500 font-bold text-center p-1'>Order Total: {totalPrice} $</p>
                <Link to='/cartPage' > <div className="cartReview w-48 rounded bg-gray-400 text-lg font-bold p-2 mb-1 text-center cursor-pointer hover:bg-yellow-400">Review</div></Link>
        </div>
    );
};

export default Cart;