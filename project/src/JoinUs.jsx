// import React, { useState } from 'react';
import "./JoinUs.css";
import rafaella from './img/aol-mvxprmk.png'
import bg from './img/ncdg-9mk-3pby.png'
import playarrow from './img/play-arrow.svg'
import arrowdown from './img/arrow-chevron-down.svg'
import arrowdown1 from './img/arrow-chevron-down-1.svg'
import { Link } from "react-router-dom";
// import ReactPlayer from 'react-player';


 


export const JoinUs = () => {
  // const [play, setPlay] = useState(false);
  // const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  return (
    
    <div className="macbook-pro">
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
              <div className="play-arrow-wrapper" >
                <img className="play-arrow" alt="Play arrow" src={playarrow} />
              </div>
              {/* {play && (
        // <div className="video-player">
        //   <ReactPlayer url={videoUrl} playing={play} onEnded={() => setPlay(false)} />
        // </div>
      )} */}
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
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        <div className="group-3">
          <div className="group-4">
            <div className="overlap-group-2">
              <Link to="/event-schedule" >
              <div className="text-wrapper-14">BUY TICKET</div>

              </Link>
            </div>
          </div>
          <div className="text-wrapper-15">HOURS</div>
          <div className="text-wrapper-16">MINUTES</div>
          <div className="text-wrapper-17">SECONS</div>
          <div className="text-wrapper-18">DAYS</div>
          <div className="text-wrapper-19">MUSIC FESTIVAL START IN</div>
          <div className="text-wrapper-20">98</div>
          <div className="text-wrapper-21">11</div>
          <div className="text-wrapper-22">05</div>
          <div className="text-wrapper-23">01</div>
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
