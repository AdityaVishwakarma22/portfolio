import ProjectCard from "./ProjectCard";
import foodApp from "../assets/ecommerce.jpg";
import orbit from "../assets/orbit.png";

const Project = () => {
  return (
    <section className="projectbackground wrapper">
      <h1 className="section-heading">Projects</h1>
      <div className="project-section">
        <ProjectCard
          imgPath={foodApp}
          isBlog={false}
          title="Food Order App"
          description="Food Order web app built with React js. and Firebase as a backend. React hooks, Rest Api and react context have been implemented in this project."
          ghLink="https://adityavishwakarma22.github.io/Food-app/"
        />

        <ProjectCard
          imgPath={orbit}
          isBlog={false}
          title="Orbit Jobs"
          description="It is a responsive web design made with React.js and CSS3. It implements the concept of UI components and reusability."
          ghLink="https://adityavishwakarma22.github.io/Knovator/"
        />
      </div>
    </section>
  );
};

export default Project;
