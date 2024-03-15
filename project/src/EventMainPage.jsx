import * as React from "react";
import './EventMainPage.css';
import abc from "./event_images/eventimg1.png"

function EventMainPage() {
  const navItems = [
    { label: "Live Concerts", url: "#" },
    { label: "Artist", url: "#" },
    { label: "Charts", url: "#" },

  ];

  const handleBookingClick = () => {
    // Handle booking button click
    console.log("Booking button clicked");
  };

  const handleJoinUsClick = () => {
    // Handle join us button click  
    console.log("Join us button clicked");
  };

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
                <button
                  className="hero-button hero-button-outline"
                  onClick={handleBookingClick}
                >
                  Booking Tickets
                </button>
                <button
                  className="hero-button hero-button-primary"
                  onClick={handleJoinUsClick}  
                >
                  Join Us
                </button>
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