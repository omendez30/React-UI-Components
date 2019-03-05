import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <section className="card">
      <div className="card-container">
        <CardBanner />
        <CardContent />
      </div>
    </section>
  );
};

export default CardContainer;
