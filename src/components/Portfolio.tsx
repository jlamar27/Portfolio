import React from "react";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <div className="project-screen min-h-screen " id="project-screen">
      <div className="project-container mx-auto mt-32 flex h-auto flex-col gap-y-12 ">
        <div className="portfolio-text text-left ">
          <h4>Portfolio</h4>
        </div>
        <ProjectCard />
      </div>
    </div>
  );
}
