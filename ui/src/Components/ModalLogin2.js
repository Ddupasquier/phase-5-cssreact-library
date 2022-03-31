import React, { useState } from "react";
import "./modal-login2.css";

function ModalLogin2() {
    // This is a React component
  // You must import useState for this component to function
  const [shown, setShown] = useState(false);

  function handleOpen() {
    setShown(true);
  }

  function handleClose() {
    setShown(false);
  }

  function randomButton(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return `btn${random}`;
  }

  return (
    <>
      <button className={`${randomButton(3, 21)} small-margin`} onClick={handleOpen}>
        {"Modal - Login2"}
      </button>

      {shown === true ? (
        <div className="overlay" onClick={handleClose}>
          <div className="modal-form-login2">
          <button className="btn4 close-button" onClick={handleClose}>X</button>
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Username..."></input>
              <input type="text" placeholder="Password..."></input>
              <input type="submit" className="btn19"></input>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ModalLogin2;