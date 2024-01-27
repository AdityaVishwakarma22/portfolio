import "./pages.css";

function Experience() {
  return (
    <>
      <section className="experience-container wrapper">
        <h1 className="section-heading">Experience</h1>
        <div className="experience-info">
          <h2 className="exp-heading">
            Optiphoenix <span className="button">Sept 2023 - Present</span>{" "}
          </h2>
          <ul className="responsibilities-list">
            <li>
              Employed DOM manipulation techniques to enhance the user
              experience
            </li>
            <li>
              Developed pixel-perfect designs based on provided Figma designs,
              ensuring adherence to UI/UX guidelines.
            </li>
            <li>
              {" "}
              Performed unit testing of developed software components before
              releasing it into production environment thus avoiding any
              potential bugs from reaching customers' hands.
            </li>
          </ul>
        </div>
        <div className="experience-info">
          <h2 className="exp-heading">
            Freshdigital ( Intern ){" "}
            <span className="button">Jul 2022 - Nov 2022</span>{" "}
          </h2>
          <ul className="responsibilities-list">
            <li>Used agile software development frameworks, e.g., SCRUM.</li>
            <li> Integrated React.js plugins, lifecycle methods and hooks</li>
            <li>Built responsive and cross platform website.</li>
            <li>
              {" "}
              Utilized REST APIs and made axios calls to integrate external data
              sources.
            </li>
            <li>
              Maintained and build features of website – design patterns,
              graphs, git workflow.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Experience;
