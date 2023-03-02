import Welcome from "./pages/welcome page/Welcome";
import About from "./pages/about section/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Navbar from "./pages/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="website-wrapper">
        <Welcome />
        <About />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;
