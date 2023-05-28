import React from 'react';
import FakeData from '../../e-commerce-fakedata.json'
import { Link, useParams } from 'react-router-dom';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import Shop from '../Shop/Shop';

const ProductDetails = () => {
    const {id} = useParams();
    const dataMatch = FakeData.find(pd => pd.id === id);
    const{img, name, category, seller, price, stoke, ratingsCount, Shipping, } = dataMatch;
    console.log(dataMatch);
    return (
        <div className='bg-gray-300 '>
            <div className="productAllInformation container mx-auto flex">
                <div className="productImages basis-6/12 bg-gray-400 flex items-center justify-center">
                    <img className='border-4 rounded ' src={img} alt="ProductImage" />
                </div>
                <div className="productDetails basis-6/12 bg-gray-200 p-10 ">
                    <div className="productDetailsHeader">
                        <div className='text-blue-500 flex'>In stoke </div>
                        <div className='text-2xl font-bold text-rose-500'>{name}</div>
                        <div className='text-lg'>{category}</div>
                        <span className="seller bg-yellow-500 rounded px-2">{seller}</span>
                        <div className='text-yellow-400 flex flex-row space-x-1 py-2'>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <span className='text-gray-600'>({ratingsCount})</span>
                        </div>
                    </div>
                    <div className="productDetailsInformation py-5 text-justify">
                        <span className="text-xl font-semibold">About Product:</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Corporis atque voluptate consectetur distinctio quo quibusdam!
                            Esse, quisquam aliquid sunt similique non rerum expedita iste
                            fugit consectetur porro, error vel eveniet!
                        </p>
                    </div>
                    <div className="size mt-10 flex space-x-5 text-lg font-semibold">
                        <div className='text-xl font-bold'>Size:</div>
                        <div className="border border-black rounded-md px-2 cursor-pointer hover:bg-yellow-400">S</div>
                        <div className="border border-black rounded-md px-2 cursor-pointer hover:bg-yellow-400">M</div>
                        <div className="border border-black rounded-md px-2 cursor-pointer hover:bg-yellow-400">XL</div>
                    </div>
                    <div className="pricing flex flex-row justify-between p-1 mx-1 bg-gray-300 mt-5 w-72 text-lg">
                        <div className="price px-2 flex items-center text-center rounded bg-slate-100">{price}</div>
                            <div className='text-lg font-bold flex items-center'>*</div>
                            <div className="count bg-gray-400 rounded flex p-1">
                                <div className="minus px-2 cursor-pointer flex items-center hover:text-gray-200"> <FaMinus /> </div>
                                <div className="countNumber px-2 bg-slate-200 text-center rounded">1</div>
                                <div className="plus px-2 cursor-pointer flex items-center hover:text-gray-200"> <FaPlus /> </div>
                            </div>
                            <div className='text-lg font-bold flex items-center'>=</div>
                        <div className="price px-2 flex items-center rounded bg-slate-100">{price}</div>
                    </div>
                    <div className="price mt-1 text-3xl font-bold text-rose-500  py-5">
                       $ {price}
                    </div>
                    <Link to='/cartPage'><span className="button bg-yellow-500 py-2 px-8 text-xl font-bold rounded cursor-pointer hover:bg-yellow-400">Buy</span></Link> 
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;