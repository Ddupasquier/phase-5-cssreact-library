import React from "react";
import "./forms.css";

function handleChange(e) {
  e.preventDefault();
}

function Forms() {
  return (
    <>
      <div className="segment form-segment charcoal">
        <form onSubmit={handleChange}>
          <input
            type="text"
            className="form-input"
            placeholder="Username"
          ></input>
          <br />
          <input
            type="text"
            className="form-input"
            placeholder="Password"
          ></input>
          <br />
          <input type="text" className="form-input" placeholder="Email"></input>
          <br />
          <input type="text" className="form-input" placeholder="Phone"></input>
          <br />
          <input
            type="text"
            className="form-input"
            placeholder="Whatever You Want"
          ></input>
          <br />
          <input type="submit" className="form-submit btn16"></input>
          <br />
        </form>
      </div>
    </>
  );
}

export default Forms;
