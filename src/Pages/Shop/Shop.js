import React from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';

const Shop = () => {
    return (
        <div className='py-10 bg-gray-200 '>
            <div className="cardContainer container mx-auto grid grid-cols-3 justify-center">
                  <ProductCard />
            </div>
        </div>
    );
};

export default Shop;