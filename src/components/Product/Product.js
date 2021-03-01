
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    console.log(props.product.name);
    return (
        <div className='product'>
            <div >
            <img src={props.product.img} alt=""/>
            </div>
            <div className='product-details'>
            <h4 className='product-name'>{props.product.name}</h4>
            {/* <br/> */}
            <p><small>By: {props.product.seller}</small></p>
            <br/>
            <p className='price'>${props.product.price}</p>
            <p><small>Only {props.product.stock} left in stock. Order Soon</small></p>
            <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;