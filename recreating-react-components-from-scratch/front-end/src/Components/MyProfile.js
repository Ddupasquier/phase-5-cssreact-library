import React, { useEffect, useState } from "react";
import "./my-profileedit.css";

function MyProfile({ user }) {
  const [userFav, setUserFav] = useState([]);
  const [userContrib, setUserContrib] = useState([]);

  useEffect(() => {
    fetch("/user_favorites/")
      .then((r) => r.json())
      .then((favData) => {
        setUserFav(favData);
      });
  }, []);

  useEffect(() => {
    fetch("/components")
      .then((r) => r.json())
      .then((contribData) => {
        setUserContrib(contribData);
      });
  }, []);

  let favs = userFav.filter((fav) => fav.user.id === user.id);
  const userFavs = favs.map((fav) => fav.component.name);

  let contribs = userContrib.filter((contrib) => contrib.user.id === user.id);
  const userContribs = contribs.map((contrib) => contrib.name);

  if (userContrib === []) {
    return "Loading..."
  }

  if (user === null) {
    return "Loading..."
  }

  return (
    <>
      <div className="my-profile segment off-white">
        <div className="user-info">
          {user.img === null ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              alt="placeholder"
            />
          ) : (
            <img src={user.img} alt="user_image" />
          )}
          <br />
          <p>
            Name: {user.first_name} {user.last_name}
            <br />
            Phone: {user.phone}
            <br />
            Email: {user.email}
          </p>
        </div>
        {userFav.length === 0 ? (
          "Loading..."
        ) : (
          <div className="favorites charcoal">
            Favorites
            <hr />
            <ul>
              {userFavs.map((f) => (
                <li key={f.id}>{f}</li>
              ))}
            </ul>
            {user.is_contributor === true ? (
              <div className="contributor-container">
                Contributed To
                <hr />
                <ul>
                  {userContribs.map((c) => (
                    <li key={c.id}>{c}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}

export default MyProfile;
