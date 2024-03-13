import "./pages.css";

function Experience() {
  return (
    <>
      <section className="experience-container wrapper">
        <h1 className="section-heading">Experience</h1>

        <div className="experience-info">
          <h2 className="exp-heading">
            Freshdigital ( Intern ){" "}
            <span className="button">Jan 2022 - Nov 2022</span>{" "}
          </h2>
          <ul className="responsibilities-list">
            <li>
              {" "}
              Implemented React.js plugins, lifecycle methods, and hooks to
              enhance website functionality.
            </li>
            <li>Built responsive and cross platform website.</li>
            <li>
              {" "}
              Utilized REST APIs and made axios calls to integrate external data
              sources.
            </li>
            <li>
              Managed and enhanced website features using industry-standard
              design patterns, graphs, and git workflow for efficient code
              management.
            </li>
            <li>
              {" "}
              Engaged in effective collaboration within a team of 5 members to
              accomplish project goals and deliver high-quality results.
            </li>
            <li>
              Demonstrated proficiency in agile software development
              methodologies, including SCRUM, to ensure efficient project
              management and rapid iteration cycles.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Experience;
