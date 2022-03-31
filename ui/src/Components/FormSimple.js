import React from "react";
import "./form-simple.css";

function FormSimple() {
  function handleChange(e) {
    e.preventDefault();
    // Fetch code here
  }

  return (
    <div className="form-simple">
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
        <input type="submit" className="btn6"></input>
        <br />
      </form>
    </div>
  );
}

export default FormSimple;
