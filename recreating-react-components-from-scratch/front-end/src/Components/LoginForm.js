import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState();
  const [errors, setErrors] = useState("");
  const nav = useNavigate();

  function ifLogin(e) {
    e.preventDefault();
    return fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.error) {
          setErrors(errors);
          alert(
            "Your email address or password (or both, for that matter) is incorrect!"
          );
        } else {
          // try setting to local storage on login
          setUser(user);
          setIsLogin(true);
        }
      });
  }

  function ifSignup(e) {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        ifLogin(e).then(() => nav(`/edit-profile/`));
      } else {
        res
          .json()
          .then((e) => setErrors(Object.entries(e.error).flat()))
          .then(
            alert(
              "Looks like there's already a profile under that email address..."
            )
          );
      }
    });
    setIsLogin(false);
  }

  function handleSubmit() {
    isLogin ? ifLogin() : ifSignup();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="on"
      ></input>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
      ></input>
      <button
        type="submit"
        className="login-button"
        onClick={ifLogin}
        value="login"
      >
        Login
      </button>
      <br />
      {isLogin === false ? null : (
        <button
          type="submit"
          className="login-button"
          onClick={ifSignup}
          value="signup"
        >
          Signup
        </button>
      )}
    </form>
  );
}

export default LoginForm;
