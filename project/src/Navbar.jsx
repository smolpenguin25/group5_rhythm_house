import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import AlbumDropDownButton from "./AlbumDropDownButton";
import Button from "react-bootstrap/Button";

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
          <Link to="/contact">Contact Us</Link>
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
