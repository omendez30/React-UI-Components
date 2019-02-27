import React from "react";
import "./App.css";

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
const App = () => {
  return (
    <div>
      <HeaderContainer />
      <ImageThumbnail />
      {/* <CardComponents />
    <FooterComponents /> */}
    </div>
  );
};

export default App;
