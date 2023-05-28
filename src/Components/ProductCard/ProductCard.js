import React from 'react';
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const{name, stock, img, price, ratingsCount, id} = props.FakeData;
    return (
        <div className="product-card hover:scale-105 duration-200">
           <Link to={'/products/details/' + id} ><div className="">
                <img src={img} alt=""  className="h-full w-full rounded-lg bg-cover items-center"/>
            </div>
            </Link>
            <div className="card-header mx-2 relative flex flex-row justify-between items-center">
                <div className="div left-body">
                    <h2 className="text-blue-500 text-sm">In Stock</h2>
                    <h2>{name}</h2>
                    <p className='text-yellow-400 flex flex-row space-x-1 mb-5'>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        <p className='text-black'>({ratingsCount})</p> 
                    </p>
                </div>
                <div className="pricing">
                    <h2 className='text-yellow-500 text-lg font-semibold'>{price}$</h2>
                </div>   
            </div>
            <div onClick={()=>props.AddProductToCart(props.FakeData)} className="cartButton bg-yellow-600 text-center text-white font-semibold py-2 rounded cursor-pointer hover:bg-yellow-400">Add to Cart</div>
        </div>
    );
};

export default ProductCard;