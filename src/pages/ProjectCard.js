function ProjectCard(props) {
  return (
    <div className="project-card">
      <img className="card-image" src={props.imgPath} alt="card-img" />
      <div className="card-info">
        <h2>{props.title}</h2>
        {/* <div style={{ textAlign: "justify" }}>{props.description}</div> */}
        <a className="viewbtn" href={props.ghLink} target="_blank">
          View
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
