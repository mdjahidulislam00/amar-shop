import React from 'react';
import FakeData from '../../e-commerce-fakedata.json'
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
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
                    <div className="price mt-5 text-3xl font-bold text-rose-500  py-5">
                       $ {price}
                    </div>
                    <span className="button bg-yellow-500 py-2 px-8 text-xl font-bold rounded cursor-pointer hover:bg-yellow-400">Buy</span>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;