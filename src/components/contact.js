import React from "react";
import style from "./contact.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  function scheduleCallHandler() {
    const url = "https://calendly.com/interview-aditya";
    window.open(url, "_blank");
  }

  const container = useRef(null);

  if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);
  }

  useGSAP(
    () => {
      const proElement = document.getElementById("contact_heading");
      const split = new SplitType(proElement, { types: "chars" });
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: "#contact_heading",
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
    <div className={`section ${style.contact_section}`} id="contact">
      <div className={style.heading_container} ref={container}>
        <h1 className={style.heading} id="contact_heading">
          Contact info
        </h1>
        <div>
          <a
            href="mailto:22avkvishwakarma22@gmail.com"
            style={{ marginRight: "20px", color: "black" }}
          >
            <FaEnvelope size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-vishwakarma-web/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <FaLinkedinIn size={32} />
          </a>
        </div>
      </div>
      <div>
        <b>Call me at : </b>
        <span> +91 9306504386</span>
      </div>
      <div>
        <b>Email : </b>
        <span> 22avkvishwakarma22@gmail.com</span>
      </div>
      <div className={style.interview_wrapper}>
        <b>Schedule interview : </b>
        <span> An email will be shared upon scheduling the call</span>
        <button onClick={scheduleCallHandler} className={style.btn_schedule}>
          Schedule
        </button>
      </div>
    </div>
  );
};

export default Contact;
