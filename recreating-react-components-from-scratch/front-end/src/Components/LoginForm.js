import React, { useState } from "react";
function LoginForm() {
  return (
    <form>
      <input type="text" placeholder="Email"></input>
      <input type="text" placeholder="Password"></input>
      <button type="submit" className="login-submit">
        Login/Signup
      </button>
    </form>
  );
}

export default LoginForm;
