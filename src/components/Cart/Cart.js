import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // const total= cart.reduce((total,prd)=>total=total+prd.price,0)
    let total=0;
    for(let i=0; i<cart.length; i++){
        const product=cart[i];
        total= total+ product.price;
    }
    let shipping=0
    if(total>350){
        shipping=0;
    }
    else if(total>150){
        shipping=4.99
    }
    else if(total>0){
        shipping=12.99
    }
    
    const tax = parseFloat((total/10).toFixed(2))
   
    const formatNumber= num=>{
        const precision=num.toFixed(2)
        return Number(precision)
    }
   
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered :{cart.length} </p>
            <p>Product Price:{formatNumber(total)}</p>
            <p>Shipping Cost :{shipping}</p>
            <p>Tax + Vat :{tax} </p>
            <p>Total Price : {formatNumber(total+shipping+tax)}</p>
        </div>
    );
};

export default Cart;