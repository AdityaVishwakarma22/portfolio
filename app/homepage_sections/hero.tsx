import React from "react";
import s from "./hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={s.section} id="home">
      <motion.h2
        className={s.heading}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        Building websites to <b>grow businesses</b>
      </motion.h2>
      <motion.i
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        Worked in 2 startups as FullStack dev & Frontend dev
      </motion.i>
    </div>
  );
};

export default Hero;
