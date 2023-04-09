import React, { useEffect } from 'react';
import { useState } from 'react';
import FakeData from '../../e-commerce-fakedata.json';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { addToDb, getShoppingCart } from '../../ema-john-resources-main/utilities/fakedb';
import Cart from '../../Components/Cart/Cart';



const Shop = () => {
    const FakeData12 = FakeData.slice(3, 15);
    const [addToCart, setAddToCart] = useState([]);

    const AddProductToCart =(singleProduct)=>{
        const newCartAdd = [...addToCart, singleProduct];
        setAddToCart(newCartAdd);
        addToDb(singleProduct.id)
    }

    useEffect(()=>{
        const saveCartProduct = getShoppingCart();
        const saveCartId = Object.keys(saveCartProduct);

        const saveCartProducts = saveCartId.map(id =>{
        const saveProducts = FakeData.find(pd => pd.id === id);
            saveProducts.quantity =  saveCartProduct[id];
            return saveProducts;
        })
            setAddToCart(saveCartProducts);
    },[])
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