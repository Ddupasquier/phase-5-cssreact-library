import React from "react";
import "./form-login1.css"

function FormLogin1() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="form-login1">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username..."></input>
        <input type="text" placeholder="Password..."></input>
        <input type="submit" className="btn4"></input>
      </form>
    </div>
  );
}

export default FormLogin1;
