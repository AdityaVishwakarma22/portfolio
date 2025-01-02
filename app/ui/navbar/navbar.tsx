import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-scroll";
import Image from "next/image";
import logo from "@/public/logo.png";

const Navbar = () => {
  const handleScroll = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
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
        <div className={style.logo}>
          <Image src={logo} alt="" className={style.logo} />
        </div>
      </Link>

      <ul className={style.navbar_links} onClick={(id) => handleScroll(id)}>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-100}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-100}>
            About
          </Link>
        </li>
        <li>Skills</li>
        <li>Hobby</li>
      </ul>
    </div>
  );
};

export default Navbar;
