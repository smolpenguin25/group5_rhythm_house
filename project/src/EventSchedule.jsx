import React, { useState } from "react";
import { FillFalse1 } from "./icons/FillFalse1";
import { IconsClock } from "./icons/IconsClock";
import { IconsPlay } from "./icons/IconsPlay";
import "./EventSchedule.css";
import avatar from "./img/avatar.svg";
import avatar1 from "./img/avatar-1.svg"
import avatar2 from "./img/avatar-2.svg"
import avatar3 from "./img/avatar-3.svg"
import avatar4 from "./img/avatar-4.svg"
import avatar5 from "./img/avatar-5.svg"
import divider from "./img/divider.svg"
import divider1 from "./img/divider-1.svg"

// Import other necessary components and assets

export const EventSchedule = () => {
 const [activeDay, setActiveDay] = useState(1); // Default to Day 1

 const handleDayClick = (day) => {
    setActiveDay(day);
 };

 return (
    <div className="event-schedule">
      <div className="group">
        <div className="tabs">
          <div className="text-wrapper">Event Schedule</div>
          <div className="days">
            <div className={`day ${activeDay === 1 ? 'active' : ''}`} onClick={() => handleDayClick(1)}>
              <div className="div">
                <div className="element">Day 29(Active Day)</div>
                <div className="element-2">March</div>
              </div>
              <div className={`indicator ${activeDay === 1 ? 'active' : ''}`} />
            </div>
            <div className={`day ${activeDay === 2 ? 'active' : ''}`} onClick={() => handleDayClick(2)}>
              <div className="div">
                <div className="element-3">Day 30</div>
                <div className="element-4">March</div>
              </div>
              <div className={`indicator-2 ${activeDay === 2 ? 'active' : ''}`} />
            </div>
            <div className={`day ${activeDay === 3 ? 'active' : ''}`} onClick={() => handleDayClick(3)}>
              <div className="div">
                <div className="element-3">Day 31</div>
                <div className="element-4">March</div>
              </div>
              <div className={`indicator-2 ${activeDay === 3 ? 'active' : ''}`} />
            </div>
          </div>
        </div>
        <div className="schedule">
          {activeDay === 1 && (
            <div>
                <header className="header">
            <div className="overlap-group">
              <div className="BG" />
              <div className="text-wrapper-2">Time</div>
              <div className="text-wrapper-3">Content</div>
              <div className="text-wrapper-4">Speakers</div>
            </div>
          </header>
          <div className="list">
            <div className="content">
              <p className="p">11:00 AM to 12:00 PM</p>
              <p className="text-wrapper-5">Experience Pure Musical Magic! Join us for a night of enchantment at our upcoming concert. Hurry, tickets are selling fast – secure yours today and let the music sweep you away!</p>
              <div className="speakers">
                <div className="speaker">
                  <img className="avatar" alt="Avatar" src={avatar3} />
                  <div className="div">
                    <div className="text-wrapper-6">Emma Satoshi</div>
                    <p className="booth">
                      <span className="span">Booth: </span>
                      <span className="text-wrapper-7">2F12</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="video">
              <div className="text-wrapper-8">Passed</div>
              <IconsPlay className="icon-instance-node" />
            </div>
          </div>
          <img className="divider" alt="Divider" src={divider} />
          <div className="list">
            <div className="content">
              <p className="p">12:00 PM to 03:00 PM</p>
              <p className="text-wrapper-5">
              Discover the Soundtrack to Your Soul! Embark on a musical journey like no other at our upcoming concert. Reserve your seats today and indulge in an evening of pure sonic delight.
              </p>
              <div className="speakers">
                <div className="speaker">
                  <img className="avatar" alt="Avatar" src={avatar1} />
                  <div className="div">
                    <div className="text-wrapper-6">Bob John</div>
                    <p className="booth">
                      <span className="span">Booth: </span>
                      <span className="text-wrapper-7">3G12</span>
                    </p>
                  </div>
                </div>
                <div className="speaker">
                  <img className="avatar" alt="Avatar" src={avatar4} />
                  <div className="div">
                    <div className="text-wrapper-6">Sasha Jackson</div>
                    <p className="booth">
                      <span className="span">Booth: </span>
                      <span className="text-wrapper-7">2A35</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="video">
              <div className="text-wrapper-9">Live</div>
              <FillFalse1 className="icon-instance-node" color="#FC5252" />
            </div>
          </div>
          <img className="divider" alt="Divider" src={divider1} />
          <div className="list">
            <div className="content">
              <p className="p">03:00 PM to 04:00 PM</p>
              <p className="text-wrapper-5">Music That Moves You! Dive into a world of rhythm and harmony at our upcoming concert extravaganza. Book your tickets now and get ready to be swept off your feet!</p>
              <div className="speakers">
                <div className="speaker">
                  <img className="avatar" alt="Avatar" src={avatar} />
                  <div className="div">
                    <div className="text-wrapper-6">Yui Ronald</div>
                    <p className="booth">
                      <span className="span">Booth: </span>
                      <span className="text-wrapper-7">2F18</span>
                    </p>
                  </div>
                </div>
                <div className="speaker">
                  <img className="avatar" alt="Avatar" src={avatar5} />
                  <div className="div">
                    <div className="text-wrapper-6">Diana Brock</div>
                    <p className="booth">
                      <span className="span">Booth: </span>
                      <span className="text-wrapper-7">2F24</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="video">
              <div className="text-wrapper-8">Upcoming</div>
              <IconsClock className="icon-instance-node" />
            </div>
          </div>
                </div>
            
          )}
          {activeDay === 2 && (
            <div>
            <header className="header">
        <div className="overlap-group">
          <div className="BG" />
          <div className="text-wrapper-2">Time</div>
          <div className="text-wrapper-3">Content</div>
          <div className="text-wrapper-4">Speakers</div>
        </div>
      </header>
      <div className="list">
        <div className="content">
          <p className="p">6:00 AM to 10:00 PM</p>
          <p className="text-wrapper-5">Unleash Your Inner Rockstar! Prepare to be blown away by our electrifying concert lineup. Don't miss your chance to be part of this unforgettable musical experience!</p>
          <div className="speakers">
            <div className="speaker">
              <img className="avatar" alt="Avatar" src={avatar5} />
              <div className="div">
                <div className="text-wrapper-6">Diana Brock</div>
                <p className="booth">
                  <span className="span">Booth: </span>
                  <span className="text-wrapper-7">2F12</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="video">
              <div className="text-wrapper-8">Upcoming</div>
              <IconsClock className="icon-instance-node" />
            </div>
      </div>
      <img className="divider" alt="Divider" src={divider} />
      <div className="list">
        <div className="content">
          <p className="p">12:00 PM to 03:00 PM</p>
          <p className="text-wrapper-5">
          Feel the Rhythm, Feel the Beat! Mark your calendars for an explosive concert showcasing a diverse range of genres and talents. Purchase your tickets before they're gone!
          </p>
          <div className="speakers">
            <div className="speaker">
              <img className="avatar" alt="Avatar" src={avatar3} />
              <div className="div">
                <div className="text-wrapper-6">Emma Satoshi</div>
                <p className="booth">
                  <span className="span">Booth: </span>
                  <span className="text-wrapper-7">3G12</span>
                </p>
              </div>
            </div>

            <div className="speaker">
              <img className="avatar" alt="Avatar" src={avatar1} />
              <div className="div">
                <div className="text-wrapper-6">Bob John</div>
                <p className="booth">
                  <span className="span">Booth: </span>
                  <span className="text-wrapper-7">2A35</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="video">
              <div className="text-wrapper-8">Upcoming</div>
              <IconsClock className="icon-instance-node" />
            </div>
      </div>
      <img className="divider" alt="Divider" src={divider1} />
      <div className="list">
        <div className="content">
          <p className="p">03:00 PM to 04:00 PM</p>
          <p className="text-wrapper-5">Ignite Your Passion for Music! Join us for an enchanting concert featuring sensational artists and soul-stirring melodies. Secure your tickets now and let the music move you.</p>
          <div className="speakers">
            <div className="speaker">
              <img className="avatar" alt="Avatar" src={avatar4} />
              <div className="div">
                <div className="text-wrapper-6">Sasha Jackson</div>
                <p className="booth">
                  <span className="span">Booth: </span>
                  <span className="text-wrapper-7">2F18</span>
                </p>
              </div>
            </div>
            <div className="speaker">
              <img className="avatar" alt="Avatar" src={avatar} />
              <div className="div">
                <div className="text-wrapper-6">Yui Ronald</div>
                <p className="booth">
                  <span className="span">Booth: </span>
                  <span className="text-wrapper-7">2F24</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="video">
          <div className="text-wrapper-8">Upcoming</div>
          <IconsClock className="icon-instance-node" />
        </div>
      </div>
            </div>
          )}
          {activeDay === 3 && (
           <div>
           <header className="header">
       <div className="overlap-group">
         <div className="BG" />
         <div className="text-wrapper-2">Time</div>
         <div className="text-wrapper-3">Content</div>
         <div className="text-wrapper-4">Speakers</div>
       </div>
     </header>
     <div className="list">
       <div className="content">
         <p className="p">11:00 AM to 12:00 PM</p>
         <p className="text-wrapper-5">Experience the Ultimate Musical Journey! Join us for an electrifying concert featuring top-notch artists and unforgettable performances.</p>
         <div className="speakers">
           <div className="speaker">
             <img className="avatar" alt="Avatar" src={avatar2} />
             <div className="div">
               <div className="text-wrapper-6">Yui Ronald</div>
               <p className="booth">
                 <span className="span">Booth: </span>
                 <span className="text-wrapper-7">2F12</span>
               </p>
             </div>
           </div>
         </div>
       </div>
       <div className="video">
              <div className="text-wrapper-8">Upcoming</div>
              <IconsClock className="icon-instance-node" />
            </div>
     </div>
     <img className="divider" alt="Divider" src={divider} />
     <div className="list">
       <div className="content">
         <p className="p">12:00 PM to 03:00 PM</p>
         <p className="text-wrapper-5">
         Get Ready to Rock! Don't miss out on the concert event of the year. Grab your friends and secure your seats for an epic night filled with incredible music and non-stop fun!
         </p>
         <div className="speakers">
           <div className="speaker">
             <img className="avatar" alt="Avatar" src={avatar1} />
             <div className="div">
               <div className="text-wrapper-6">Bob John</div>
               <p className="booth">
                 <span className="span">Booth: </span>
                 <span className="text-wrapper-7">3G12</span>
               </p>
             </div>
           </div>
         
           <div className="speaker">
             <img className="avatar" alt="Avatar" src={avatar3} />
             <div className="div">
               <div className="text-wrapper-6">Emma Satoshi</div>
               <p className="booth">
                 <span className="span">Booth: </span>
                 <span className="text-wrapper-7">2A35</span>
               </p>
             </div>
           </div>
         </div>
       </div>
       <div className="video">
              <div className="text-wrapper-8">Upcoming</div>
              <IconsClock className="icon-instance-node" />
            </div>
     </div>
     <img className="divider" alt="Divider" src={divider1} />
     <div className="list">
       <div className="content">
         <p className="p">03:00 PM to 04:00 PM</p>
         <p className="text-wrapper-5">Join us for an unforgettable night of music!</p>
         <div className="speakers">
           <div className="speaker">
             <img className="avatar" alt="Avatar" src={avatar5} />
             <div className="div">
               <div className="text-wrapper-6">Diana Brock</div>
               <p className="booth">
                 <span className="span">Booth: </span>
                 <span className="text-wrapper-7">2F18</span>
               </p>
             </div>
           </div>
           <div className="speaker">
             <img className="avatar" alt="Avatar" src={avatar4} />
             <div className="div">
               <div className="text-wrapper-6">Sasha Jackson</div>
               <p className="booth">
                 <span className="span">Booth: </span>
                 <span className="text-wrapper-7">2F24</span>
               </p>
             </div>
           </div>
         </div>
       </div>
       <div className="video">
         <div className="text-wrapper-8">Upcoming</div>
         <IconsClock className="icon-instance-node" />
       </div>
     </div>
           </div>
          )}
        </div>
      </div>
    </div>
 );
};