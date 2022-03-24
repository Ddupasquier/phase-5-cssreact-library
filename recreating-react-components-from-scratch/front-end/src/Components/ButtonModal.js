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
      <>
        {" "}
        <div key={b.id} className="each-block">
          <h2>{b.name}</h2>{" "}
          <button onClick={addToFav} value={b.id}>
            Fav
          </button>
          <br />
          <b>HTML/JSX: </b>
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
