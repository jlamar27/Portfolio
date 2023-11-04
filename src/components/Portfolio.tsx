import React from 'react'
import ProjectCard from './ProjectCard'

export default function Portfolio() {
  return (
    <div className='project-screen min-h-screen ' id='project-screen'>
      <div className='project-container w-[1024px] mx-auto h-auto flex flex-col gap-y-12 mt-32 '>
        <div className='portfolio-text text-left '>
          <h4>Portfolio</h4>
        </div>
        <div className='project-grid grid grid-cols-1 h-full '>
          <div className='project-display-container'>
            <div className='project-card'><ProjectCard /></div>
        </div>
      </div>
    </div>
  </div>
  )
}
