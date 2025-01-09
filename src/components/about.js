import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import style from "./contact.module.css";

const About = () => {
  const container = useRef(null);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
  }

  useGSAP(
    () => {
      const proElement = document.getElementById("about_heading");
      const split = new SplitType(proElement, { types: "chars" });
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: "#about_heading",
          toggleActions: "restart",
        },
        duration: 1,
        yPercent: 100,
        ease: "back.out",
        stagger: 0.05,
      });
    },
    { scope: container }
  );
  return (
    <div className="section" id="about">
      <div className={style.heading_container} ref={container}>
        <h1 className={style.heading} id="about_heading">
          About me
        </h1>
      </div>

      <section>
        <h3>A Glimpse Into My World</h3>
        <p>
          I prioritize my work allowing me to dedicate time to personal growth
          and pursue my passions outside of work
          <br /> I like developing clean + beautiful interactions on websites,
          currently building usable ecommerce website
        </p>
      </section>
      <section>
        <h3>Experience</h3>
        <p>
          Graduated in Bachelors of Technology - Computer Science in 2022.
          Worked in 2 start-ups - 1st as an intern (5 months) and in 2nd as a
          full-time employee (1 year).
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <div className="skills">
          <b>Frontend : </b>
          <span>HTML5, CSS3, React.js, TypeScript, REST API, Figma</span>
        </div>
        <div className="skills">
          <b>Backend : </b>
          <span>Node.js, Express.js, MongoDB, Postman</span>
        </div>
        <div className="skills">
          <b>Others : </b>
          <span>Github, SCRUM, AGILE</span>
        </div>
      </section>
    </div>
  );
};

export default About;
