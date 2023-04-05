import React from 'react';
import { useState } from 'react';
import FakeData from '../../e-commerce-fakedata.json';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { addToDb } from '../../ema-john-resources-main/utilities/fakedb';
import Cart from '../../Components/Cart/Cart';



const Shop = () => {
    const FakeData12 = FakeData.slice(30,42);
    const [addToCart, setAddToCart] = useState([]);
    console.log(addToCart);

    const AddProductToCart =(singleProduct)=>{
        const newCartAdd = [...addToCart, singleProduct];
        setAddToCart(newCartAdd);
        addToDb(singleProduct.id)
    }
    return (
        <div className='py-10 bg-gray-200 flex  '>
            <div className="cardContainer container mx-auto grid grid-cols-3 px-10 gap-10 justify-center">
                {
                    FakeData12.map(FData => <ProductCard key={FData.id} AddProductToCart={AddProductToCart} FakeData={FData}></ProductCard>)
                }
            </div>
            <div>
                <Cart addToCart={addToCart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;