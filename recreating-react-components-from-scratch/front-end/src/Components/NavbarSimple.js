import React, { useState, useRef, useEffect } from "react";
import "./navbar-simple.css";
import * as GiIcon from "react-icons/gi";
import * as FiIcon from "react-icons/fi";
import { Link } from "react-router-dom";
import LoginLogout from "./LoginLogout";

function SimpleNavbar({ user, setUser }) {
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

  function renderMyProfile() {
    if (user === null) {
      return null;
    } else {
      return (
        <>
          <hr />
          <span className="ul-title">
            {user.first_name !== null ? user.first_name : "user"}'s Profile
          </span>
          <ul>
            <li>
              <Link
                to={`/my-profile/${user.first_name}${user.last_name}`}
                className="pop-out-button"
              >
                View
              </Link>
            </li>
            <li>
              <Link
                to={`/edit-profile/${user.first_name}${user.last_name}`}
                className="pop-out-button"
              >
                Edit
              </Link>
              {user !== null && user.is_contributor === true ? (
                <li>
                  <Link to="/contribute" className="pop-out-button">
                    Contribute
                  </Link>
                </li>
              ) : null}
            </li>
          </ul>
        </>
      );
    }
  }

  return (
    <>
      <div className="simple-navbar charcoal">
        <div className="side-menu-icon" ref={myRef} onClick={handleMenuHide}>
          <GiIcon.GiHamburgerMenu />
        </div>
        <div className="logo">
          <Link to="/" className="logo-text">My React/CSS Library</Link>
        </div>
        {/* <div className="navbar-buttons">
          <Link to="/" className="nav-button2">
            <span className="nav-link-text">Home</span>
          </Link>
          <Link to="/components" className="nav-button1">
            <span className="nav-link-text">Components</span>
          </Link>
          {user !== null ? (
            <Link to="/favorites" className="nav-button2">
              <span className="nav-link-text">Favorites</span>
            </Link>
          ) : null}
        </div> */}
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
              <Link to="/navs" className="pop-out-button">
                Navs
              </Link>
            </li>
          </ul>
          <hr />
          <span className="ul-title">Similar Sites</span>
          <u>
            <span>
              <Link to="https://semantic-ui.com/" className="pop-out-button">
                Semantic UI <FiIcon.FiExternalLink />
              </Link>
            </span>
            <br />
            <span>
              <Link
                to="https://react-bootstrap.github.io/"
                className="pop-out-button"
              >
                React Bootstrap <FiIcon.FiExternalLink />
              </Link>
            </span>
          </u>
          <hr />
          <span className="ul-title">ReadMe</span>
          {renderMyProfile()}
          <hr />
          {user !== null && user.id === 1 ? (
            <span className="ul-title">
              <Link to="/ADMIN" className="ul-title">
                ADMIN
              </Link>
            </span>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default SimpleNavbar;
