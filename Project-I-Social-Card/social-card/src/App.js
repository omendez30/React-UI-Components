import React from "react";
import "./App.css";

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import CardContainer from "./components/CardComponents/CardContainer";
import CardBanner from "./components/CardComponents/CardBanner";
import Footer from "./components/FooterComponents/Footer";

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
