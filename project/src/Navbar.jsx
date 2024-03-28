import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import AlbumDropDownButton from "./AlbumDropDownButton";
import Button from "react-bootstrap/Button";
import { Icon } from 'react-icons-kit';
import { shopping_cart } from 'react-icons-kit/ikons/shopping_cart';
import React, { useState, useEffect } from 'react';


function Navbar() {
  const cart_icon = shopping_cart;

  const [CartList, setCartList] = useState([]);

  const [totalAmount, settotalAmount] = useState(0);

  const calAmount = () => {
    if(CartList.length === 0){
      settotalAmount(0);
    }
    else{
      var total = 0;
      for(let i = 0; i < CartList.length; i++){
        total += CartList[i].amount;
      }
      settotalAmount(total);
    }
  }

  useEffect(() => {
    calAmount();
    console.log(totalAmount);
  });


  return (
    <div>
      <div className="navbar-container">
        <div className="navbar">
          <span className="shop-name">Rhythm House</span>
          <Link to="/">Home</Link>
          <AlbumDropDownButton />
          <Link to="/events">Events</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
          
        <div className="icon-container-1">
          <Link to="/cart" className="icon-1"><Icon icon={cart_icon} size={30} /></Link>
          <div  className="cart-label-container">
            <label className="cart-label">{CartList.length}</label>
          </div>  
        </div>

        <div className="navbar-button-container">
          <Button variant="light" className="navbar-button" href="#/login">
            Login
          </Button>
          <Button variant="light" className="navbar-button" href="#/signup">
            Sign Up
          </Button>
        </div>
      </div>
      <Outlet context={[CartList, setCartList]}></Outlet>
    </div>
  );
}

export default Navbar;
