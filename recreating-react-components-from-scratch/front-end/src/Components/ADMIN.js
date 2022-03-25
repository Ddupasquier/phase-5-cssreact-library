import React, { Fragment, useEffect, useState } from "react";
import "./admin.css";

function ADMIN({ allComps }) {
  const [allPendingSub, setPendingSub] = useState([]);
  const [allPendingCon, setPendingCon] = useState([]);
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [compFilter, setCompFilter] = useState("");


  useEffect(() => {
    fetch("/pending_components")
      .then((r) => r.json())
      .then((pSubData) => {
        setPendingSub(pSubData);
      });
  }, []);

  useEffect(() => {
    fetch("/pending_contributors")
      .then((r) => r.json())
      .then((pConData) => {
        setPendingCon(pConData);
      });
  }, []);

  const component = allComps.filter((c) => (
    c.name.includes(compFilter)
  ));
  // console.log(component)
  console.log(compFilter);
  console.log(component[0].id)

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/components/${component[0].id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        html,
        css,
      }),
    }).then((res) => res.json());
  }

  function handleDelete(p) {
    fetch(`/pending_components/${p.id}`, {
      method: "DELETE",
    });
  }

  function handleMoveAndDelete(p) {
    fetch(`/moveanddelete/${p.id}`, {
      method: "DELETE",
    });
  }

  function handleDenyCont(c) {
    fetch(`/pending_contributors/${c.id}`, {
      method: "DELETE",
    });
  }

  function handleApproveCont(c) {
    fetch(`/update_contrib/${c.user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_contributor: true }),
    })
      .then((r) => r.json())
      .then((data) => handleDenyCont(c));
  }

  // contributor
  const eachCon = allPendingCon.map((c) => {
    return (
      <Fragment key={c.id}>
        {c.user.first_name}
        <button
          className="approve"
          onClick={() => {
            handleApproveCont(c);
          }}
        >
          Approve
        </button>{" "}
        <button
          className="deny"
          onClick={() => {
            handleDenyCont(c);
          }}
        >
          Deny
        </button>
        <br />
        {c.user.email}
        <br />
      </Fragment>
    );
  });

  // sub
  const eachSub = allPendingSub.map((p) => {
    const css = p.css;

    return (
      <Fragment key={p.id}>
        -{" "}
        <code key={p.id} className="code-block">
          <b>{p.name}</b>{" "}
          <button
            className="approve"
            onClick={() => {
              handleMoveAndDelete(p);
            }}
          >
            Approve
          </button>{" "}
          <button
            className="deny"
            onClick={() => {
              handleDelete(p);
            }}
          >
            Deny
          </button>{" "}
          <br />
          {p.html}
          <br />
          {css.split("\n").map((v, i) => {
            return (
              <Fragment key={i}>
                {v}
                <br />
              </Fragment>
            );
          })}
        </code>
      </Fragment>
    );
  });

  return (
    <div className="admin-container">
      <div className="pending-sub">
        Pending Submissions
        <hr />
        {eachSub}
      </div>
      <div className="pending-cont">
        Pending Contributors
        <hr />
        {eachCon}
      </div>
      {/* patch form */}
      <div className="code-patch-form segment off-white">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Component Name"
            value={compFilter}
            onChange={(e) => setCompFilter(e.target.value)}
            className="contrib-input"
          ></input>
          <br />
          <textarea
            type="text"
            placeholder="HTML"
            value={component[0].html}
            onChange={(e) => setHTML(e.target.value)}
            className="contrib-textarea"
          ></textarea>
          <br />
          <textarea
            type="text"
            placeholder="CSS"
            value={component[0].css}
            onChange={(e) => setCSS(e.target.value)}
            className="contrib-textarea"
          ></textarea>
          <br />
          <button type="submit">All Done!</button>
        </form>
      </div>
    </div>
  );
}

export default ADMIN;
