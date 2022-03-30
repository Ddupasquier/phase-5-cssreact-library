import React, {useState, Fragment} from 'react';
import * as BsIcon from "react-icons/bs";

function SegmentModal({allComps, user, userFav, setUserFav}) {
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
      .then(window.location.reload(false))
  }



  function unfavorite(f) {
    // console.log(f)
    fetch(`/user_favorites/${f}`, {
      method: "DELETE",
    })
    .then((newFavs) => setUserFav(newFavs))
    .then(window.location.reload(false))
  }

// console.log(userFav)
  let filterButton = (allComps || []).filter((b) => b.name.includes("segment"));
  const eachButton = filterButton.map((b) => {
   const fav = userFav.filter((f) => f.component_id === b.id)
   console.log(fav)

    return (
      <Fragment key={b.id}>
        {" "}
        <div className="each-block">
          {fav.length > 0 ? (
            <button className="btn15 each-block-button" onClick={() => {unfavorite(fav.component_id)}}>
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

export default SegmentModal;