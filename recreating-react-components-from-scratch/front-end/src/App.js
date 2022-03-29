import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home";
import NavbarSimple from "./Components/NavbarSimple";
import ModalSimple from "./Components/ModalSimple";
import Buttons from "./Components/Buttons";
import Forms from "./Components/Forms";
import Segments from "./Components/Segments";
import Footer from "./Components/Footer";
import Navs from "./Components/Navs";
import MyProfile from "./Components/MyProfile";
import MyProfileEdit from "./Components/MyProfileEdit";
import Contribute from "./Components/Contribute";
import ADMIN from "./Components/ADMIN";

function App() {
  let userDefault = null;
  try {
    userDefault = JSON.parse(localStorage.getItem("user") || null);
  } catch (error) {
    console.log("No user available")
  }
  const [user, setUser] = useState(userDefault);

  let componentDefault = null;
  try {
    componentDefault = JSON.parse(localStorage.getItem("component") || null);
  } catch (error) {
    console.log("No components available")
  }
  const [allComps, setAllComps] = useState(componentDefault);
  const [userFav, setUserFav] = useState([]);

  useEffect(() => {
    fetch(`/current_user_fav`)
      .then((r) => r.json())
      .then((favData) => {
        setUserFav(favData);
      });
  }, [user]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("components", JSON.stringify(allComps));
  }, [allComps]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/components')
    .then((r) => r.json())
    .then((comp) => {
      setAllComps(comp)
    })
  }, [])

  return (
    <div className="App">
      <NavbarSimple user={user} setUser={setUser} setAllComps={setAllComps} setUserFav={setUserFav} />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modals" element={<ModalSimple />} />
        <Route path="/buttons" element={<Buttons allComps={allComps} setAllComps={setAllComps} user={user} userFav={userFav} setUserFav={setUserFav} />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/segments" element={<Segments />} />
        <Route path="/navs" element={<Navs />} />
        <Route
          path="/my-profile/:name"
          element={<MyProfile user={user} setUser={setUser} userFav={userFav} setUserFav={setUserFav} />}
        />
        <Route
          path="/edit-profile/:name"
          element={<MyProfileEdit user={user} setUser={setUser} />}
        />
        <Route path="/contribute" element={<Contribute user={user} />} />
        <Route path="/ADMIN" element={<ADMIN allComps={allComps} />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}

export default App;
