import React from "react";
import { revenue } from "../lib/placeholder-data";
import style from "./project.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap-trial/SplitText";
import { useRef } from "react";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

const Project = () => {
  const container = useRef<HTMLElement | any>(null);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(SplitText, ScrollTrigger);
  }

  useGSAP(
    () => {
      var split = new SplitText("#pro", { type: "chars" });
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
    { scope: container }
  );

  return (
    <div className="section">
      <div className={style.heading_container} ref={container}>
        <h1 className={style.heading} id="pro">
          Projects
        </h1>
      </div>
      <div>
        {revenue.map((e, index) => (
          <div key={index} className={style.card}>
            <div className={style.cardHeader}>
              <h2>{e.name}</h2>

              <div className={style.cardLinks}>
                <i>Code</i>
                <i>Live</i>
              </div>
            </div>
            <div className={style.projectImgContainer}>
              <p>{e.desc}</p>
              <Image src={e.projectImg} alt="" className={style.projectImg} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
