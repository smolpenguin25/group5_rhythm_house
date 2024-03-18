import React from "react";
// import { Clock } from "./Clock";
// import { LiveCamera } from "./LiveCamera";
// import { Play } from "./Play";
import { Pricing } from "./Pricing";
import "./EventSchedule.css";
import avatar from "./img/avatar.svg";
import divider from "./img/divider.svg"
import avatar2 from "./img/avatar-2.svg"
import avatar3 from "./img/avatar-3.svg"
import avatar4 from "./img/avatar-4.svg"
import divider2 from "./img/divider-1.svg"
import avatar5 from "./img/avatar-5.svg"



export const EventSchedule = () => {
  return (
    <div className="event-schedule">
      <div className="overlap-2">
        <div className="group">
          <div className="tabs">
            <div className="days">
              <div className="day">
                <div className="div-2">
                  <div className="element-2">Day 01</div>
                  <div className="element-3">16 August</div>
                </div>
                <div className="indicator-2" />
              </div>
              <div className="day">
                <div className="div-2">
                  <div className="element-4">Day 02</div>
                  <div className="element-5">17 August</div>
                </div>
                <div className="indicator-3" />
              </div>
              <div className="day">
                <div className="div-2">
                  <div className="element-4">Day 03</div>
                  <div className="element-5">18 August</div>
                </div>
                <div className="indicator-3" />
              </div>
            </div>
          </div>
          <div className="schedule">
            <header className="header">
              <div className="overlap-group-2">
                <div className="BG" />
                <div className="text-wrapper-3">Time</div>
                <div className="text-wrapper-4">Content</div>
                <div className="text-wrapper-5">Speakers</div>
              </div>
            </header>
            <div className="list">
              <div className="content-2">
                <p className="p">11:00 AM to 12:00 PM</p>
                <p className="text-wrapper-6">Vestibulum vel eros vel metus lacinia feugiat a nec metus.</p>
                <div className="speakers">
                  <div className="speaker">
                    <img className="avatar" alt="Avatar" src={avatar} />
                    <div className="div-2">
                      <div className="text-wrapper-7">Yui Ronald</div>
                      <p className="booth">
                        <span className="span">Booth: </span>
                        <span className="text-wrapper-8">2F12</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video">
                <div className="text-wrapper-9">Preview</div>
                {/* <Play className="icon-instance-node" /> */}
              </div>
            </div>
            <img className="divider" alt="Divider" src={divider} />
            <div className="list">
              <div className="content-2">
                <p className="p">12:00 PM to 03:00 PM</p>
                <p className="text-wrapper-6">
                  Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum
                  ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu
                  augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.
                </p>
                <div className="speakers">
                  <div className="speaker">
                    <img className="avatar" alt="Avatar" src={avatar2} />
                    <div className="div-2">
                      <div className="text-wrapper-7">Bob John</div>
                      <p className="booth">
                        <span className="span">Booth: </span>
                        <span className="text-wrapper-8">3G12</span>
                      </p>
                    </div>
                  </div>
                  <div className="speaker">
                    <img className="avatar" alt="Avatar" src={avatar3} />
                    <div className="div-2">
                      <div className="text-wrapper-7">Yui Ronald</div>
                      <p className="booth">
                        <span className="span">Booth: </span>
                        <span className="text-wrapper-8">2F12</span>
                      </p>
                    </div>
                  </div>
                  <div className="speaker">
                    <img className="avatar" alt="Avatar" src={avatar4} />
                    <div className="div-2">
                      <div className="text-wrapper-7">Emma Satoshi</div>
                      <p className="booth">
                        <span className="span">Booth: </span>
                        <span className="text-wrapper-8">2A35</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video">
                <div className="text-wrapper-10">Live</div>
                {/* <LiveCamera className="icon-instance-node" /> */}
              </div>
            </div>
            <img className="divider" alt="Divider" src={divider2} />
            <div className="list">
              <div className="content-2">
                <p className="p">03:00 PM to 04:00 PM</p>
                <p className="text-wrapper-6">Vestibulum vel eros vel metus lacinia feugiat a nec metus.</p>
                <div className="speakers">
                  <div className="speaker">
                    <img className="avatar" alt="Avatar" src={avatar5} />
                    <div className="div-2">
                      <div className="text-wrapper-7">Sasha Jackson</div>
                      <p className="booth">
                        <span className="span">Booth: </span>
                        <span className="text-wrapper-8">2F18</span>
                      </p>
                    </div>
                  </div>
                  <div className="speaker">
                    <img className="avatar" alt="Avatar" src={avatar} />
                    <div className="div-2">
                      <div className="text-wrapper-7">Diana Brock</div>
                      <p className="booth">
                        <span className="span">Booth: </span>
                        <span className="text-wrapper-8">2F24</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video">
                <div className="text-wrapper-9">Upcoming</div>
                {/* <Clock className="icon-instance-node" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-11">Event Schedule</div>
        <div className="tier-text">Choose a Tier that’s right for you</div>


      </div>
        

      <div className="cards">

        <Pricing
          className="pricing-instance"
          divClassName="pricing-2"
          divClassNameOverride="pricing-3"
          freeFoodCoffeeClassName="pricing-3"
          titleClassName="design-component-instance-node"
        />
        <Pricing
          buttonsFill={false}
          className="pricing-instance"
          divClassName="pricing-6"
          divClassName1="pricing-5"
          freeFoodCoffeeClassName="pricing-3"
          indicatorClassName="pricing-4"
          text="Standard"
          text1="$150"
          titleClassName="design-component-instance-node"
        />
        <Pricing
          buttonsFill={false}
          className="pricing-instance"
          divClassName="pricing-8"
          divClassName1="pricing-9"
          indicatorClassName="pricing-7"
          text="Premium"
          text1="$200"
          text2="2 Seats Available"
          titleClassName="design-component-instance-node"
        />
      </div>
    </div>
  );
};

