
import PropTypes from "prop-types";
import React from "react";
import { IconsAdd2 } from "./IconsAdd2";
import { IconsArrow1 } from "./IconsArrow1";
import "./style.css";

export const Buttons = ({ fill, leadingIcon, trailingIcon, className, text = "Button" }) => {
  return (
    <button className={`buttons fill-${fill} ${className}`}>
      {!trailingIcon && !leadingIcon && <div className="button">{text}</div>}

      {leadingIcon && <IconsAdd2 className="instance-node" color={!fill ? "#381DDB" : "white"} />}

      {(leadingIcon || trailingIcon) && <div className="text-wrapper">{text}</div>}

      {trailingIcon && <IconsArrow1 className="instance-node" color={!fill ? "#381DDB" : "white"} />}
    </button>
  );
};

Buttons.propTypes = {
  fill: PropTypes.bool,
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  text: PropTypes.string,
};
