import React from 'react';

const ReviewItemsCard = (props) => {
    const{id, name, img, price, quantity} = props.product;

    return (
        <div className='bg-gray-300 container mx-auto rounded'>
            <div className="ReviewCard flex flex-row space-x-10 border-b-2 border-gray-400 p-3">
                <div className="images-section basis-5/12 flex justify-center ">
                    <img className='w-72 h-72 p-2  rounded-full ' src={img} alt="Product-img" />
                </div>
                <div className="information-section basis-7/12">
                    <p className='p-2 text-2xl font-bold'>{name}</p>
                    <p className='p-2 text-lg font-semibold'>Quantity: {quantity}</p>
                    <p className='p-2 text-lg font-semibold'>Price: {price} $</p>
                    <button onClick={()=> props.RemoveProductFromSave(id)}  className="py-2 px-4 mt-10 rounded bg-yellow-400 text-lg font-bold hover:bg-yellow-500">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItemsCard;