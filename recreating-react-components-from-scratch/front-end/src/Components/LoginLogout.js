import React from "react";
import { Link } from "react-router-dom";
import "./login-logout.css";
import LoginForm from "./LoginForm";

function LoginLogout({ user, setUser }) {

// make html render line breaks

// in login form, nav redirect (when set to edit profile) breaks
// gives error for unmounted component
// state is not setting instantaneously. only on refresh

// it’s a bit unclear as a user why I should be creating an account or what I would do with one
// separate code blocks so I can view or copy code from one at a time. syntax highlighting and pretty formatting is nice, but not a must-have
// I’m not sure what really happens when contributions are accepted. it doesn’t seem like they will be tied to any category, so I don’t know where they would show up, if anywhere.


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
    window.location.reload(false);
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
