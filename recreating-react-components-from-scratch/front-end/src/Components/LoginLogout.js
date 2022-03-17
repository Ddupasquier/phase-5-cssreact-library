import React, { useState } from "react";
import "./login-logout.css";
import LoginForm from "./LoginForm";

function LoginLogout({ user, setUser}) {
  const [LoginShown, setLoginShown] = useState(false);

  function handleOpen() {
    setLoginShown(true);
  }

  function handleClose() {
    setLoginShown(false);
  }

  function renderForm() {
    if (user) {
      return <h2>Welcome, !</h2>;
    } else {
      return <LoginForm user={user} onLogin={setUser} />;
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
      <button className="login-button" onClick={handleOpen}>
        <span className="login-button-text">Login</span>
      </button>
      <button onClick={handleLogout}>Logout</button>

      {LoginShown === true ? (
        <>
          {renderForm()}
          <button onClick={handleClose}>X</button>
        </>
      ) : null}
    </>
  );
}

export default LoginLogout;
