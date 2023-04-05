import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getShoppingCart, removeFromDb } from '../../ema-john-resources-main/utilities/fakedb';
import FakeData from '../../ema-john-resources-main/fakeData/products.json'
import ReviewItemsCard from '../../Components/RevewItmsCard/ReviewItemsCard';
const CartPage = () => {
    const [CartProduct, setCartProduct] = useState([]);
    const RemoveProductFromSave = (id) => {
        const newCartProduct = CartProduct.filter(pd => pd.id !== id)
        setCartProduct(newCartProduct);
        removeFromDb(id);
    }

    useEffect(()=>{
        const saveCartProduct = getShoppingCart();
        const saveCartId = Object.keys(saveCartProduct);

        const saveCartProducts = saveCartId.map(id =>{
        const saveProducts = FakeData.find(pd => pd.id === id);
            saveProducts.quantity =  saveCartProduct[id];
            return saveProducts;
        })
            setCartProduct(saveCartProducts);
    },[])
    return (
        <div className="bg-gray-400">
            <div className="ReviewHeader py-5 text-center text-4xl font-bold">Product Review</div>
            {
                CartProduct.map(pd => <ReviewItemsCard pd={pd} RemoveProductFromSave={RemoveProductFromSave}></ReviewItemsCard> )
            }
        </div>
    );
};

export default CartPage;