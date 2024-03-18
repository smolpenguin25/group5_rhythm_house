

import PropTypes from "prop-types";
import React from "react";
import { Buttons } from "../Buttons";
import "./style.css";

export const Pricing = ({
  className,
  titleClassName,
  divClassName,
  divClassNameOverride,
  freeFoodCoffeeClassName,
  indicatorClassName,
  text = "Basic",
  divClassName1,
  text1 = "$100",
  buttonsFill = false,
  text2 = "1 Seat Available",
}) => {
  return (

    
    <div className={`pricing ${className}`}>

      <div className={`indicator ${indicatorClassName}`} />
      
      <div className="content">
        
        <div className={`title ${titleClassName}`}>
          <div className={`basic ${divClassName}`}>{text}</div>
          <div className={`element ${divClassName1}`}>{text1}</div>
        </div>
        <div className="div">
          <div className="element-seat-available">{text2}</div>
          <div className={`text-wrapper-2 ${divClassNameOverride}`}>Access to Wifi Router</div>
          <div className={`text-wrapper-2 ${freeFoodCoffeeClassName}`}>Free Food &amp; Coffee</div>

        </div>
        <Buttons
          className="buttons-instance"
          fill={buttonsFill}
          leadingIcon={false}
          text="Get Tickets"
          trailingIcon={false}
        />
        
      </div>
      
    </div>
  );
};

Pricing.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  buttonsFill: PropTypes.bool,
  text2: PropTypes.string,
};
