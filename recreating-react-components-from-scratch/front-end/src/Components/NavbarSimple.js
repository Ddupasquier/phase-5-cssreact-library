import React, { useState, useRef, useEffect } from "react";
import "./navbar-simple.css";
import * as GiIcon from "react-icons/gi";
import { Link } from "react-router-dom";
import LoginLogout from "./LoginLogout";

function SimpleNavbar({user, setUser}) {
  const [isOpen, setIsOpen] = useState(false);
  const myRef = useRef();
  const sidebarRef = useRef();

  useEffect(() => {
    function handler(e) {
      if (
        !myRef.current?.contains(e.target) &&
        !sidebarRef.current?.contains(e.target) &&
        e.target.innerText !== "X"
      ) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  function handleMenuHide() {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <>
      <div className="simple-navbar charcoal">
        <div className="side-menu-icon" ref={myRef} onClick={handleMenuHide}>
          <GiIcon.GiHamburgerMenu />
        </div>
        <div className="logo">
          <span className="logo-text">Simple NavBar</span>
        </div>
        <div className="navbar-buttons">
          <Link to="/" className="nav-button2">
            <span className="nav-link-text">Home</span>
          </Link>
          <Link to="/about" className="nav-button1">
            <span className="nav-link-text">About</span>
          </Link>
          <Link to="/components" className="nav-button2">
            <span className="nav-link-text">Components</span>
          </Link>
          <Link to="/contact" className="nav-button1">
            <span className="nav-link-text">Contact</span>
          </Link>
        </div>
      </div>
      {isOpen === true ? (
        <div id="sidebar" className="pop-out-menu charcoal" ref={sidebarRef}>
          <LoginLogout user={user} setUser={setUser} />
          <span className="ul-title">Components</span>
          <ul>
            <li>
              <Link to="/buttons" className="pop-out-button">
                Buttons
              </Link>
            </li>
            <li>
              <Link to="/segments" className="pop-out-button">
                Segments
              </Link>
            </li>
            <li>
              <Link to="/modals" className="pop-out-button">
                Modals
              </Link>
            </li>
            <li>
              <Link to="/forms" className="pop-out-button">
                Forms
              </Link>
            </li>
            <li>
              <Link to="/" className="pop-out-button">
                More Stuff
              </Link>
            </li>
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
