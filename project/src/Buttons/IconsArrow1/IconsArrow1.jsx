/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsArrow1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`icons-arrow-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_190_2111)">
        <path
          className="path"
          d="M12 13.172L16.95 8.22198L18.364 9.63598L12 16L5.636 9.63598L7.05 8.22198L12 13.172Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_190_2111">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconsArrow1.propTypes = {
  color: PropTypes.string,
};
