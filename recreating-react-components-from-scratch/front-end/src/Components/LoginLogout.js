import React, { useState } from "react";
import "./login-logout.css";
import LoginForm from "./LoginForm";

function LoginLogout({ user, setUser}) {
  const [loginShown, setLoginShown] = useState(false);

  function handleOpen() {
    setLoginShown(true);
  }

  function handleClose() {
    setLoginShown(false);
  }

  function renderForm() {
    if (user !== null) {
      return <div className="welcome-container segment light-grey"><p className="welcome-message">Welcome, {user.first_name}!</p></div>;
    } else {
      return <LoginForm user={user} setUser={setUser} />;
    }
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  function onLogout() {
    setUser(null)
  }

  return (
    <>
      {user !== null ? null : <button className="login-button" onClick={handleOpen}>
        <span className="login-button-text">Login</span>
      </button>}
      {user !== null ? <button onClick={handleLogout} className="login-button">Logout</button> : null}

      {loginShown === true ? (
        <>
          {renderForm()}
          {user !== null ? null : <button onClick={handleClose}>X</button>}
        </>
      ) : null}
    </>
  );
}

export default LoginLogout;
