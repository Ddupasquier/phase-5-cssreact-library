import React, { useState } from "react";
function Contribute({ user }) {
  const [name, setName] = useState("");
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [user_id, setUserID] = useState(user.id);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/components`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        html,
        css,
      }),
    }).then((res) => res.json());
  }

  return (
    <div className="edit-profile segment off-white">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Component Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <textarea
          type="text"
          placeholder="HTML"
          value={html}
          onChange={(e) => setHTML(e.target.value)}
        ></textarea>
        <textarea
          type="text"
          placeholder="CSS"
          value={css}
          onChange={(e) => setCSS(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="User ID"
          value={user_id}
          onChange={(e) => setUserID(e.target.value)}
        ></input>
        <button type="submit">All Done!</button>
      </form>
    </div>
  );
}

export default Contribute;
