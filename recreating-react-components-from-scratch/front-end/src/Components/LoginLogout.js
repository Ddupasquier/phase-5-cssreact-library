import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login-logout.css";
import LoginForm from "./LoginForm";

function LoginLogout({ user, setUser }) {

  // Feedback when profile edit success (show alert or somethihng, idk)
  // Feedback when requesting to be a contributor. Disable button, show some message like "Your request has been recieved" or whatever
  // If user does not have faves or contributions just show some text saying that instead of 'Loading...'
  // ReadMe does not do anything
  // Components page is confusingly empty when I don't have anything
  // rid of top nav buttons
  // Form validation on the login form, check for empty
  // second login button goes bye bye
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
