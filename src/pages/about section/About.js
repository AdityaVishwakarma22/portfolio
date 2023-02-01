import React from "react";
import "aos/dist/aos.css";
import "./About.css";
import AOS from 'aos';


const About = () => {
  AOS.init({
    duration:2000,
    mirror: true
  });

  return (
    <section id="about">

      <div className="section">
        <div data-aos="fade-right" data-aos-mirror="true" id="heading"><b>About</b></div>
        <div className="about-desc">
          <p>
            I am a passionate fron-end developer and web designer having 8 months
            of industrial experience.
          </p>
        </div>
      </div>

      <div className="section">
        <span className="heading"><b>Technologies</b> I use</span>
        <div className="all-stacks">
          <div className="front-end-skills">
            <h4>Front End</h4>
            <ul>
              <li>HTML</li>
              <li>Javascript</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>React MUI</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="backend-end-skills">
            <h4>Back End</h4>
            <ul>
              <li>Node js</li>
              <li>Express js</li>
              <li>Mongo DB</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
