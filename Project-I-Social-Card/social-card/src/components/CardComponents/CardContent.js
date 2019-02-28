import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <React.Fragment>
      <h3 className="card-content-title">Get Started With React</h3>
      <p>
        React Makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <a href="https://www.reactjs.org">reactjs.org</a>
    </React.Fragment>
  );
};

export default CardContent;
