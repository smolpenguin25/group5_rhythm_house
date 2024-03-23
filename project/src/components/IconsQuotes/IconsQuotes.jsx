/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TypeDoubleDirectionLeft } from "../../icons/TypeDoubleDirectionLeft";
import { TypeDoubleDirectionRight } from "../../icons/TypeDoubleDirectionRight";
import { TypeSingleDirectionLeft } from "../../icons/TypeSingleDirectionLeft";
import { TypeSingleDirectionRight } from "../../icons/TypeSingleDirectionRight";
import "./style.css";

export const IconsQuotes = ({ type, direction }) => {
  return (
    <>
      {direction === "left" && type === "double" && <TypeDoubleDirectionLeft className="instance-node" />}

      {direction === "left" && type === "single" && <TypeSingleDirectionLeft className="instance-node" />}

      {direction === "right" && type === "single" && <TypeSingleDirectionRight className="instance-node" />}

      {direction === "right" && type === "double" && <TypeDoubleDirectionRight className="instance-node" />}
    </>
  );
};

IconsQuotes.propTypes = {
  type: PropTypes.oneOf(["double", "single"]),
  direction: PropTypes.oneOf(["right", "left"]),
};
