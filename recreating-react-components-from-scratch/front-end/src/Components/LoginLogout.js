import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login-logout.css";
import LoginForm from "./LoginForm";

function LoginLogout({ user, setUser }) {

  // edit profile: show pending contrib if pending contrib
  
  // ReadMe does not do anything


  // Form validation on the login form, check for empty

  // add some validations

  function renderForm() {
    if (user !== null) {
      return (
        <div className="welcome-container">
          <p className="welcome-message">
            Welcome, {user.first_name !== null ? user.first_name : "user"}!
          </p>
        </div>
      );
    } else {
      return (
        <LoginForm user={user} setUser={setUser} />
      );
    }
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  function onLogout() {
    setUser(null);
  }

  return (
    <>
      {user !== null ? (
        <Link onClick={handleLogout} className="login-button" to="/">
          <span className="login-button-text">Logout</span>
        </Link>
      ) : null}
      {renderForm()}
    </>
  );
}

export default LoginLogout;
