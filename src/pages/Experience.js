import "./pages.css";

function Experience() {
  return (
    <>
      <section className="experience-container wrapper">
        <h1 className="section-heading">Experience</h1>

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
