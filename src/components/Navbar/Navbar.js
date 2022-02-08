import React, { useEffect, useState } from "react";
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
        <img
          className="nav-logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="img"
        />
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
