import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../../Images/_DSC0024.JPG'
import slider2 from '../../Images/_DSC0059.JPG'
import slider3 from '../../Images/_DSC0055.JPG'

import "swiper/css";
import 'swiper/css/bundle';
import "swiper/css/navigation";
import "swiper/css/pagination";



import { Autoplay, Pagination, Navigation } from "swiper";
const Slider = () => {
    return (
        <div className='container mx-auto'>
            <Swiper
            navigation={true}
            modules={[Navigation]} 
            className="mySwiper"
        >
      <SwiperSlide>
        <div className="my-5">
            <div className="w-full h-[500px] bg-cover" style={{backgroundImage: `url(${slider1})`}}>
            </div>
            <div className="information absolute top-60 left-28">
                <h1 className="text-4xl font-bold text-gray-800 py-2"> I phone 14Pro max</h1>
                <p className="text-lg font-bold py-3">price: 1500$</p>
                <p className='w-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime rerum nobis labore </p>
                <button className='px-3 py-2 bg-yellow-400 text-lg font-bold my-2 rounded hover:bg-yellow-600'>Buy Now</button>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto my-5">
            <div className="w-full h-[500px] bg-cover" style={{backgroundImage: `url(${slider2})`}}>
            </div>
            <div className="information absolute top-60 left-28">
                <h1 className="text-4xl font-bold text-gray-800 py-2"> I phone 14Pro max</h1>
                <p className="text-lg font-bold py-3">price: 1500$</p>
                <p className='w-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime rerum nobis labore </p>
                <button className='px-3 py-2 bg-yellow-400 text-lg font-bold my-2 rounded hover:bg-yellow-600'>Buy Now</button>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container mx-auto my-5">
            <div className="w-full h-[500px] bg-cover" style={{backgroundImage: `url(${slider3})`}}>
            </div>
            <div className="information absolute top-60 left-28">
                <h1 className="text-4xl font-bold text-gray-800 py-2"> I phone 14Pro max</h1>
                <p className="text-lg font-bold py-3">price: 1500$</p>
                <p className='w-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime rerum nobis labore </p>
                <button className='px-3 py-2 bg-yellow-400 text-lg font-bold my-2 rounded hover:bg-yellow-600'>Buy Now</button>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Slider;