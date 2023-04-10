import React from 'react';
import SliderData from '../../e-commerce-fakedata.json';
import sliderImage1 from '../../Images/_DSC0024.JPG';
import sliderImage2 from '../../Images/_DSC0055.JPG';
import sliderImage3 from '../../Images/_DSC0058.JPG';
import sliderImage4 from '../../Images/_DSC0059.JPG';
import sliderImage5 from '../../Images/_DSC0060.JPG';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Autoplay, Navigation, Pagination } from "swiper";

const Slider = () => {

    return (
        <div className='container mx-auto '>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>    
                    <div className="my-5">
                        <div className="w-full h-[550px] bg-cover relative rounded" style={{backgroundImage: `url(${sliderImage1})`, width:"1300px", height:'550px'}}>
                        </div>
                        <div className="information absolute top-60 left-28">
                            <h1 className="text-4xl font-bold text-gray-800 py-2">I phone 14 pro max</h1>
                            <p className="text-lg font-bold py-1">Seller: addidas</p>
                            <p className="text-lg font-bold py-3">price: 420$</p>
                            <p className='w-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime rerum nobis labore </p>
                            <button className='px-3 py-2 bg-yellow-400 text-lg font-bold my-2 rounded hover:bg-yellow-800'>Buy Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>    
                    <div className="my-5">
                        <div className="w-full h-[550px] bg-cover rounded relative" style={{backgroundImage: `url(${sliderImage2})`, width:"1300px", height:'550px'}}>
                        </div>
                        <div className="information absolute top-60 left-28">
                            <h1 className="text-4xl font-bold text-gray-800 py-2">I phone 14 pro max</h1>
                            <p className="text-lg font-bold py-1">Seller: addidas</p>
                            <p className="text-lg font-bold py-3">price: 420$</p>
                            <p className='w-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime rerum nobis labore </p>
                            <button className='px-3 py-2 bg-yellow-400 text-lg font-bold my-2 rounded hover:bg-yellow-800'>Buy Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>    
                    <div className="my-5">
                        <div className="w-full h-[550px] bg-cover rounded relative" style={{backgroundImage: `url(${sliderImage3})`, width:"1300px", height:'550px'}}>
                        </div>
                        <div className="information absolute top-60 left-28">
                            <h1 className="text-4xl font-bold text-gray-800 py-2">I phone 14 pro max</h1>
                            <p className="text-lg font-bold py-1">Seller: addidas</p>
                            <p className="text-lg font-bold py-3">price: 420$</p>
                            <p className='w-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime rerum nobis labore </p>
                            <button className='px-3 py-2 bg-yellow-400 text-lg font-bold my-2 rounded hover:bg-yellow-800'>Buy Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>    
                    <div className="my-5">
                        <div className="w-full h-[550px] bg-cover rounded relative" style={{backgroundImage: `url(${sliderImage4})`, width:"1300px", height:'550px'}}>
                        </div>
                        <div className="information absolute top-60 left-28">
                            <h1 className="text-4xl font-bold text-gray-800 py-2">I phone 14 pro max</h1>
                            <p className="text-lg font-bold py-1">Seller: addidas</p>
                            <p className="text-lg font-bold py-3">price: 420$</p>
                            <p className='w-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime rerum nobis labore </p>
                            <button className='px-3 py-2 bg-yellow-400 text-lg font-bold my-2 rounded hover:bg-yellow-800'>Buy Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>    
                    <div className="my-5">
                        <div className="w-full h-[550px] bg-cover rounded relative" style={{backgroundImage: `url(${sliderImage5})`, width:"1300px", height:'550px'}}>
                        </div>
                        <div className="information absolute top-60 left-28">
                            <h1 className="text-4xl font-bold text-gray-800 py-2">I phone 14 pro max</h1>
                            <p className="text-lg font-bold py-1">Seller: addidas</p>
                            <p className="text-lg font-bold py-3">price: 420$</p>
                            <p className='w-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime rerum nobis labore </p>
                            <button className='px-3 py-2 bg-yellow-400 text-lg font-bold my-2 rounded hover:bg-yellow-800'>Buy Now</button>
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>
           
        </div>
        );
    };

export default Slider;