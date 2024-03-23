/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FillTrue1 } from "../../icons/FillTrue1";
import { IconsHeart3 } from "../../icons/IconsHeart3";
import "./style.css";

export const IconsHeart = ({ fill }) => {
  return (
    <>
      {!fill && <IconsHeart3 className="instance-node-2" />}

      {fill && <FillTrue1 className="instance-node-2" />}
    </>
  );
};

IconsHeart.propTypes = {
  fill: PropTypes.bool,
};
