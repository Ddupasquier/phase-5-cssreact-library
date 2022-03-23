import React, { Fragment, useState } from "react";
function CodeModal({ allComps }) {
  const [shown, setShown] = useState(false);

  function handleOpen() {
    setShown(true);
  }

  function handleClose() {
    setShown(false);
  }

  let filterButton = allComps.filter((b) => b.name.includes("btn"));
  const eachButton = filterButton.map((b) => {
    return (
      <>
        {" "}
        <div key={b.id} className="each-block">
          <h2>{b.name}</h2> <br />
          <b>HTML/JSX: </b><br />{b.html}
          <br />
          <b>CSS: </b><br />{b.css.split("\n").map((v, i) => {
            return (
              <Fragment key={i}>
                {v}
                <br />
              </Fragment>
            )
          })}
        </div>
      </>
    );
  });

  return (
    <>
      <button className="btn4" onClick={handleOpen}>
        {"<code found here>"}
      </button>

      {shown === true ? (
        <div className="overlay">
          <div className="code-modal segment">
            <header>
              <button className="btn8" onClick={handleClose}>
                X
              </button>
            </header><br />
            {eachButton}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CodeModal;
