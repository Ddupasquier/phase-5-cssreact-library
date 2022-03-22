import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login-logout.css";
import LoginForm from "./LoginForm";

function LoginLogout({ user, setUser }) {
  const [loginShown, setLoginShown] = useState(false);

  function handleOpen() {
    setLoginShown(true);
  }

  function handleClose() {
    setLoginShown(false);
  }

  function renderForm() {
    if (user !== null) {
      return (
        <div className="welcome-container segment light-grey">
          <p className="welcome-message">
            Welcome, {user.first_name !== null ? user.first_name : "user"}!
          </p>
        </div>
      );
    } else {
      return (
        <LoginForm user={user} setUser={setUser} handleClose={handleClose} />
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
      {user !== null ? null : (
        <button className="login-button" onClick={handleOpen}>
          <span className="login-button-text">Login</span>
        </button>
      )}
      {user !== null ? (
        <Link onClick={handleLogout} className="login-button" to="/">
          <span className="login-button-text">Logout</span>
        </Link>
      ) : null}

      {loginShown === true ? <>{renderForm()}</> : null}
    </>
  );
}

export default LoginLogout;
