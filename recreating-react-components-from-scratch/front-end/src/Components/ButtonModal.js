import React, { Fragment, useState } from "react";
import * as BsIcon from "react-icons/bs";

function CodeModal({ allComps, user, userFav, setUserFav }) {
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
    })
      .then((res) => res.json())
      .then((newFav) => setUserFav(newFav));
  }

  function checkLoginFav() {
    if (!user) {
      alert("You must log in to favorite a component!")}
  }
  
console.log(allComps)
  let filterButton = (allComps || []).filter((b) => b.name.includes("btn"));
  const eachButton = filterButton.map((b) => {
    return (
      <Fragment key={b.id}>
        {" "}
        <div className="each-block">
          {userFav.find((f) => f.component_id === b.id) ? (
            <button className="btn15 each-block-button" onClick={checkLoginFav}>
              <BsIcon.BsSuitHeartFill />
            </button>
          ) : (
            <h1>
              {b.name}{" "}
              {user === null ? (
                <button
                  onClick={() => !user ? null : {addToFav}}
                  value={b.id}
                  className="btn14 each-block-button"
                >
                  <BsIcon.BsSuitHeart />
                </button>
              ) : null}
            </h1>
          )}
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
