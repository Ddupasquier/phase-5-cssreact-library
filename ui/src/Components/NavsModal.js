import React, { useState, Fragment } from "react";
import * as BsIcon from "react-icons/bs";

function NavsModal({ allComps, user, userFav, setUserFav }) {
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
        component_id: e.currentTarget.value,
      }),
    })
      .then((res) => res.json())
      .then((newFav) => {
        setUserFav([...userFav, newFav]);
      });
  }

  function unfavorite(f) {
    fetch(`/user_favorites/${f}`, {
      method: "DELETE",
    }).then(() => {
      const newFavs = userFav.filter((aftDeleteFav) => {
        return aftDeleteFav.id !== f;
      });
      setUserFav(newFavs);
    });
  }

  let filterButton = (allComps || []).filter((b) => b.name.includes("nav"));

  const eachButton = filterButton.map((b) => {
    const fav = (userFav || []).find((f) => f.component_id === b.id);

    return (
      <Fragment key={b.id}>
        {" "}
        <div className="each-block">
          {fav !== undefined ? (
            <button
              className="btn15 each-block-button"
              onClick={() => {
                unfavorite(fav.id);
              }}
            >
              <BsIcon.BsSuitHeartFill />
            </button>
          ) : (
            <>
              {user !== null ? (
                <button
                  value={b.id}
                  className="btn14 each-block-button"
                  onClick={addToFav}
                >
                  <BsIcon.BsSuitHeart />
                </button>
              ) : null}
            </>
          )}
          <h2>{b.name}</h2>
          <b>HTML/JSX:</b>
          <br />
          {b.html.split("\n").map((v, i) => {
            return (
              <Fragment key={i}>
                {v}
                <br />
              </Fragment>
            );
          })}
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
    <div className="">
      <button className="btn8 code-button" onClick={handleOpen}>
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
    </div>
  );
}

export default NavsModal;