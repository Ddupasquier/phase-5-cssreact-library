import React from "react";
import "./form-login2.css";

function FormLogin2() {
  function handleSubmit(e) {
    e.preventDefault();
    // fetch code here
  }

  return (
    <div className="form-login2">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username..."></input>
        <input type="text" placeholder="Password..."></input>
        <input type="submit" className="btn19"></input>
      </form>
    </div>
  );
}

export default FormLogin2;
