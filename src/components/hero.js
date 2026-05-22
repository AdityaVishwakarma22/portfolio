import React from "react";
import s from "./hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={s.section} id="home">
      <div className={s.hero_text}>
        <motion.h2
          className={s.heading}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
          Web developer & QA tester for <br /> <b>3+ years</b>
        </motion.h2>
        <motion.i
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}>
          {/* Clean Design. Big Impact. */}
          Immediate Joiner!
        </motion.i>
      </div>
      <div className={s.hero_vid}>
        <video width="520" height="440" controls autoPlay muted loop={true}>
          <source
            src="https://cuberto.com/assets/home/summary/2.mp4?3"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Hero;
