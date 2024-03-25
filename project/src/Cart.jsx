import './Cart.css';
import React, { useState } from 'react';


function Cart({ cart }) {
    const [CartList, setCartList] = useState(cart);

    console.log(CartList.length);

    const renderCartItem = CartList.map((item) => (
        <div className='cart-item-list'>
            <img src={item.avatar} alt={item.avatar} className='cart-item-avatar'/>
            <div className='cart-item'>
                <h5>{item.name}</h5>
            </div>
        </div>
    ))

    return (
        <div className="home-container">
            <h3 className="cart-header">Items in cart</h3>
            <div className="cart-list">
                {renderCartItem}
            </div>
        </div>
    );
}

export default Cart;