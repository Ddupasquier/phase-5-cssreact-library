import React, { useState } from "react";
import "./navbar-simple.css";
import * as GiIcon from "react-icons/gi";
import { Link } from "react-router-dom";

function SimpleNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuHide() {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <>
      <div className="simple-navbar charcoal">
        <div className="side-menu-icon" onClick={handleMenuHide}>
          <GiIcon.GiHamburgerMenu />
        </div>
        <div className="logo">
          <span className="logo-text">Simple NavBar</span>
        </div>
        <div className="navbar-buttons">
          <Link to="/" className="nav-button2">Home</Link>
          <Link to="/about" className="nav-button1">About</Link>
          <Link to="/components" className="nav-button2">Components</Link>
          <Link to="/contact" className="nav-button1">Contact</Link>
        </div>
      </div>
      {isOpen === true ? (
        <div className="pop-out-menu charcoal">
          <span className="ul-title">Components</span>
          <ul>
          <li><Link to="/buttons" className="pop-out-button">Buttons</Link></li>
          <li><Link to="/segments" className="pop-out-button">Segments</Link></li>
          <li><Link to="/modals" className="pop-out-button">Modals</Link></li>
          <li><Link to="/forms" className="pop-out-button">Forms</Link></li>
          <li><Link to="/" className="pop-out-button">More Stuff</Link></li>
          <li><Link to="/" className="pop-out-button">More Stuff</Link></li>
          <li><Link to="/" className="pop-out-button">More Stuff</Link></li>
          <li><Link to="/" className="pop-out-button">More Stuff</Link></li>
          </ul>
          <hr />
          <span className="ul-title">Sources</span>
          <hr />
          <span className="ul-title">ReadMe</span>
        </div>
      ) : null}
    </>
  );
}

export default SimpleNavbar;
