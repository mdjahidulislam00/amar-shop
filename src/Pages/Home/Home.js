import React from 'react';
import Slider from '../../Components/Slider/Slider';
import ProductCategory from '../../Components/ProductCategory/ProductCategory';
import Shop from '../Shop/Shop';


const Home = () => {
    return (
        <div className="bg-gray-400">
           <div className="slider">
            <Slider />
           </div>
           <div className="category">
            <ProductCategory />
           </div>
           <div className="shop mt-10">
            <Shop />
           </div>
        </div>
    );
};

export default Home;