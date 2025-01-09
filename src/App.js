import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar/navbar";
import Project from "./components/projects/project";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <About />
      <Contact />
    </div>
  );
}

export default App;
