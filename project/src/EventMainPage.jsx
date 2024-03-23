import * as React from "react";
import './EventMainPage.css';
import abc from "./img/eventimg1.png";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function EventMainPage() {
 const navItems = [
    { label: "Live Concerts", url: "#" },
    { label: "Artist", url: "#" },
    { label: "More", url: "/group5_rhythm_house/#/more/" },
 ];

//  const handleBookingClick = () => {
//     console.log("Booking button clicked");
//  };

 return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <img
            src={abc}
            className="hero-background"
            alt="error"
          />
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Artist and Band <br/>Best Platform!</h1>
              <p className="hero-description">
                Enlarge Connecting Venues,Bands and Fans{" "}
              </p>
              <div className="hero-actions">
                <Link
                 to="/event-schedule" // Link to the target page
                 className="hero-button hero-button-outline"
                >
                 Booking Ticket
                </Link>
                <Link
                 to="/join-us" // Link to the target page
                 className="hero-button hero-button-primary"
                >
                 Join Us
                </Link>
              </div>
              <nav className="hero-nav">
                <ul className="hero-nav-list">
                 {navItems.map((item, index) => (
                    <li key={index} className="hero-nav-item">
                      <a href={item.url} className="hero-nav-link">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
 );
}

export default EventMainPage;
