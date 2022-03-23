import React, { useState } from "react";
import "./my-profileedit.css";

function MyProfileEdit({ user, setUser }) {
  const [first_name, setFirstName] = useState(user.first_name);
  const [last_name, setLastName] = useState(user.last_name);
  const [img, setImg] = useState(user.img);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [is_contributor, setIsContrib] = useState(user.is_contributor);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first_name, last_name, email, img, phone }),
    }).then((res) => res.json());
  }

  // set up separate post for contributor to admin
  // patch from admin if approved

  if (user === null) {
    return "Loading...";
  }

  return (
    <div className="edit-profile segment off-white">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <button type="submit">All Done!</button>
      </form>
      <form>
        <label>Contributor? </label>
        <button
          type="checkbox"
          value={is_contributor}
          onChange={(e) => setIsContrib(e.target.value)}
        >
          X
        </button>
      </form>
    </div>
  );
}

export default MyProfileEdit;
