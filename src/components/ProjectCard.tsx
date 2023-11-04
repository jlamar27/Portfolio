import React from "react";
import { projectData } from "./ProjectData";

export default function ProjectCard() {
  return (
    <div>
      {projectData.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            <a target="_blank" href={project.projectLink}>
              <img
                className="project-image-img img-hover-scroll"
                src={project.projectImage}
                alt={`${project.projectName}-image`}
              />
            </a>
          </div>
          <div className="project-text">
            <h6>{project.projectName}</h6>
            <p>{project.projectDescription}</p>
            <div className="project-links">
              <a href="">Code</a>
              <a href="">Live Demo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
