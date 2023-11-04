import React from 'react';
import { projectData } from './ProjectData';

export default function ProjectCard() {
    return (
        <div>
            {projectData.map((project, index) => (
                <div key={index} className='project-card'>
                    <div className='project-image overflow-hidden rounded-xl'>
                        <a target='_blank' href={project.projectLink}>
                            <img className='translate-y-0 transition-transform duration-10000 ease-in-out delay-0' src={project.projectImage} alt={`${project.projectName}-image`} />
                        </a>
                    </div>
                    <div className='project-text flex flex-col'>
                            <h6>{project.projectName}</h6>
                            <p>{project.projectDescription}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
