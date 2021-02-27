import React, { useState } from 'react';
import fakeData from '../../fakeData'

const Shop = () => {
        // console.log(fakeData);
        const first10=fakeData.slice(0,10)
        // console.log(first10);
        const [products,setProducts]=useState(first10)
        // console.log(products);
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;