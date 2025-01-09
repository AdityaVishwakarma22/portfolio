import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-scroll";
import logo from "../../images/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const handleScroll = (event) => {
    const target = event.target;
    const id = target.id;
    const section = document.getElementById(id);
    if (section) {
      console.log("--", id);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={style.navbar}>
      <Link to="home" smooth={true} duration={500} offset={-100}>
        <motion.div className={style.logo} whileTap={{ scale: 0.5 }}>
          <img src={logo} alt="" className={style.logo} /> Aditya
        </motion.div>
      </Link>

      <ul className={style.navbar_links} onClick={(id) => handleScroll(id)}>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-100}>
            <motion.div whileTap={{ scale: 0.5 }}>Projects</motion.div>
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-100}>
            <motion.div whileTap={{ scale: 0.5 }}>About</motion.div>
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-100}>
            <motion.div whileTap={{ scale: 0.7 }}>Contact</motion.div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
