import React from "react";
import { projectData } from "./ProjectData";
import { GithubSVG } from "../svg/SVG";

export default function ProjectCard() {
  return (
    <div className="project-grid">
      {projectData.map((project, index) => (
         <div key={index} className={`project-card-${index}`}>
          <div className="project-image">
            <a target="_blank" href={project.projectLink}>
              <img
                className="project-image-img img-hover-scroll"
                src={project.projectImage}
                alt={`${project.projectName}-image`}
              />
            </a>
          </div>
          <div className="project-text-stack-link-container">
            <div className="project-text">
              <h3 className="mt-[-1rem] mb-[1rem] font-bold">{project.projectName}</h3>
              <p className="normal-case font-medium text-neutral-600">{project.projectDescription}</p>
            </div>
            <div className="project-stack">
              <p className="project-stack-container">React</p>
              <p className="project-stack-container">Django</p>
            </div>
            <div className="project-links flex gap-4">
              <a target="_blank" className="flex gap-2" href={project.projectCode}>
                Code
                <GithubSVG />
              </a>
              <a target="_blank" className="flex gap-2" href={project.projectLink}>Live Demo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
