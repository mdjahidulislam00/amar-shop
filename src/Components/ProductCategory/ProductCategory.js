import React from 'react';
import { FaBus, FaFemale, FaFootballBall, FaHome, FaMale, FaMobileAlt, FaPrescriptionBottle, FaShoePrints, FaTv } from 'react-icons/fa';

const ProductCategory = () => {
    return (
        <div className='bg-gray-200'>
            <div className="title text-3xl font-semibold py-5 ml-12">
                Search Product by Category
            </div>
            <div className="category container mx-auto grid grid-cols-4">
                <div className="mobile bg-yellow-400 m-5 rounded-lg">
                    <div className="cardContainer flex flex-row space-x-5 py-2 items-center justify-around">
                        <div className="text-xl font-semibold flex flex-col">
                            <span>Mobile Phone</span>
                            <span className="text-sm">(1250)</span>
                        </div>
                        <div className="text-6xl text-gray-500"> <FaMobileAlt /> </div>
                    </div>
                </div>
                <div className="Electronic bg-yellow-400 m-5 border-4 rounded-lg">
                    <div className="cardContainer flex flex-row space-x-5 py-2 items-center justify-around">
                        <div className="text-xl font-semibold flex flex-col">
                            <span>Electronic</span>
                            <span className="text-sm">(1170)</span>
                        </div>
                        <div className="text-6xl text-gray-500"> <FaTv /> </div>
                    </div>
                </div>
                <div className="vehicles bg-yellow-400 m-5 border-4 rounded-lg">
                    <div className="cardContainer flex flex-row space-x-5 py-2 items-center justify-around">
                        <div className="text-xl font-semibold flex flex-col">
                            <span>vehicles</span>
                            <span className="text-sm">(1170)</span>
                        </div>
                        <div className="text-6xl text-gray-500"> <FaBus /> </div>
                    </div>
                </div>
                <div className="Home and Living bg-yellow-400 m-5 border-4 rounded-lg">
                    <div className="cardContainer flex flex-row space-x-5 py-2 items-center justify-around">
                        <div className="text-xl font-semibold flex flex-col">
                            <span>Home & Living</span>
                            <span className="text-sm">(1170)</span>
                        </div>
                        <div className="text-6xl text-gray-500"> <FaHome /> </div>
                    </div>
                </div>
                <div className="Girls Fashion bg-yellow-400 m-5 border-4 rounded-lg">
                    <div className="cardContainer flex flex-row space-x-5 py-2 items-center justify-around">
                        <div className="text-xl font-semibold flex flex-col">
                            <span>Girls Fashion</span>
                            <span className="text-sm">(1170)</span>
                        </div>
                        <div className="text-6xl text-gray-500"> <FaFemale /> </div>
                    </div>
                </div>
                <div className="Boys Fashion bg-yellow-400 m-5 border-4 rounded-lg">
                    <div className="cardContainer flex flex-row space-x-5 py-2 items-center justify-around">
                        <div className="text-xl font-semibold flex flex-col">
                            <span>Boys Fashion</span>
                            <span className="text-sm">(1170)</span>
                        </div>
                        <div className="text-6xl text-gray-500"> <FaMale /> </div>
                    </div>
                </div>
                <div className="Sports bg-yellow-400 m-5 border-4 rounded-lg">
                    <div className="cardContainer flex flex-row space-x-5 py-2 items-center justify-around">
                        <div className="text-xl font-semibold flex flex-col">
                            <span>Sports</span>
                            <span className="text-sm">(1170)</span>
                        </div>
                        <div className="text-6xl text-gray-500"> <FaFootballBall /> </div>
                    </div>
                </div>
                <div className="Daily Essential bg-yellow-400 m-5 border-4 rounded-lg">
                    <div className="cardContainer flex flex-row space-x-5 py-2 items-center justify-around">
                        <div className="text-xl font-semibold flex flex-col">
                            <span>Daily Essential</span>
                            <span className="text-sm">(1170)</span>
                        </div>
                        <div className="text-6xl text-gray-500"> <FaPrescriptionBottle /> </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ProductCategory;