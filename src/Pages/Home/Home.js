import React from 'react';
import Slider from '../../Components/Slider/Slider';
import Shop from '../Shop/Shop';


const Home = () => {
    return (
        <div className="bg-gray-400">
           <div className="slider">
            <Slider />
           </div>
           <div className="shop">
            <Shop />
           </div>
        </div>
    );
};

export default Home;