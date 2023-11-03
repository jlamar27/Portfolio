import React from 'react'

export default function Portfolio() {
  return (
    <div className='project-screen min-h-screen ' id='project-screen'>
      <div className='project-container w-[1024px] mx-auto h-auto flex flex-col gap-y-24 '>
        <div className='portfolio-text mt-40 text-center '>
          <h4>Portfolio</h4>
        </div>
        <div className='project-grid grid grid-cols-1 h-full '>
          <div className='project-display-container bg-white border-black border-solid border my-8 rounded-lg'>1
            <div className='project-display m-5 h-56 border border-red-500 border-solid '>1.1</div>
          </div>
          <div className='project-display bg-white border-black border-solid border my-8 rounded-lg '>2
            <div className='project-display m-5 h-56 border border-red-500 border-solid '>2.1</div>
          </div>
          <div className='project-display bg-white border-black border-solid border my-8 rounded-lg '>3
            <div className='project-display m-5 h-56 border border-red-500 border-solid '>3.1</div>
          </div>
        </div>
      </div>
    </div>
  )
}
