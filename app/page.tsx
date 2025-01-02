"use client";
import Navbar from "./ui/navbar/navbar";
import Hero from "./homepage_sections/hero";
import Project from "./projects/project";
import style from "./home.module.css";
import "./global.css";
import About from "./homepage_sections/about";
import Contact from "./homepage_sections/contact";

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col p-6">
        <Navbar />
        <Hero />
        <div className={style.card} id="projects">
          <Project />
        </div>
        <div className={style.card} id="about">
          <About />
        </div>
        <div className={style.card} id="about">
          <Contact />
        </div>
      </main>
    </>
  );
}
