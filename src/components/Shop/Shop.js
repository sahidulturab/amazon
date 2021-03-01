import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
        // console.log(fakeData);
        const first10=fakeData.slice(0,10)
        // console.log(first10);
        const [products,setProducts]=useState(first10)
        // console.log(products);
        const[cart,setCart]=useState([])
        const handleAddProduct=(product)=>{
            console.log("Product Added",product);
            const newCart=[...cart,product]
            setCart(newCart)
        }
    return (
        <div className="shop-container">
            <div className='product-container' >
                <h1>Products</h1>
                {
                    products.map(randomProduct =><Product product={randomProduct} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
            
        </div>
        
        
    );
};

export default Shop;