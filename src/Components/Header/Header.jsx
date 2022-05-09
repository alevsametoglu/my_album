import React from "react";
import logo from "../Header/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-header">
        <img src={logo} alt="logo" />
      </div>
      <div>menu</div>
    </div>
  );
};
export default Header;
