import React from "react";
import { revenue } from "../../data";
import style from "./project.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import design from "../../images/design.gif";
import { LuLink2 } from "react-icons/lu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const container = useRef(null);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
  }

  useGSAP(
    () => {
      const proElement = document.getElementById("pro");
      const split = new SplitType(proElement, { types: "chars" });
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: "#pro",
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
    <div className="section" id="projects">
      <div className={style.heading_container} ref={container}>
        <h1 className={style.heading} id="pro">
          Projects
        </h1>
      </div>
      <div id="skewElem">
        {revenue.map((e, index) => (
          <div key={index} className={style.card}>
            <div className={style.cardHeader}>
              <a href={`${e.live}`} target="_blank" rel="noreferrer">
                <h2>
                  {e.name}{" "}
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    style={{ marginLeft: "10px" }}
                  />
                </h2>
              </a>

              <div className={style.cardLinks}>
                <a href={`${e.git}`} target="_blank" rel="noreferrer">
                  <i>Code</i>
                </a>
                <a href={`${e.live}`} target="_blank" rel="noreferrer">
                  <i>Demo</i>
                </a>
              </div>
            </div>
            <div className={style.projectImgContainer}>
              <div className={style.textAbout}>
                <p>{e.about}</p>
                <ul>
                  {e.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <a href={`${e.live}`} target="_blank" rel="noreferrer">
                <img src={e.projectImg} alt="" className={style.projectImg} />
              </a>
            </div>
          </div>
        ))}
        <div className={style.design_card}>
          <div>
            <div className={style.cardHeader}>
              <h2>UI/UX designs</h2>
            </div>
            <div>
              <a
                href="https://www.figma.com/design/jsCEeZx07LzVyVMM1wAKRu/Firely?node-id=0-1&t=pFjTtjTaIJzO3wFM-1"
                target="_blank"
                className={style.design_links}
                rel="noreferrer">
                Firely
                <LuLink2 size={20} />
              </a>
              <p>UI Website design for a E-commerce store</p>
            </div>
            <div>
              <a
                href="https://www.figma.com/design/SVwV4VDLxa087cko3lWVAf/Indian-Wedding-Planning-App?node-id=0-1&t=WnaZClrHrhlwfy5f-1"
                target="_blank"
                className={style.design_links}
                rel="noreferrer">
                Weeding App
                <LuLink2 size={20} />
              </a>
              <p>UI Mobile design for a Indian wedding app</p>
            </div>
            <div>
              <a
                href="https://www.figma.com/design/8SKok8FyyC0yJu6XF7nTLq/Redesign?node-id=416-3&t=5Ubzt8SndfUPFRGr-1"
                target="_blank"
                className={style.design_links}
                rel="noreferrer">
                Re-Design
                <LuLink2 size={20} />
              </a>
              <p>Re-designed an American website landing page</p>
            </div>
          </div>
          <div>
            <img src={design} alt="UI-UX design links" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
