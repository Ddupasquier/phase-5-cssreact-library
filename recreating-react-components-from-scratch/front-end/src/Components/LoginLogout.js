import React, { useState } from "react";
import "./login-logout.css";
import LoginForm from "./LoginForm";

function LoginLogout() {
  const [LoginShown, setLoginShown] = useState(false);

  function handleOpen() {
    setLoginShown(true);
  }

  function handleClose() {
    setLoginShown(false);
  }
  return (
    <>
      <button className="login-button" onClick={handleOpen}>
        <span className="login-button-text">Login</span>
      </button>

      {LoginShown === true ? (
        <>
          <LoginForm />
          <button onClick={handleClose}>X</button>
        </>
      ) : null}
    </>
  );
}

export default LoginLogout;
