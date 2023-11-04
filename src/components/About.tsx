import React from 'react'

export default function About() {
  return (
    <div className='about-screen bg-white' id='about-screen'>
        <div className='about-container h-full mx-auto py-32 w-[1024px]'>
        <section className='about-content flex align-middle gap-16 flex-shrink '>
          <div className='about-image'>
            <img className='h-[35] w-[41] rounded-3xl' src="/about-image.webp" alt="about image" />
          </div>
          <div className='about-text'>
            <h3 className='uppercase font-bold text-lg text-blue-500 '>About me</h3>
            <h4 className='font-bold my-4 text-2xl'>A dedicated Developer</h4>
            <p className='font-thin text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus quo sapiente. Doloribus amet illo qui mollitia rerum odit debitis eveniet cumque libero est, quod commodi odio ipsam tempora eos.</p>
          </div>
        </section>
      </div>
    </div>

  )
}
