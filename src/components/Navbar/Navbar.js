import React, { useEffect, useState } from "react";
import logo from "../assets/l.png";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionOfNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionOfNavbar);
    return () => window.removeEventListener("scroll", transitionOfNavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-content">
        {" "}
        <img className="nav-logo" src={logo} alt="img" />
        <img
          className="nav-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="img"
        />
      </div>
    </div>
  );
}

export default Navbar;
