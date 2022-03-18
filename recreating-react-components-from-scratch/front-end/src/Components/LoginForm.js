import React, { useState } from "react";
function LoginForm({ user, setUser}) {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((user) => setUser(user));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input type="text" placeholder="Password"></input>
      <button type="submit" className="login-submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
