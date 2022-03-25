import React, { Fragment, useState } from "react";
function CodeModal({ allComps, user }) {
  const [shown, setShown] = useState(false);

  function handleOpen() {
    setShown(true);
  }

  function handleClose() {
    setShown(false);
  }

  function addToFav(e) {
    e.preventDefault();
    fetch(`/user_favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.id,
        component_id: e.target.value,
      }),
    }).then((res) => res.json());
  }

  let filterButton = allComps.filter((b) => b.name.includes("btn"));
  const eachButton = filterButton.map((b) => {
    return (
      <Fragment key={b.id}>
        {" "}
        <div className="each-block">
          <h1>{b.name}{" "}<button onClick={addToFav} value={b.id} className="btn14 each-block-button">
            Fav
          </button></h1>{" "}
          
          <br />
          <b>HTML:</b>
          <br />
          {b.html}
          <br />
          <b>CSS: </b>
          <br />
          {b.css.split("\n").map((v, i) => {
            return (
              <Fragment key={i}>
                {v}
                <br />
              </Fragment>
            );
          })}
        </div>
      </Fragment>
    );
  });

  return (
    <>
      <button className="btn8" onClick={handleOpen}>
        {"<code found here>"}
      </button>

      {shown === true ? (
        <div className="overlay">
          <div className="code-modal segment">
            <header>
              <button className="btn8" onClick={handleClose}>
                X
              </button>
            </header>
            <br />
            {eachButton}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CodeModal;
