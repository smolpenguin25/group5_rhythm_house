import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import AlbumDropDownButton from "./AlbumDropDownButton";
import Button from "react-bootstrap/Button";
import ContactUs from "./ContactUs";

function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar">
          <span className="shop-name">Rhythm House</span>
          <Link to="/">Phong</Link>
          <AlbumDropDownButton />
          <Link to="/events">Events</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/about">About Us</Link>
          <Link to="/ContactUs">Contact Us</Link>
          <span className="search">Enter product name: </span><input type="text" placeholder="Search..." value="" onChange="" />

        </div>

        <div className="navbar-button-container">
          <Button variant="light" className="navbar-button">
            Login
          </Button>
          <Button variant="light" className="navbar-button">
            Sign Up
          </Button>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Navbar;
