import React from "react";
import "./navbar-simple.css";
import * as GiIcon from "react-icons/gi";

function SimpleNavbar() {
  return (
    <div className="simple-navbar charcoal">
      <div className="side-menu-cont"><GiIcon.GiHamburgerMenu /></div>
      <div className="logo">
        <span className="logo-text">Simple NavBar</span>
      </div>
      <div className="navbar-buttons">
        <button className="nav-button2">Home</button>
        <button className="nav-button1">About</button>
        <button className="nav-button2">Misc.</button>
        <button className="nav-button1">Contact</button>
      </div>
    </div>
  );
}

export default SimpleNavbar;
