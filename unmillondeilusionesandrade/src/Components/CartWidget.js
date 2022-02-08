import React from 'react';
import Cart from '../assets/cart.jpg';


const CartWidget = () => {
    return (
        <div>
            <img src={Cart}/>
            <span style={{ color:'white' }}> 2 </span>
        </div>
    );
}

export default CartWidget;