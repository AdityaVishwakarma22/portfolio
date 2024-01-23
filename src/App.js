import "./App.css";
import "./pages/pages.css";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Contactpage from "./pages/Contact";
import Tabs from "./components/Tabs";
import { useEffect, useState } from "react";
import { SKILLS } from "./components/data";
// import photo from "./assets/my photo.jpeg";

function App() {
  const [skill, setSkill] = useState("frontend");

  function handleClick(label, event) {
    setSkill(label);
    const allBtns = document.querySelectorAll(".btn-wrapper button");
    allBtns.forEach((btn) => {
      btn.classList.add("button-inactive");
      btn.classList.remove("button");
    });
    event.target.classList.add("button");
    event.target.classList.remove("button-inactive");
  }

  useEffect(() => {
    const allBtns = document.querySelectorAll(".skills .btn-wrapper button");
    allBtns.forEach((btn) => {
      if (btn.getAttribute("id") !== "frontend") {
        btn.classList.add("button-inactive");
      }
    });
    document.getElementById(skill).classList.add("button");
  }, []);

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-header">
          <div className="name-logo">Aditya Vishwakarma</div>
        </div>
        <button className="button">Resume</button>
      </nav>
      <section className="landing-page container ">
        <div className="text-heading">
          <h1>
            WEB <br /> DEVELOPER
          </h1>
          <div className="dev-profiles">My Skills ...</div>
          <div className="skills">
            <div className="btn-wrapper">
              <Tabs
                label="frontend"
                onSelect={(event) => handleClick("frontend", event)}
              >
                Frontend
              </Tabs>
              <Tabs
                label="backend"
                onSelect={(event) => handleClick("backend", event)}
              >
                Backend
              </Tabs>
              <Tabs label="ui" onSelect={(event) => handleClick("ui", event)}>
                UI/UX design
              </Tabs>
            </div>
            <p className="skill-txt">{SKILLS[skill].content}</p>
          </div>
        </div>
        <video preload="auto" autoPlay playsInline loop muted>
          <source src="https://cdn.cuberto.com/cb/home/summary/2.mp4?3"></source>
        </video>
      </section>
      <Experience />
      <Project />
      <Contactpage />
    </>
  );
}

export default App;
