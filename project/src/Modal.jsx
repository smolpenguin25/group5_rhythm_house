// TicketModal.jsx
import React from 'react';
import Popup from 'reactjs-popup';
import './Modal.css'
import tier1 from "./img/TIER1.png"
import tier2 from "./img/TIER2.png"
import tier3 from "./img/TIER3.png"



const TicketModal = ({ open, closeModal }) => {
  return (
    <Popup  open={open} closeOnDocumentClick onClose={closeModal} >
      <h2 >Buy Concert Ticket</h2>
      <p>Select your ticket tier:

      </p>
      <button className="close-modal" onClick={closeModal}>Close</button>
      <figure class="movie">

        <div class="movie__hero">
          <img src={tier1} alt="Rambo" class="movie__img" />
        </div>
        <div class="movie__content">
          <div class="movie__title">
            <h1 class="heading__primary">TIER I <i class="fas fa-fire"></i></h1>
            <div class="movie__tag movie__tag--1">#jazz</div>
            <div class="movie__tag movie__tag--2">#edm</div>
          </div>
          <p class="movie__description">
          General admission to the concert.
          </p>
          <div class="movie__details">
            <p class="movie__detail"><span class="icons icons-red"><i class="fas fa-camera-retro"></i> </span>Normal Seat</p>
            <p class="movie__detail"><span class="icons icons-grey"><i class="fas fa-clock"></i> </span>1 hour</p>
            <p class="movie__detail"><span class="icons icons-yellow"><i class="fas fa-file-invoice-dollar"></i>
            </span>Time: 7:00 PM</p>
          </div>
        </div>
        <div class="movie__price">$12.56</div>
      </figure>
      <figure class="movie">
        <div class="movie__hero">
          <img src={tier2} alt="Rambo" class="movie__img" />
        </div>
        <div class="movie__content">
          <div class="movie__title">
            <h1 class="heading__primary">TIER II <i class="fas fa-fire"></i></h1>
            <div class="movie__tag movie__tag--1">#jazz</div>
            <div class="movie__tag movie__tag--2">#edm</div>
          </div>
          <p class="movie__description">
          Reserved seating in the front rows, complimentary drink vouchers, and a limited edition concert poster.
          </p>
          <div class="movie__details">
            <p class="movie__detail"><span class="icons icons-red"><i class="fas fa-camera-retro"></i> </span>Premium Seat</p>
            <p class="movie__detail"><span class="icons icons-grey"><i class="fas fa-clock"></i> </span>3 hours</p>
            <p class="movie__detail"><span class="icons icons-yellow"><i class="fas fa-file-invoice-dollar"></i>
            </span>Time: 7:00 PM</p>
          </div>
        </div>
        <div class="movie__price">$22.56</div>
      </figure>
      <figure class="movie">
        <div class="movie__hero">
          <img src={tier3} alt="Rambo" class="movie__img" />
        </div>
        <div class="movie__content">
          <div class="movie__title">
            <h1 class="heading__primary">TIER III <i class="fas fa-fire"></i></h1>
            <div class="movie__tag movie__tag--1">#jazz</div>
            <div class="movie__tag movie__tag--2">#edm</div>
          </div>
          <p class="movie__description">
          VIP box seating with a dedicated server, exclusive access to the pre-concert reception with the artists, a gourmet dinner buffet, complimentary champagne, valet parking, and a personalized signed merchandise item.
          </p>
          <div class="movie__details">
            <p class="movie__detail"><span class="icons icons-red"><i class="fas fa-camera-retro"></i> </span>VIP Seat</p>
            <p class="movie__detail"><span class="icons icons-grey"><i class="fas fa-clock"></i> </span>All day</p>
            <p class="movie__detail"><span class="icons icons-yellow"><i class="fas fa-file-invoice-dollar"></i>
            </span>Time: 7:00 PM</p>
          </div>
        </div>
        <div class="movie__price">$32.56</div>
      </figure>





    </Popup>
  );
};

export default TicketModal;