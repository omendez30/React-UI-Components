import React from "react";
import "./Button.css";

const btnContainer = props => (
  <div className={props.className}>{props.children}</div>
);

export default btnContainer;
