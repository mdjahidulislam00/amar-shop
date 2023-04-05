import React from 'react';

const ReviewCart = (props) => {
    console.log(props.product)
    const addToCarts = props.product;
    const totalPrice = addToCarts.reduce((totalPrice, items) => totalPrice + items.price , 0);

    let Shipping = 0;
    if(totalPrice !== 0 && totalPrice < 100){
        Shipping=20;
    }
    else if(totalPrice > 100){
        Shipping = 5;
    }
    const Total = totalPrice + Shipping;
    const TaxAndVat = Total/10;
    return (
        <div>
            <div className="w-60 h-80 border-4 border-white flex flex-col items-center justify-between bg-gray-300 rounded mx-5">
                <div className="header w-full text-lg p-2 bg-gray-400 text-gray-900 font-bold text-center">Cart Review</div>
                <p className='text-lg text-red-500 font-bold text-center p-2'>Total Items: {addToCarts.length}</p>
                <div className="cartProductInfo">
                    <p><span className="font-bold ">Items Price :</span>  {totalPrice} $</p>
                    <p><span className="font-bold ">Shipping :</span> {Shipping} $</p>
                    <p><span className="font-bold ">Total :</span> {totalPrice + Shipping} $</p>
                    <p><span className="font-bold ">Tax & Vat :</span> {TaxAndVat} $</p>
                </div>
                <p className='text-lg text-red-500 font-bold text-center p-2'>Order Total: {Total+TaxAndVat} $</p>
                <div className="cartReview w-48 rounded bg-gray-400 text-lg font-bold p-2 mb-1 text-center cursor-pointer hover:bg-yellow-400">Order Place</div>
        </div>
        </div>
    );
};

export default ReviewCart;