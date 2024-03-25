import PropTypes from "prop-types";
import React from "react";
import { Address } from "./Address";
import { Arrows } from "./Arrows";
import { Email } from "./Email";
import { MenuFooter } from "./MenuFooter";
import { MenuFooterVert } from "./MenuFooterVert";
import { PhoneNumber } from "./PhoneNumber";
import { Property1Email } from "./Property1Email";
import { Property1Map } from "./Property1Map";
import { Property1Variant3 } from "./Property1Variant3";
import { Property1White } from "./Property1White";
import { PropertyWrapper } from "./PropertyWrapper";
import { Social } from "./Social";
import "./style.css";

export const Footer = ({
    line = "line-38.svg",
    img = "line-39.svg",
    line1 = "line-3.svg",
    line2 = "line-4.svg",
    line3 = "line-5.svg",
    propertyWrapperInstagram = "image.svg",
    map = "map.png",
}) => {
    return (
        <div className="footer">
            <div className="overlap">
                <div className="overlap-group">
                    <img className="line" alt="Line" src={line} />
                    <img className="img" alt="Line" src={img} />
                </div>
                <div className="site-logo">
                    <img className="line-2" alt="Line" src={line1} />
                    <img className="line-3" alt="Line" src={line2} />
                    <img className="line-4" alt="Line" src={line3} />
                    <div className="div">Rhythm House</div>
                </div>
                <div className="group">
                    <Address
                        className="address-instance"
                        property1="default"
                        text="590 Cach Mang Thang Tam, Ward 11, District 3, HCM"
                        wisconsinAveSuiteClassName="design-component-instance-node"
                    />
                    <Property1Map className="icon" color="white" />
                </div>
                <div className="group-2">
                    <Email
                        className="email-instance"
                        property1="default"
                        propertyDefaultClassName="design-component-instance-node-2"
                        text="xxxx@gmail.com"
                    />
                    <Property1Email className="icon-instance-node" color="white" />
                </div>
                <div className="text-wrapper-2">Contact Us</div>
                <div className="group-3">
                    <Property1White className="icon-instance-node" />
                    <PhoneNumber
                        className="design-component-instance-node-2"
                        divClassName="phone-number-instance"
                        property1="default"
                        text="000000000"
                    />
                </div>
                <div className="frame">
                    <Property1Variant3 className="social-instance" />
                    <Social className="social-instance" />
                    <PropertyWrapper
                        className="social-2"
                        instagram={propertyWrapperInstagram}
                        instagramClassName="social-3"
                        property1="variant-3"
                    />
                </div>
            </div>
            <Arrows className="arrows-instance" />
            <MenuFooter
                className="menu-footer-vert1"
                property1="white"
                text="Album-Band"
                text1="Album-Solo"
                text2="Album-Movie"
                text3="Magazine"
                text4="Concert"
            />
            <MenuFooterVert
                className="menu-footer-vert3"
                property1="white"
                text="Navigation"
                text1="Home"
                text2="Album"
                text3="Event"
                text4="Membership"
                text5="About Us"
                text6="Contact Us"
            />
            <p className="p">@2024 Rhythm House. All rights reserved.</p>
            <img className="map" alt="Map" src={map} />
            <p className="address-2">590 Cach Mang Thang Tam, Ward 11, District 3, HCM</p>
        </div>
    );
};

Footer.propTypes = {
    line: PropTypes.string,
    img: PropTypes.string,
    line1: PropTypes.string,
    line2: PropTypes.string,
    line3: PropTypes.string,
    propertyWrapperInstagram: PropTypes.string,
    map: PropTypes.string,
};
