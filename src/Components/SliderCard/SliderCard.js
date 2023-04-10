import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderCard = (props) => {
    console.log (props)
    
    return (
        <div>
                    <div className="my-5">
                        <div className="w-full h-[550px] bg-fill relative" style={{backgroundImage: `url(${props.img1.img})`}}>
                        </div>
                        <div className="information absolute top-60 left-28">
                            <h1 className="text-4xl font-bold text-gray-800 py-2"> {props.name1.name}</h1>
                            <p className="text-lg font-bold py-1">Seller: addidas</p>
                            <p className="text-lg font-bold py-3">price: 420$</p>
                            <p className='w-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime rerum nobis labore </p>
                            <button className='px-3 py-2 bg-yellow-400 text-lg font-bold my-2 rounded hover:bg-yellow-600'>Buy Now</button>
                        </div>
                    </div>
        </div>
    );
};

export default SliderCard;