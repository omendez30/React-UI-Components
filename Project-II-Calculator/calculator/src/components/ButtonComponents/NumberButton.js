import React from "react";
import "./Button.css";

const NumberButton = props => (
  <button classsName={`numbers ${props.buttonStyle}`}>{props.text}</button>
);
// BasicButton.defaultProps = {
//     buttonStyles: "#fff";
// }

export default NumberButton;
