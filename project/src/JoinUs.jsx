// import React, { useState } from 'react';
import "./JoinUs.css";
import rafaella from './img/aol-mvxprmk.png'
import bg from './img/ncdg-9mk-3pby.png'
import playarrow from './img/play-arrow.svg'
import arrowdown from './img/arrow-chevron-down.svg'
import arrowdown1 from './img/arrow-chevron-down-1.svg'
import 'reactjs-popup/dist/index.css';
import TicketModal from './Modal';
import './Modal.css'; 
import React, { useState, useEffect } from 'react';
import YouTubeVideoModal from './YouTubeVideoModal'; // Adjust the path as necessary










export const JoinUs = () => {

  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);
  const [youtubeVideoId, setYoutubeVideoId] = useState(''); // Replace '' with your YouTube video ID


  const openYoutubeModal = (videoId) => {
    setYoutubeVideoId(videoId);
    setYoutubeModalOpen(true);
   };
   
   const closeYoutubeModal = () => {
    setYoutubeModalOpen(false);
   };
 


 
  

  const targetDate = new Date('2024-05-11T00:00:00');

  // State to hold the time remaining
  const [timeRemaining, setTimeRemaining] = useState({
     days: 0,
     hours: 0,
     minutes: 0,
     seconds: 0,
  });
  
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  useEffect(() => {

    // Function to calculate the time remaining
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Calculate the time remaining immediately
    calculateTimeRemaining();

    // Set an interval to recalculate the time remaining every second
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
 }, [targetDate]);
  return (

    <div className="macbook-pro ">
      <div className="div">
        <div className="overlap">
          <img className="aol-mvxprmk" alt="Aol mvxprmk" src={rafaella} />
          <div className="rectangle" />
          <div className="text-wrapper">RAFAELLA</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper-2">ATIKH BANA</div>
        </div>
        <div className="overlap-2">
          <div className="rectangle" />
          <div className="text-wrapper-3">RAYUL</div>
        </div>
        <div className="overlap-3">
          <img className="ncd-g" alt="Ncd g" src={bg} />
          <div className="rectangle-2" />
          <div className="group">
            <div className="group-2">
              <p className="p">ALL ABOUT MUSIC - ITS ALL HERE</p>
              <p className="text-wrapper-4">Turn on the feeling with all music event</p>
            </div>
            <div className="overlap-group-wrapper">
              <div className="play-arrow-wrapper"  >
              <button onClick={() => openYoutubeModal('YOUR_YOUTUBE_VIDEO_ID')}>

                  <img className="play-arrow" alt="Play arrow" src={playarrow} />
                  </button>
                  <YouTubeVideoModal
 isOpen={youtubeModalOpen}
 closeModal={closeYoutubeModal}
 videoId={youtubeVideoId}
/>
                  

              </div>


            </div>
          </div>
          <div className="rectangle-3" />
        </div>
        <div className="text-wrapper-5">Your Email</div>
        <div className="text-wrapper-6">THE LINEUP OF RHYTHM</div>
        <div className="text-wrapper-7">SPONSORS</div>
        <div className="div-wrapper">
          <div className="text-wrapper-8">🎥 VSTUDIO</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-9">💈Baberock</div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-10">🍕PizzaHOT</div>
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-11">🐊Crocoday</div>
        </div>
        <div className="overlap-7">
          <div className="text-wrapper-12">🔥Firevent</div>
        </div>
        <div className="overlap-8">
          <div className="text-wrapper-13">🚄Trainesia</div>
        </div>
        <div className="arrow-chevron-down-wrapper">
          <img className="arrow-chevron-down" alt="Arrow chevron down" src={arrowdown} />
        </div>
        <div className="img-wrapper">
          <img className="arrow-chevron-down" alt="Arrow chevron down" src={arrowdown1} />
        </div>
        <div className="ellipse" />
        <div className="group-3">
          <div className="group-4">

                <button className="buy-ticket-btn modal-popup" onClick={openModal}>BUY TICKET</button>
                <TicketModal className="bg-black" open={modalOpen} closeModal={closeModal} />
          </div>
          <div className="text-wrapper-15">HOURS</div>
          <div className="text-wrapper-16">MINUTES</div>
          <div className="text-wrapper-17">SECONS</div>
          <div className="text-wrapper-18">DAYS</div>
          <div className="text-wrapper-19">MUSIC FESTIVAL START IN</div>
          <div className="text-wrapper-20">{timeRemaining.days}</div>
          <div className="text-wrapper-21">{timeRemaining.hours}</div>
          <div className="text-wrapper-22">{timeRemaining.minutes}</div>
          <div className="text-wrapper-23">{timeRemaining.seconds}</div>
        </div>
      </div>
      

    </div>
    
    
  );
};

export default JoinUs;
