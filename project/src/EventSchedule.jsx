import React from "react";
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







export const EventSchedule = () => {
  return (
    <div className="event-schedule">
      <div className="group">
        <div className="tabs">
          <div className="text-wrapper">Event Schedule</div>
          <div className="days">
            <div className="day">
              <div className="div">
                <div className="element">Day 01</div>
                <div className="element-2">16 August</div>
              </div>
              <div className="indicator" />
            </div>
            <div className="day">
              <div className="div">
                <div className="element-3">Day 02</div>
                <div className="element-4">17 August</div>
              </div>
              <div className="indicator-2" />
            </div>
            <div className="day">
              <div className="div">
                <div className="element-3">Day 03</div>
                <div className="element-4">18 August</div>
              </div>
              <div className="indicator-2" />
            </div>
          </div>
        </div>
        <div className="schedule">
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
              <p className="text-wrapper-5">Vestibulum vel eros vel metus lacinia feugiat a nec metus.</p>
              <div className="speakers">
                <div className="speaker">
                  <img className="avatar" alt="Avatar" src={avatar} />
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
              <div className="text-wrapper-8">Preview</div>
              <IconsPlay className="icon-instance-node" />
            </div>
          </div>
          <img className="divider" alt="Divider" src={divider} />
          <div className="list">
            <div className="content">
              <p className="p">12:00 PM to 03:00 PM</p>
              <p className="text-wrapper-5">
                Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum
                ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu
                augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.
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
                  <img className="avatar" alt="Avatar" src={avatar2} />
                  <div className="div">
                    <div className="text-wrapper-6">Yui Ronald</div>
                    <p className="booth">
                      <span className="span">Booth: </span>
                      <span className="text-wrapper-7">2F12</span>
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
              <div className="text-wrapper-9">Live</div>
              <FillFalse1 className="icon-instance-node" color="#FC5252" />
            </div>
          </div>
          <img className="divider" alt="Divider" src={divider1} />
          <div className="list">
            <div className="content">
              <p className="p">03:00 PM to 04:00 PM</p>
              <p className="text-wrapper-5">Vestibulum vel eros vel metus lacinia feugiat a nec metus.</p>
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
      </div>
    </div>
  );
};
