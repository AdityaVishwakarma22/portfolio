import React from "react";
import { HiLink } from "react-icons/hi";
import './Card.css';

const Card = (props) => {  
  return (
    <div id="card">
      <h2>
        <a href={props.project.link} target="_blank">{props.project.heading}</a>
        <HiLink className="link-icon"/>
      </h2>
      <div className="project-desc">
        <img src={props.project.image} />
        <p>{props.project.description}</p>
      </div>
    </div>
  );
};

export default Card;
