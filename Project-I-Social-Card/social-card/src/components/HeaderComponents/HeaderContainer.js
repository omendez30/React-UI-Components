import React from "react";
import "./Header.css";

import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
  return (
    <header>
      <ImageThumbnail />
      <div className="header-content">
        <div className="header-title">
          <HeaderTitle />
        </div>
        <HeaderContent />
      </div>
    </header>
  );
};

export default HeaderContainer;
