import React, { useState } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';

const ReviewItemsCard = (props) => {
    const [product, setProduct] = useState([]);
    const newProduct = [props.pd];
    setProduct(newProduct);
    console.log(product)
    const{id, name, img, price, quantity} = props.pd;

    return (
        <div className='bg-gray-300 container mx-auto rounded'>
            <div className="ReviewCard flex flex-row space-x-10 border-b-2 border-gray-400 ">
                <div className="images-section basis-5/12 flex justify-center ">
                    <img className='w-72 h-72 p-2  rounded-full ' src={img} alt="Product-img" />
                </div>
                <div className="information-section basis-7/12">
                    <p className='p-3 text-2xl font-bold'>{name}</p>
                    <p className='p-2 text-lg font-semibold'>Quantity: {quantity}</p>
                    <p className='p-2 text-lg font-semibold'>Price: {price} $</p>
                    <button onClick={()=> props.RemoveProductFromSave(id)}  className="py-2 px-4 mt-10 rounded bg-yellow-400 text-lg font-bold hover:bg-yellow-500">Remove</button>
                </div>
            </div>
            <div className="review-Cart"> 
                {/* <ReviewCart product={product} ></ReviewCart> */}
            </div>
        </div>
    );
};

export default ReviewItemsCard;