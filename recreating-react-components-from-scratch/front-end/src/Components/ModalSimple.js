import React, { useState } from "react";
import "./modal-simple.css";

function ModalSimple() {
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
      <button className={`${randomButton(3, 18)} small-margin`} onClick={handleOpen}>
        {"Modal - Simple"}
      </button>

      {shown === true ? (
        <div className="overlay">
          <div className="simple-modal segment">
            <header>
              <button className="btn15" onClick={handleClose}>
                X
              </button>
            </header>
            <hr />
            <h1>
              Place Content Here
              <br />
              Place Content Here
              <br />
              Place Content Here
              <br />
              Place Content Here
              <br />
              Place Content Here
              <br />
              Place Content Here
              <br />
            </h1>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ModalSimple;
