import React from "react";
import { Link } from "react-router-dom";
import "./login-logout.css";
import LoginForm from "./LoginForm";

function LoginLogout({ user, setUser }) {

  // edit profile: show pending contrib if pending contrib

// pertaining to fav buttons -  you should still see the indication that it’s been favorited and either be able to toggle it, or at least not be able to favorite it again. you don’t have to make it toggle-able but I highly recommend it.
// page breaks when add fav put post goes through
// when not logged in I shouldn’t see fav buttons - or if I do then clicking them should trigger it to tell me to sign in or sign up
// external links aren’t working because they’re acting as relative links. use // at the start of them and don’t include the protocol and I think that fixes it
// Suggestions
// the experience signing up is confusing. first - the normal thing someone would probably try is to click it before filling anything out because it looks like (and acts like) a normal login too. but then even if done correctly, if it succeeds, we simply have the sidebar disappear and nothing else happens. consider redirecting to a profile page or something
// it’s a bit unclear as a user why I should be creating an account or what I would do with one
// separate code blocks so I can view or copy code from one at a time. syntax highlighting and pretty formatting is nice, but not a must-have
// I’m not sure what really happens when contributions are accepted. it doesn’t seem like they will be tied to any category, so I don’t know where they would show up, if anywhere.


  function renderForm() {
    if (user !== null) {
      return (
        <div className="welcome-container">
          <p className="welcome-message">
            Welcome, {user.first_name !== null ? user.first_name : "user"}!
          </p>
        </div>
      );
    } else {
      return (
        <LoginForm user={user} setUser={setUser} />
      );
    }
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  function onLogout() {
    setUser(null);
    window.location.reload(false);
  }

  return (
    <>
      {user !== null ? (
        <Link onClick={handleLogout} className="login-button" to="/">
          <span className="login-button-text">Logout</span>
        </Link>
      ) : null}
      {renderForm()}
    </>
  );
}

export default LoginLogout;
