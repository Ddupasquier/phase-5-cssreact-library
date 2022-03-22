import React, { Fragment, useEffect, useState } from "react";
import "./admin.css";

function ADMIN() {
  const [allPendingSub, setPendingSub] = useState([]);

  useEffect(() => {
    fetch("/pending_components")
      .then((r) => r.json())
      .then((pSubData) => {
        setPendingSub(pSubData);
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
      })
  }

  const eachSub = allPendingSub.map((p) => {
    const css = p.css;

    return (
      <>
        -{" "}
        <code key={p.id} className="code-block">
          <b>{p.name}</b>{" "}
          <button className="approve" onClick={() => {handleMoveAndDelete(p)}}>
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
        <br />
        {eachSub}
      </div>
      <div className="pending-cont">Pending Contributors</div>
    </div>
  );
}

export default ADMIN;
