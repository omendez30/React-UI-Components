import React from "react";
import "./Button.css";

const btnContainer = props => {
  return (
    <div className={`btn-container${props.className}`}>{props.children}</div>
  );
};

export default btnContainer;
