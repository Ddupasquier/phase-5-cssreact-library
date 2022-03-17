import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import NavbarSimple from "./Components/NavbarSimple";
import ModalSimple from "./Components/ModalSimple";
import Buttons from "./Components/Buttons";
import Forms from "./Components/Forms";
import Segments from "./Components/Segments";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <div className="App">
      <NavbarSimple user={user} setUser={setUser} />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modals" element={<ModalSimple />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/segments" element={<Segments />} />
        <Route path="/navs" element={<Segments />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}

export default App;
