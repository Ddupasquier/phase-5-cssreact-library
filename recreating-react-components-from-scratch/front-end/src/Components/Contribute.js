import React, { useState } from "react";
import "./contribute.css";

function Contribute({ user }) {
  const [name, setName] = useState("");
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [user_id, setUserID] = useState(user.id);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/pending_components`, {
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
    <div className="contribute-container off-white">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Component Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contrib-input"
        ></input>
        <br />
        <textarea
          type="text"
          placeholder="HTML"
          value={html}
          onChange={(e) => setHTML(e.target.value)}
          className="contrib-textarea"
        ></textarea>
        <br />
        <textarea
          type="text"
          placeholder="CSS"
          value={css}
          onChange={(e) => setCSS(e.target.value)}
          className="contrib-textarea"
        ></textarea>
        <br />
        <input
          type="text"
          placeholder="User ID"
          readOnly
          value={user_id}
          onChange={(e) => setUserID(e.target.value)}
          className="contrib-input"
        ></input>
        <br />
        <button type="submit">All Done!</button>
      </form>
      <div className="naming-conventions">
        <b>Naming Conventions:</b><br />
        <i>Ignoring naming conventions may result in your submission being declined</i><br />
        - Buttons: "btn" + "next btn #" (ex. btn15)<br />
        - Segments: "segment" + "-" + "name" (ex. segment - name)<br />
        - Modals: "modal" + "-" + "name" (ex. modal - name)<br />
        - Forms: "form" + "-" + "name" (ex. form - name)<br />
        - Navs: "nav" + "-" + "name" (ex. nav - name)<br />

        
      </div>
    </div>
  );
}

export default Contribute;
