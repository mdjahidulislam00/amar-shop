import React from 'react';
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const{name, stock, img, price, ratingsCount, id} = props.FakeData;
    return (
        <div>
            <div className="card w-72 border-4 border-gray-100 rounded-md">
                    <Link to={'/products/' + id} > <div className="cardImage flex justify-center"> <img className='rounded' src={img} style={{width:'280px', height:'250px'}} alt="Card Images" /> </div>
                    <div className="cardHeader bg-gray-300 py-1 px-2">
                        <div className='text-blue-500 flex'>In stoke <span className='ml-1 flex items-center'> {stock} </span> </div>
                        <div className='h-10 text-sm font-semibold flex'>{name}</div>  
                    </div> </Link>
                    <div className="info text-center flex justify-between px-2 py-1">
                        <p>Rating: {ratingsCount} </p>  
                        <p className='text-yellow-400 flex flex-row space-x-1'>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </p>                    
                    </div>
                    <div className="pricing flex flex-row justify-between p-1 mx-1 bg-gray-300">
                        <div className="price px-2 flex items-center text-center rounded bg-slate-100">{price} $</div>
                            <div className='text-lg font-bold flex items-center'>*</div>
                            <div className="count bg-gray-400 rounded flex p-1">
                                <div className="minus px-2 cursor-pointer flex items-center hover:text-gray-200"> <FaMinus /> </div>
                                <div className="countNumber px-2 bg-slate-200 text-center rounded">1</div>
                                <div className="plus px-2 cursor-pointer flex items-center hover:text-gray-200"> <FaPlus /> </div>
                            </div>
                            <div className='text-lg font-bold flex items-center'>=</div>
                        <div className="price px-2 flex items-center rounded bg-slate-100">{price} $</div>
                    </div>
                    <div onClick={()=>props.AddProductToCart(props.FakeData)} className="cartButton bg-yellow-600 text-center text-white font-semibold mx-1 my-1 py-2 rounded cursor-pointer hover:bg-yellow-400">Add to Cart</div>
            </div>       
        </div>
    );
};

export default ProductCard;