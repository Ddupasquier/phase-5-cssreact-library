import React, { useEffect, useState } from "react";
import "./my-profileedit.css";

function MyProfile({ user }) {
  const [userFav, setUserFav] = useState([]);

  useEffect(() => {
    fetch("/user_favorites/")
      .then((r) => r.json())
      .then((favData) => {
        setUserFav(favData);
      });
  }, []);

  let favs = userFav.filter((fav) => fav.user.id === user.id);
  const userFavs = favs.map((fav) => fav.component.name)

  return (
    <>
      <div className="my-profile segment off-white">
        <div className="user-info">
          {user.img === undefined ? (
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
              {userFavs.map((f) => <li>{f}</li>)}
              </ul>
            {user.is_contributor === true ? (
              <div className="contributor-container">
                Contributed To
                <hr />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
}

export default MyProfile;
