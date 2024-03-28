import './Cart.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function Cart({ cart }) {
    const [CartList, setCartList] = useState(cart);

    console.log(CartList.length);

    const renderCartItem = CartList.map((item) => (
        <div className='cart-item-list'>
            <img src={item.avatar} alt={item.avatar} className='cart-item-avatar' />
            <div className='cart-item'>
                <h4>{item.name}</h4>

                <div className='font-20'>
                    <span>Amount: </span>
                    <span className='amount-box'>{item.amount}</span>
                    <ButtonGroup aria-label="Basic example" className='change-button'>
                            <Button variant="primary" className='inside-button'>-</Button>
                            <Button variant="primary" className='inside-button1'>+</Button>
                    </ButtonGroup>
                </div>

                <div className='font-20'>
                    <span>Total: </span>
                    <span className='red-price'>{item.price * item.amount}$ </span>
                    <span className='cross-span'>{item.sell} </span>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="cart-container">
            <h3 className="cart-header">Items in cart</h3>
            <div className="cart-list">
                {renderCartItem}
            </div>
        </div>
    );
}

export default Cart;