import React, { useState } from 'react';
import "./modal-simple.css"

function ModalSimple() {
    const [shown, setShown] = useState(false);

    function handleOpen() {
      setShown(true);
    }
  
    function handleClose() {
      setShown(false);
    }
  
    return (
      <>
        <button className="btn4" onClick={handleOpen}>
          {"< >"}
        </button>
  
        {shown === true ? (
          
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
          
        ) : null}
      </>
    );
}

export default ModalSimple;