import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div>
      <button className={`bigger-btn ${props.className}`}>{props.text}</button>
    </div>
  );
};

export default ActionButton;
