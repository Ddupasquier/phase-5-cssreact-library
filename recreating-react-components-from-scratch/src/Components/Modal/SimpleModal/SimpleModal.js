import React, { useState } from "react";
import "./simple-modal.css";

function SimpleModal() {
  const [shown, setShown] = useState(false);

  function handleOpen() {
    setShown(true);
  }

  function handleClose() {
    setShown(false);
  }

  return (
    <>
      <button className="btn5" onClick={handleOpen}>
        'Simple Modal' Button
      </button>

      {shown === true ? (
        <div className="">
          <div className="overlay">
            <div className="simple-modal segment">
              <header>
                <button onClick={handleClose}>X</button>
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
        </div>
      ) : null}
    </>
  );
}

export default SimpleModal;
