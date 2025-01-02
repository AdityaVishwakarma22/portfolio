import React from "react";
import { revenue } from "../lib/placeholder-data";
import style from "./project.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

const Project = () => {
  const container = useRef<HTMLElement | any>(null);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
  }

  useGSAP(
    () => {
      const proElement = document.getElementById("pro") as HTMLElement;
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
    { scope: container }
  );

  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter("#skewElem", "skewY", "deg"),
      clamp = gsap.utils.clamp(-20, 20);

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
  }, []);

  return (
    <div className="section">
      <div className={style.heading_container} ref={container}>
        <h1 className={style.heading} id="pro">
          Projects
        </h1>
      </div>
      <div id="skewElem">
        {revenue.map((e, index) => (
          <div key={index} className={style.card}>
            <div className={style.cardHeader}>
              <h2>{e.name}</h2>

              <div className={style.cardLinks}>
                <a href={`${e.git}`} target="_blank">
                  <i>Code</i>
                </a>
                <a href={`${e.live}`} target="_blank">
                  <i>Live</i>
                </a>
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
