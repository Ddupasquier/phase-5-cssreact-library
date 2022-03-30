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

  // function nameOrId() {
  //   user.first_name === null ? `${user.id}` : `${user.first_name}${user.last_name}`
  // }

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

          <Link
            to={`/my-profile/{${user.first_name}${user.last_name}}`}
            className="pop-out-button"
          >
            View
          </Link>

          <Link
            to={`/edit-profile/${user.first_name}${user.last_name}`}
            className="pop-out-button"
          >
            Edit
          </Link>
          {user !== null && user.is_contributor === true ? (
            <Link to="/contribute" className="pop-out-button">
              Contribute
            </Link>
          ) : null}
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
          <Link to="/" className="logo-text">
            My React/CSS Library
          </Link>
        </div>
      </div>
      {isOpen === true ? (
        <div id="sidebar" className="pop-out-menu charcoal" ref={sidebarRef}>
          <LoginLogout user={user} setUser={setUser} />
          <span className="ul-title">Components</span>

          <Link to="/buttons" className="pop-out-button">
            Buttons
          </Link>

          <Link to="/segments" className="pop-out-button">
            Segments
          </Link>

          <Link to="/modals" className="pop-out-button">
            Modals
          </Link>

          <Link to="/forms" className="pop-out-button">
            Forms
          </Link>

          <Link to="/navs" className="pop-out-button">
            Navs
          </Link>

          <hr />
          <span className="ul-title">Similar Sites</span>
          <u>
            <span>
              <Link
                to="//semantic-ui.com/"
                className="pop-out-button"
                target="_blank"
              >
                Semantic UI <FiIcon.FiExternalLink />
              </Link>
            </span>
            <br />
            <span>
              <Link
                to="//react-bootstrap.github.io/"
                className="pop-out-button"
                target="_blank"
              >
                React Bootstrap <FiIcon.FiExternalLink />
              </Link>
            </span>
          </u>
          <hr />
          <Link
            to="//github.com/Ddupasquier/phase-5-cssreact-library"
            target="_blank"
          >
            <span className="ul-title">GitHub</span>
          </Link>
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
