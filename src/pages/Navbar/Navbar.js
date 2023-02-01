import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  function handleClickScroll(event) {
    const element = document.getElementById(event);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="nav">
      <nav className="links">
        <NavLink
          to="/"
          onClick={() => handleClickScroll("home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => handleClickScroll("about")} >
          About
        </NavLink>
        <NavLink
          to="/project"
          onClick={() => handleClickScroll("project")}>
          Project
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => handleClickScroll("contact")}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
