import React from 'react';
import Slider from '../../Components/Slider/Slider';
import Shop from '../Shop/Shop';
import ProductCategory from '../../Components/ProductCategory/ProductCategory';


const Home = () => {
    return (
        <div className="bg-gray-400">
           <div className="slider">
            <Slider />
           </div>
           <div className="category">
            <ProductCategory />
           </div>
        </div>
    );
};

export default Home;