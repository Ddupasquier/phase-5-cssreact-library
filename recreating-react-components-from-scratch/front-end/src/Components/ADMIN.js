import React, { Fragment, useEffect, useState } from "react";
import "./admin.css";

function ADMIN() {
  const [allPendingSub, setPendingSub] = useState([]);
  const [allPendingCon, setPendingCon] = useState([]);

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
    .then((data) => handleDenyCont(c))
  }

  // contributor
  const eachCon = allPendingCon.map((c) => {
    return (
      <>
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
      </>
    );
  });

  // sub
  const eachSub = allPendingSub.map((p) => {
    const css = p.css;

    return (
      <>
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
      </>
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
    </div>
  );
}

export default ADMIN;
