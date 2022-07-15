import React from "react";
import habitual from "../../../assets/images/projects/habitual-tracker.png";

function SingleProject() {
  return (
    <div className="project-single my-2">
      <a href="http://habitualtracker.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <img src={habitual} alt="habit tracker app"/>
      <p className="project-name">Project Name Here</p>
      <p className="project-tech">Tech: this, that, other</p>
      </a>
      
    </div>
  );
}

export default SingleProject;
