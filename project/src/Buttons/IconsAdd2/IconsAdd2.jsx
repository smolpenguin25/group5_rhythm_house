/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsAdd2 = ({ color = "#381DDB", className }) => {
  return (
    <svg
      className={`icons-add-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_190_2095)">
        <path className="path" d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill={color} />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_190_2095">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconsAdd2.propTypes = {
  color: PropTypes.string,
};
