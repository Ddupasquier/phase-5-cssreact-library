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

  const eachSub = allPendingSub.map((p) => {
    const css = p.css;

    return (
      <>
        -{" "}
        <code key={p.id} className="code-block">
          <b>{p.name}</b>{" "}
          <button className="approve">Approve</button>{" "}
          <button className="deny">Deny</button> <br />
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
