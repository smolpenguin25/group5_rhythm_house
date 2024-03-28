import "./Cart.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const [CartList, setCartList] = useOutletContext();

  //console.log(CartList.length);

  const [Total, setTotal] = useState(0);

  useEffect(() => {
    var total = 0;
    for (let i = 0; i < CartList.length; i++) {
      total += CartList[i].price * CartList[i].amount;
    }
    setTotal(total);
  });

  const renderCartItem = CartList.map((item) => (
    <div className="cart-item-list">
      <div className="item-avater-container">
        <img src={item.avatar} alt={item.avatar} className="cart-item-avatar" />
      </div>

      <div className="cart-item">
        <h4>{item.name}</h4>

        <div className="font-20">
          <span>Amount: </span>
          <span className="amount-box">{item.amount}</span>
          <ButtonGroup aria-label="Basic example" className="change-button">
            <Button
              variant="primary"
              className="inside-button"
              onClick={() => {
                item.amount--;
                if (item.amount <= 0) {
                  const tempCart = CartList.filter((i) => i.name !== item.name);
                  setCartList(tempCart);
                } else {
                  setCartList((oldCart) => [...oldCart]);
                }
              }}
            >
              -
            </Button>
            <Button
              variant="primary"
              className="inside-button1"
              onClick={() => {
                item.amount++;
                setCartList((oldCart) => [...oldCart]);
              }}
            >
              +
            </Button>
          </ButtonGroup>
        </div>

        <div className="font-20">
          <span>Price: </span>
          <span className="red-price">{item.price * item.amount}$ </span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="cart-container">
      <h3 className="cart-header">Items in cart</h3>
      <div className="cart-list">{renderCartItem}</div>
      <div className="pay-bar-container">
        <div className="pay-bar">
          <div className="pay-label">Total: {Total}$</div>
          <div>
            <Button className="pay-button">To Payment</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
