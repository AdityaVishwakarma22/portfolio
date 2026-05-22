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
    { scope: container },
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
          I like building things that people actually use.
          <br />
          From MVPs to production systems, I work across the stack to turn ideas
          into fast, scalable, and polished products. I thrive in fast-moving
          environments where rapid iteration, ownership, and execution matter.
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <div className="skills">
          <b>Frontend : </b>
          <span>
            HTML5, CSS3,React.js, Next.js, JavaScript, TypeScript, HTML/CSS,
            Bootstrap, Redux Toolkit, Tailwind
          </span>
        </div>
        <div className="skills">
          <b>Backend : </b>
          <span>
            Node.js, Next.js API routes, Express.js, Authentication (JWT, OAuth,
            NextAuth ), Prisma
          </span>
        </div>
        <div className="skills">
          <b>Database : </b>
          <span>MongoDB, MongoDB Compass, PostgreSQL</span>
        </div>
        <div className="skills">
          <b>DevOps & Tools : </b>
          <span>
            Git, GitHub Actions, CI/CD Pipelines, Postman, Playwright, AWS (EC2,
            S3){" "}
          </span>
        </div>
      </section>
      <section>
        <h3>Experience</h3>
        <p>
          B.Tech in Computer Science (2022). <br />
          Worked with 2 startups — started as a Frontend Intern and currently
          working as a Full-Stack Developer with 3+ years of professional
          experience building scalable web products.
        </p>
      </section>
    </div>
  );
};

export default About;
