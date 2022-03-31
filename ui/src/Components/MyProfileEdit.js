import React, { useEffect, useState } from "react";
import "./my-profileedit.css";

function MyProfileEdit({ user, setUser }) {
  const [first_name, setFirstName] = useState(user.first_name || "user");
  const [last_name, setLastName] = useState(user.last_name || "");
  const [img, setImg] = useState(user.img);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [is_contributor, setIsContrib] = useState(user.is_contributor);
  const [pendingArr, setPendingArr] = useState([]);

  useEffect(() => {
    fetch("/pending_contributors")
      .then((r) => r.json())
      .then((pendingCont) => {
        setPendingArr(pendingCont);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first_name, last_name, email, img, phone }),
    })
      .then((res) => res.json())
      .then((newInfo) => {
        setUser(newInfo);
      });
  }

  function handlePendCont(e) {
    e.preventDefault();
    fetch(`/pending_contributors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(window.location.reload(false));
  }

  if (user === null) {
    return "Loading...";
  }

  function renderContributeBtn() {
    return (
      <>
        <label>Want to become a contributor? </label>
        <button
          type="submit"
          value={is_contributor}
          onChange={() => setIsContrib(true)}
        >
          Click Here!
        </button>
      </>
    );
  }

  function checkForPending() {
    return pendingArr.filter((p) => p.user.id === user.id).length !== 0;
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
        <button
          type="submit"
          onClick={() => {
            alert("Your profile has been updated!");
          }}
        >
          All Done!
        </button>
      </form>
      {user.is_contributor === true ? null : (
        <form onSubmit={handlePendCont}>
          {checkForPending()
            ? "Contributor Application Pending"
            : renderContributeBtn()}
        </form>
      )}
    </div>
  );
}

export default MyProfileEdit;
