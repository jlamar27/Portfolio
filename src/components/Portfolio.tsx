import React from "react";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <div className="project-screen min-h-screen " id="project-screen">
      <div className="project-container mx-auto mt-32 flex h-auto w-[1024px] flex-col gap-y-12 ">
        <div className="portfolio-text text-left ">
          <h4>Portfolio</h4>
        </div>
        <div className="project-grid grid h-full grid-cols-1 ">
          <div className="project-display-container">
            <div className="project-card">
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
